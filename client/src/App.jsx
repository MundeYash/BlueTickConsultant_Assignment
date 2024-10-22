import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './style.css';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    axios.get('https://mocki.io/v1/a6a0fb6b-a84a-4934-b3f2-5c92cc77c44e')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching the users:', error));
  }, []);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.username === updatedUser.username ? updatedUser : user)));
  };

  const deleteUser = (username) => {
    setUsers(users.filter(user => user.username !== username));
  };

  return (
    <div className="App">
      <h1 className="user-list-heading">User List</h1>
      <div className="form-container">
        <UserForm addUser={addUser} updateUser={updateUser} editingUser={editingUser} setEditingUser={setEditingUser} />
      </div>
      <div className="table-container">
        <UserList users={users} deleteUser={deleteUser} setEditingUser={setEditingUser} />
      </div>
    </div>
  );
}

export default App;