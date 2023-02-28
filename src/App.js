import React, { useEffect, useState } from "react";
import { getUsers, getPhotos } from './services/userService'
import Table from './components/Table';

import './styles/global.css';
function App() {

  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    Promise.all([getUsers(), getPhotos()])
      .then(([usersData, photosData]) => {
        setUsers(usersData);
        setPhotos(photosData);
      })
      .catch(console.error)
  }, []);

  return (
    <>
      <div className="container">
      <span className="title text-cyan-100">Challenge React</span>
        <table className="table table-zebra table--users">
          <thead>
            <tr>
              <th>Name & Company</th>
              <th>Address</th>
              <th>Email</th>
              <th>Username</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              // Buscamos la primera foto del usuario en la lista de photos
              const userPhoto = photos[index];

              return (
                <Table
                  id={user.id}
                  key={user.id}
                  name={user.name}
                  username={user.username}
                  address={user.address}
                  email={user.email}
                  company={user.company}
                  photo={userPhoto}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
