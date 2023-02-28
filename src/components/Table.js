import React, { useState } from 'react';
import Modal from './Modal';
function Table({ id, name, username, email, address, company, photo }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {photo ? <img src={photo} alt="Avatar" /> : null}
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{company.name}</div>
          </div>
        </div>
      </td>
      <td>
        {address.street}
        <br />
        <span className="badge badge-ghost badge-sm">{address.city}</span>
      </td>
      <td>{email}</td>
      <td>
        {username}
      </td>
      <th>
        <label htmlFor={`modal-${id}`} className="btn bg-gradient-to-r hover:from-indigo-500 via-purple-500 hover:to-pink-500" onClick={() => setShowModal(true)}>Details</label>
        {showModal && (
          <Modal id={`modal-${id}`} name={name} username={username} email={email} address={address} company={company} photo={photo} onClose={() => setShowModal(false)} />
        )}
      </th>
    </tr>
  )
}

export default Table;
