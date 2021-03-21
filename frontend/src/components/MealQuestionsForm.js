import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import DiscipleApi from '../api_helpers/disciple_api';
import useFormFields from './hooks/useFormFields';
import { setCurrentUserData } from './actions/userActionCreators';

const MealQuestionsForm = () => {
    const currentUser = useSelector(store => store.currentUser)
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, handleChange, resetForm] = useFormFields({
        diet: ''
    })

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let user = await DiscipleApi.updateUser(currentUser.username, formData);
            console.log(user);
            if (user) {
                let res = await DiscipleApi.updateUser(currentUser.username, {
                    hasAnsweredMealQuestions: true
                })
                dispatch(setCurrentUserData(currentUser.username));
                history.push('/home');
            }
        } catch (err) {
            alert('form submission error!');
            console.log('form submission error:', err);
        }
    }

    return (
        <div className="MealQuestionsForm-Component">
            <form onSubmit={handleSubmit}>
                <input
                    id='gluten-free'
                    type='radio'
                    value='gluten-free'
                    name='diet'
                    onChange={handleChange}
                />
                <label htmlFor='gluten-free'>Gluten Free</label>
                <p>Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated)</p>
                <hr></hr>
                <input
                    id='ketogenic'
                    type='radio'
                    value='ketogenic'
                    name='diet'
                    onChange={handleChange}
                />
                <label htmlFor='ketogenic'>Ketogenic</label>
                <p>The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not.</p>
                <hr></hr>
                <input
                    id='vegetarian'
                    type='radio'
                    value='vegetarian'
                    name='diet'
                    onChange={handleChange}
                />
                <label htmlFor='vegetarian'>Vegetarian</label>
                <p>No ingredients may contain meat or meat by-products, such as bones or gelatin.</p>
                <hr></hr>
                <input
                    id='lacto-vegetarian'
                    type='radio'
                    value='lacto-vegetarian'
                    name='diet'
                    onChange={handleChange}
                />
                <label htmlFor='lacto-vegetarian'>Lacto-Vegetarian</label>
                <p>All ingredients must be vegetarian and none of the ingredients can be or contain egg.</p>
                <hr></hr>
                <input
                    id='ovo-vegetarian'
                    type='radio'
                    value='ovo-vegetarian'
                    name='diet'
                    onChange={handleChange}
                />
                <label htmlFor='ovo-vegetarian'>Ovo-Vegetarian</label>
                <p>All ingredients must be vegetarian and none of the ingredients can be or contain dairy.</p>
                <hr></hr>
                <input
                    id='vegan'
                    type='radio'
                    value='vegan'
                    name='diet'
                    onChange={handleChange}
                />
                <label htmlFor='vegan'>Vegan</label>
                <p>No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.</p>
                <hr></hr>
                <input
                    id='pescetarian'
                    type='radio'
                    value='pescetarian'
                    name='diet'
                    onChange={handleChange}
                />
                <label htmlFor='pescetarian'>Pescetarian</label>
                <p>Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.</p>
                <hr></hr>
                <input
                    id='paleo'
                    type='radio'
                    value='paleo'
                    name='diet'
                    onChange={handleChange}
                />
                <label htmlFor='paleo'>Paleo</label>
                <p>Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.</p>
                <hr></hr>
                <input
                    id='primal'
                    type='radio'
                    value='primal'
                    name='diet'
                    onChange={handleChange}
                />
                <label htmlFor='primal'>Primal</label>
                <p>Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.</p>
                <hr></hr>
                <input
                    id='whole30'
                    type='radio'
                    value='whole30'
                    name='diet'
                    onChange={handleChange}
                />
                <label htmlFor='whole30'>Whole30</label>
                <p>Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.</p>
                <hr></hr>
                <input
                    id='none'
                    type='radio'
                    value=''
                    name='diet'
                    onChange={handleChange}
                />
                <label htmlFor='none'>None</label>
                <hr></hr>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default MealQuestionsForm;