# Criar estudo Análise Ergonômica

> ## sucesso:
1. ⛔️ Recebe uma requisição do tipo **POST** na rota **/api/estudo-aet**
1. ⛔️ Valida se a questionário de análise ergonômica foi feita por um admin
1. ⛔️ Valida dados obrigatórios **pergunta** e **resposta**
1. ⛔️ Cria uma pesquisa com os dados fornecidos
1. ⛔️ Retorna 200 com os dados da pesquisa
> ## Exceções:
1. ⛔️ Retorna erro 404 se a API não existir
1. ⛔️ Retorna erro 403 se o usuário não for admin
1. ⛔️ Retorna erro 400 se **pergunta** ou **resposta** não forem fornecidos pelo client
1. ⛔️ Retorna erro 500 se der erro ao tentar criar a estudo-aet

Definições básicas: 
AET: Analise Ergonômica do Trabalho;
Ergonômica: É uma ciência que busca entender a relação do homem com as condições de trabalho, estabelecendo normas para melhorar esse relacionamento. 
 