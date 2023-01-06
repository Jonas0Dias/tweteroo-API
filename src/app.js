import express, { response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send('testando abertura do servidor pelo navegador')
})

app.listen(4000, () => {console.log('teste')});
