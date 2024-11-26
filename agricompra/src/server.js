const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(cors());

const config = {
  user: 'agricompra',
  password: 'axo2024.',
  server: 'agricompra.database.windows.net',
  database: 'Productos',
  options: {
    encrypt: true,
    enableArithAbort: true
  }
};

sql.connect(config).then(pool => {
  if (pool.connected) {
    console.log('Connected to Azure SQL Database');
  }

  app.get('/api/productos', async (req, res) => {
    try {
      const result = await pool.request().query('SELECT * FROM Productos');
      res.json(result.recordset);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  app.get('/api/check-connection', async (req, res) => {
    try {
      await pool.request().query('SELECT 1');
      res.send('Database connection is successful');
    } catch (err) {
      res.status(500).send('Database connection failed: ' + err.message);
    }
  });

}).catch(err => {
  console.error('Database connection failed:', err);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});