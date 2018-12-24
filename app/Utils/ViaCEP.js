const axios = require('axios');

async function getAddress({ address }) {
  let newAdress = null;
  const response = await axios.get(`https://viacep.com.br/ws/${address.cep}/json/`);
  const { data } = response;

  newAdress = address;

  if (data.localidade !== '') newAdress.city = data.localidade;
  if (data.bairro !== '') newAdress.neighborhood = data.bairro;
  if (data.uf !== '') newAdress.state = data.uf;
  if (data.logradouro !== '') newAdress.street = data.logradouro;

  return newAdress;
}

module.exports = { getAddress };
