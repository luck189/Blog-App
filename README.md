# 📝 CodeCanvas App

A modern full-stack blogging platform where users can create, edit, publish, and manage blogs with a clean and responsive user interface.
The application provides secure authentication, rich text blogging, image uploads, and an intuitive dashboard for managing content.

---

## 🚀 Live Demo

https://code-canvas-app.vercel.app/

---

## 📸 Screenshots

### Home Page
<img width="800" alt="image" src="https://github.com/user-attachments/assets/3f266d4d-09cb-4d30-bd30-20cfc3078b81" />
<img width="800" alt="image" src="https://github.com/user-attachments/assets/e987a224-41f5-4a45-b45c-59346100da3a" />

### Dashboard
<img width="800" alt="image" src="https://github.com/user-attachments/assets/3753d8e3-f501-409a-a7ec-49d867dba2b2" />

### Create Blog
<img width="800" alt="image" src="https://github.com/user-attachments/assets/1562ee8c-8f71-436b-ac1d-96913c90449c" />

---

# ✨ Features

## 👤 Authentication
- User Registration
- User Login
- Secure Authentication
- Protected Routes

## 📝 Blog Management
- Create Blog
- Edit Blog
- Delete Blog
- Read Blogs
- View Individual Blog

## 🖼 Media Upload
- Upload Blog Cover Image
- Image Preview

## 📱 Responsive Design
- Mobile Friendly
- Tablet Support
- Desktop Optimized

## 🔍 Search
- Search Blogs
- Browse Latest Blogs

## 🎨 Modern UI
- Clean Design
- Fast Navigation
- Responsive Layout

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router
- Axios

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer

## Deployment

- Vercel
- MongoDB Atlas

---

# ⚙ Installation

## 1. Install Backend

```bash
cd backend
npm install
```

---

## 2. Install Frontend

```bash
cd ../frontend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

FRONTEND_URL=http://localhost:5173
```

---

# ▶ Running the Project

## Backend

```bash
cd backend

npm run dev
```

Runs on

```
http://localhost:5000
```

---

## Frontend

```bash
cd frontend

npm run dev
```

Runs on

```
http://localhost:5173
```

---

# 📌 API Endpoints

## Authentication

```
POST /api/auth/register

POST /api/auth/login
```

## Blogs

```
GET    /api/blogs

GET    /api/blogs/:id

POST   /api/blogs

PUT    /api/blogs/:id

DELETE /api/blogs/:id
```

---

# 📦 Dependencies

### Frontend

- React
- React Router
- Axios
- Tailwind CSS
- Vite

### Backend

- Express
- Mongoose
- JWT
- Multer
- bcrypt
- dotenv
- cors

---

# 💡 Future Improvements

- ❤️ Like Blogs
- 💬 Comment System
- 🔖 Bookmark Blogs
- 🌙 Dark Mode
- 📊 Admin Dashboard
- 🔔 Notifications
- 📧 Email Verification
- 🏷 Categories & Tags

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Lakshy Aggarwal**

GitHub: https://github.com/luck189

LinkedIn: https://linkedin.com/in/your-linkedin
