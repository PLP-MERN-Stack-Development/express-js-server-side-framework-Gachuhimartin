# 🏫 Express.js Server-Side Framework Assignment

## 🚀 Overview
This project is a **Node.js + Express.js API** built as part of the PLP MERN Stack Assignment.  
It demonstrates essential server-side features, including:
- RESTful CRUD operations
- Middleware implementation
- Authentication using API keys
- Error handling
- MongoDB integration with Mongoose
- Filtering, pagination, and search support

---

## 📂 Project Structure
📦 express-js-server-side-framework
├── config/
│ └── db.js # Database connection
├── controllers/
│ └── product.controller.js
├── middleware/
│ ├── auth.js # Authentication middleware
│ ├── logger.js # Custom request logger
│ ├── validateProduct.js # Request validation middleware
├── models/
│ └── product.model.js
├── routes/
│ └── product.route.js
├── server.js
├── .env
├── package.json
└── README.md

2️⃣ Install Dependencies

npm install

3️⃣ Configure Environment Variables

Create a .env file in your root directory with the following:

MONGO_URI=mongodb://localhost:27017/assignmentDB
PORT=3000
API_KEY=1234abcde

4️⃣ Run the Server

npm run dev

When successful, you’ll see:

Database connected successfully
Server is up and running on port 3000........

🧱 API Endpoints
📍 Base URL

http://localhost:3000/api/product

🧾 Headers (for all protected routes)
Key	Value
x-api-key	1234abcde
🧰 Routes
➕ Create Product

POST /api/product

{
  "name": "Laptop",
  "description": "High-performance laptop with 16GB RAM",
  "price": 1200,
  "category": "electronics",
  "inStock": true
}

✅ Requires Header: x-api-key: 1234abcde
📋 Get All Products

GET /api/product

    Supports filtering by category:
    /api/product?category=electronics

    Supports pagination:
    /api/product?page=1&limit=5

    Supports search by name:
    /api/product/search?name=Laptop

🔍 Get Single Product

GET /api/product/:id
✏️ Update Product

PUT /api/product/:id

{
  "name": "Updated Laptop",
  "price": 1300
}

✅ Requires Header: x-api-key: 1234abcde
❌ Delete Product

DELETE /api/product/:id
✅ Requires Header: x-api-key: 1234abcde
🧠 Middleware Implemented
Middleware	Description
Logger	Logs request method, URL, and timestamp
JSON Parser	Parses incoming JSON request bodies
Authentication	Verifies API key from request headers
Validation	Validates request body for product creation/update
Error Handler	Handles all global errors gracefully
⚡ Error Handling

Custom error responses with appropriate HTTP status codes:

    400 – Validation Error

    401 – Unauthorized (Invalid API key)

    404 – Not Found

    500 – Internal Server Error

🧩 Technologies Used

    Node.js

    Express.js

    MongoDB (via Mongoose)

    dotenv

    Postman (for testing)

🧑‍💻 Author

Martin Gachuhi
📧 Email: [your.email@example.com
]
🌐 GitHub: Gachuhimartin
