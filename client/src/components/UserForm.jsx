import React, { useState, useEffect } from 'react';

function UserForm({ addUser, updateUser, editingUser, setEditingUser }) {
  const [user, setUser] = useState({ first_name: '', last_name: '', username: '', age: '', marital_status: '', is_employed: false, is_founder: false });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      updateUser(user);
      setEditingUser(null);
    } else {
      addUser(user);
    }
    setUser({ first_name: '', last_name: '', username: '', age: '', marital_status: '', is_employed: false, is_founder: false });
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2 className="user-form-heading">{editingUser ? 'Edit User' : 'Add New User'}</h2>
      <div className="form-group">
        <input type="text" name="first_name" value={user.first_name} onChange={handleChange} placeholder="First Name" required />
      </div>
      <div className="form-group">
        <input type="text" name="last_name" value={user.last_name} onChange={handleChange} placeholder="Last Name" required />
      </div>
      <div className="form-group">
        <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" required />
      </div>
      <div className="form-group">
        <input type="number" name="age" value={user.age} onChange={handleChange} placeholder="Age" required />
      </div>
      <div className="form-group">
        <input type="text" name="marital_status" value={user.marital_status} onChange={handleChange} placeholder="Marital Status" required />
      </div>
      <div className="form-group checkbox-group">
        <label>
          Employed:
          <input type="checkbox" name="is_employed" checked={user.is_employed} onChange={handleChange} />
        </label>
        <label>
          Founder:
          <input type="checkbox" name="is_founder" checked={user.is_founder} onChange={handleChange} />
        </label>
      </div>
      <button type="submit" className="submit-button">{editingUser ? 'Update' : 'Add'} User</button>
    </form>
  );
}

export default UserForm;