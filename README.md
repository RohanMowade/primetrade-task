## 🌐 LIVE DEMO

| Service | URL | Status |
|---------|-----|--------|
| 🚀 Frontend | https://precious-alpaca-18831d.netlify.app | ✅ Live |
| ⚙️ Backend API | https://primetrade-task-api.onrender.com | ✅ Live |
| 📦 GitHub | https://github.com/rohanmowade/primetrade-task | ✅ Public |

> ⚡ Note: Backend on Render free tier may take 5-10 seconds to wake up after inactivity.
# PrimeTrade Task Manager

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)
![React](https://img.shields.io/badge/React-18.x-blue)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)

## 🚀 Complete Backend Developer Intern Assignment

A production-ready task management application with JWT authentication, role-based access control, and CRUD operations.

## 📋 Features

### Backend (Node.js + Express + MongoDB)
- ✅ User registration & login with JWT
- ✅ Password hashing with bcrypt
- ✅ Role-based access (User/Admin)
- ✅ Complete CRUD for tasks
- ✅ Input validation & error handling
- ✅ MongoDB Atlas integration
- ✅ Scalable architecture

### Frontend (React.js)
- ✅ Responsive UI
- ✅ JWT token management
- ✅ Protected routes
- ✅ Task CRUD interface
- ✅ Error message handling

## 🛠️ Tech Stack

**Backend:**
- Node.js + Express.js
- MongoDB Atlas + Mongoose
- JWT + Bcrypt
- Express Validator

**Frontend:**
- React 18
- React Router DOM
- Axios
- Context API

## 🏗️ Project Structure
primetrade-task/
├── backend/ # Node.js API
│ ├── config/ # Database configuration
│ ├── controllers/ # Business logic
│ ├── middleware/ # Auth & role checks
│ ├── models/ # MongoDB schemas
│ ├── routes/ # API endpoints
│ ├── validation/ # Input validation
│ └── server.js # Entry point
│
├── frontend/ # React UI
│ ├── src/
│ │ ├── components/ # UI components
│ │ ├── context/ # Auth state management
│ │ ├── utils/ # API configuration
│ │ └── App.js # Main component
│ └── package.json
│
└── README.md

text

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- MongoDB Atlas account (or local MongoDB)

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
npm run dev
Frontend Setup
bash
cd frontend
npm install
npm start
📊 API Documentation
Authentication Endpoints
Method	Endpoint	Description	Access
POST	/api/auth/register	Register new user	Public
POST	/api/auth/login	Login user	Public
GET	/api/auth/me	Get current user	Private
Task Endpoints
Method	Endpoint	Description	Access
GET	/api/tasks	Get all tasks	Private
GET	/api/tasks/:id	Get single task	Private
POST	/api/tasks	Create task	Private
PUT	/api/tasks/:id	Update task	Private
DELETE	/api/tasks/:id	Delete task	Private
🔐 Security Features
Password hashing with bcrypt (10 rounds)

JWT tokens with 7-day expiration

Protected routes middleware

Input validation & sanitization

Role-based access control

CORS enabled

Environment variables for secrets

📈 Scalability Strategy
See SCALABILITY.md for detailed scaling strategy including:

Horizontal scaling with load balancers

Redis caching implementation

Microservices architecture

Database indexing

Rate limiting

Docker containerization

🎯 Live Demo
Frontend: https://primetrade-task.netlify.app

Backend API: https://primetrade-task-api.onrender.com

👨‍💻 Author
Rohan Mowade

GitHub: @rohanmowade

LinkedIn: Rohan Mowade

📄 License
This project is submitted for PrimeTrade.ai Backend Developer Intern position.

⭐ If you found this project helpful, consider giving it a star!
