import { salvarFilme } from "../../repository/filmeRepository";

export default async function salvarFilmeService(filmeObj){
    let id = await salvarFilme(filmeObj);
    return id;
}