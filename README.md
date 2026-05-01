# HireHub - Job Portal Application 🚀

A modern, full-stack job portal application built with **React**, **Node.js**, **Express**, and **MongoDB**.

## 📋 Project Structure

```
hirehub/
├── frontend/              # React + Vite frontend
│   ├── src/
│   │   ├── pages/        # Home, Jobs, Contact, MyApplication, About
│   │   ├── components/   # Navbar, Footer
│   │   ├── assets/       # Images and static files
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/              # Node.js + Express backend
│   ├── controllers/      # Business logic
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API endpoints
│   ├── middleware/       # Authentication middleware
│   ├── config/           # Database config
│   ├── index.js         # Server entry point
│   └── package.json
└── README.md
```

## 🛠️ Tech Stack

- **Frontend:** React, Vite, CSS3
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT (Ready to implement)
- **Package Manager:** npm

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm
- MongoDB Atlas account

### Installation

1. **Clone/Setup Backend**

```bash
cd backend
npm install
```

2. **Setup Frontend**

```bash
cd frontend
npm install
```

3. **Environment Variables** (Create `.env` in backend folder)

```
MONGO_URI=your_mongodb_uri
PORT=5000
```

### Running the Application

**Terminal 1 - Backend:**

```bash
cd backend
npm run dev
```

Server runs on: `http://localhost:5000`

**Terminal 2 - Frontend:**

```bash
cd frontend
npm run dev
```

App runs on: `http://localhost:5173`

## 📱 Features

✅ **Job Listings** - Browse all available jobs
✅ **Job Filtering** - Search jobs by title
✅ **Apply for Jobs** - Submit applications with resume
✅ **Contact Form** - Send messages and feedback
✅ **Responsive Design** - Works on mobile and desktop
✅ **Modern UI** - Glass-morphism design with smooth animations

## 🔌 API Endpoints

### Jobs

- `GET /api/jobs` - Get all jobs
- `POST /api/jobs` - Create job (Admin)

### Applications

- `GET /api/applications` - Get all applications
- `POST /api/applications` - Submit application

### Contact

- `POST /api/contact` - Send contact message
- `GET /api/contact` - Get all messages (Admin)

### Authentication

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login

## 📝 License

This project is created for ANUDIP Foundation Training Program.

---

**Happy Coding! 💻**
