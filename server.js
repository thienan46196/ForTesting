import express from 'express';

const app = express();

//url encoded config
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/vm1', (req, res, next) => {
  res.send('vm1');
});

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const port = 1234;
app.listen(port, () => {
  console.log('app is listening at', port);
});

export default app;
