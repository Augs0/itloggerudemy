import React, { Fragment, useEffect } from 'react';
import AppSearchbar from './components/layout/AppSearchbar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    //initializes mterialize js
    M.AutoInit();
  });

  return (
    <Fragment>
      <AppSearchbar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
