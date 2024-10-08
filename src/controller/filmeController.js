import salvarFilmeService from "../service/filme/salvarFilmeService.js";
import consultarFilmesService from "../service/filme/consultarFilmesService.js";
import consultarIdFilmeService from "../service/filme/consultarIdFilmeService.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post('/filme', async (req, resp) => {
    try{
        let filmeObj = req.body;
        let id = await salvarFilmeService(filmeObj)

        resp.send({
            id: id
        })
    }
    catch(err){
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
    
})

endpoints.get('/filme', async (req, resp) => {
    try {
        let nome = req.query.nome;
        let registros =  await consultarFilmesService(nome);

        resp.send(registros);
    } 
    catch(err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

endpoints.get ('/filme/:id', async(req,resp) => {
    try {
        let id = req.params.id;
        let filme = await consultarIdFilmeService(id);

        resp.send(filme);
    } 
    catch(err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

export default endpoints;