import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import ListItem from './ListItem';

const TodoList = () => {
    const list = useSelector(store => store.currentUser.TodoList);
    const selectedDay = useSelector(store => store.currentUser.selectedDay);
    const dispatch = useDispatch();

    // update SideBar with info for item
    function updateSideBar(item) {
        // put item into currentSideBarDisplay state
        // the SideBar component will display item.detail based on item.type
        dispatch({ type: 'SET_CURRENT_SIDEBAR_DISPLAY', currentSideBarDisplay: item })
    }

    return (
        <div className="TodoList-Component">
            {list[selectedDay].map(item => {
                return (
                    <div key={uuid()}
                        className="item-container"
                        onClick={() => updateSideBar(item)}
                    >
                        <div className="deco-ball"></div>
                        <div className="deco-bar"></div>
                        <ListItem item={item} updateSideBar={updateSideBar} />
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList;