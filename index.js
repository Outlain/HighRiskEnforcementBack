import { locations } from './locationObjects.js'
import { locationsArray } from './locationObjects.js'
const PORT = process.env.PORT || 8005;
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));


app.get('/', (req, res) => {
    // GET / route handler
    res.json(
        locations
    );
});