import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if (message === '' || tech === '') {
            //pop up from bottom
            M.toast({ html: 'Please enter all information' });
        } else {
            console.log('yo');
        }
    }

    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter system log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className="active">
                            Log message
                        </label>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                                <option value="" disabled>Select a technician</option>
                                <option value="Barnabas LeRouche">Barnabas LeRouche</option>
                                <option value="Ira Garcia">Ira Garcia</option>
                                <option value="Genevieve Estrella">Genevieve Estrella</option>
                                <option value="Tristan Uva">Tristan Uva</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <p>
                                <label><input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={e => setAttention(!attention)} />
                                    <span>Needs attention?</span>
                                </label>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-light blue btn">Enter</a>
            </div>
        </div>
    )
};

const modalStyle = {
    width: '75%',
    height: '75%'
}

export default AddLogModal