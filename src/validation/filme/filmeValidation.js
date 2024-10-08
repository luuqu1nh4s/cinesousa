export function validarNovoFilme(filmeObj){
    if (!filmeObj.nome)
    throw new Error("O nome do filme é obrigatório!");

    if (!filmeObj.sinopse)
    throw new Error("A sinopse do filme é obrigatória!");

    if (!filmeObj.avaliacao)
    throw new Error("A avaliação do filme é obrigatória!");

    if (isNaN(filmeObj.avaliacao))
    throw new Error("Avaliação inválida!");

    if (!filmeObj.lancamento)
    throw new Error("A data de lançamento do filme é obrigatória!");

    if (filmeObj.disponivel == undefined)
    throw new Error("A disponibilidade do filme é obrigatória!");
}

export function validarFilmeUnico(registros){
    if (registros.length == 0)
    throw new Error("Filme não encontrado.");
}

export function validarFilmeIgual(registros){
    if (registros.length > 0)
    throw new Error("Já existe um filme de mesmo nome cadastrado.");
}