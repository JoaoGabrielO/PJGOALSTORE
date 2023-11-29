import 'dotenv/config';
import express from "express";
import cors from 'cors';

import camisaController from './controller/camisaController.js';


const servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(camisaController);

servidor.use('/storage', express.static('./storage'));

const port = process.env.PORT;
servidor.listen(port, () => console.log(`API subiu na porta ${port}`));