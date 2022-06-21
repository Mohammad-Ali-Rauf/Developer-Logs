import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Setup Redux
import { addLog } from '../../actions/logActions';
import { connect } from 'react-redux';

// Import Materialize JS
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = ({ addLog }) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [developer, setDeveloper] = useState('');

    const onSubmit = () => {
        if(message === '' || developer === '') {
            M.toast({ html: 'Developer name and Message must be provided.' })
        } else {
            const newLog = {
                message,
                attention,
                developer,
                date: new Date()
            }

            addLog(newLog);
            M.toast({ html: 'Log Added Successfully!' })

            setMessage('');
            setAttention(false);
            setDeveloper('');
        }
    }

    return (
        <div id='add-log-modal' className='modal'>
            <div className='modal-content'>
                <h4>Add Developer Log</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='message'
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                        <label htmlFor='message'>
                            Developer Log
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field col s12'>
                        <select
                            name='developer'
                            value={developer}
                            onChange={e => setDeveloper(e.target.value)}>
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
};

AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired,
}

export default connect(null, { addLog })(AddLogModal);
