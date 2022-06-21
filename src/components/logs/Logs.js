import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Import Components
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

// Import Functions
import { getLogs } from '../../actions/logActions';

// Setup Redux
import { connect } from 'react-redux';

const Logs = ({ log: { logs, loading }, getLogs }) => {

    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);

    if(loading || logs === null) {
        return <Preloader />
    }
    
    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>Developer Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (
                <p className='center'>There are no developer logs.</p>
            ) : (
                // eslint-disable-next-line
                logs.map(log => <LogItem key={log.id} log={log} />)
            )}
        </ul>
    );
};

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    log: state.log
})

export default connect(mapStateToProps, { getLogs })(Logs);
