import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('/api/auth/register', { email, password });
      alert('Registration Successful');
      // Redirect to login or homepage
      // Example: window.location.href = '/login';
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration Failed');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button 
        onClick={handleRegister} 
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Register
      </button>
    </div>
  );
};

export default Register;
