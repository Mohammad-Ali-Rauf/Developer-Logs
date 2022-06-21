import React, { useState } from 'react';

// Import Materialize JS
import M from 'materialize-css/dist/js/materialize.min.js';

const AddDeveloperModal = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if(firstName === '' || lastName === '') {
            M.toast({ html: 'First Name and Last Name of Developer must be provided' })
        } else {
            console.log(firstName, lastName);
            setFirstName('');
            setLastName('');
        }
    }

    return (
        <div id='developer-modal' className='modal'>
            <div className='modal-content'>
                <h4>New Developer</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='firstName'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label htmlFor='firstName' className='active'>
                            First Name
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            name='lastName'
                            value={lastName}
                            className='browser-default'
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label htmlFor='lastName' className='active'>
                            Last Name
                        </label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href='#!' onClick={onSubmit} className='modal-close waves-effect waves-blue btn-flat'>Submit</a>
            </div>
        </div>
    );
};

export default AddDeveloperModal;