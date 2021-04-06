import React from 'react';

const ListItem = ({ item, updateSideBar }) => {

    return (
        <div className="ListItem-Component" onClick={() => updateSideBar(item)}>
            <h4 onClick={() => updateSideBar(item)}>{item.name}</h4>
            <p onClick={() => updateSideBar(item)}>{item.desc}</p>
        </div>
    )
}

export default ListItem;