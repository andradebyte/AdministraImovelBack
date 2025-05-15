import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function sendmail(email) {

    const caminhoHtml = path.join(__dirname, '../email/resetSenha.html');
    const html = fs.readFileSync(caminhoHtml, 'utf-8');

    // Configure o transporte com os dados do seu serviço de e-mail
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // use true para a porta 465
        auth: {
            user: process.env.MAIL_AUTH_USER,
            pass: process.env.MAIL_AUTH_PASS
        }
    });

    // Defina os detalhes do e-mail
    let mailOptions = {
        from: '"Administra Imovel" <no-reply@gmail.com.br>',
        to: `${email}`,
        subject: 'Administra Imovel: Resetar Senha.', // Assunto
        text: '', // conteúdo em texto puro
        html: html// se desejar enviar em HTML
    };

    // Envie o e-mail
    let info = await transporter.sendMail(mailOptions);
    console.log('E-mail enviado: ' + info.response);
}

