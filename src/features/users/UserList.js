import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "./Userlist.slice";

export const UserList = () => {
    const users = useSelector(state => state.users.list);
    const dispatch = useDispatch();
    console.log(users)
    
    useEffect(() =>{
        dispatch(getUsers());
    }, [])

    return <div>
        <h1>UserList</h1>
    </div>
}