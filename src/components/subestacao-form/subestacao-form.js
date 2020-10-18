import React, { useState } from 'react';
import './form.css';

export function SubEstacaoForm(props) {
  const { setSubEstacao, onSubmit, subEstacao, mode } = props;
  const [redeAtiva, setRedeAtiva] = useState({});
  const [redeStatus, setRedeStatus] = useState('inserting');

  function handleChangeSubEstacao(nomeCampo) {
    return function (event) {
      setSubEstacao({
        ...subEstacao,
        [nomeCampo]: event.target.value
      });
    }
  }

  function handleChangeRede(nomeCampo) {
    return function (event) {
      setRedeAtiva({
        ...redeAtiva,
        [nomeCampo]: event.target.value
      });
    }
  }

  function handleRedeUpsert(event) {
    event.preventDefault();
    let index = -1;
    subEstacao.redesMt.forEach((rede, currentIndex) => {
      if (rede.codigo === redeAtiva.codigo) {
        index = currentIndex;
      }
    });

    if (index !== -1) {
      subEstacao.redesMt[index] = {
        ...subEstacao.redesMt[index],
        ...redeAtiva
      }
    } else {
      subEstacao.redesMt.push(redeAtiva);
    }

    setRedeAtiva({})
    setSubEstacao(subEstacao);
    setRedeStatus('inserting');
  }



  function handleRemoveRede(codigoRede) {
    const newSubEstacao = {
      ...subEstacao,
      redesMt: subEstacao.redesMt.filter(rede => rede.codigo !== codigoRede)
    };

    if (codigoRede === redeAtiva.codigo) {
      setRedeAtiva({});
    }

    setSubEstacao(newSubEstacao);
  }

  function handleUpdateRede(rede) {
    setRedeAtiva(rede);
    setRedeStatus('updating');
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="panel panel-primary div-titulo">
        <div className="panel-heading">
          <h1 className="panel-title">SubEstação</h1>
        </div>
        <div className="form-custom">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="codigoSubEstacao">Código:</label>
            <div className="col-sm-4">
              <input
                value={subEstacao.codigo}
                onChange={handleChangeSubEstacao('codigo')}
                readOnly={mode === 'updating'}
                className="form-control" type="text" id="codigoSubEstacao" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="nomeSubEstacao">Nome:</label>
            <div className="col-sm-10">
              <input
                value={subEstacao.nome}
                onChange={handleChangeSubEstacao('nome')}
                className="form-control" type="text" id="nomeSubEstacao" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="latitudeSubEstacao">Latitude:</label>
            <div className="col-sm-4">
              <input
                value={subEstacao.latitude}
                onChange={handleChangeSubEstacao('latitude')}
                className="form-control" type="text" id="latitudeSubEstacao" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="longitudeSubEstacao">Latitude:</label>
            <div className="col-sm-4">
              <input
                value={subEstacao.longitude}
                onChange={handleChangeSubEstacao('longitude')}
                className="form-control" type="text" id="longitudeSubEstacao" />
            </div>
          </div>
        </div>
      </div>

      <div className="panel panel-primary div-titulo">
        <div className="panel-heading">
          <h1 className="panel-title">Rede MT</h1>
        </div>

        <div className="form-custom">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="codigoRedeMT">Código:</label>
            <div className="col-sm-4">
              <input
                onChange={handleChangeRede('codigo')}
                readOnly={redeStatus === 'updating'}
                value={redeAtiva.codigo || ''}
                className="form-control" type="text" id="codigoRedeMT" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="nomeRedeMT">Nome:</label>
            <div className="col-sm-10">
              <input
                value={redeAtiva.nome || ''}
                onChange={handleChangeRede('nome')}
                className="form-control" type="text" id="nomeRedeMT" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="tensaoRedeMT">Tensão Nominal:</label>
            <div className="col-sm-10">
              <input
                value={redeAtiva.tensao_nominal || ''}
                onChange={handleChangeRede('tensao_nominal')}
                className="form-control" type="text" id="tensaoRedeMT" />
            </div>
          </div>
          <div className="table-responsive table-principal">
            <table className="table table-striped table-bordered table-hover ">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nome</th>
                  <th className="text-center">Excluir</th>
                  <th className="text-center">Alterar</th>
                </tr>
              </thead>
              <tbody>
                {subEstacao.redesMt.map(rede => (
                  <tr key={rede.codigo}>
                    <td>{rede.codigo}</td>
                    <td>{rede.nome}</td>
                    <td className="text-center">
                      <span
                        onClick={() => handleRemoveRede(rede.codigo)}
                        className="action glyphicon glyphicon-trash" />
                    </td>
                    <td className="text-center">
                      <span
                        onClick={() => handleUpdateRede(rede)}
                        className="action glyphicon glyphicon-pencil" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {
              <button
                onClick={handleRedeUpsert}
                className="btn btn-primary pull-right">
                {redeStatus === 'updating' ? 'Atualizar' : 'Inserir'}
              </button>
            }
          </div>
        </div>
      </div>

      <footer role="group">
        <button type="submit" className="btn btn-primary pull-right">Efetivar operação</button>
        <button onClick={() => {
          window.location = '/'
        }} className="btn btn-primary pull-right botoes-oper">Voltar para listagem</button>

      </footer>
    </form>
  )
}