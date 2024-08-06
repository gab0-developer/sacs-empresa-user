const express = require('express'); //obtenemos el modulo express
const app = express() //Inicializar express
const puerto = 5173;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: import.meta.env.VITE_API_KEY,
  apiSecret: import.meta.env.VITE_API_SECRET
})


app.post('/send-sms', (req, res) => {
  //req: datos del cliente
  // res: respuesta de la api al ejecutar la funcion 

  const to = req.body.to;
  const text = 'Mensaje de prueba \n. Programador Gabriel Rincon desde Farmacia Alto Costo *prueba*';

  vonage.sms.send({ to, from: 'Farmacia Alto Costo', text })
    .then(resp => {
      console.log('Mensaje enviado con éxito');
      console.log(resp);
      // res.send('Mensaje enviado con éxito');
    })
    .catch(err => {
      console.log('Hubo un error al enviar el mensaje.');
      console.error(err);
      // res.status(500).send('Hubo un error al enviar el mensaje.');
    });
});

app.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
