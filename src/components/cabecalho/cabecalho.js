import React from 'react';
import { logout } from '../../utils';
import './cabecalho.css';
export function Cabecalho() {
  return (
    <div className="panel panel-primary div-titulo">
      <div className="panel-heading head">        
        <h1 className="panel-title">Teste Desenvolvedor Java - Versão 1.5</h1>        
      </div>
      <div className="action-cabecalho" onClick={logout}>
        <a href="">
        <span>LOG-OUT</span>
        </a>
      </div>
    </div>
  )
}