import express from 'express';
import baseRouter from './routes/index.js';

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/api", baseRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
