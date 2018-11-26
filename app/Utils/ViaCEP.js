const axios = require('axios');

async function getAddress({ address }) {

    const response = await axios.get('https://viacep.com.br/ws/' + address.cep + '/json/');

    let data = response.data;

    if (data.localidade !== '') address.city = data.localidade;
    if (data.bairro !== '') address.neighborhood = data.bairro;
    if (data.uf !== '') address.state = data.uf;
    if (data.logradouro !== '') address.street = data.logradouro;

    return address;
}

module.exports = { getAddress };