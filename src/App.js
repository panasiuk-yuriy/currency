import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CalculatorPage } from './pages/CalculatorPage/CalculatorPage';
import { TextPage } from './pages/TextPage/TextPage';
import { Header } from './components/Header/Header';

const App = () => {

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Switch>
          <div className="page">
            <Route exact path="/">
              <Redirect to="/calculator" />
            </Route>
            <Route path="/calculator" exact component={CalculatorPage} />
            <Route path="/text" component={TextPage} />
          </div>
        </Switch>
      </main>
    </div>
  );
};


export default App;
