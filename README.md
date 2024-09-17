
<div align="center">

# `🌟 MERN CRUD Application 🌟`

</div> 

## Overview

This document provides a step-by-step guide for setting up and running a MERN (MongoDB, Express, React, Node.js) application. The application includes user registration and listing functionalities.


## Prerequisites

- Node.js installed
- MongoDB instance (local or cloud)
- Git (for version control)



```node
mern-app/
│
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── frontend/
    └── (React app)
```


## Backend Setup

1. **Navigate to the Backend Directory**

    ```bash
    cd backend
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Configure Environment Variables**

    - Create a `.env` file in the `backend/` directory.
    - Add your MongoDB connection string:

        ```makefile
        MONGO_URI=your_mongodb_connection_string_here
        ```

4. **Start the Server**

    ```bash
    npm run dev
    ```

    The server will start on port 5000 by default.

## Frontend Setup

1. **Navigate to the Frontend Directory**

    ```bash
    cd frontend
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Configure Environment Variables**

    - Ensure you have `REACT_APP_BACKEND_URL` set in your environment configuration to point to the backend server.

4. **Start the React App**

    ```bash
    npm start
    ```

    The React app will start on port 3000 by default.

## Features

- **User Registration**: Users can register by entering their name and email address.
- **User List**: Registered users are displayed in a list format.

## API Endpoints

- `GET /api/users`: Retrieve all registered users.
- `POST /api/users`: Register a new user with name and email.

## Testing

- **Frontend**: Open [http://localhost:3000](http://localhost:3000) in your browser to interact with the React app.
- **Backend**: Ensure the server is running and accessible at [http://localhost:5000](http://localhost:5000).

## Troubleshooting

- Ensure MongoDB is running and accessible.
- Verify the backend server logs for any errors.
- Check the network tab in your browser's developer tools for any failed API requests.

