import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from './pages/login/login';
import { Listagem } from './pages/listagem/listagem';
import { Manutencao } from './pages/manutencao/manutencao';
import { Incluir } from './pages/incluir/incluir';
import { PrivateRoute } from './components/private-route/private-route';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact component={Login} />
        <PrivateRoute path='/' exact component={Listagem} />
        <PrivateRoute path='/manutencao/:codigo' exact component={Manutencao} />
        <PrivateRoute path='/subestacao/incluir' exact component={Incluir} />
        <Route component={function () {
          return (
            <h1>Not found</h1>
          )
        }} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);