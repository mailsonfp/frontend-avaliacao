import React, { useState } from 'react';
import { insertSubEstacao } from '../../services';
import { SubEstacaoForm } from '../../components/subestacao-form/subestacao-form';
import { Cabecalho } from '../../components/cabecalho/cabecalho';

export function Incluir() {
  const [subEstacao, setSubEstacao] = useState({ redesMt: [] });

  function handleSubmit(event) {
    event.preventDefault();
    insertSubEstacao(subEstacao);
  }

  return (
    <div className="container">
      <Cabecalho />
      <SubEstacaoForm
        onSubmit={handleSubmit}
        subEstacao={subEstacao}
        setSubEstacao={setSubEstacao}
        mode='inserting' />
    </div>
  );
}