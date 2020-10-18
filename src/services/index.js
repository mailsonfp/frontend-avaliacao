const BASE_API = 'http://localhost:8080';

async function getByUrl(url) {
  const response = await fetch(url);
  return await response.json();
}

export async function getSubEstacoes() {
  return await getByUrl(`${BASE_API}/subestacoes`);
}

export async function removeSubEstacao(codigo) {
  const response = await fetch(`${BASE_API}/subestacoes/${codigo}`, {
    method: 'DELETE'
  });

  return response.status === 204;
}

export async function getSubEstacao(codigo) {
  return await getByUrl(`${BASE_API}/subestacoes/${codigo}`);
}

export async function updateSubEstacao(subEstacao) {
  const response = await fetch(`${BASE_API}/subestacoes/${subEstacao.codigo}`, {
    method: 'PUT',
    body: JSON.stringify(subEstacao),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response.status === 204;
}

export async function insertSubEstacao(subEstacao) {
  const response = await fetch(`${BASE_API}/subestacoes`, {
    method: 'POST',
    body: JSON.stringify(subEstacao),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response.status === 201;
}