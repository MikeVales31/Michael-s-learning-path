
import axios from 'axios';
const API_BASE_URL = 'http://localhost:3001/api';

class UserService {
    // Get all users
    static async getUsers() {
        try {
            const response = await axios.get(`${API_BASE_URL}/users`);
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    }

    // Create a new user
    static async createUser(userData) {
        try {
            const response = await axios.post(`${API_BASE_URL}/users`, userData);
            return response.data;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }

    // Update an existing user
    static async updateUser(userId, userData) {
        try {
            const response = await axios.put(`${API_BASE_URL}/users/${userId}`, userData);
            return response.data;
        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    }

    // Delete a user
    static async deleteUser(userId) {
        try {
            const response = await axios.delete(`${API_BASE_URL}/users/${userId}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    }

    // Health check
    static async healthCheck() {
        try {
            const response = await axios.get(`${API_BASE_URL}/health`);
            return response.data;
        } catch (error) {
            console.error('Health check failed:', error);
            throw error;
        }
    }
}

export default UserService;
