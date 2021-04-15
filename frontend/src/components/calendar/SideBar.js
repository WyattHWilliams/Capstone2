import React from 'react';
import { useSelector } from 'react-redux';

import RecipeList from './RecipeList';
import ExerciseList from './ExerciseList';

const SideBar = () => {
    const item = useSelector(store => store.calendar.currentSideBarDisplay);
    console.log(item);

    return (
        <div className="SideBar-Component">
            <h3>{item.name}</h3>
            {item.type == 'meal' ?
                <>
                    <h4>{item.detail.recipeName}</h4>
                    <div className="SideBar-Subcomponent">
                        <RecipeList type='ingredients' items={item.detail.ingredients} />
                        <RecipeList type='steps' items={item.detail.steps} />
                    </div>
                </>
                :
                <>
                    <div className="SideBar-Subcomponent">
                        <ExerciseList type={item.type} items={item.detail} />
                    </div>
                </>
            }
        </div>
    )
}

export default SideBar;