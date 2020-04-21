/*
	Padroniza��o do ID: 
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem ser� usada somente em quest�es com mais de um campo
*/

var IdPadrao = [
    ['parte/parte', 'q/questao', '/itemletra', '/subitem'], '_'
];

/*
	Questoes
	
	Aqui ficam concentrados todos os conteudos das quest�es da atividade!
	Veja que est� separado por Parte/Quest�o/Item
	
	ATEN��O: Cada tipo possui um formato de entrada caracter�stico.
*/
var Partes = null;
var nomeSoft = "complexos";
var Questoes = null;

/*
	Bloco de Notas
	
	Nesse Array ficam os dados que aparecem no Bloquinho de notas.
	Se voc� for na linha 35 do exemplo_correcao.js ver� que est� sendo criada uma inst�ncia
	de "Blocao", uma classe de bloco de notas que permite tabelas no conte�do. Se n�o for
	usar tabelas no Software, altere para "Bloco". Ambas classes utilizam a variavel global
	MeuBloco para preencher o seu conte�do.
*/

var MeuBloco = new Array();


Event.observe(window, 'load', function() {
    BlocoNotas = new Bloco();

});