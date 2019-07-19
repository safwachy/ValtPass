const { responseBody } = require('../helper/response');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const generateAuthToken = async (tokenPayload) => {
    const secret = process.env.SECRET;
    let options = { 
        expiresIn: '30 minutes'
    }
    try {
        let authToken = await jwt.sign(tokenPayload, secret, options);

        return authToken;
    } catch (error) {
        return error;
    }
};

module.exports = {
    generateAuthToken
};