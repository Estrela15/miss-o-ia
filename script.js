const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A harpia (também conhecida como gavião-real) é uma das aves de rapina mais impressionantes do mundo. Sua força e tamanho a tornam uma predadora de topo de cadeia, e há muitas curiosidades sobre ela.",
        alternativas: [
            {
                texto: "isso é chato",
                afirmacao: "Parece desinterresante. "
            },
            {
                texto: "Que interressante!",
                afirmacao: "Quis saber sobre a harpia."
            }
        ]
    },
    {
        enunciado: "A perda de seu habitat natural é a maior ameaça. As harpias precisam de vastas áreas de florestas contínuas para caçar e se reproduzir. Com o desmatamento, as florestas se fragmentam, e a ave perde não só seu lar, mas também a sua fonte de alimento, como preguiças e macacos.?",
        alternativas: [
            {
                texto: "Denuncie crimes ambientais: Se presenciar caça ilegal ou desmatamento, avise os órgãos competentes, como o Ibama.",
                afirmacao: "Quero ajudar com a causa."
            },
            {
                texto: "Acabar de vez com a especie, não é problema meu.",
                afirmacao: "Não me interresso por esse assunto e não me importo com o que vai acontecer com a espécie."
            }
        ]
    },
    {
        enunciado: "Símbolo nacional: A harpia é a ave nacional do Panamá e estampa o brasão de armas do país.",
        alternativas: [
            {
                texto: "Por esse motivo seria bom conservar a especie e protege-la de ameaças de estinção, pois ela representa nosso país.",
                afirmacao: "acho muito importante proteger a espécie, é uma grande representante do país."
            },
            {
                texto: "É antigo, tem que mudar mesmo. Me importo mais com outras espécies",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "A principal função da harpia é atuar como um controlador natural de outras espécies. Sua dieta é composta por animais que vivem nas árvores, como preguiças, macacos e quatis. Ao caçar esses animais, a harpia ajuda a manter suas populações sob controle, o que evita que eles se multipliquem em excesso e causem danos à vegetação.",
        alternativas: [
            {
                texto: "É uma espécie muito importante, deve ser valorizada e conservada a todo custo, não podemos perder esta ave tão importante e representativa para o país.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Temos outras aves que são mais importantes, uma a menos não vai fazer falta.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Existem vários projetos e iniciativas dedicados à proteção da harpia. O Projeto Harpia, por exemplo, trabalha na pesquisa e monitoramento da espécie em diversas regiões do Brasil. Eles colaboram com comunidades locais para educar sobre a importância da ave e também promovem ações de manejo e reintrodução em cativeiro para tentar restaurar as populações. O trabalho de conservação inclui também a reabilitação de aves feridas e a criação de programas para proteger ninhos. A conservação da harpia é fundamental para manter o equilíbrio de ecossistemas florestais, e o sucesso desses esforços depende da conscientização e do apoio de toda a sociedade. ",
        alternativas: [
            {
                texto: "A harpia é a maior representação do nosso país e é nosso dever como nação proteger elas e ajudar na causa contra a extinção desses animal magnífico.",
                afirmacao: "A harpia é a maior representação do nosso país e é nosso dever como nação proteger elas e ajudar na causa contra a extinção desses animal magnífico."
            },
            {
                texto: "Realmente, a harpia foi um animal representativo para o nosso país , porém não acho que devemos nos preocupar tanto com algo do passado, precisamos nos de progresso e utilizar coisas mais atuais como símbolo da nossa nação.",
                afirmacao: "Realmente, a harpia foi um animal representativo para o nosso país , porém não acho que devemos nos preocupar tanto com algo do passado, precisamos nos de progresso e utilizar coisas mais atuais como símbolo da nossa nação. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();