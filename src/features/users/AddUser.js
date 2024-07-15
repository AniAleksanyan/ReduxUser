import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './Userlist.slice';
import { useNavigate } from 'react-router-dom';

export const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({ name: '', sallary: '' });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(newUser));
        setNewUser({ name: '', salary: '' });
        navigate('/');
    };

    return (
        <div className='edit-user-content'>
            <h1>Add User</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={e=>setNewUser({...newUser, name: e.target.value})}
                    required
                />
                <input
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    onChange={e=>setNewUser({...newUser, sallary: e.target.value})}
                    required
                />
                <button type="submit" className='edit-user'>Add User</button>
            </form>
        </div>
    );
}