import React, { useState, useEffect } from 'react';
import './App.css';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const allUsers = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
        setUsers(allUsers);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  const filteredUsers = users
    .filter(u => u?.name?.toLowerCase().includes(filter.toLowerCase()))
    .filter((user, index) => index < 5); // display only 5 users ¯\_(ツ)_/¯

  return (
    <div className="App">
      <div className="shadow-01dp padding-16">
        <h5 className="padding-16-bottom">Search</h5>
        <input
          type="text"
          placeholder="Search by name"
          value={filter}
          onChange={event => setFilter(event.target.value)}
          className="input-primary input-md margin-16-bottom"
        />
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          <UserList users={filteredUsers} />
        )}
      </div>
    </div>
  );
}

export default App;
