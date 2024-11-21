# AI Calculator
An interactive web-based calculator application that combines the functionality of a traditional calculator with AI capabilities for handwritten mathematical expression recognition. Similar to the iPad calculator, users can write mathematical expressions by hand, which are then processed and solved in real-time.

## Features
-  Handwriting recognition for mathematical expressions.
-  Multi-color drawing support.
-  Real-time calculation and rendering.
-  Variable assignment and storage.
-  LaTeX rendering for mathematical expressions.
-  Interactive, drag-and-drop interface for enhanced usability (Draggable results display).
-  Easy canvas reset functionality.

## Tech Stack
### Frontend
- React.js with TypeScript
- MathJax for LaTeX rendering
- Mantine UI components
- React-Draggable for moveable elements
- Axios for API communication

### Backend
- FastAPI (Python)
- CORS middleware for cross-origin requests
- Uvicorn ASGI server

## Prerequisites
1. Node.js and npm
2. Python 3.7+
3. Virtual Environment for Python dependencies (optional but recommended)

## Installation
### - Backend Setup

1. **Create a virtual environment:**
```bash
python -m venv venv
source venv/bin/activate
```

2. **Start the FastAPI server:**
```bash
uvicorn main:app --reload
```
The server will start at the URL and port specified in the `SERVER_URL` and `PORT` environment variables, as defined in `constants.py`.

3. **Start the backend server:**
```bash
python main.py
```
4. Access the backend API at `http://127.0.0.1:8000`.

### - Frontend Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm run dev
```
3. Access the frontend at `http://localhost:5173`.

## Usage
- Open the application in your web browser.
- Use the color swatches to select your preferred drawing color.
- Write mathematical expressions on the canvas using your mouse or touch input.
- Click the `Run` button to process and calculate the expression.
- Results will be displayed in LaTeX format and can be dragged around the canvas.
- Use the `Reset` button to clear the canvas and start over.

## API Endpoints
`/calculate`: Accepts POST requests with calculation data, processes the input, and returns the result.
