const jwt = require('jsonwebtoken');
const auth = require('../token.json');

const bcryptjs = require('bcryptjs');

const jwtToken = auth['auth-token']

async function criarToken(userId) {
  const token = await jwt.sign({ userId }, jwtToken, {
    expiresIn: 3600 // Expira em 3600 segundos ou 1 hora.
  });
  return token
}

async function gerarHash(senha) {
  bcryptjs.hash(senha, 10);
}

function autorizar(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ error: 'O token não foi enviado!' });
  }

  const partes = authHeader.split(' ');

  if (partes && partes.length !== 2) {
    return res.status(401).send({ error: 'Token incompleto!' });
  }

  const [tipo, token] = partes;

  if (!/^Bearer$/i.test(tipo)) {
    return res.status(401).send({ error: 'Token mal formado!' });
  }

  jwt.verify(token, jwtToken, (err, usuario) => {
    if (err) {
      return res.status(401).send({ error: 'Token inválido!' });
    }
    req.userId = usuario.userId;
    return next();
  });
}

module.exports = {
  gerarHash,
  incluirToken,
  autorizar
};