import router from './routes/Router.js';
import express from 'express';

const PORT = 8000;
const app = express();

app.use('/', router);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});