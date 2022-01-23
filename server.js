import express from "express";
import dotenv from 'dotenv';
import { sendMail } from './sendMail.js'
const app = express();
app.use(express.json());
dotenv.config();

app.get('/', (req, res, next) => {
    res.json({ message: "hello world" });
});

app.post('/mail', sendMail)

app.listen(process.env.PORT, () => {
    console.log(`server working on the http://localhost:${process.env.PORT}`);
});