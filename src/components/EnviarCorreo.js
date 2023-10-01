const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function EnviarCorreo(destinatario,asunto,cuerpo) {

const msg = {
  to: destinatario,
  from: 'uapapasantia@outlook.com',
  subject: 'asunto',
  text: cuerpo,
  html: '<p>Cuerpo del correo en formato HTML</p>',
};
}


//     const transporter = nodemailer.createTransport({
//       host: 'smtp-mail.outlook.com',
//       port: 587, // Puerto TLS
//       secure: false, // false para TLS; true para SSL
//       auth: {
//         user: 'uapapasantia@outlook.com',
//         pass: 'qwertyuiop123',
//       },
//     });


//     const mailOptions = {
//       from: 'uapapasantia@outlook.com',
//       to: destinatario,   
//       subject: asunto,
//       text: cuerpo
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error al enviar el correo:', error);
//       } else {
//         console.log('Correo enviado con éxito:', info.response);
//       }
//     });
// }

module.exports = EnviarCorreo;