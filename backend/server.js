import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import {connectToSupabse} from './config/db.js'

dotenv.config();
//importing routes


// Connecting Database
connectToSupabse();

const app= express()

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

app.use(express.json());
// enables cors
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
