import router from './routes/Router.js';
import express from 'express';
import path from 'path';

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __dirname = path.resolve(); 
app.use(express.static(path.join(__dirname, 'public'))); 

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});