# Mini Fruits API – Frontend 🍎

A small JavaScript frontend project that connects to a Django Backend API and displays fruit data in the browser.

## 📌 About the Project

This project is the **Frontend** part of a small Full-Stack learning project.

The Frontend sends a request to a Django Backend using JavaScript's `fetch()` function. The Backend returns fruit data as JSON, and the Frontend displays the received data as a list in the browser.

## 🛠️ Technologies

- HTML
- JavaScript
- Fetch API
- JSON
- Live Server

## 📂 Project Structure

Projekt-fruit_app-Frontend/
├── index.html
├── script.js
└── README.md

## 🔗 Backend

This Frontend communicates with a separate Django Backend.

The Backend provides the following API endpoint:

GET /fruits/

During local development, the API is available at:

http://127.0.0.1:8000/fruits/

The Backend repository can be found here:

**Backend:**
https://github.com/zohrehhabibidev/Projekt-fruit_app

## 🌐 How It Works

The basic flow of the application is:

Browser
↓
JavaScript fetch()
↓
Django Backend
↓
GET /fruits/
↓
JSON Response
↓
JavaScript
↓
HTML
↓
Fruit list displayed in the browser

The Backend returns data similar to:

{
"fruits": [
{
"name": "Apple",
"color": "Red",
"weight": 150
},
{
"name": "Banana",
"color": "Yellow",
"weight": 120
}
]
}

The JavaScript receives this JSON data, extracts the `fruits` array, and renders each fruit into the HTML page.

## ▶️ How to Run

### 1. Start the Django Backend

Open the Backend project and run:

python manage.py runserver

The Backend should be available at:

http://127.0.0.1:8000/

### 2. Start the Frontend

Open this project in **Visual Studio Code**.

Use the **Live Server** extension to open `index.html`.

The Frontend will normally run on an address similar to:

http://127.0.0.1:5500/

### 3. Open the Application

After both the Backend and Frontend are running, the Frontend will request the fruit data from the Django API and display it on the page.

## 🔐 CORS

Because the Frontend and Backend run on different ports during development, they have different **origins**.

The Django Backend is therefore configured with **CORS (Cross-Origin Resource Sharing)** to allow the Frontend to access the API.

## 🎯 Learning Goals

This project was created to practice:

- Basic HTML structure
- JavaScript functions
- `fetch()`
- HTTP requests
- JSON data
- `async / await`
- Working with API responses
- DOM manipulation
- Rendering API data into HTML
- Communication between Frontend and Backend
- Basic Git and GitHub workflow

## 📚 Project Context

This project is part of my Backend development learning journey.

The Frontend code was based on the following learning repository:

**Frontend source/reference:**
https://github.com/Developer-Akademie-AA/BE-mini_fruits_api_frontend

The Backend was developed separately as a Django project and is available here:

**Backend:**
https://github.com/zohrehhabibidev/Projekt-fruit_app
