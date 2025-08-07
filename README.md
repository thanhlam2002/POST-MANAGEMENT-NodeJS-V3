# 📦 Book Post Management - Backend

This is the backend project for **Book Post Management Web App**, built with **Node.js**, **Express**, **MongoDB**, **Cloudinary**, and **JWT**.

## ✅ Features

- ✅ Register & Login with JWT Authentication
- ✅ Role-based Access: `user`, `admin`, `controller`
- ✅ Upload images to **Cloudinary**
- ✅ CRUD Post Management
- ✅ Authorization: Only the post owner can edit/delete their posts

## 🧠 Project Structure

```
├── index.js
├── config/
│   └── cloudinary.js
├── controllers/
│   └── postController.js
├── middlewares/
│   ├── auth.js
│   └── upload.js
├── models/
│   ├── post.js
│   └── user.js
├── uploads/         ← temporary (not used with Cloudinary)
├── views/
│   ├── login.html
│   ├── register.html
│   └── index.html
├── .env             ← env file (JWT_SECRET, CLOUDINARY info)
└── package.json
```

## 🔐 Authentication Flow

1. User registers or logs in → JWT is created and stored in cookie.
2. Every page or API that requires login checks token validity.
3. On creating/editing/deleting posts, the backend checks if user owns the post.

## 🌍 Deployment (Render)

1. Push this backend code to GitHub (e.g., `book-backend`).
2. Create a new **Web Service** in [Render](https://render.com/).
3. Connect to GitHub repo → Choose `book-backend`
4. Add Environment Variables:
   - `JWT_SECRET=your_secret`
   - `MONGODB_URI=your_mongodb_atlas_url`
   - `CLOUD_NAME`, `API_KEY`, `API_SECRET` for Cloudinary
5. Build command: `npm install`
6. Start command: `node index.js`

---

# 📎 Notes

- **Frontend will call backend routes like** `/create`, `/edit/:id`, `/delete/:id`
- You must be logged in to access `index.html`
- No need to run locally if deploying on Render + Vercel.
