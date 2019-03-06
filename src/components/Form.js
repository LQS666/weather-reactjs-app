import React from 'react';
import './Form.css';
import logo from '../images/logo.png';

const Form = props => {
    return (
        <>
            {props.value ? null :
                <div className='logo'>
                    <img className='logoIcon' src={logo} alt="" />
                    <div>Weather app</div>
                </div>
            }
            <form>
                <input
                    type="text"
                    value={props.value}
                    placeholder="Wpisz miasto"
                    onChange={props.change}
                />
            </form>
        </>
    );
}

export default Form;