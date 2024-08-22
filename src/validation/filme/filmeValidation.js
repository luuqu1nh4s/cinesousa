

export function validarNovoFilme(filmeObj){
    if (!filmeObj.nome)
    throw new Error("O nome do filme é obrigatório!")
}