const grid = document.getElementById("grid");
const colorPicker = document.getElementById("colorPicker");
const gridSizeSelect = document.getElementById("gridSize");
const clearBtn = document.getElementById("clearBtn");
const eraserBtn = document.getElementById("eraserBtn");
const drawBtn = document.getElementById("drawBtn");
const downloadBtn = document.getElementById("downloadBtn");

let isDrawing = false;
let currentMode = "draw";

function createGrid(size) {

    grid.innerHTML = "";

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {

        const pixel = document.createElement("div");
        pixel.classList.add("pixel");

        pixel.addEventListener("mousedown", paintPixel);
        pixel.addEventListener("mouseover", e => {
            if (isDrawing) paintPixel(e);
        });

        grid.appendChild(pixel);
    }
}

function paintPixel(e) {

    if (currentMode === "draw") {
        e.target.style.backgroundColor = colorPicker.value;
    }
    else {
        e.target.style.backgroundColor = "white";
    }
}

document.addEventListener("mousedown", () => {
    isDrawing = true;
});

document.addEventListener("mouseup", () => {
    isDrawing = false;
});

gridSizeSelect.addEventListener("change", () => {
    createGrid(Number(gridSizeSelect.value));
});

drawBtn.addEventListener("click", () => {
    currentMode = "draw";
});

eraserBtn.addEventListener("click", () => {
    currentMode = "erase";
});

clearBtn.addEventListener("click", () => {
    document.querySelectorAll(".pixel").forEach(pixel => {
        pixel.style.backgroundColor = "white";
    });
});
function floodFill(x, y, targetColor, replacementColor) {

    if (targetColor === replacementColor) return;

    const stack = [[x, y]];

    while (stack.length) {

        const [cx, cy] = stack.pop();

        if (
            cx < 0 ||
            cy < 0 ||
            cx >= gridSize ||
            cy >= gridSize
        ) continue;

        if (pixels[cy][cx] !== targetColor) continue;

        pixels[cy][cx] = replacementColor;

        stack.push([cx + 1, cy]);
        stack.push([cx - 1, cy]);
        stack.push([cx, cy + 1]);
        stack.push([cx, cy - 1]);
    }

    render();
}

downloadBtn.addEventListener("click", () => {

    const size = Number(gridSizeSelect.value);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = size * 20;
    canvas.height = size * 20;

    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach((pixel, index) => {

        const row = Math.floor(index / size);
        const col = index % size;

        let color = window.getComputedStyle(pixel).backgroundColor;

        ctx.fillStyle = color;
        ctx.fillRect(col * 20, row * 20, 20, 20);
    });

    const link = document.createElement("a");
    link.download = "pixel-art.png";
    link.href = canvas.toDataURL();
    link.click();
});

createGrid(16);
