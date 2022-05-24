var story = 0;
var form = document.getElementById('aventura');
var submit = document.getElementById('botaoContinuar');
var reset = document.getElementById('botaoReset');
var resposta = '';

var story_telling = {
    "start":{
        "questao":"Você se prepara para uma nova aventura, onde você gostaria de ir?",
        "resposta":{
            "a":"Floresta dos elfos",
            "b":"Caverna da bruxa Ágata",
            "c":"Montanha do troll",
        }
    },

    //Caminho da floresta
    "1_a":{
        "questao": "Você decide ir até a floresta, ao fim de um dia de caminhada você avista uma fada. O que você faz?",
        "resposta": {
            "a": "Pergunta se ela quer te acompanhar em sua aventura.",
            "b": "Espanta ela como uma mosca, xô sai!",
            "c": "Acena para ela e segue seu caminho",
        }
    },
    "2_a":{
        "questao": "A fada aceita sua oferta e vocês dois adentram as profundezas da floresta em busca dos mistérios élficos! Fim",
    },
    "2_b":{
        "questao": "A fada vira um monstro de cinco cabeças e te persegue floresta adentro. Fim.",
    },
    "2_c":{
        "questao": "A fada da a você uma espada nova e indica o caminho para o reino dos elfos. Fim",
    },

    //Caminho da caverna
    "1_b":{
        "questao": "Ao adentrar a caverna você se depara com um ser fantasmagórico de aparência incerta, ao olhar mais de perto você percebe que é uma bruxa! O que você faz?",
        "resposta": {
            "d": "Sai correndo gritando",
            "e": "Puxa sua espada e escudo e se prepara para lutar.",
            "f": "Pergunta para a bruxa se ela gosta de comer sanduíche de queijo.",
        }
    },
    "2_d":{
        "questao": "A bruxa encara a cena confusa e volta para seu caldeirão onde estava preparando uma sopa de mandioca. Fim",
    },
    "2_e":{
        "questao": "Você derrota a bruxa e ela se torna um coelho fofinho. Fim.",
    },
    "2_f":{
        "questao": "A bruxa sorri e vocês dividem um lanche da tarde juntos. Fim",
    },

    //Caminho da montanha
    "1_c":{
        "questao": "Você decide seguir o caminho da montanha e um troll que canta ópera aparece. O que você faz?",
        "resposta": {
            "g": "Canta de modo desafinado junto com o troll.",
            "h": "Pergunta ao troll se ele sabe contar até três e dá um tapão na cara dele.",
            "i": "Nomeia o troll de Cleiton e vocês se tornam melhores amigos.",
            }
    },
    "2_g":{
        "questao": "Vocês acidentalmente causam uma avalanche. Fim",
    },
    "2_h":{
        "questao": "O troll de irrita e te arremesa de volta para a base da montanha. Fim.",
    },
    "2_i":{
        "questao": "Você e Cleiton viajam o mundo todo juntos. Fim",
    },
};