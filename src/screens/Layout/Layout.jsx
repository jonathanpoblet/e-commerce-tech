import React from 'react';

const Layout = ({children}) => {
    console.log(children.props.children)
    return (
        <div style={{backgroundColor: "red"}}>
            {children}
        </div>
    );
}

export default Layout;
