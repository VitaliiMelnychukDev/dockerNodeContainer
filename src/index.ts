import express from 'express';
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at port ${port}.`);
});
