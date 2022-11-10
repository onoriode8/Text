import React from 'react';
// import LayoutScreen from './components/layouts/layoutScreen';
import { Route, Switch } from 'react-router-dom';
import Accounts from './containers/Accounts/Account';

const App = () => {
  return (
    <React.Fragment>
      {/* <LayoutScreen /> */}
        <Switch>
          <Route path="/" exact component={Accounts} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
