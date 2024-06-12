import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('');
});

app.listen(3001, () => {
  console.log('Firebase service running on port 3001');
});
