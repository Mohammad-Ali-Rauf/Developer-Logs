import React, { Fragment, useEffect } from 'react';

// Import Materialize CSS and JS
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

// Import Components
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/logs/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddDeveloperModal from './components/developers/AddDeveloperModal';
import DeveloperListModal from './components/developers/DeveloperListModal';

// Setup Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {

  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
  }, [])

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddDeveloperModal />
          <DeveloperListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  )
}

export default App;