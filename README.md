📝 MERN JWT Notes App

A full-stack Notes application built using the MERN stack with JWT Authentication. Users can register, log in securely, and create, update, and delete personal notes.

🚀 Features

User Registration & Login

JWT-based Authentication

Create Notes

Edit Notes

Delete Notes

Protected Routes (Only logged-in users can access notes)

REST API with Express & MongoDB

Frontend built with React

🛠 Tech Stack

Frontend

React

Axios

React Router DOM

CSS

Backend

Node.js

Express.js

MongoDB

Mongoose

JSON Web Token (JWT)

bcryptjs

📂 Folder Structure
mern-jwt-notes-app
│
├── backend
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── server.js
│   └── config.env
│
└── frontend
    ├── src
    ├── public
    └── package.json

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/YOUR-USERNAME/mern-jwt-notes-app.git
cd mern-jwt-notes-app

2️⃣ Setup Backend
cd backend
npm install


Create a config.env file inside backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run backend:

npm start

3️⃣ Setup Frontend

Open new terminal:

cd frontend
npm install
npm start


Frontend runs on http://localhost:3000

Backend runs on http://localhost:5000

🔐 API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/users/register	Register user
POST	/api/users/login	Login user
Notes Routes
Method	Endpoint	Description
GET	/api/notes	Get all notes
POST	/api/notes	Create note
PUT	/api/notes/:id	Update note
DELETE	/api/notes/:id	Delete note
📌 Environment Variables
Variable	Description
MONGO_URI	MongoDB connection string
JWT_SECRET	Secret key for JWT
PORT	Backend server port
🧑‍💻 Author

Kavi
Full Stack Developer (MERN)

📜 License

This project is open-source and free to use.
