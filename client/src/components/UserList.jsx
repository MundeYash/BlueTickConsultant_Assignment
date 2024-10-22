import React from 'react';
import UserCard from './UserCard';

function UserList({ users, deleteUser, setEditingUser }) {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Serial No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Age</th>
          <th>Marital Status</th>
          <th>Employed</th>
          <th>Founder</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <UserCard 
            key={index} 
            serialNo={index + 1} 
            user={user} 
            deleteUser={deleteUser} 
            setEditingUser={setEditingUser} 
          />
        ))}
      </tbody>
    </table>
  );
}

export default UserList;