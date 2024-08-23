import conn from './connection.js';

export async function salvarFilme(filme){
    let comando = `
        INSERT INTO tb_filme (nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
        VALUES (?, ?, ?, ?, ?)
    `

    let resposta = conn.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel]);
    let info = resposta[0];

    let idFilme = info.insertId;
    return idFilme;
}

export async function consultarFilmes(nome){
    let comando = `
        SELECT id_filme         id,
                nm_filme        nome,
                ds_sinopse      sinopse,
                vl_avaliacao    avaliacao,
                dt_lancamento   lancamento,
                bt_disponivel   disponivel,
                img_filme       img
        FROM tb_filme
        WHERE nm_filme LIKE ?
    `

    let resposta = await conn.query(comando, [`%${nome}%`]);
    let registros = resposta[0];
    
    return registros;
}

export async function consultarFilmePorNome(nome){
    let comando = `
        SELECT id_filme         id,
                nm_filme        nome,
                ds_sinopse      sinopse,
                vl_avaliacao    avaliacao,
                dt_lancamento   lancamento,
                bt_disponivel   disponivel,
                img_filme       img
        FROM tb_filme
        WHERE nm_filme LIKE ?
    `

    let resposta = await conn.query(comando, [nome]);
    let registros = resposta[0];
    
    return registros;
}

export async function consultarIdFilme(id){
    let comando = `
        SELECT id_filme         id,
                nm_filme        nome,
                ds_sinopse      sinopse,
                vl_avaliacao    avaliacao,
                dt_lancamento   lancamento,
                bt_disponivel   disponivel,
                img_filme       img
        FROM tb_filme
        WHERE id_filme = ?
    `

    let resposta = await conn.query(comando, [id]);
    let registros = resposta[0];
    
    return registros;
}