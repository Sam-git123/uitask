// src/components/UserList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>User Directory</h1>
      {users.map((user) => (
        <Link key={user.id} to={`/user/${user.id}`} className="user-card">
          <div>
            <div>{user.name}</div>
            <div>{`Posts: ${user.posts || 0}`}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UserList;
