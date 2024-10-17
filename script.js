const quizQuestions = [
    { question: "Como os métodos de phishing, vishing e smishing diferem em suas abordagens e impactos na segurança dos dados pessoais?", options: ["Envolvem fraudes em ambientes de relacionamentos online, visando enganar usuários a compartilhar informações pessoais.", "Representam técnicas de engenharia social que visam roubar informações pessoais através de canais específicos: e-mails (phishing), chamadas telefônicas (vishing) e mensagens de texto (smishing).", "Referem-se a softwares maliciosos que atuam disfarçados em dispositivos, coletando dados sem o conhecimento do usuário."], answer: 1 },
    { question: "O que caracteriza um ataque de formjacking e como ele compromete a integridade dos dados do usuário?", options: ["Envolve o uso de engenharia social para roubar informações pessoais através de fraudes em sites conhecidos.", "É um método de criptografia que visa proteger dados durante a transmissão online.", "Consiste na inserção de código malicioso em formulários de sites legítimos, redirecionando dados sensíveis para os atacantes ao invés de para o servidor correto."], answer: 2 },
    { question: "Qual é a definição abrangente de malware e quais são seus principais impactos na segurança da informação?", options: ["Termo que abrange todos os tipos de software projetados para causar danos, roubar dados ou comprometer sistemas, frequentemente distribuído via e-mails, downloads ou vulnerabilidades.", "Aplicações que utilizam inteligência artificial para manipular dados visuais com intenção maliciosa.", "Métodos de backup de dados que garantem a segurança contra a perda de informações."], answer: 0 },
    { question: "De que maneira o ransomware opera e quais são as implicações para indivíduos e organizações?", options: ["Representa software que se disfarça de aplicações legítimas, prejudicando o funcionamento de sistemas.", "Refere-se a programas que se replicam, causando infecções em cadeia em sistemas.", "Trata-se de um tipo específico de malware que criptografa os dados do usuário, exigindo um pagamento para a liberação das informações."], answer: 2 },
    { question: "Como funciona a técnica de keylogging e quais são as formas mais comuns de sua implementação em dispositivos?", options: ["Ataque cibernético que resulta na interrupção do acesso à rede, tornando sistemas indisponíveis.", "Método de espionagem que utiliza software ou hardware para registrar as teclas pressionadas, frequentemente instalado por meio de malware ou phishing.", "Estratégia que envolve o envio de e-mails com links maliciosos que comprometem a segurança do usuário."], answer: 1 },
    { question: "Qual é a função de um firewall na proteção de redes e quais tipos existem?", options: ["Ferramenta para criptografar informações sensíveis e protegê-las contra acesso não autorizado.", "Sistema de segurança que monitora e controla o tráfego de entrada e saída em uma rede, podendo ser implementado como hardware ou software.", "Software que se disfarça como parte de aplicativos legítimos, causando danos invisíveis."], answer: 1 },
    { question: "O que constitui uma botnet e como os cibercriminosos a utilizam para executar ataques em larga escala?", options: ["Rede segura de dispositivos que operam em conjunto para proteger dados.", "Conjunto de dispositivos infectados que podem ser controlados remotamente por um atacante, permitindo a execução de ataques coordenados.", "Aplicativo de segurança que protege sistemas contra malware e fraudes."], answer: 1 },
    { question: "Como a engenharia social se difere de métodos técnicos em ataques cibernéticos, e qual é seu impacto na segurança das informações?", options: ["Técnica de manipulação que explora a psicologia humana para enganar indivíduos a divulgar informações confidenciais.", "Sistema que utiliza algoritmos complexos para proteção de dados sensíveis.", "Abordagem que envolve o uso de malware para danificar sistemas."], answer: 0 },
    { question: "Quais são as principais características de um ataque de phishing avançado (spear phishing) em comparação com o phishing genérico?", options: ["Spear phishing é direcionado a um grupo amplo de pessoas, enquanto phishing genérico é mais específico e personalizado.", "Spear phishing é um ataque direcionado a indivíduos ou organizações específicas, utilizando informações pessoais para aumentar a credibilidade do ataque.", "Spear phishing é um ataque que não utiliza e-mails, mas apenas chamadas telefônicas."], answer: 1 },
    { question: "Como os ataques de DDoS (Distributed Denial of Service) impactam a operação de serviços online, e quais são as estratégias comuns para mitigá-los?", options: ["Esses ataques visam infectar sistemas com malware, tornando-os inoperantes.", "Ataques DDoS normalmente se concentram em roubar informações confidenciais de usuários.", "Eles sobrecarregam um serviço online com tráfego excessivo, tornando-o inacessível; estratégias de mitigação incluem balanceamento de carga e serviços de proteção DDoS."], answer: 2 }
];
let currentQuestionIndex = 0;
        let score = 0;

        document.getElementById('startQuiz').addEventListener('click', () => {
            const nameInput = document.getElementById('name').value;
            if (!nameInput) {
                document.getElementById('nameWarning').style.display = 'block';
                return;
            }
            document.getElementById('nameWarning').style.display = 'none';
            document.getElementById('nameInput').style.display = 'none';
            document.getElementById('quizContainer').style.display = 'block';
            document.getElementById('nextQuestion').style.display = 'block';
            loadQuiz();
        });

        function loadQuiz() {
            const quizContainer = document.getElementById('quizContainer');
            quizContainer.innerHTML = '';
            const q = quizQuestions[currentQuestionIndex];
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.innerHTML = `
                <p class="warning">Após clicar em "Próxima Pergunta", você não poderá voltar às questões. Preste atenção!</p>
                <p>${currentQuestionIndex + 1}. ${q.question}</p>`;
            q.options.forEach((option, i) => {
                questionElement.innerHTML += `<label><input type="radio" name="q${currentQuestionIndex}" value="${i}"> ${option}</label>`;
            });
            quizContainer.appendChild(questionElement);
        }

        document.getElementById('nextQuestion').addEventListener('click', () => {
            const selected = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);
            if (!selected) {
                document.getElementById('warningMessage').style.display = 'block';
                return;
            }

            document.getElementById('warningMessage').style.display = 'none';
            if (parseInt(selected.value) === quizQuestions[currentQuestionIndex].answer) {
                score++;
            }
            currentQuestionIndex++;

            if (currentQuestionIndex < quizQuestions.length) {
                loadQuiz();
            } else {
                displayResult();
            }
        });

        function displayResult() {
            const name = document.getElementById('name').value;
            saveScore(name, score);
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `<h2>${name}, sua pontuação é: ${score} de ${quizQuestions.length}</h2>`;
            resultDiv.className = score >= 8 ? 'black' : (score >= 5 ? 'purple' : 'blue');
            resultDiv.style.display = 'block';
            document.getElementById('nextQuestion').style.display = 'none';
            document.getElementById('showRanking').style.display = 'block';
            document.getElementById('quizContainer').style.display = 'none'; 
        }

        function saveScore(name, score) {
            let rankings = JSON.parse(localStorage.getItem('rankings')) || [];
            rankings.push({ name, score });
            rankings.sort((a, b) => b.score - a.score);
            localStorage.setItem('rankings', JSON.stringify(rankings));
        }

        document.getElementById('showRanking').addEventListener('click', displayRanking);

        function displayRanking() {
            const rankingDiv = document.getElementById('ranking');
            const rankingList = document.getElementById('rankingList');
            rankingList.innerHTML = ''; 
            const rankings = JSON.parse(localStorage.getItem('rankings')) || [];
            rankings.forEach(entry => {
                const listItem = document.createElement('li');
                
                if (entry.score >= 8) {
                    listItem.className = 'black';
                } else if (entry.score >= 5) {
                    listItem.className = 'purple';
                } else {
                    listItem.className = 'blue';
                }
                listItem.textContent = `${entry.name}: ${entry.score}`;
                rankingList.appendChild(listItem);
            });
            rankingDiv.style.display = 'block';
        }