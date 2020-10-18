import React, { useState, useEffect } from 'react';
import { Cabecalho } from '../../components/cabecalho';
import { getSubEstacoes, removeSubEstacao } from '../../services';
import './listagem.css';

export function Listagem() {
  const [subEstacoes, setSubEstacoes] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await getSubEstacoes();
      setSubEstacoes(result);
    }
    getData();
  }, []);

  async function handleRemove(codigo) {
    const success = await removeSubEstacao(codigo);
    if (success) {
      const newSubEstacoes = subEstacoes.filter(s => s.codigo !== codigo);
      setSubEstacoes(newSubEstacoes);
    }
  }

  return (
    <div className="container">
      <Cabecalho />
      <div className="table-responsive table-principal">
        <table className="table table-striped table-bordered table-hover ">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th className="text-center">Excluir</th>
              <th className="text-center">Alterar</th>
              <th className="text-center">Exibir no mapa</th>
            </tr>
          </thead>
          <tbody>
            {subEstacoes.map(subestacao => (
              <tr key={subestacao.codigo}>
                <td>{subestacao.codigo}</td>
                <td>{subestacao.nome}</td>
                <td className="text-center">
                  <span onClick={() => handleRemove(subestacao.codigo)} className='action'>Excluir</span>
                </td>
                <td className="text-center">
                  <a href={`/manutencao/${subestacao.codigo}`} title="Alterar" data-toggle="tooltip">
                    <span className="action glyphicon glyphicon-pencil" />
                  </a>
                </td>
                <td className="text-center"><span className="glyphicon glyphicon-globe" /></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      <footer className="table-principal">
        <button
          onClick={() => {
            window.location = '/subestacao/incluir'
          }}
          className="btn btn-primary pull-right">Incluir</button>
      </footer>

    </div>
  )
}