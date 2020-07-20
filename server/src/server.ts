import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Howdy wurld.');
});

app.listen(5000, () => console.log('Look out! The server be runnin'));
