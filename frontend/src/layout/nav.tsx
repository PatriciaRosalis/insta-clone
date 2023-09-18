import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div id="sidebar">
            <h1>
                insta-clone
            </h1>
            <nav>
                <p>ICON</p>
            </nav>

            <Outlet />
        </div>
    );
}

export default Root;
