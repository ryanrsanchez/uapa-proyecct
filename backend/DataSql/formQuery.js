const express = require('express');
const datosConexion  = require('../credentials');
const router = express.Router();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const { route } = require('./employeesQuery');
const multer = require('multer');

//Manejar solicitudes Json
router.use(bodyParser.json());
// Configura la conexión a la base de datos MySQL
const db = mysql.createConnection(datosConexion);
router.use(express.urlencoded({extended:false}));
router.use(express.json());


router.get('/solicitude', (req, res) => {
    const sql = 'SELECT * FROM clientesVista';
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al ejecutar la consulta: ' + err);
        res.status(500).json({ error: 'Error al obtener datos' });
        return;
      }
      res.json(result);
    });
  });

  router.post('/insert-solicitude', (req, res) => {
    const cliente = req.body;
    console.log(cliente);
  
    // Realiza una inserción en la base de datos
    const sql = 'INSERT INTO personas (id_persona,codigo,tipo,nombres,apellidos,cedula,rnc,email,celular,celular2,sexo,tipo_comprobante,categoria,direccion,precio,referencia,tel_ref) VALUES (?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?)';
  
    db.query(sql, [cliente.id_persona,cliente.codigo,cliente.tipo,cliente.nombres,cliente.apellidos,cliente.cedula,cliente.rnc,cliente.email,cliente.celular,cliente.celular2,cliente.sexo,cliente.tipo_comprobante,cliente.categoria,cliente.direccion,cliente.precio,cliente.referencia,cliente.tel_ref], (err, result) => {
      if (err) {
        console.error('Error al insertar en la base de datos:', err);
        res.status(500).json({ error: 'Error al insertar datos' });
        return;
      }
      res.json({ message: 'Cliente agregado con éxito' });
    });
  });

  router.post('/update-solicitude', (req, res) => {
    const cliente = req.body;

    const sql = 'UPDATE articulos SET codigo=?,tipo=?,nombres=?,apellidos=?,cedula=?,rnc=?,email=?,celular=?,celular2=?,sexo=?,tipo_comprobante=?,categoria=?,direccion=?,precio=?,referencia=?,tel_ref=? where id_persona=?';

    const values=[cliente.id_persona,cliente.codigo,cliente.tipo,cliente.nombres,cliente.apellidos,cliente.cedula,cliente.rnc,cliente.email,cliente.celular,cliente.celular2,cliente.sexo,cliente.tipo_comprobante,cliente.categoria,cliente.direccion,cliente.precio,cliente.referencia,cliente.tel_ref];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar en la base de datos:', err);
        res.status(500).json({ error: 'Error al insertar datos' });
        return;
      }
      res.json({ message: 'Producto agregado con éxito' });
    });
  });
  

  module.exports = router;


  const handleFormSubmit = () => {
    console.log(product);
    axios.post('http://localhost:3001/insert-products',product, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
      .then((response) => {
        console.log(response.data);
        //setIsOpen(false); // Cierra el modal después de agregar el producto
      })
      .catch((error) => {
        console.error('Error al enviar el formulario:', error);
      });
  }