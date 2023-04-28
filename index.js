import { locations } from './locationObjects.js'
import { locationsArray } from './locationObjects.js'
const PORT = process.env.PORT || 8005;
import express from 'express'
import cors from 'cors'
import axios from "axios"
import nodemailer from "nodemailer"
import dotenv from 'dotenv'
import serverless from 'ServerlessHttp'
import ServerlessHttp from 'serverless-http';

dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));


app.get('/something', (req, res) => {
    // GET / route handler
    res.json(
        locations
    );
});