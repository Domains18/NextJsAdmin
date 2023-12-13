import React from 'react';

function Layout({children}) {
    return (
        <div>
            <div>Sidebar</div>
            <div>Navbar</div>
            <div>{children}</div>
        </div>
    );
}

export default Layout;
