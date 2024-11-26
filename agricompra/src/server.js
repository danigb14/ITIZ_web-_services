const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(cors());

// Configuración de la base de datos
const config = {
  user: 'agricompra', // tu usuario
  password: 'axo2024.', // tu contraseña
  server: 'agricompra.database.windows.net', // nombre del servidor
  database: 'Productos', // nombre de la base de datos
  options: {
    encrypt: true, // para conexiones seguras
    trustServerCertificate: false, // importante para la seguridad, generalmente "false" si el servidor tiene un certificado oficial
    connectionTimeout: 30000, // tiempo de espera en milisegundos
    requestTimeout: 30000, // tiempo de espera de la solicitud
    port: 1433, // el puerto por defecto para SQL Server
    driver: 'ODBC Driver 18 for SQL Server', // especificamos el driver ODBC adecuado
  }
};

sql.connect(config).then(pool => {
  // Si la conexión es exitosa
  console.log('Connected to Azure SQL Database');

  // Ruta para obtener los productos desde la base de datos
  app.get('/api/productos', async (req, res) => {
    try {
      const result = await pool.request().query('SELECT * FROM Productos');
      res.json(result.recordset); // Enviar los productos al frontend
    } catch (err) {
      res.status(500).send('Error en la consulta: ' + err.message);
    }
  });

  // Ruta para verificar la conexión a la base de datos
  app.get('/api/check-connection', async (req, res) => {
    try {
      await pool.request().query('SELECT 1'); // Comprobamos si la base de datos responde
      res.send('Database connection is successful');
    } catch (err) {
      res.status(500).send('Database connection failed: ' + err.message);
    }
  });

}).catch(err => {
  // Si la conexión falla
  console.error('Database connection failed:', err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
