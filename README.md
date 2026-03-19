📦 CRUD_API

A simple CRUD (Create, Read, Update, Delete) REST API built with Node.js, Express, and MongoDB using Mongoose.
This API lets you perform basic operations on data (add, view, update and delete), and can be tested using Postman.

🧾 Table of Contents

🔧 Prerequisites

🚀 Installation

▶️ Running the Server

📌 API Endpoints

🧪 Testing with Postman

📋 Example Requests

📁 Project Structure

🤝 Contribution

🔧 Prerequisites

Before starting, make sure you have:

Node.js installed (v14+)

npm installed

MongoDB running locally or via Atlas

Postman (or any API testing tool)

🛠️ Installation

Clone the repository

git clone https://github.com/tamanna-tech-brain/CRUD_API.git
cd CRUD_API

Install dependencies

npm install

Create a .env file
Add your MongoDB connection string inside .env:

MONGO_URI=your_mongodb_connection_uri
PORT=5000
▶️ Running the Server

Start the app with:

npm start

The server will start (default on http://localhost:5000).

📌 API Endpoints
Method	Route	Description
POST	/api/resource	Create a new item
GET	/api/resource	Get all items
GET	/api/resource/:id	Get item by ID
PUT	/api/resource/:id	Update item by ID
DELETE	/api/resource/:id	Delete item by ID

Replace resource with your actual API route name (e.g., /users, /products etc.).

🧪 Testing with Postman

To test the API in Postman:

🔹 1. Create a New Request

Method: POST

URL: http://localhost:5000/api/resource

Body:
Choose raw → JSON and send:

{
  "name": "Sample Item",
  "description": "Sample description"
}
🔹 2. View All Items

Method: GET

URL: http://localhost:5000/api/resource

🔹 3. View One Item

Method: GET

URL: http://localhost:5000/api/resource/{id}

🔹 4. Update an Item

Method: PUT

URL: http://localhost:5000/api/resource/{id}

Body:

{
  "name": "Updated name"
}
🔹 5. Delete an Item

Method: DELETE

URL: http://localhost:5000/api/resource/{id}

🧾 Example Requests
POST (Create)
POST http://localhost:5000/api/resource
Content-Type: application/json
Body:
{
  "name": "New Item",
  "description": "Some text"
}
GET (List All)
GET http://localhost:5000/api/resource
GET (By ID)
GET http://localhost:5000/api/resource/60c72bfa2ab79e0368dd8b51
PUT (Update)
PUT http://localhost:5000/api/resource/60c72bfa2ab79e0368dd8b51
Content-Type: application/json
Body:
{
  "name": "Updated name"
}
DELETE
DELETE http://localhost:5000/api/resource/60c72bfa2ab79e0368dd8b51
📁 Project Structure
CRUD_API/
├── controllers/
├── middleware/
├── models/
├── routes/
├── index.js
├── connection.js
├── package.json
├── .env
└── MOCK_dataJSON.json
