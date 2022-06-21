import React, { useState } from 'react';

// Import Materialize JS
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [developer, setDeveloper] = useState('');

    const onSubmit = () => {
        if(message === '' || developer === '') {
            M.toast({ html: 'Developer name and Message was not updated.' })
        } else {
            console.log(message, attention, developer);
            setDeveloper('');
            setMessage('');
            setAttention(false);
        }
    }

    return (
        <div id='edit-log-modal' className='modal'>
            <div className='modal-content'>
                <h4>Edit Developer Log</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <label htmlFor='message' className='active'>
                            Developer Log
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <select
                            name='developer'
                            value={developer}
                            className='browser-default'
                            onChange={(e) => setDeveloper(e.target.value)}>
                            <option disabled>Select Developer</option>
                            <option value='Mohammad Ali'>Mohammad Ali</option>
                            <option value='Mohammad Hadi'>Mohammad Hadi</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <p>
                            <label>
                                <input
                                    type='checkbox'
                                    className='filled-in'
                                    checked={attention}
                                    value={attention}
                                    onChange={() => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href='#!' onClick={onSubmit} className='modal-close waves-effect waves-blue btn-flat'>Submit</a>
            </div>
        </div>
    );
}

export default EditLogModal;