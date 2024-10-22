import React from 'react';

function UserCard({ serialNo, user, deleteUser, setEditingUser }) {
    const handleEditClick = () => {
        setEditingUser(user);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDeleteClick = () => {
        if (window.confirm(`Are you sure you want to delete user`)) {
            deleteUser(user.username);
        }
    };

    return (
        <tr>
            <td>{serialNo}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.username}</td>
            <td>{user.age}</td>
            <td>{user.marital_status}</td>
            <td>{user.is_employed ? 'Yes' : 'No'}</td>
            <td>{user.is_founder ? 'Yes' : 'No'}</td>
            <td className="action-buttons">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </td>
        </tr>
    );
}

export default UserCard;