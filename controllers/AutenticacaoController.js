import jwt from "jsonwebtoken";
import { isPasswordValid } from "../utils/hash";

export const login = async (req, res) => {

    const { email, senha } = req.body;

    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(401).json({ erro: "Email inválido." });
        }

        const senhaValida = isPasswordValid(senha, usuario.senha);

        if (!senhaValida) {
            return res.status(401).json({ erro: "Senha inválida." });
        }

        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, process.env.JWT_EXPIRES_IN);

        res.status(200).json({
            token,
            usuario: {
                id: usuario._id,
                nome: usuario.nome,
                email: usuario.email
            }
        });

    } catch (err) {
        return res.status(500).json({ erro: "Erro ao realizar login." });
    }
}
