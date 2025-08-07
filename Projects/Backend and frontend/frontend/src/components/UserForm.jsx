import React, { useState } from 'react';  
import '../index.css';

const UserForm = ({ onSubmit, onUpdate, editingUser, onCancelEdit, disabled = false }) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [errors, setErrors] = useState({});

    // If edit is selected, fill the form and make the changes
    React.useEffect(() => {
        if (editingUser) {
            setUsername(editingUser.username);
            setAge(editingUser.age.toString());
        } else {
            setUsername('');
            setAge('');
        }
        setErrors({});
    }, [editingUser]);

    // Validate age input
    const validateAge = (value) => {
        const numValue = parseInt(value);
        if (isNaN(numValue)) {
            return "Age must be a number";
        }
        if (numValue < 0) {
            return "Age cannot be negative";
        }
        if (numValue > 150) {
            return "Age cannot be greater than 150";
        }
        return null;
    };

    // Handle age input changes with validation
    const handleAgeChange = (e) => {
        const value = e.target.value;
        
        // Only allow numbers
        if (value === '' || /^\d+$/.test(value)) {
            setAge(value);
            
            // Validate if there's a value
            if (value) {
                const error = validateAge(value);
                setErrors(prev => ({
                    ...prev,
                    age: error
                }));
            } else {
                setErrors(prev => ({
                    ...prev,
                    age: null
                }));
            }
        }
    };

    // Handling submition of the form
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate form before submission
        const ageError = age ? validateAge(age) : "Age is required";
        const usernameError = !username.trim() ? "Username is required" : null;
        
        if (ageError || usernameError) {
            setErrors({
                age: ageError,
                username: usernameError
            });
            return;
        }
        
        if (username.trim() && age.trim()) {
            const userData = { username, age: parseInt(age) };
            
            if (editingUser) {
                onUpdate({ ...editingUser, ...userData });
            } else {
                onSubmit(userData);
            }
            setUsername('');
            setAge('');
            setErrors({});
        }
    };

    // Cancelling the edit username and age are on the useState
    const handleCancel = () => {
        setUsername('');
        setAge('');
        setErrors({});
        if (onCancelEdit) {
            onCancelEdit();
        }
    };

    // Creating the form with the inputs and buttons
    return (
    <>
    <h1>{editingUser ? 'Edit User' : 'Add New User'}</h1>
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input 
          type="text" 
          name="username" 
          placeholder="Username"
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          disabled={disabled}
          required
        />
        {errors.username && <div style={{ color: 'red', fontSize: '12px' }}>{errors.username}</div>}
      </div>
      
      <div>
        <input 
          type="number" 
          name="userAge" 
          placeholder="Age"
          value={age} 
          onChange={handleAgeChange}
          min="0"
          max="150"
          disabled={disabled}
          required
        />
        {errors.age && <div style={{ color: 'red', fontSize: '12px' }}>{errors.age}</div>}
      </div>
      
      <button type="submit" disabled={disabled}>
        {editingUser ? 'Update User' : 'Add User'}
      </button>
      {editingUser && (
        <button type="button" onClick={handleCancel} disabled={disabled}>
          Cancel Edit
        </button>
      )}
    </form>
    </>
  );
};

export default UserForm;