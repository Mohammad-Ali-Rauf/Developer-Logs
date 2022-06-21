import React, { useState, useEffect } from 'react';

// Import Components
import DeveloperItem from './DeveloperItem';

const DeveloperListModal = () => {
    const [developers, setDevelopers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getDevelopers();
        // eslint-disable-next-line
    }, []);

    const getDevelopers = async () => {
        setLoading(true);
        const res = await fetch('/developers');
        const data = await res.json();
        // set logs state to fetched data
        setDevelopers(data);
        setLoading(false);
    }

    return (
        <div id='developer-list-modal' className='modal'>
            <div className="modal-content">
                <h4>Developers</h4>
                <ul className="collection">
                    {!loading && (
                        developers.map(developer => (
                            <DeveloperItem key={developer.id} developer={developer} />
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default DeveloperListModal;