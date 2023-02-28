import React from 'react'

function Modal({ id, name, username, email, address, company, photo, onClose }) {
    return (
        <div>
            <input type="checkbox" id={id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            {photo ? <img src={photo} alt="Avatar" /> : null}
                        </div>
                    </div>
                    <h3 className="text-lg title--modal">{name}</h3>
                    <p className=' text-sm subtitle--modal'>{company.name}</p>
                    <ul>
                        <li>{username}</li>
                        <li>{email}</li>
                        <li>{address.street}, {address.city}</li>
                    </ul>
                    <div className="modal-action">
                        <label htmlFor={id} className="btn bg-gradient-to-r hover:from-indigo-500 via-purple-500 hover:to-pink-500" onClick={onClose}>Close</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
