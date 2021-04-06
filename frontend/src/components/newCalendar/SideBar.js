import React from 'react';
import { useSelector } from 'react-redux';

const SideBar = () => {
    const item = useSelector(store => store.currentUser.currentSideBarDisplay);
    console.log(item)

    return (
        <div className="SideBar-Component">
            <h3>{item.name}</h3>
        </div>
    )
}

export default SideBar;