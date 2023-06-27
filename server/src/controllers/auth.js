const { gerarHash, criarToken } = require("../auth")
const Usuario = require("../models/Usuario")

module.exports = class AuthController {
  static async register(req, res) {
    const { body } = req
    if (!body.nome || !body.email || !body.senha) {
      return res.status(400).json({
        erro: 'Alguns dados estão faltando!'
      })
    }

    const userWithEmail = await Usuario.findUnique({ email: body.email })

    if (userWithEmail) {
      return res.status(400).json({
        erro: 'Esse email já está em uso!'
      })
    }

    const hash = gerarHash(body.senha)

    const usuario = await Usuario.create({
      nome: body.nome,
      email: body.email,
      senhaHash: hash
    })

    res.json({
      usuario,
      token: await criarToken(usuario.id)
    })
  }
}