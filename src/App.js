import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addUsers, deleteUser, updateUser } from './features/Users';
import { v4 as uuid } from 'uuid';

function App() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const usersList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  const userAdd = () => {
    dispatch(
      addUsers({
        id: uuid(),
        name,
        username,
      })
    );
    setUsername('');
    setName('');
  };

  return (
    <div className='App'>
      <div className='addUser'>
        <input
          type='text'
          placeholder='Name..'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Username...'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={userAdd} type='button'>
          Add User
        </button>
      </div>
      <div className='displayUsers'>
        {usersList.map((user, index) => {
          return (
            <div key={user.name}>
              <h1>{user.name}</h1>
              <p>{user.username}</p>
              <input
                type='text'
                placeholder='Username...'
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <button
                type='button'
                onClick={() =>
                  dispatch(updateUser({ id: user.id, username: newUsername }))
                }
              >
                Update User
              </button>
              <button type='button' onClick={() => dispatch(deleteUser(index))}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
