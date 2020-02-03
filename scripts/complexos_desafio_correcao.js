var nCorretos = 0;

var SalvaLocalLoaded = false;
var GGBLoaded = false;
var HTMLLoaded = false;

document.observe('dom:safeLoaded', function(ev){
	HTMLLoaded = true;
	SalvaLocalLoaded = true;
	checkInits();
});

function ggbOnInit() {
	GGBLoaded = true;
	checkInits();
}

function checkInits() {
	// Checagem se tanto SalvaLocal e Geogebra foram carregados.
	if  (SalvaLocalLoaded && GGBLoaded && HTMLLoaded) InitOnLoad();
}

function InitOnLoad(){
	for(var b = 0; b < Partes.length; b++) {
		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_'+PosicaoAtual.Atividade+'_parte_'+b, '2');
	}

	switch (PosicaoAtual.Parte) {
		case 0://Parte1
			initParte1();
			setAtividade('desafio_1',2,false)
			break;
		case 1://Parte2
			randomDesafio();
			radioChecked();
			setAtividade('desafio_1',3,true)

			break;
	}
}

function initParte1() {
	var applet = document.ggbApplet;
	applet.setFixed('A',false);
	applet.setFixed('B',false);
	applet.setFixed('C',false);
	applet.evalCommand('A=1+3*i');
	applet.evalCommand('B=-3+0.5*i');
	applet.evalCommand('C=-2-3*i');
	applet.setVisible('polígono2',false);
}

/************************
 * Randomico do Desafio *
 ************************/
function randomDesafio() {
	$('checkBoxReta').checked = false;
	$('checkBoxTamanho').checked = false;
	$('checkBoxCoord').checked = false;

	var applet = document.ggbApplet;
	applet.reset();
	
	//Sorteia angulo
	var anguloLista = new Array();
	for(i = 0, j = 0; i < 13; i++, j+=30) {
		anguloLista[i] = j.toFixed(1);	//Coloca os anguloLista [0, 360] em uma lista
	}
	//console.log("lista: "+anguloLista);
	var indice = Math.floor(Math.random() * anguloLista.length);
	var angulo = anguloLista[indice];
	//console.log(angulo);
	angulo = grausParaRadianos(angulo);
	var a = Math.cos(angulo).toFixed(2);
	var b = Math.sin(angulo).toFixed(2);
	
	//Sorteia real
	var reais = new Array();
	for(i = 0, j = 0.5; i < 6; i++, j+=0.5) {
		reais[i] = j.toFixed(1);
		//console.log('reais: '+reais[i]);
	}
	var indice = Math.floor(Math.random() * reais.length);
	var real = reais[indice];
	//console.log("sorteado:"+real);
	
	//Sorteia r2
	var reais = new Array();
	for(i = 0, j = -3; i < 13; i++, j+=0.5) {
		reais[i] = j.toFixed(1);
		//console.log('reais: '+reais[i]);
	}
	var indice = Math.floor(Math.random() * reais.length);
	var aReal = reais[indice];
	indice = Math.floor(Math.random() * reais.length);
	var bReal = reais[indice];
	//console.log(aReal);
	//console.log(bReal);
	
	//console.log('r_1 = ('+a+' + i*'+b+')*'+real);
	applet.evalCommand('r_1 = ('+a+' + i*'+b+')*'+real);
	setResp('r1Desafio', '('+a+' + i*'+b+')*'+real);
	
	//console.log('r_2 = ' + aReal + ' + ' + bReal + '*i');
	applet.evalCommand('r_2 = ' + aReal + ' + ' + bReal + '*i');
	setResp('r2Desafio', aReal + ' + ' + bReal + '*i');
}

function geraOutroDesafio() {

	/* Remove a classe de incorreto nas caixas de texos */
	$('parte2_q1_a_11').up(0).removeClassName('incorreto');
	$('parte2_q1_a_21').up(0).removeClassName('incorreto');
	$('parte2_q1_a_11').up(0).removeClassName('correto');
	$('parte2_q1_a_21').up(0).removeClassName('correto');

	
	/* Tira a figura de errado e sobe a msg de erro */
	
	if (PegaQuestao(PosicaoAtual)!=null)
	{
		PegaQuestao(PosicaoAtual).nada();
		PegaQuestao(PosicaoAtual).MsgErro.fecha();
	}

	/* Limpa a caixa de texto */
	$('parte2_q1_a_11').value='';
	$('parte2_q1_a_21').value='';

	randomDesafio();
}

/*****************************
 *	Funcoes de Inicializacao *
 *****************************/
var msgErroRotacao = 'Você já sabe que houve uma rotação. Observe o ângulo entre as retas suporte dos lados dos triângulos para determinar o argumento de Z<sub>1</sub>, lembre-se que seu módulo deve ser 1 e que Z<sub>2</sub> = 0+0i.';
var msgErroDilatacao = 'Você já sabe que houve uma dilatação. Observe agora o tamanho dos lados para determinar qual deve ser o módulo de Z<sub>1</sub>, lembre-se que Z<sub>2</sub> = 0 + 0i.';
var msgErroTranslacao = 'Você já sabe que houve uma translação. Observe as coordenadas de vértices correspondentes para determinar o quanto houve de alteração na parte real e na parte imaginária.';
var msgErroRotaDilatacao = 'Você já sabe que ocorreram dilatação e rotação. Observe o ângulo entre as retas suporte dos lados dos triângulos para determinar o argumento de Z<sub>1</sub> e  o tamanho dos lados para determinar qual deve ser o módulo de Z<sub>1</sub>.';


/************
 * Correcao *
 ************/
function corrige_q_1_a(valor) {
	var r1 = getResp('r1Desafio');
	var r2 = getResp('r2Desafio');
	
	r1=r1.replace(/\[/g,'(');
	r1=r1.replace(/\]/g,')');
	r2=r2.replace(/\[/g,'(');
	r2=r2.replace(/\]/g,')');

	//console.log(r1);
	//console.log(r2);
	var resp1 = valor[0].length==0?false:comparaComplexo(valor[0]+'+0*i',r1);
	var resp2 = valor[1].length==0?false:comparaComplexo(valor[1]+'+0*i',r2);
	
	if(resp1 && resp2) {
		nCorretos++;
		$('nCorretos').update(nCorretos);
	}
	
	return[resp1, resp2];
	
	/*
	//console.log(valor[0]);
	var contadorAbreParenteses = 0;
	var poeGrau = false;
	var comecaContar = false;
	valor[0] = valor[0].toLowerCase();
	
	var indexSen = valor[0].indexOf("sin");
	var indexCos = valor[0].indexOf("cos");
	
	var result = '';
	
	for(var i = 0; i < valor[0].length; i++) {
		poeGrau = false;
		if(i==indexSen||i==indexCos) {
			comecaContar = true;
		}
		if(comecaContar && valor[0].charAt(i)=='(') {
			contadorAbreParenteses++;
		}
		if(comecaContar && valor[0].charAt(i)==')') {
			contadorAbreParenteses--;
			if(contadorAbreParenteses == 0) {
				poeGrau = true;
			}
		}
		
		result += valor[0].charAt(i);
		
		if(poeGrau) {
			result+= '°';
		}
		 
	}
	result+='+0*i';
	alert(result);

	return [false];
	*/
}

