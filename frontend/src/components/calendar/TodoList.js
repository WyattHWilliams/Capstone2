import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import TodoItem from './TodoItem';

import { Droppable, DragDropContext } from 'react-beautiful-dnd';
import TodoItemApi from '../../api_helpers/discipleTodoItem_api';
import { setTodoList } from '../../actions/calendarActionCreators'

const TodoList = () => {
    const profile = useSelector(store => store.profile)
    const list = useSelector(store => store.calendar.todoList);
    const selectedDay = useSelector(store => store.calendar.selectedDay);
    const selectedItem = useSelector(store => store.calendar.selectedItem);
    const dispatch = useDispatch();

    // update selectedItem in calendar.selectedItem
    function updateSelectedItem(item) {
        dispatch({ type: 'SET_SELECTED_ITEM', selectedItem: item.timeIndex, currentSideBarDisplay: item })
    }

    let displayList = list.filter(item => {
        return item.dayIndex == selectedDay;
    })
    displayList.map((item, idx) => {
        if (item.timeIndex == null) item.timeIndex = idx;
    })
    displayList.sort((item1, item2) =>
        (item1.timeIndex > item2.timeIndex) ? 1
            : (item1.timeIndex == item2.timeIndex) ?
                (displayList.indexOf(item1) > displayList.indexOf(item2) ? item1.timeIndex += 1 : item2.timeIndex += 1)
                : -1);
    console.log(displayList)

    const getListStyle = isDraggingOver => ({
        background: isDraggingOver ? "lightyellow" : "lightblue",
        padding: 10
    });

    let onDragEnd = (result) => {
        // reordering logic
        const reorder = (list, dragId, startIndex, endIndex) => {
            console.log(list);
            const [removed] = list.splice(startIndex, 1);
            list.splice(endIndex, 0, removed);
            for (let item of list) {
                item.timeIndex = list.indexOf(item)
            }
            console.log(list)
            return list;
        };

        if (!result.destination) {
            return;
        }

        const items = reorder(
            displayList,
            result.draggableId,
            result.source.index,
            result.destination.index
        );

        dispatch({ type: 'SET_TODO_LIST', todoList: items });
    }

    async function commitListChanges() {
        await TodoItemApi.updateMultTodoItem(profile.username, list);
        await dispatch(setTodoList(profile.username));
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='main'>
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        className="TodoList-Component"
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                        {
                            displayList.map(item => {
                                return (
                                    <TodoItem
                                        key={uuid()}
                                        item={item}
                                        updateSelectedItem={updateSelectedItem}
                                        selected={item.timeIndex == selectedItem}
                                    >
                                        {provided.placeholder}
                                    </TodoItem>
                                )
                            })

                        }
                        <button onClick={() => commitListChanges()}>Commit List Changes</button>
                    </div>
                )

                }

            </Droppable >
        </DragDropContext >
    )
}

export default TodoList;