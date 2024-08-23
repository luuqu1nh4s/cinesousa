import { consultarIdFilme } from "../../repository/filmeRepository.js";
import { validarFilmeUnico } from "../../validation/filme/filmeValidation.js";

export default async function consultarIdFilmeService(id){
    let registros = await consultarIdFilme(id);
    validarFilmeUnico(registros);

    let filme = registros[0];
    return filme;
}