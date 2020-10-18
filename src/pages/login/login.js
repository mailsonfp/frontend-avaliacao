import React from 'react';
import { Redirect } from 'react-router-dom';
import { login, isLogged } from '../../utils';
import './login.css';

export function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    login();
    window.location.href = '/';
  }

  if (isLogged) return <Redirect to="/" />

  return (
    <div className="panel panel-primary login-div">
      <div className="panel-heading">
        <h1 className="panel-title">Teste Desenvolvedor Java - Versão 1.5</h1>
      </div>
      <div className="panel-body">
        <div className="login-form col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-4 col-md-4 col-md-offset-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon">
                  <span className="glyphicon glyphicon-user"></span>
                </div>
                <input type="text" className="form-control" placeholder="Usuário" />
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon">
                  <span className="glyphicon glyphicon-option-horizontal"></span>
                </div>
                <input type="password" className="form-control" placeholder="Senha" />
              </div>
            </div>

            <footer>
              <button
                type="submit"
                className="btn btn-primary pull-right">Entrar</button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  )
}