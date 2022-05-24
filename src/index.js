import "dotenv/config"
import {dobro, somar} from './services.js'

import express from "express"
import cors from "cors"

const server = express();
server.use(cors());
server.use(express.json());

server.get('/ping', (req,resp) => {
    resp.send('pong');
})

server.get('/dobro/:numero', (req,resp) =>
{
const numero = Number(req.params.numero);

const d = dobro(numero);
resp.send({
    dobro:d
});

})

server.get('/somar', (req, resp) => {
    const a = Number(req.query. a);
    const b = Number(req.query.b);

    const s = somar(a, b);    

    resp.send({
        soma:s
    });
})

server.post('/somar', (req, resp) => {
        try{
        const { valores: {a, b}} = req.body;

            const x = somar(a, b);
            
        resp.send({
            soma: x
        })
    } catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.listen(process.env.PORT,
              () => console.log(`API esta online na porta ${process.env.PORT}`));