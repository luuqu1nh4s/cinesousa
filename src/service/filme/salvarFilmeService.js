import { salvarFilme } from "../../repository/filmeRepository";
import { validarNovoFilme } from "../../validation/filme/filmeValidation";

export default async function salvarFilmeService(filmeObj){
    validarNovoFilme(filmeObj)
    
    let id = await salvarFilme(filmeObj);
    return id;
}