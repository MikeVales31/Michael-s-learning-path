import React, { useState, useEffect } from 'react';
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import UserService from "./services/userService";

function App() {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Load users when component mounts
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            setLoading(true);
            setError(null);
            const usersData = await UserService.getUsers();
            setUsers(usersData);
        } catch (err) {
            setError('Failed to load users. Please try again.');
            console.error('Error loading users:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleUserSubmit = async (userData) => {
        try {
            setLoading(true);
            setError(null);
            const newUser = await UserService.createUser(userData);
            setUsers(prevUsers => [...prevUsers, newUser]);
        } catch (err) {
            setError('Failed to create user. Please try again.');
            console.error('Error creating user:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleUserUpdate = async (updatedUser) => {
        try {
            setLoading(true);
            setError(null);
            const updated = await UserService.updateUser(editingUser.id, {
                username: updatedUser.username,
                age: updatedUser.age
            });
            setUsers(prevUsers => 
                prevUsers.map(user => 
                    user.id === editingUser.id ? updated : user
                )
            );
            setEditingUser(null);
        } catch (err) {
            setError('Failed to update user. Please try again.');
            console.error('Error updating user:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleEditUser = (user) => {
        setEditingUser(user);
    };

    const handleCancelEdit = () => {
        setEditingUser(null);
    };

    const handleDeleteUser = async (user) => {
        try {
            setLoading(true);
            setError(null);
            await UserService.deleteUser(user.id);
            setUsers(prevUsers => prevUsers.filter(u => u.id !== user.id));
            // If we're editing the user being deleted, cancel the edit
            if (editingUser && editingUser.id === user.id) {
                handleCancelEdit();
            }
        } catch (err) {
            setError('Failed to delete user. Please try again.');
            console.error('Error deleting user:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {error && (
                <div style={{ 
                    background: '#fee', 
                    color: '#c33', 
                    padding: '10px', 
                    margin: '10px 0', 
                    borderRadius: '4px',
                    border: '1px solid #fcc'
                }}>
                    {error}
                </div>
            )}
            {loading && (
                <div style={{ 
                    background: '#e6f3ff', 
                    color: '#0066cc', 
                    padding: '10px', 
                    margin: '10px 0', 
                    borderRadius: '4px',
                    border: '1px solid #b3d9ff'
                }}>
                    Loading...
                </div>
            )}
            <UserForm 
                onSubmit={handleUserSubmit}
                onUpdate={handleUserUpdate}
                editingUser={editingUser}
                onCancelEdit={handleCancelEdit}
                disabled={loading}
            />
            <UserList 
                users={users} 
                onEdit={handleEditUser}
                onDelete={handleDeleteUser}
                disabled={loading}
            />
        </div>
    );
}

export default App;
