//import './utils/global.js'
import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import adicionarRotas from './router.js';

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

//Configura os Controllers
adicionarRotas(servidor);

const PORTA = process.env.PORTA
servidor.listen(PORTA, () => console.log (`A API subiu na porta ${PORTA}`));