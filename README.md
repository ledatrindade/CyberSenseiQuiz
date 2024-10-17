# Quiz de Cibersegurança - CyberSensei

## Descrição do Projeto
Este projeto foi desenvolvido como parte de um hackathon promovido pela **CyberSensei**. O desafio consistiu em criar uma página web interativa onde os usuários pudessem testar seus conhecimentos em **cibersegurança** e **privacidade de dados** por meio de um quiz. Após completarem o quiz, os usuários recebem uma pontuação, que é exibida junto com um **ranking** geral.

A página foi criada com foco em estar alinhada com o **layout** e a **identidade visual** da CyberSensei.

## Desafio Proposto
- Desenvolver uma página web onde os usuários podem participar de um quiz de cibersegurança e privacidade.
- Gerar uma pontuação com base nas respostas do quiz.
- Exibir um ranking com as pontuações mais altas dos usuários.
- Manter o design e a identidade visual da **CyberSensei**.

## Nossa Solução
Para implementar a solução, utilizamos as seguintes tecnologias:

- **HTML**: Estruturamos as perguntas do quiz e o conteúdo da página.
- **CSS**: Aplicamos um design responsivo e alinhado à identidade visual da **CyberSensei**, proporcionando uma experiência agradável ao usuário.
- **JavaScript**: Implementamos a lógica do quiz, manipulando as pontuações e gerando o ranking de forma dinâmica.

Os dados de pontuação e ranking são armazenados e manipulados em um arquivo **JSON**, garantindo uma experiência leve e interativa, onde os usuários podem visualizar suas pontuações imediatamente após concluírem o quiz.

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript
- JSON
                                                                                                                                                   
## Layout da Página Web
![Captura de tela 2024-10-17 165430](https://github.com/user-attachments/assets/1fc3635a-6020-49cd-ba9d-0e5691e8dfa7)

## Tratamento de Erro no Campo Nome
![Captura de tela 2024-10-17 170035](https://github.com/user-attachments/assets/55fe44f0-29e6-451e-be45-59973d2ff2bd)

Implementamos uma verificação para garantir que o usuário insira seu nome antes de iniciar o quiz. Caso o campo esteja vazio, o sistema exibe uma mensagem de alerta, orientando o usuário a preencher o nome antes de prosseguir.

## Estilo das Perguntas e Validação de Resposta
![Captura de tela 2024-10-17 170012](https://github.com/user-attachments/assets/654e5daa-4528-4959-aee1-46094a1ecfcc)

As perguntas são exibidas em um formato claro, com botões de múltipla escolha. Cada pergunta é acompanhada de um tratamento de erro que impede o usuário de seguir para a próxima questão sem marcar uma resposta. Além disso, uma mensagem de aviso é exibida lembrando o usuário de que, após passar para a próxima pergunta, não será possível voltar para alterar a resposta.

## Resultado e Ranking
![Captura de tela 2024-10-17 165331](https://github.com/user-attachments/assets/e190a15b-f32b-45bd-9faa-12bf1314a87b)

Após o término do quiz, o usuário é direcionado para uma página de resultados que exibe sua pontuação. Ao clicar no botão de "Ver meu lugar no Ranking", os resultados são apresentados em categorias inspiradas nas faixas de artes marciais. As pontuações baixas são representadas pela **faixa azul**, as médias pela **faixa roxa** e as altas pela **faixa preta**, proporcionando uma visualização clara do desempenho no quiz.


