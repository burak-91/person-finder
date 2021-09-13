import React, { useState } from 'react';
import Modal from './Modal';
import UserDetails from './UserDetails';

const UserList = ({ users }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalUser, setModalUser] = useState({});

  const handleUserClick = (user) => {
    setModalUser(user);
    setShowModal(true);
  }

  return (
    <>
      {showModal && 
        <Modal>
          <div className="modal-content padding-16">
            <UserDetails user={modalUser} />
            <button className="btn-outline btn-md margin-16-top width-full" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </Modal>
      }
      {users.length === 0 ? (
        <div>No Results</div>
        ) : (
        <>
          <h5>Results</h5>
          <ul className="green-blue-list">
            {users.map(user => (
              <li key={user.id} onClick={() => handleUserClick(user)} className="green-blue-list-item">
                <span className="listing">{user.name}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </>

  );
}

export default UserList;