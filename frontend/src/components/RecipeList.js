import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const RecipeList = ({ type, items }) => {
    const [hidden, setHidden] = useState('hidden');

    function toggleHide() {
        hidden == 'hidden' ? setHidden('shown') : setHidden('hidden');
    }

    return (
        <div className={`RecipeList-Component`}>

            <p><b>{type.charAt(0).toUpperCase() + type.slice(1)}</b> <button onClick={() => toggleHide()}>show/hide</button></p>
            {type != 'steps' ?
                <ul style={{ listStyleType: 'none' }} className={`${hidden}`}>
                    {items.map(item => {
                        return (
                            <li key={uuid()}>
                                <p>{item}</p>
                            </li>
                        )
                    })}
                </ul> :
                <ol type='1' className={`${hidden}`}>
                    {items.map(item => {
                        return (
                            <li key={uuid()}>
                                <p>{item}</p>
                            </li>
                        )
                    })}
                </ol>
            }
        </div >
    )
}

export default RecipeList;