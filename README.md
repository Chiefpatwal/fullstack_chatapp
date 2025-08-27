
````markdown
# Full Stack Chat App

A real-time chat application built with **React + Vite (frontend)** and **Node.js + Express + MongoDB (backend)**.  
Supports authentication, live messaging, and responsive UI.

---

## 🚀 Live Demo
👉 [Chat App is Live Now!](https://fullstack-chatapp-51y4.onrender.com)

---

## ⚙️ Tech Stack
- **Frontend**: React, Vite, TailwindCSS, DaisyUI  
- **Backend**: Node.js, Express, MongoDB, Socket.IO  
- **Deployment**: Render  

---

## 🛠️ Running Locally

### 1. Clone repo
```bash
git clone https://github.com/Chiefpatwal/fullstack_chatapp.git
cd fullstack_chatapp
````

### 2. Install dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 3. Create environment file

Inside `backend/.env` add:

```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Start servers

* Start backend:

```bash
cd backend
npm run dev
```

* Start frontend:

```bash
cd frontend
npm run dev
```

Frontend runs on [http://localhost:5173](http://localhost:5173)
Backend runs on [http://localhost:5000](http://localhost:5000)

---

## 📡 Deployment

* Frontend & Backend deployed on [Render](https://render.com)
* MongoDB hosted on [MongoDB Atlas](https://www.mongodb.com/atlas/database)

---

```

This way, anyone visiting your repo can directly click your **live link** 🎉  

Want me to also add **badges** (like “Live Demo”, “Made with React”, etc.) at the top of the README to make it look professional?
```
