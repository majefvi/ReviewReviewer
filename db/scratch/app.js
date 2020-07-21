const mongodb = require('mongodb');
const connection = mysql.createConnection({
  host: '127.0.0.1', //local comp ip address 
  user: 'vince',
  password: 'ABC123',
  database: 'amazonreviews'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to mongodb');
});