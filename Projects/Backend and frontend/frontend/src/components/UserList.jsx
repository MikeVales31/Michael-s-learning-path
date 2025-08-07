import React from 'react';


const UserList = ({ users = [], onEdit, onDelete, disabled = false }) => {
  return (
    <div>
      <h1>User List</h1>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
              <div>
                <strong>Username:</strong> {user.username} | <strong>Age:</strong> {user.age}
                {user.createdAt && (
                  <span style={{ fontSize: '12px', color: '#666', marginLeft: '10px' }}>
                    Created: {new Date(user.createdAt).toLocaleDateString()}
                  </span>
                )}
              </div>
              <div style={{ marginTop: '5px' }}>
                <button 
                  className="interactive-button"
                  onClick={() => onEdit(user)}
                  disabled={disabled}
                >
                  Edit
                </button>
                <span>            </span>
                <button 
                  className="interactive-button"
                  onClick={() => onDelete(user)}
                  disabled={disabled}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;