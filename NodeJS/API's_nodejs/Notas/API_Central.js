// Importação
import Alunos from "./Dados/Lista_Escola1.js";
import express from "express"
import resultado from "./Dados/NotaMedia_resultado.js";

const API = express();

// conteudo a ser exibido na pag '/' para o usuário
API.get('/', (requisica, resposta) => {
    resposta.send(Alunos);
});

// Pagina onde está a lista total da media dos alunos da  escola1
API.get('/NotaMedia', (requisicao, resposta) => {
    resposta.send(resultado)
});

// Faz com que a aplicação backend express funcione em um navegador
API.listen(2000, () => console.log("Servidor em execuçãoo no host: localhost:2000"));