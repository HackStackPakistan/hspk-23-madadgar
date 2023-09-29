import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'

dotenv.config();
//importing routes
import authRouter from './routes/auth/authRoutes.js'

// Connecting Database

const app= express()

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

app.use(express.json());
// enables cors
app.use(cors());

app.use("/api/auth",authRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
