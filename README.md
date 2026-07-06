# Pixel Art Maker 🎨

A simple, interactive Pixel Art creation tool built with JavaScript. Draw on
a customizable grid, pick colors, and bring your pixel art to life — right
in the browser.

## About

This project lets you create pixel art by clicking (or dragging) on a grid
of cells, similar to a mini digital canvas. Built with vanilla JavaScript
and the DOM/Canvas API for a lightweight, dependency-free experience.

## Demo

```
Grid Size: 16 x 16          Color: 🟥

[ ][ ][ ][ ][ ]
[ ][🟥][🟥][ ][ ]
[ ][🟥][🟥][ ][ ]
[ ][ ][ ][ ][ ]

Click a cell to paint it. Click again to erase.
```

## Features

- Adjustable grid size (e.g. 8x8, 16x16, 32x32)
- Color picker to choose the active drawing color
- Click-and-drag painting for faster drawing
- Eraser tool to clear individual pixels
- Clear/Reset button to wipe the whole canvas
- Download/export artwork as an image
- Responsive layout that works on desktop and mobile

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)

### Run Locally

1. Clone or download this repository.
2. Open `index.html` directly in your browser, **or**
3. Use VS Code's **Live Server** extension for auto-reload during development.

```bash
git clone https://github.com/anshikaaaasingh-afk/pixel-art-maker.git
cd pixel-art-maker
```

Then open `index.html` in your browser.

## How to Use

1. Choose a grid size to set up your canvas.
2. Pick a color from the color palette or color picker.
3. Click on any cell to paint it that color.
4. Use the eraser to remove a pixel, or hit Clear to reset the whole grid.
5. Export your finished artwork as an image file.

## Project Structure

```
pixel-art-maker/
├── index.html      # App structure and layout
├── style.css       # Grid, palette, and UI styling
├── script.js       # Drawing logic (grid generation, painting, export)
└── README.md       # This file
```

## Built With

- HTML5 (Canvas or Grid-based DOM)
- CSS3 (Grid/Flexbox layout)
- Vanilla JavaScript (DOM manipulation, event handling)

## Future Improvements

- Undo/Redo functionality
- Multiple layers
- Save/load artwork using local storage
- Animation frames for simple pixel sprite sequences

## License

Free to use and modify for personal or educational purposes.
