import { salvarFilme, consultarFilmePorNome } from "../../repository/filmeRepository";
import { validarNovoFilme, validarFilmeIgual } from "../../validation/filme/filmeValidation";

export default async function salvarFilmeService(filmeObj){
    //Validação
    validarNovoFilme(filmeObj);

    //Busca de Filmes Com o Mesmo nome
    let registros = await consultarFilmePorNome(filmeObj.nome);
    //Validação de Filmes Iguais
    validarFilmeIgual(registros);
    
    //Lógica de Negócio
    let id = await salvarFilme(filmeObj);
    return id;
}