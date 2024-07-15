import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser } from './Userlist.slice';
import { getUsers } from './Userlist.slice';

export const EditUser = () => {
    const { userId } = useParams();
    const users = useSelector(state => state.users.list);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({ id: '', name: '', sallary: '' });

    useEffect(() => {
        if (users.length === 0) {
            dispatch(getUsers());
        } else {
            const user = users.find(user => user.id === userId);
            if (user) {
                setCurrentUser(user);
            }
        }
    }, [userId, users, dispatch]);
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(currentUser));
        navigate('/');
    };

    return (
        <div className='edit-user-content'>
            <h1>Edit User</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="name"
                    value={currentUser.name}
                    onChange={e => setCurrentUser({ ...currentUser, name: e.target.value })}
                    placeholder="Name"
                />
                <input
                    type="number"
                    name="salary"
                    value={currentUser.sallary}
                    onChange={e => setCurrentUser({ ...currentUser, sallary: e.target.value })}
                    placeholder="Salary"
                />
                <button type="submit" className='edit-user'>Update User</button>
            </form>
        </div>
    );
};
