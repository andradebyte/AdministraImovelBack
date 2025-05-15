const jwt = require('jsonwebtoken');

export const gerarToken = (usuarioID) => {
    return jwt.sign({ id: usuarioID }, process.env.JWT_SECRET, process.env.JWT_EXPIRES_IN);
}
