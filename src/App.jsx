import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([
    { firstname: 'Shahid', lastname: 'Rahim', age: 30 },
    { firstname: 'Rahul', lastname: 'Kumar', age: 28 },
    { firstname: 'Anil', lastname: 'Kumar', age: 27 },
    { firstname: 'Ajay', lastname: 'Singh', age: 29 },
  ]);

  useEffect(() => {
    console.log(users.sort((a, b) => a.age - b.age));
  }, []);

  function handleClick(e) {
    const currentName = e.target.innerHTML;
    const currentUser = users.find((user) => user.firstname === currentName);

    console.log('currentUser:', currentUser);
  }

  return (
    <>
      {users
        .sort((a, b) => a.age - b.age)
        ?.map((user) => {
          return (
            <button className="button" onClick={handleClick}>
              {user.firstname}
            </button>
          );
        })}
    </>
  );
}

export default App;
