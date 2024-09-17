import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editUserId, setEditUserId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/users");
      setUsers(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      // Update user
      await handleUpdate();
    } else {
      // Create new user
      try {
        const newUser = { name, email };
        await axios.post("http://localhost:4000/api/users", newUser);
        fetchUsers(); // Refresh user list
        setName("");
        setEmail("");
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:4000/api/users/${editUserId}`, {
        name,
        email,
      });
      fetchUsers(); // Refresh user list
      setEditMode(false);
      setName("");
      setEmail("");
      setEditUserId(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/users/${id}`);
      fetchUsers(); // Refresh user list after deletion
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (user) => {
    setEditMode(true);
    setEditUserId(user._id);
    setName(user.name);
    setEmail(user.email);
  };

  return (
    <div className="App">
      <h1>{editMode ? "Edit User" : "User Registration"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">{editMode ? "Update User" : "Add User"}</button>
        {editMode && (
          <button
            onClick={() => {
              setEditMode(false);
              setName("");
              setEmail("");
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
            <div>
              <button onClick={() => handleEdit(user)} className="edit-btn">
                Edit
              </button>
              <button
                onClick={() => handleDelete(user._id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
