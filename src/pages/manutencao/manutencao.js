import React, { useEffect, useState } from 'react';
import { getSubEstacao, updateSubEstacao } from '../../services';
import { SubEstacaoForm } from '../../components/subestacao-form/subestacao-form';
import { Cabecalho } from '../../components/cabecalho';

export function Manutencao(props) {
  const codigo = props.match.params.codigo;
  const [subEstacao, setSubEstacao] = useState({ redesMt: [] });

  function handleSubmit(event) {
    event.preventDefault();
    updateSubEstacao(subEstacao);
  }

  useEffect(() => {
    async function getData() {
      const subestacao = await getSubEstacao(codigo);
      setSubEstacao(subestacao);
    }
    getData();
  }, []);

  return (
    <div className="container">
      <Cabecalho />
      <SubEstacaoForm
        onSubmit={handleSubmit}
        subEstacao={subEstacao}
        setSubEstacao={setSubEstacao}
        mode='updating' />
    </div>
  );
}