/*
	Padronização do ID:
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem será usada somente em questões com mais de um campo
*/

var IdPadrao = [
    ['parte/parte', 'q/questao', '/itemletra', '/subitem'], '_'
];

/*
	Questoes

	Aqui ficam concentrados todos os conteudos das questões da atividade!
	Veja que está separado por Parte/Questão/Item

	ATENÇÃO: Cada tipo possui um formato de entrada característico.
*/
var Partes = ['1', '2'];
var nomeSoft = "complexos";

var Questoes = [{ //Parte 1
        },
        { //Parte 2
            parte2_q1: //Questão 1
            {
                enunciadoGeral: '',
                itens: [{ //A
                    tipo: 'multiplo_input',
                    corrigir: corrige_q_1_a,
                    dados: [
                        [{ tipo: 'grande', label: 'Z<sub>1</sub>' }],
                        [{ tipo: 'grande', label: 'Z<sub>2</sub>' }]
                    ],
                    enunciado: 'Posicione os valores de Z<sub>1</sub> e Z<sub>2</sub>  de forma que o triângulo DEF seja o triângulo ABC alterado pela transformação de Z<sub>1</sub> e Z<sub>2</sub> : <img src="imgs/desafio.png" alt="operacao" />',
                    msgAjuda: 'Use as informações abaixo da ferramenta. Use "*" para indicar multiplicação, "+" para adição, "-" para subtração, "/" para divisão, "i" para unidade imaginária, "sen" para seno, "cos" para cosseno e o valor dos ângulos em graus.',
                    msgErro: 'Procure primeiro por rotações e dilatações através do ângulo entre as retas suportes e o tamanho dos lados, determinando, assim, Z<sub style="color: red;">1</sub>. Em seguida, verifique se houve translação comparando as coordenadas dos vértices.'
                }]
            }
        }
    ]
    /*
    	Bloco de Notas

    	Nesse Array ficam os dados que aparecem no Bloquinho de notas.
    	Se você for na linha 35 do exemplo_correcao.js verá que está sendo criada uma instância
    	de "Blocao", uma classe de bloco de notas que permite tabelas no conteúdo. Se não for
    	usar tabelas no Software, altere para "Bloco". Ambas classes utilizam a variavel global
    	MeuBloco para preencher o seu conteúdo.
    */

var MeuBloco = new Array();

Event.observe(window, 'load', function() {
    BlocoNotas = new Bloco();
});