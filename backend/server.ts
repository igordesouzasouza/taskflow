import express from 'express';
import { createServer } from 'http';


const app = express();
const server = createServer(app);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
