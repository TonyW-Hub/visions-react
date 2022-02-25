import React, { FunctionComponent } from 'react';
import GoogleButton from '../Button/GoogleButton';
import "./sidebar.scss";

const Sidebar: FunctionComponent = () => {
    
    // Gestion de l'affichage de la sideBar de l'application
    return (
        <div className='sidebarContainer'>
            <div className='sidebarTitle'>
                <div className='circle'></div>
                <h1>Circle <br />Products</h1>
            </div>
            <div className='sidebarDashboard'>
                <p>Dashboard</p>
                <ul>
                    <li>Products management</li>
                </ul>
                <p>Employees management</p>
            <hr />
            <GoogleButton />
            </div>
        </div>
    );
  }

export default Sidebar;