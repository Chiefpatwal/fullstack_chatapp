

# Full Stack Chat App

A real-time chat application with authentication, live messaging, and a responsive interface.  
Built using React + Vite on the frontend and Node.js + Express + MongoDB on the backend.  

---

## Live Demo
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen?style=for-the-badge)](https://fullstack-chatapp-dbzd.onrender.com)

---

## Tech Stack

**Frontend**
- React  
- Vite  
- TailwindCSS  
- DaisyUI  

**Backend**
- Node.js  
- Express  
- MongoDB (Atlas)  
- Socket.IO  

**Deployment**
- Render (frontend and backend)  
- MongoDB Atlas (database)  

---

## Running Locally

### 1. Clone the repository
```bash
git clone https://github.com/Chiefpatwal/fullstack_chatapp.git
cd fullstack_chatapp
````

### 2. Install dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `backend/` folder and add:

```env
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Start the servers

Start backend:

```bash
cd backend
npm run dev
```

Start frontend:

```bash
cd frontend
npm run dev
```

* Frontend: [http://localhost:5173](http://localhost:5173)
* Backend: [http://localhost:5000](http://localhost:5000)

---

## Deployment

* Frontend and backend are deployed on Render
* Database is hosted on MongoDB Atlas


