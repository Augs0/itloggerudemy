import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';


const AppSearchbar = ({ searchLogs }) => {
    const text = useRef('');

    const onChange = e => {
        searchLogs(text.current.value);
    }

    return (
        <nav style={{ marginBottom: '30px' }} className="deep-purple lighten-1">
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" placeholder='Search logs...' ref={text} onChange={onChange} />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

AppSearchbar.propTypes = {
    searchLogs: PropTypes.func.isRequired
}

export default connect(null, { searchLogs })(AppSearchbar)
