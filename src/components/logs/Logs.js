import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';



const Logs = ({ log: { logs, loading }, getLogs }) => {
    // const [logs, setLogs] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();
        //eslint-disable-next-line
    }, [])

    // const getLogs = async () => {
    //     setLoading(true);
    //     const res = await fetch('/logs');
    //     const data = await res.json();

    //     setLogs(data);
    //     setLoading(false);
    // }

    if (loading || logs === null) {
        return <Preloader />
    }
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className="center">No logs found</p>) : (logs.map(log => <LogItem log={log} key={log.id} />)
            )}
        </ul>
    )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
}

//app level state brought in as prop
const mapStateToProps = state => ({
    log: state.log //refers to root reducer name
})

export default connect(mapStateToProps, { getLogs })(Logs) //connect connects redux to the componenet
