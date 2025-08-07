📦 Post Management API (Backend)

Hệ thống API quản lý bài viết sử dụng Node.js, Express, MongoDB và Cloudinary để quản lý bài viết, xác thực người dùng với JWT.

🚀 Tính năng chính

Đăng ký / Đăng nhập người dùng

Tạo, chỉnh sửa, xóa bài viết (chỉ khi đã đăng nhập)

Chỉ cho phép người tạo bài viết chỉnh sửa/xóa bài viết đó

Upload ảnh bài viết lên Cloudinary

Xác thực người dùng qua JWT (Bearer Token)

🧠 Luồng hoạt động

Đăng ký / Đăng nhập

Người dùng tạo tài khoản hoặc đăng nhập tại /register và /login

Server tạo JWT Token và trả về client

Xác thực JWT

Client lưu token trong LocalStorage

Gửi token qua Authorization: Bearer <token> trong các request cần xác thực

Middleware verifyToken kiểm tra token và gán thông tin user vào req.user

Quản lý bài viết

Người dùng đã đăng nhập có thể:

Gửi POST /posts để tạo bài viết

Gửi PUT /posts/:id để chỉnh sửa bài viết của chính mình

Gửi DELETE /posts/:id để xóa bài viết của chính mình

Ảnh sẽ được upload lên Cloudinary và lưu URL trong MongoDB

🧾 Cấu trúc thư mục

📁 backend/
├── index.js              # Điểm khởi chạy server
├── models/
│   └── Post.js           # Mô hình bài viết
│   └── User.js           # Mô hình người dùng
├── middlewares/
│   └── verifyToken.js    # Kiểm tra JWT
├── controllers/
│   └── authController.js # Đăng ký, đăng nhập
│   └── postController.js # CRUD bài viết
├── uploads/              # Không dùng vì ảnh được lưu trên Cloudinary
└── .env                  # Chứa biến môi trường

🔐 Biến môi trường .env

PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
JWT_SECRET=your_jwt_secret

🔒 Lưu ý: Không commit file .env lên GitHub


☁️ Hướng dẫn deploy Backend trên Render

Push project lên GitHub

Vào https://render.com

Chọn New Web Service → kết nối GitHub repo

Điền:

Build Command: npm install

Start Command: node index.js

Environment: Node

Thêm biến môi trường từ file .env

Deploy và Render sẽ cấp URL Backend cho bạn

✅ Yêu cầu trước khi sử dụng

Node.js >= 18

MongoDB Atlas account

Tài khoản Cloudinary
