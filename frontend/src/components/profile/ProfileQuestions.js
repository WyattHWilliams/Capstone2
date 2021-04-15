import { React } from 'react';
import { useDispatch } from 'react-redux';
import useFormFields from '../../hooks/useFormFields';

import DiscipleApi from '../../api_helpers/disciple_api';
import { updateProfileDiet } from '../../actions/profileActionCreators';


function ProfileQuestions({ profile, editProfile }) {
    const dispatch = useDispatch();
    const [formData, handleChange, resetForm] = useFormFields({
        diet: ''
    })

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await DiscipleApi.updateUser(profile.username, formData);
            await dispatch(updateProfileDiet(profile.username));
            editProfile();
        } catch (err) {
            alert('form submission error!');
            console.log('form submission error:', err);
        }
    }

    return (
        <div className="ProfileQuestions-Component">
            <div className="ProfileQuestionsForm-Subcomponent">
                <form onSubmit={handleSubmit}>
                    <h4>Please Select The Diet You Adhere To</h4>
                    <div className="MealQuestions-Container">
                        <div className="ProfileQuestions_meals">
                            <div className="form-group">
                                <input
                                    id='gluten-free'
                                    type='radio'
                                    value='gluten-free'
                                    name='diet'
                                    onChange={handleChange}
                                />
                                <label htmlFor='gluten-free'>Gluten Free</label>
                                <p>Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated)</p>
                            </div>

                            <div className="form-group">
                                <input
                                    id='ketogenic'
                                    type='radio'
                                    value='ketogenic'
                                    name='diet'
                                    onChange={handleChange}
                                />
                                <label htmlFor='ketogenic'>Ketogenic</label>
                                <p>The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not.</p>
                            </div>

                            <div className="form-group">
                                <input
                                    id='vegetarian'
                                    type='radio'
                                    value='vegetarian'
                                    name='diet'
                                    onChange={handleChange}
                                />
                                <label htmlFor='vegetarian'>Vegetarian</label>
                                <p>No ingredients may contain meat or meat by-products, such as bones or gelatin.</p>
                            </div>

                            <div className="form-group">
                                <input
                                    id='lacto-vegetarian'
                                    type='radio'
                                    value='lacto-vegetarian'
                                    name='diet'
                                    onChange={handleChange}
                                />
                                <label htmlFor='lacto-vegetarian'>Lacto-Vegetarian</label>
                                <p>All ingredients must be vegetarian and none of the ingredients can be or contain egg.</p>
                            </div>

                            <div className="form-group">
                                <input
                                    id='ovo-vegetarian'
                                    type='radio'
                                    value='ovo-vegetarian'
                                    name='diet'
                                    onChange={handleChange}
                                />
                                <label htmlFor='ovo-vegetarian'>Ovo-Vegetarian</label>
                                <p>All ingredients must be vegetarian and none of the ingredients can be or contain dairy.</p>
                            </div>

                            <div className="form-group">
                                <input
                                    id='vegan'
                                    type='radio'
                                    value='vegan'
                                    name='diet'
                                    onChange={handleChange}
                                />
                                <label htmlFor='vegan'>Vegan</label>
                                <p>No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.</p>
                            </div>
                        </div>
                        <div className="ProfileQuestions_meals">
                            <div className="form-group">
                                <input
                                    id='pescetarian'
                                    type='radio'
                                    value='pescetarian'
                                    name='diet'
                                    onChange={handleChange}
                                />
                                <label htmlFor='pescetarian'>Pescetarian</label>
                                <p>Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.</p>
                            </div>
                            <div className="form-group">
                                <input
                                    id='paleo'
                                    type='radio'
                                    value='paleo'
                                    name='diet'
                                    onChange={handleChange}
                                />
                                <label htmlFor='paleo'>Paleo</label>
                                <p>Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.</p>
                            </div>

                            <div className="form-group">
                                <input
                                    id='primal'
                                    type='radio'
                                    value='primal'
                                    name='diet'
                                    onChange={handleChange}
                                />
                                <label htmlFor='primal'>Primal</label>
                                <p>Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.</p>
                            </div>

                            <div className="form-group">
                                <input
                                    id='whole30'
                                    type='radio'
                                    value='whole30'
                                    name='diet'
                                    onChange={handleChange}
                                />
                                <label htmlFor='whole30'>Whole30</label>
                                <p>Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.</p>
                            </div>

                            <div className="form-group">
                                <input
                                    id='none'
                                    type='radio'
                                    value=''
                                    name='diet'
                                    onChange={handleChange}
                                />
                                <label htmlFor='none'>None</label>
                            </div>
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div >
    );
}

export default ProfileQuestions;