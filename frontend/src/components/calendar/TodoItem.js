import { React } from 'react';
import { useSelector } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

function TodoItem({ item, updateSelectedItem, selected }) {
    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: "none",
        padding: 10,

        // change background colour if dragging
        background: isDragging ? "lightgreen" : "grey",

        // styles we need to apply on draggables
        ...draggableStyle
    });

    return (
        <Draggable draggableId={String(item.id)} index={item.timeIndex}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                    )}

                    className={selected == true ? "TodoItem-Component selected" : "TodoItem-Component"}
                    onClick={() => updateSelectedItem(item)}
                >
                    <h4 onClick={() => updateSelectedItem(item)}>{item.name}</h4>
                    <p onClick={() => updateSelectedItem(item)}>{item.desc}</p>
                </div>
            )}
        </Draggable>

    );
}

export default TodoItem;