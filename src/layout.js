import { Outlet } from "react-router-dom"

export const Layout = () => {
    return <>
        <nav>
            <a href="/">Users</a>
            <a href="/add">Add User</a>
        </nav>
        <div className="main">
            <Outlet/>
        </div>
    </>
}