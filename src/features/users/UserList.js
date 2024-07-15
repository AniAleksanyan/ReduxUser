import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getUsers, deleteUsers } from "./Userlist.slice";
import { useNavigate } from "react-router-dom";

export const UserList = () => {
    const users = useSelector(state => state.users.list);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() =>{
        dispatch(getUsers());
    }, [])

    const handleEditClick = (userId) => {
        navigate(`/edit/${userId}`);
    };
    
    const handleDeleteClick = (userId) => {
        dispatch(deleteUsers(userId));
        window.location.reload();
    };

    return <div className="user-list">
        <h1>User List</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Sallary</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map( user => 
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.sallary}</td>
                            <td>
                                <button className="edit-user" onClick={() => handleEditClick(user.id)}>Edit User</button>
                                <button className="delete-user" onClick={() => handleDeleteClick(user.id)}>Delete User</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
}