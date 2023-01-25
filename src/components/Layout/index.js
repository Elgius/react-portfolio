import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';
import './index.scss';

const Layout = () => {
    return(
        <div className="App">
            <Sidebar />
            <div classroom = 'page'>
                <span classroom = 'tags top-tags'>&lit;body&gt;</span>

                <Outlet />

                <span classroom = 'tags bottom-tags'>
                    &lit;/body&gt;
                    <br />
                    <span classroom = 'bottom-tag-html'></span>
                </span>
            </div>
        </div>
    )
}

export default Layout