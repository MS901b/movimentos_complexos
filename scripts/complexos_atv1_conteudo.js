/*
	Padronização do ID:
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem será usada somente em questões com mais de um campo
*/

var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];

/*
	Questoes

	Aqui ficam concentrados todos os conteudos das questões da atividade!
	Veja que está separado por Parte/Questão/Item

	ATENÇÃO: Cada tipo possui um formato de entrada característico.
*/
var Partes = ['1','2','3','4','5','6'];
var nomeSoft = "complexos";

var Questoes =
[
	{//Parte 1
		parte1_q1: //Questão 1
		{
			enunciadoGeral: 'Escreva o número complexo correspondente ao vértice C:',
			itens:
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_1_a,
					antes: 'C = ',
					depois: ' ',
					enunciado: 'Forma algébrica.',
					msgErro: 'Obtenha esse valor na lista abaixo da ferramenta.',
					msgAjuda: 'Use “*” para indicar vezes, “+” para adição, “-“ para subtração, “/” para divisão, e “i” para unidade imaginária, mas sempre sem aspas.'
				}
			]
		},
		parte1_q2: //Questão 2
		{
			enunciadoGeral: '',
			itens:
			[
				{//A
					tipo: 'instrucao',
					corrigir: corrige_q_2_a,
					associado: true,
					enunciado: 'Posicione Z<sub>1</sub> em 2+i, e Z<sub>2</sub> em 1+i.',
					msgErro: "Verifique se as coordenadas dos pontos Z<sub style='color: red;'>1</sub> e Z<sub style='color: red;'>2</sub> estão corretas observando os valores apresentados na ferramenta.",
					msgAjuda: 'Movimente  Z<sub>1</sub> e Z<sub>2</sub>, arrastando os pontos em forma de "X".'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_2_b,
					antes: "B' = ",
					associado: true,
					depois: ' ',
					enunciado: "Qual é o valor de B' para os valores de Z<sub>1</sub> e Z<sub>2</sub> posicionados no item anterior.",
					msgErro: "Selecione os pontos na lista abaixo da ferramenta para ver as coordenadas de B'. Verifique se Z<sub style='color: red;'>1</sub> e Z<sub style='color: red;'>2</sub> estão posicionados corretamente."
				}
			]
		},
		parte1_q3: //Questão 3
		{
			enunciadoGeral: '',
			itens:
			[
				{//A
					tipo: 'instrucao',
					corrigir: corrige_q_3_a,
					associado: true,
					enunciado: 'Mantenha Z<sub>1</sub> em 2+i, e mova Z<sub>2</sub> para 1+2i.',
					msgErro: "Verifique se as coordenadas dos pontos Z<sub style='color: red;'>1</sub> e Z<sub style='color: red;'>2</sub> estão corretas. Observe os valores apresentados na ferramenta.",
					msgAjuda: 'Movimente Z<sub>2</sub>, arrastando o ponto em forma de "X" correspondente.'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_3_b,
					antes: "B' = ",
					associado: true,
					depois: ' ',
					enunciado: "Qual é o valor de B' para os valores de Z<sub>1</sub> e Z<sub>2</sub> posicionados no item anterior.",
					msgErro: "Selecione os pontos na lista abaixo da ferramenta para ver as coordenadas de B'. Verifique se Z<sub style='color: red;'>1</sub> e Z<sub style='color: red;'>2</sub> estão posicionados corretamente."
				}
			]
		},
		parte1_q4: //Questão 4
		{
			enunciadoGeral: '',
			itens:
			[
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_4,
					dados:	[
						{value: 'congruentes', label: 'São congruentes.'},
						{value: 'equilateros', label: 'São equiláteros.'},
						{value: 'retangulos', label: 'São retângulos.'},
						{value: 'razao', label: 'Têm razão de semelhança igual a 3.'}
					],
					enunciado: 'Posicione Z<sub>1</sub> em 1+0i. O que você pode afirmar sobre os triângulos?',
					msgErro: 'Verifique se Z<sub style="color: red;">1</sub> está posicionado corretamente, como pede o enunciado.',
					msgAjuda: 'Movimente Z<sub>1</sub> arrastando os pontos em forma de "X" correspondentes. Você pode mover Z<sub>2</sub> livremente.'
				}
			]
		},
		parte1_q5: //Questão 5
		{
			enunciadoGeral: '',
			itens:
			[
				{//A
					tipo: 'instrucao',
					corrigir: corrige_q_5,
					associado: true,
					enunciado: 'Mantenha Z<sub>1</sub> em 1+0i e mova Z<sub>2</sub> até que os triângulos se sobreponham.',
					msgErro: 'Verifique se Z<sub style="color: red;">1</sub> está em 1+0i.',
					msgAjuda: 'Movimente Z<sub>2</sub> arrastando o ponto em forma de "X" correspondente.'
				}
			]
		}
	},
	{//Parte 2
		parte2_q6: //Questão 6
		{
			enunciadoGeral: '',
			itens:
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_6_a,
					enunciado: 'Qual é o valor do módulo de Z<sub>1</sub>?',
					msgErro: 'Observe que Z<sub style="color: red;">1</sub> é um ponto da circunferência de raio 1, ou então observe a forma trigonométrica de Z<sub style="color: red;">1</sub> no canto superior esquerdo da ferramenta.'
				},
				{//B
					tipo: 'multipla_escolha',
					corrigir: corrige_q_6_b,
					enunciado: 'Com Z<sub>1</sub> na circunferência, o valor de seu módulo se altera?',
					dados:	[
						{value: 'sim', label: 'Sim'},
						{value: 'nao', label: 'Não'}
					],
					msgErro: 'Varie Z<sub style="color: red;">1</sub> na circunferência e observe a sua forma trigonométrica.'
				}
			]
		},
		parte2_q7: //Questão 7
		{
			enunciadoGeral: ' ',
			itens:
			[
				{//valor inicial
					tipo: 'valor_inicial',
					seta: set_inicial_q7,
					tira: unset_inicial_q7,
					dados:	[],
					enunciado: 'Escolha a posição de Z<sub>1</sub> que será usada para responder os itens abaixo e clique OK.',
					usado: 'Esse valor será usado nos itens A, B e C.'
				},
				{//A
					tipo: 'multiplo_input_com_unidade',
					corrigir: corrige_q_7_a,
					associado: true,
					esperando: true,
					dados:	[
							 [{antes: ' ', depois:'&#176;'}]
							],
					enunciado: 'Qual é o argumento Z<sub style="color: grey;">1</sub>?',
					msgAjuda: 'Não é necessário utilizar o símbolo de graus.',
					msgErro: 'Observe a forma trigonométrica de Z<sub style="color: red;">1</sub> no canto superior esquerdo da ferramenta.'
				},
				{//B
					tipo: 'multiplo_input_com_unidade',
					corrigir: corrige_q_7_b,
					esperando: true,
					enunciado: 'Qual é o valor do ângulo mostrado ao lado entre os seguintes pares de retas?',
					dados:	[
							 [{antes:"AB e  A'B'", depois:'&#176;'}],
							 [{antes: "AC e  A'C'", depois:'&#176;'}],
							 [{antes: "CB e  C'B'", depois:'&#176;'}]
							],
					msgErro: 'Observe o valor na ferramenta. Ele será fornecido apenas quando a lista estiver selecionada na opção "mostrar retas suportes".',
					msgAjuda: 'Utilize as opções na lista abaixo da ferramenta para ver informações adicionais.'
				},
				{//C
					tipo: 'multiplo_input_com_unidade',
					corrigir: corrige_q_7_c,
					esperando: true,
					dados:	[
							 [{antes: ' ', depois:'&#176;'}]
							],
					enunciado: "De quantos graus é a rotação do triângulo A'B'C' em relação ao triângulo ABC?",
					msgErro: 'Pode-se observar a rotação de figuras através dos ângulos formados entre retas suportes de lados correspondentes.'
				}
			]
		},
		parte2_q8:	//Questão 8
		{
			enunciadoGeral: '',
			itens:
			[
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_8,
					selecionada: selecionou_q_8,
					enunciado: 'Varie o valor de Z<sub>1</sub> e observe o que acontece com os ângulos entre os pares de retas suportes e o argumento de Z<sub>1</sub>. O que você pode afirmar?',
					dados:	[
						{value: 'complemento', label: 'Um é o complemento do outro.'},
						{value: 'suplemento', label: 'Um é o suplemento do outro.'},
						{value: 'mesmo', label: 'Os dois têm o mesmo valor.'},
						{value: 'diferentes', label: 'Os dois têm valores sempre diferentes.'}
					],
					msgErro: 'Observe a forma trigonométrica de Z<sub style="color: red;">1</sub> no canto superior direito da ferramenta.'
				}
			]
		}
	},
	{//Parte 3
		parte3_q9: //Questão 9
		{
			enunciadoGeral: '',
			itens:
			[
				{//valor inicial
					tipo: 'valor_inicial',
					seta: set_inicial_q9,
					tira: unset_inicial_q9,
					associado: true,
					dados:	[],
					enunciado: 'Posicione Z<sub>1</sub> de forma que ele seja um número real positivo qualquer, porém diferente de 1.<span id="p3_q9"></span>',
					usado: 'Este valor será usado nos itens A, B, C, D.',
					msgErro: 'Para ser um número real positivo a parte imaginária deve ser zero e a parte real deve ser maior do que zero.'
				},
				{//A
					tipo: 'multiplo_input',
					corrigir: corrige_q_9_a,
					enunciado: 'Preencha com o tamanho dos lados:',
					associado: true,
					esperando: true,
					dados:	[
							 [{tipo: 'normal',label:'AB = '}],
							 [{tipo: 'normal', label: "A'B' = "}]
							],
					msgErro: 'Os valores aparecem na ferramenta apenas quando está selecionada a opção "Mostrar tamanho dos lados" na lista abaixo da ferramenta.',
					msgAjuda: 'Essas informações podem ser obtidas na lista abaixo da ferramenta.'
				},
				{//B
					tipo: 'multiplo_input',
					corrigir: corrige_q_9_b,
					enunciado: 'Preencha com o tamanho dos lados:',
					associado: true,
					esperando: true,
					dados:	[
							 [{tipo: 'normal',label:'BC = '}],
							 [{tipo: 'normal', label: "B'C' = "}]
							],
					msgErro: 'Os valores aparecem apenas quando está selecionada a opção "Mostrar tamanho dos lados", na lista abaixo da ferramenta.',
					msgAjuda: 'Essas informações podem ser obtidas na lista abaixo da ferramenta.'
				},
				{//C
					tipo: 'multiplo_input',
					corrigir: corrige_q_9_c,
					enunciado: 'Preencha com o tamanho dos lados:',
					associado: true,
					esperando: true,
					dados:	[
							 [{tipo: 'normal',label:'AC = '}],
							 [{tipo: 'normal', label: "A'C' = "}]
							],
					msgErro: 'Os valores aparecem apenas quando está selecionada a opção "Mostrar tamanho dos lados", na lista abaixo da ferramenta.',
					msgAjuda: 'Essas informações podem ser obtidas na lista abaixo da ferramenta.'
				},
				{//D
					tipo: 'input',
					corrigir: corrige_q_9_d,
					enunciado: 'Qual foi o fator de dilatação? Isto é, por quanto foi multiplicado o lado do triângulo original ABC?',
					associado: true,
					esperando: true,
					msgErro: 'Observe o módulo de Z<sub style="color: red;">1</sub>.',
					msgAjuda: 'Você pode usar a calculadora do software.'
				}
			]
		}
	},
	{//Parte 4
		parte4_q10: //Questão 10
		{
			enunciadoGeral: '',
			itens:
			[
				{//valor inicial
					tipo: 'valor_inicial',
					seta: set_inicial_q10,
					tira: unset_inicial_q10,
					dados:	[],
					enunciado: 'Posicione Z<sub>1</sub> de forma que a parte real e a parte imaginária <strong>não</strong> sejam nulas. E que o módulo de Z<sub>1</sub> seja diferente de 1.<span id="p4_q10"></span>',
					usado: 'Este valor será usado na questão 10.',
					msgErro: 'Nem a parte real e nem a parte imaginária devem ser iguais a zero. Além disso |Z<sub>1</sub>|&#8800;1'
				},
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_10_a,
					esperando: true,
					enunciado: "Observe os triângulos na ferramenta. Houve dilatação ou contração?",
					dados:	[
						{value: 'sim', label: 'Sim'},
						{value: 'nao', label: 'Não'}
					],
					msgErro: 'A dilatação se refere tanto ao aumento de um objeto, denominada "expansão", quando à diminuição, cujo nome é "contração".'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_10_b,
					esperando: true,
					enunciado: 'Se sim, qual foi o fator?',
					msgErro: 'Obtenha o valor solicitado selecionando os itens abaixo da ferramenta. O fator de dilatação é o módulo de Z<sub>1</sub>.',
					msgAjuda: 'Você pode usar a calculadora do software.'
				},
				{//C
					tipo: 'multipla_escolha',
					corrigir: corrige_q_10_c,
					esperando: true,
					enunciado: "Houve rotação?",
					dados:	[
						{value: 'sim', label: 'Sim'},
						{value: 'nao', label: 'Não'}
					],
					msgErro: 'A rotação corresponde ao movimento “rodar” do triângulo em torno da origem.'
				},
				{//D
					tipo: 'multiplo_input_com_unidade',
					corrigir: corrige_q_10_d,
					esperando: true,
					dados:	[
							 [{antes: ' ', depois:'&#176;'}]
							],
					enunciado: 'Se sim, qual foi o ângulo?',
					msgErro: 'Obtenha os valores solicitados selecionando os itens abaixo da ferramenta. O ângulo de rotação é igual a um dos ângulos entre as retas suportes de lados correspondes.'
				}
			]
		}
	},
	{//Parte 5
		parte5_q11: //Questão 11
		{
			enunciadoGeral: '',
			itens:
			[
				{//valor inicial
					tipo: 'valor_inicial',
					seta: set_inicial_q11,
					tira: unset_inicial_q11,
					dados:	[],
					enunciado: "Posicione Z<sub>2</sub> no plano de forma que o triângulo A'B'C' seja inteiramente visível e que Z<sub>2</sub> seja diferente de zero.<span id='p5_q11'></span>",
					usado: 'Este valor será usado na questão 11.'
				},
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_11_a,
					dados:	[
						{value: 'sim', label: 'Sim'},
						{value: 'nao', label: 'Não'}
					],
					esperando: true,
					enunciado: "A'B'C' é o triângulo ABC que sofreu rotação?",
					msgAjuda: 'Produzir a rotação de uma figura no plano é girá-la de um determinado ângulo em torno da origem.',
					msgErro: 'Observe as retas suportes dos lados.'
				},
				{//B
					tipo: 'multipla_escolha',
					corrigir: corrige_q_11_b,
					dados:	[
						{value: 'sim', label: 'Sim'},
						{value: 'nao', label: 'Não'}
					],
					esperando: true,
					enunciado: "A'B'C' é o triângulo ABC dilatado?",
					msgAjuda: 'A dilatação é a expansão ou contração das medidas relativas de uma figura.',
					msgErro: 'Observe o tamanho dos lados.'
				}
			]
		},
		parte5_q12:
		{
			enunciadoGeral: '',
			itens:
			[
				{//valor inicial
					tipo: 'instrucao',
					corrigir: corrige_q_12,
					selecionada: selecionou_q_12,
					enunciado: 'Posicione Z<sub>2</sub> de modo que um dos vértices do triângulo amarelo fique posicionado na origem.',
					msgAjuda: 'Lembre-se de que a soma de um número complexo a cada um dos números complexos correspondentes aos vértices apenas faz o triângulo deslocar no plano.',
					msgErro: 'Posicione Z<sub style="color: red;">2</sub> em um valor complexo de forma que a parte real e parte imaginária tenham sinais trocados em relação a um dos vértices do triângulo.'
				}
			]
		}
	},
	{//Parte 6
		parte6_q13: //Questão 13
		{
			enunciadoGeral: '',
			itens:
			[
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_13_a,
					dados:	[
						{value: 'rotacao', label: 'Rotação apenas'},
						{value: 'translação', label: 'Translação apenas'},
						{value: 'dilatacao', label: 'Dilatação apenas'},
						{value: 'rotadilatacao', label: 'Rotação e dilatação'}
					],
					selecionada: selecionou_q_13,
					associado: true,
					enunciado: "Qual das opções apresenta a(s) transformação(ões) que ocorreu(ram) no triângulo ABC até se obter DEF?",
					msgAjuda: 'Use as informações fornecidas na lista.',
					msgErro: 'A variação do tamanho do lado indica dilatação, já o ângulo entre as retas suportes indica rotação. Se nenhuma dessas ocorrer, houve translação.'
				},
				{//B
					tipo: 'multiplo_input',
					corrigir: corrige_q_13_b,
					dados:	[
							 [{tipo: 'grande',label:'Z<sub>1</sub>'}],
							 [{tipo: 'grande', label: 'Z<sub>2</sub>'}]
							],
					selecionada: selecionou_q_13,
					associado: true,
					enunciado: 'Determine os valores de Z<sub>1</sub> e Z<sub>2</sub> que executam o movimento representado. Preencha os valores obtidos abaixo:',
					msgAjuda: 'Posicione Z<sub>1</sub> e Z<sub>2</sub> de tal modo que executem o movimento apresentado e observe os valores desses números complexos na ferramenta. Use "*" para indicar multiplicação, "+" para adição, "-" para subtração, "/" para divisão, "i" para unidade imaginária, "sen" para seno, "cos" para cosseno e o valor dos ângulos em graus.',
					msgErro: '<span id="msgErroDinamicaQ13B"></span>'
				}
			]
		},
		parte6_q14: //Questão 14
		{
			enunciadoGeral: '',
			itens:
			[
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_14_a,
					dados:	[
						{value: 'rotacao', label: 'Rotação apenas'},
						{value: 'translação', label: 'Translação apenas'},
						{value: 'dilatacao', label: 'Dilatação apenas'},
						{value: 'rotadilatacao', label: 'Rotação e dilatação'}
					],
					selecionada: selecionou_q_14,
					associado: true,
					enunciado: "Qual das opções apresenta a(s) transformação(ões) que ocorreu(ram) no triângulo ABC até se obter DEF?",
					msgAjuda: 'Use as informações fornecidas na lista.',
					msgErro: 'A variação do tamanho do lado indica dilatação, já o ângulo entre as retas suportes indica rotação. Se nenhuma dessas ocorrer, houve translação.'
				},
				{//B
					tipo: 'multiplo_input',
					corrigir: corrige_q_14_b,
					dados:	[
							 [{tipo: 'grande', label:'Z<sub>1</sub>'}],
							 [{tipo: 'grande', label: 'Z<sub>2</sub>'}]
							],
					selecionada: selecionou_q_14,
					associado: true,
					enunciado: 'Determine os valores de Z<sub>1</sub> e Z<sub>2</sub> que executam o movimento representado. Preencha os valores obtidos abaixo:',
					msgAjuda: 'Posicione Z<sub>1</sub> e Z<sub>2</sub> de tal modo que executam o movimento apresentado e observe os valores desses números complexos na ferramenta. Use "*" para indicar multiplicação, "+" para adição, "-" para subtração, "/" para divisão, "i" para unidade imaginária, "sen" para seno, "cos" para cosseno e o valor dos ângulos em graus.',
					msgErro: '<span id="msgErroDinamicaQ14B"></span>'
				}
			]
		},
		parte6_q15: //Questão 15
		{
			enunciadoGeral: '',
			itens:
			[
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_15_a,
					dados:	[
						{value: 'rotacao', label: 'Rotação apenas'},
						{value: 'translação', label: 'Translação apenas'},
						{value: 'dilatacao', label: 'Dilatação apenas'},
						{value: 'rotadilatacao', label: 'Rotação e dilatação'}
					],
					selecionada: selecionou_q_15,
					associado: true,
					enunciado: "Qual das opções apresenta a(s) transformação(ões) que ocorreu(ram) no triângulo ABC até se obter DEF?",
					msgAjuda: 'Use as informações fornecidas na lista.',
					msgErro: 'A variação do tamanho do lado indica dilatação, já o ângulo entre as retas suportes indica rotação. Se nenhuma dessas ocorrer, houve translação.'
				},
				{//B
					tipo: 'multiplo_input',
					corrigir: corrige_q_15_b,
					dados:	[
							 [{tipo: 'grande',label:'Z<sub>1</sub>'}],
							 [{tipo: 'grande', label: 'Z<sub>2</sub>'}]
							],
					selecionada: selecionou_q_15,
					associado: true,
					enunciado: 'Determine os valores de Z<sub>1</sub> e Z<sub>2</sub> que executam o movimento representado. Preencha os valores obtidos abaixo:',
					msgAjuda: 'Posicione Z<sub>1</sub> e Z<sub>2</sub> de tal modo que executam o movimento apresentado e observe os valores desses números complexos na ferramenta. Use "*" para indicar multiplicação, "+" para adição, "-" para subtração, "/" para divisão, "i" para unidade imaginária, "sen" para seno, "cos" para cosseno e o valor dos ângulos em graus.',
					msgErro: '<span id="msgErroDinamicaQ15B"></span>'
				}
			]
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

Event.observe(window, 'load', function(){
	BlocoNotas = new Blocao();
});