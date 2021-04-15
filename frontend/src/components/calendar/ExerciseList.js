import React from 'react';
import { v4 as uuid } from 'uuid';

const ExerciseList = ({ type, items }) => {
    if (type == 'none') {
        return (
            <div className={`ExerciseList-Component`}>
                <p></p>
            </div >
        )
    }

    return (
        <div className={`ExerciseList-Component`}>

            <p><b>{type.charAt(0).toUpperCase() + type.slice(1)}</b></p>
            <ul style={{ listStyleType: 'none' }}>
                {items.map(item => {
                    return (
                        <li key={uuid()}>
                            <h4>{item.name}</h4>
                            <p><b>Location: {item.specificlocation}; Muscle: {item.muscle}</b></p>
                            <p>{item.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}

export default ExerciseList;