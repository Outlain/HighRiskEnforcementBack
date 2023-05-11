import { locations } from './locationObjects.js'
import { locationsArray } from './locationObjects.js'
import { WestPalmBeach, Pompano, Orlando, Riviera, DaniaBeach, Daytona, FortLauderdale, FortPierce, Gainsville, Miami, Ocala, PalmBay, Pinellas, Plantation, Sanford, Tallahassee, WestBoca } from './locationObjects.js'
import { allSites } from './locationObjects.js'

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

app.get('/WestPalmBeach', (req, res) => {
    res.json(WestPalmBeach);
});

app.get('/pompano', (req, res) => {
    res.json(Pompano);
});

app.get('/Orlando', (req, res) => {
    res.json(Orlando);
});

app.get('/Riviera', (req, res) => {
    res.json(Riviera);
});

app.get('/DaniaBeach', (req, res) => {
    res.json(DaniaBeach);
});

app.get('/Daytona', (req, res) => {
    res.json(Daytona);
});

app.get('/FortLauderdale', (req, res) => {
    res.json(FortLauderdale);
});

app.get('/FortPierce', (req, res) => {
    res.json(FortPierce);
});

app.get('/Gainesville', (req, res) => {
    res.json(Gainesville);
});

app.get('/Miami', (req, res) => {
    res.json(Miami);
});

app.get('/Ocala', (req, res) => {
    res.json(Ocala);
});

app.get('/PalmBay', (req, res) => {
    res.json(PalmBay);
});

app.get('/Pinellas', (req, res) => {
    res.json(Pinellas);
});

app.get('/Plantation', (req, res) => {
    res.json(Plantation);
});

app.get('/Sanford', (req, res) => {
    res.json(Sanford);
});

app.get('/Tallahassee', (req, res) => {
    res.json(Tallahassee);
});

app.get('/WestBoca', (req, res) => {
    res.json(WestBoca);
});

app.get('/allSites', (req, res) => {
    res.json(allSites);
});