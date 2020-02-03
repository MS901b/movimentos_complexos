var msgErroRotacao = 'Você já sabe que houve uma rotação. Observe o ângulo entre as retas suporte dos lados dos triângulos para determinar o argumento de Z<sub>1</sub>, lembre-se que seu módulo deve ser 1 e que Z<sub>2</sub> = 0+0i.';
var msgErroDilatacao = 'Você já sabe que houve uma dilatação. Observe agora o tamanho dos lados para determinar qual deve ser o módulo de Z<sub>1</sub>, lembre-se que Z<sub>2</sub> = 0 + 0i.';
var msgErroTranslacao = 'Você já sabe que houve uma translação. Observe as coordenadas de vértices correspondentes para determinar o quanto houve de alteração na parte real e na parte imaginária.';

/* Retorna true se tem apenas caracteres validos, false caso contrario */
function validaCaracter(valor) {
	var caracteresValidos = "0123456789i()+-*/., ";
	var indexSen = valor.indexOf("sin");
	var indexCos = valor.indexOf("cos");
	//console.log("indexSen: "+indexSen);
	valor = valor.replace(/sin/gi,"");
	valor = valor.replace(/sen/gi,"");
	valor = valor.replace(/cos/gi,"");
	
	for(var i = 0; i < valor.length; i++) {
		if(caracteresValidos.indexOf(valor.charAt(i),0) == -1){
			return false;
		}
   }
	return true;
}

/* Retorna true se o numero de parenteses estao corretos, false caso contrario */
function validaParenteses(valor) {
	var contadorAbreParenteses = 0;

	var numeroComplexo = valor.toLowerCase();

	for(var i = 0; i < numeroComplexo.length; i++) {
		if(numeroComplexo.charAt(i)=='(') {
			contadorAbreParenteses++;
		}
		if(numeroComplexo.charAt(i)==')') {
			contadorAbreParenteses--;
		}
	}
	return (contadorAbreParenteses == 0);
}

function validaForaApplet(valor) {
	var applet = document.ggbApplet;
	applet.deleteObject('C');
	applet.evalCommand('C = '+valor+'+0*i');
	applet.setVisible('C',false);
	if(applet.getXcoord('C') < -10 || applet.getXcoord('C') > 10 || applet.getYcoord('C') < -10 || applet.getYcoord('C') > 10) {
		return false;
	}
	return true;
}

function verificaTrianguloVisivel() {
	var applet = document.ggbApplet;
	//alert(applet.getXcoord("B'"));
	//alert(applet.getXcoord("A'"));
	//alert(applet.getYcoord("C'"));
	if( (applet.getXcoord("B'") < -8.5) || (applet.getXcoord("A'") > 8.5) || (applet.getYcoord("C'") > 7.5) ) {
		return false;
	}
	return true;
}

/**
 * Funcao que compara duas funcoes para corrigir a expressao pedida nas questoes.
 * @param {Object} func1	funcao a ser corrigida
 * @param {Object} func2	funcao correta
 */
function compararFuncao(func1,func2) {
	var applet = document.ggbApplet;
	applet.deleteObject('func_1');
	applet.deleteObject('func_2');
	applet.deleteObject('func_3');
	applet.deleteObject('RespComparador');

	primeirafuncao = 'func_1(x)=' + func1;
	segundafuncao = 'func_2(x)=' + func2;
	applet.evalCommand(primeirafuncao);
	applet.setVisible('func_1',false);
	applet.evalCommand(segundafuncao);
	applet.setVisible('func_2',false);
	applet.evalCommand('func_3(x)=abs(func_1(x)-func_2(x))');
	applet.setVisible('func_3',false);
	applet.evalCommand('RespComparador = Integral[func_3(x),-1,1]');
	applet.setVisible('RespComparador',false);
	saida = applet.getValue('RespComparador');
	//alert(saida);
		
	if (saida<0.001) 
		return true;
	else
		return false;
}

/*
	Valida a expressao para plotar como numero complexo
*/
function validaExpressaoComplexo(valor) {
	valor = valor.replace(/,/g,'.');
	valor = valor.replace(/sen/gi,"sin");//Troca o "sen" por "sin"
	valor = colocaGrau(valor);
	
	return valor;
}

/*
 Funcao que ajusta o zoom feito por XML, devido ao bug do GeoGebra
*/
function mudarEscala(xMin,xMax,yMin,yMax){
	var applet = document.ggbApplet;
	
	stringXML = applet.getXML();

	// Converte a string para um documento XML
	try //Internet Explorer
	  {
	  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
	  xmlDoc.async="false";
	  xmlDoc.loadXML(stringXML);
	  }
	catch(e)
	  {
	  try //Firefox, Mozilla, Opera, etc.
	    {
	    parser=new DOMParser();
	    xmlDoc=parser.parseFromString(stringXML,"text/xml");
	    }
	  catch(e) {alert(e.message)}
	  }

	x=xmlDoc.getElementsByTagName("euclidianView")[0];

	if (x.getElementsByTagName("size")[0]!=undefined) {
		var sizeX = x.getElementsByTagName("size")[0].getAttribute('width');
		var sizeY = x.getElementsByTagName("size")[0].getAttribute('height');
//		console.log('size do ggb',sizeX,sizeY);
	} 
	else
	{
		var sizeX = Number(applet.width)-2;
		var sizeY = Number(applet.height)-2;
//		console.log('size do applet',sizeX,sizeY);
	}
	
	var escalaX = sizeX/(xMax-xMin);
	var escalaY = sizeY/(yMax-yMin);
	var zeroX = -1*xMin*escalaX;
	var zeroY = Number(sizeY) + Number(yMin*escalaY);
	
	x.getElementsByTagName("coordSystem")[0].setAttribute('scale',escalaX);
	x.getElementsByTagName("coordSystem")[0].setAttribute('yscale',escalaY);
	x.getElementsByTagName("coordSystem")[0].setAttribute('xZero',zeroX);
	x.getElementsByTagName("coordSystem")[0].setAttribute('yZero',zeroY);

	applet.setXML(xml2Str(xmlDoc)) ;
	applet.refreshViews();
	 
}

function colocaGrau(valor) {
	var contadorAbreParenteses = 0;
	var poeGrau = false;
	var comecaContar = false;
	valor = valor.toLowerCase();
	
	var indexSen = valor.indexOf("sin");
	var indexCos = valor.indexOf("cos");
	
	var result = '';
	
	for(var i = 0; i < valor.length; i++) {
		poeGrau = false;
		if(i==indexSen||i==indexCos) {
			comecaContar = true;
		}
		if(comecaContar && valor.charAt(i)=='(') {
			contadorAbreParenteses++;
		}
		if(comecaContar && valor.charAt(i)==')') {
			contadorAbreParenteses--;
			if(contadorAbreParenteses == 0) {
				poeGrau = true;
			}
		}
		
		if(poeGrau) {
			result+= '°';
		}

		result += valor.charAt(i);
		 
	}
	//result+='+0*i';
	return result;
	
}

function comparaComplexo(c1, c2) {

	c1=c1.replace(/\[/g,'(');
	c1=c1.replace(/\]/g,')');
	c2=c2.replace(/\[/g,'(');
	c2=c2.replace(/\]/g,')');

	if(!validaCaracter(c1) || !validaParenteses(c1)) {
		//alert(c1);
		return false;
	}
	
	c1 = validaExpressaoComplexo(c1);
	c2 = validaExpressaoComplexo(c2);
	
	var applet = document.ggbApplet;
	applet.deleteObject('c1');
	applet.deleteObject('c2');
	
	applet.evalCommand('c1 = '+c1);
	applet.setVisible('c1',false);
	applet.evalCommand('c2 = '+c2);
	applet.setVisible('c2',false);
	applet.evalCommand('resp = c1-c2');
	applet.setVisible('resp',false);

	var saidaX = applet.getXcoord('resp');
	var saidaY = applet.getYcoord('resp');
	//alert(applet.isDefined('c1'));
	if(!applet.isDefined('c1')) {
		return false;
	}
	//alert(saidaX);
	//alert(saidaY);

	if(Math.abs(saidaX)<0.3 && Math.abs(saidaY)<0.3)
		return true;
	else
		return false;
	
}

/**********************
 * Funcoes de Sorteio *
 **********************/
function randomTransformacao() {
	/*
	 * 0-rotacao
	 * 1-dilatacao
	 * 2-translacao
	 */
	var listaTransformacao = new Array();
	for(var i = 0; i < 3; i++) {
		listaTransformacao.push(i);	//Coloca os indices das transformacoes em uma lista
	}
	//console.log('Lista:'+listaTransformacao);
	var indice = Math.floor(Math.random() * 3);	//Sorteia um numero de 0 a 2
	//console.log('Primeiro indice:'+indice);
	var transformacao1 = listaTransformacao[indice];//Pega  aprimeira tranformacao
	//console.log('Transformacao1:'+transformacao1)
	listaTransformacao.splice(indice,1);//Retira da lista o numeo ja sorteado
	//console.log('Lista depois:'+listaTransformacao);
	
	indice = Math.floor(Math.random() * 2);	//Sorteia um numero de 0 a 1
	//console.log('Segundo indice:'+indice);
	var transformacao2 = listaTransformacao[indice];
	//console.log('Transformacao2:'+transformacao2)
	listaTransformacao.splice(indice,1);//Retira da lista o numeo ja sorteado

	setResp('transformacao1',transformacao1);
	setResp('transformacao2',transformacao2);
	setResp('transformacao3',listaTransformacao[0]);
	
	switch (transformacao1) {
		case 0://Rotacao
			rotacao(getResp('a'), getResp('b'));
			$('msgErroDinamicaQ13B').update(msgErroRotacao);
			break;
		case 1://Dilatacao
			dilatacao(getResp('real'));
			$('msgErroDinamicaQ13B').update(msgErroDilatacao);
			break;
		default://Translacao
			translacao(getResp('aReal'), getResp('bReal'));
			$('msgErroDinamicaQ13B').update(msgErroTranslacao);
			break;
	}

}

function rotacao(aGuardado, bGuardado) {
	//console.log('Entrei rotacao');
	if(aGuardado == 'undefined') {
		var anguloLista = new Array();
		for(i = 0, j = 0; i < 25; i++, j+=15) {
			anguloLista[i] = j.toFixed(1);	//Coloca os anguloLista [0, 360] em uma lista
		}
		//console.log("lista: "+anguloLista);
		
		//Sorteia um indice
		var indice = Math.floor(Math.random() * anguloLista.length);
		var angulo = anguloLista[indice];
		angulo = grausParaRadianos(angulo);
		var a = Math.cos(angulo);
		setResp('a', a);
		var b = Math.sin(angulo);
		setResp('b', b);
	} else {
		var a = Number(aGuardado);
		var b = Number(bGuardado);
	}

	var applet = document.ggbApplet;
	applet.evalCommand('r_2 = 0');
	setResp('r2Rotacao',0);
	applet.evalCommand('r_1 = ' + a + ' + ' + b + '*i');
	setResp('r1Rotacao',a + ' + ' + b + '*i');
	//console.log('indice: '+indice);
	//console.log('angulo: '+angulo);
	
}

function dilatacao(realGuardado) {
	//console.log('Entrei dilatacao');
	if(realGuardado == 'undefined') {
		var reais = new Array();

		for(i = 0, j = 0; i < 31; i++, j+=0.1) {
			reais[i] = j.toFixed(1);
			//console.log('reais: '+reais[i]);
		}

		var indice = Math.floor(Math.random() * reais.length);
		var real = reais[indice];
		setResp('real',real);
		//console.log(real);
	} else {
		var real = Number(realGuardado);
	}
	
	var applet = document.ggbApplet;
	applet.evalCommand('r_2 = 0');
	setResp('r2Dilatacao',0);
	applet.evalCommand('r_1 = '+real+'+0*i');
	setResp('r1Dilatacao',real+'+0*i');
	
}

function translacao(aRealGuardado, bRealGuardado) {
	//console.log('Entrei translacao');
	if(aRealGuardado == 'undefined') {
		var reais = new Array();
		
		for(i = 0, j = -3; i < 13; i++, j+=0.5) {
			reais[i] = j.toFixed(1);
			//console.log('reais: '+reais[i]);
		}
		
		var indice = Math.floor(Math.random() * reais.length);
		var aReal = reais[indice];
		setResp('aReal',aReal);

		indice = Math.floor(Math.random() * reais.length);
		var bReal = reais[indice];
		setResp('bReal',bReal);
		//console.log(aReal);
		//console.log(bReal);
	} else {
		var aReal = Number(aRealGuardado);
		var bReal = Number(bRealGuardado);
	}
	
	var applet = document.ggbApplet;
	applet.evalCommand('r_1 = 1 + 0*i');
	setResp('r1Translacao', '1 + 0*i');
	applet.evalCommand('r_2 = ' + aReal + ' + ' + bReal + '*i');
	setResp('r2Translacao', aReal + ' + ' + bReal + '*i');

}

function rotaDilatacao() {
	//console.log('entrei rotaDilatacao');
	//Rotacao
	var anguloLista = new Array();
	for(i = 0, j = 0; i < 25; i++, j+=15) {
		anguloLista[i] = j.toFixed(1);	//Coloca os anguloLista [0, 360] em uma lista
	}
	
	var indice = Math.floor(Math.random() * anguloLista.length);
	var angulo = anguloLista[indice];
	angulo = grausParaRadianos(angulo);
	var a = Math.cos(angulo);
	var b = Math.sin(angulo);
	//Fim da rotacao

	//Dilatacao
	var reais = new Array();
	for(i = 0, j = 0; i < 31; i++, j+=0.1) {
		reais[i] = j;
	}

	var indice = Math.floor(Math.random() * reais.length);
	var real = reais[indice];
	//Fim dilatacao
	
	var applet = document.ggbApplet;
	applet.evalCommand('r_2 = 0');
	applet.evalCommand('r_1 = ' + (a*real) + ' + ' + (b*real) + '*i');	//r1_rotacao * r1_dilatacao
	//applet.evalCommand('r_1 = '+real);
	
}

function apagaSorteioGuardado() {
	setResp('a','undefined');
	setResp('b','undefined');
	setResp('real','undefined');
	setResp('aReal','undefined');
	setResp('bReal','undefined');
}

/**
 * Converte um valor de graus pra radianos
 * @param {Object} valor	valor em graus a ser convertido
 */
function grausParaRadianos(valor) {
	var angulo = (valor / 180) * Math.PI;

	return angulo;	
}

/**
 * Converte um valor de radianos pra graus
 * @param {Object} valor	valor em radianos a ser convertido
 */
function radianosParaGraus(valor) {
	var angulo = (valor * 180) / Math.PI;

	return angulo;	
}

function radioChecked() {
	$('AB').checked = true;
	$('checkBoxInfo').checked = true;
}

function mostrarInfo() {
	var applet = document.ggbApplet;

	if($('checkBoxInfo').checked) {
		applet.setVisible('texto1',true);
	} else {
		applet.setVisible('texto1',false);
	}
}

function mostrarCoordenadas() {
	var applet = document.ggbApplet;

	if($('checkBoxCoord').checked) {
		if($('AB').checked) {
			applet.setValue('a',1);
			applet.setValue('b',0);
			applet.setValue('c',0);
		} else if($('BC').checked) {
			applet.setValue('b',1);
			applet.setValue('a',0);			
			applet.setValue('c',0);
		} else if($('AC').checked) {
			applet.setValue('c',1);
			applet.setValue('a',0);			
			applet.setValue('b',0);
		}
	} else {
		applet.setValue('a',0);
		applet.setValue('b',0);			
		applet.setValue('c',0);
	}
}

function mostrarRetaSuporte() {
	var applet = document.ggbApplet;
	
	if($('checkBoxReta').checked) {
		if($('AB').checked) {
			applet.setValue('boolean1',1);
			applet.setValue('boolean2',0);
			applet.setValue('boolean3',0);
		} else if($('BC').checked) {
			applet.setValue('boolean2',1);
			applet.setValue('boolean1',0);			
			applet.setValue('boolean3',0);
		} else if($('AC').checked) {
			applet.setValue('boolean3',1);
			applet.setValue('boolean1',0);			
			applet.setValue('boolean2',0);
		}
	} else {
		applet.setValue('boolean1',0);
		applet.setValue('boolean2',0);			
		applet.setValue('boolean3',0);
	}
}

function mostrarTamanho() {
	var applet = document.ggbApplet;
	
	if($('checkBoxTamanho').checked) {
		if($('AB').checked) {
			applet.setValue('boolean1',1);
			applet.setValue('boolean2',0);
			applet.setValue('boolean3',0);
			applet.setLineThickness('a_i',2);
			applet.setLineThickness('a_u',2);
			applet.setLineThickness('b_i',2);
			applet.setLineThickness('b_u',2);
			applet.setLineThickness('c_i',5);
			applet.setLineThickness('c_u',5);
		} else if($('BC').checked) {
			applet.setValue('boolean2',1);
			applet.setValue('boolean1',0);			
			applet.setValue('boolean3',0);
			applet.setLineThickness('a_i',5);
			applet.setLineThickness('a_u',5);
			applet.setLineThickness('b_i',2);
			applet.setLineThickness('b_u',2);
			applet.setLineThickness('c_i',2);
			applet.setLineThickness('c_u',2);
		} else if($('AC').checked) {
			applet.setValue('boolean3',1);
			applet.setValue('boolean1',0);			
			applet.setValue('boolean2',0);
			applet.setLineThickness('a_i',2);
			applet.setLineThickness('a_u',2);
			applet.setLineThickness('b_i',5);
			applet.setLineThickness('b_u',5);
			applet.setLineThickness('c_i',2);
			applet.setLineThickness('c_u',2);
		}
	} else {
		applet.setValue('boolean1',0);
		applet.setValue('boolean2',0);			
		applet.setValue('boolean3',0);
		applet.setLineThickness('a_i',2);
		applet.setLineThickness('a_u',2);
		applet.setLineThickness('b_i',2);
		applet.setLineThickness('b_u',2);
		applet.setLineThickness('c_i',2);
		applet.setLineThickness('c_u',2);
	}
}

function mostrarTudo(parte) {
	var applet = document.ggbApplet;
	if(parte!=4) {
		if($('checkBoxCoord').checked) {
			if($('AB').checked) {
				applet.setValue('coord1',1);
				applet.setValue('coord2',0);
				applet.setValue('coord3',0);
			} else if($('BC').checked) {
				applet.setValue('coord2',1);
				applet.setValue('coord1',0);			
				applet.setValue('coord3',0);
			} else if($('AC').checked) {
				applet.setValue('coord3',1);
				applet.setValue('coord1',0);			
				applet.setValue('coord2',0);
			}
		} else {
			applet.setValue('coord1',0);
			applet.setValue('coord2',0);			
			applet.setValue('coord3',0);
		}
	}

	if($('checkBoxTamanho').checked) {
		if($('AB').checked) {
			applet.setValue('tamanho1',1);
			applet.setValue('tamanho2',0);
			applet.setValue('tamanho3',0);
			applet.setLineThickness('a_i',2);
			applet.setLineThickness('a_u',2);
			applet.setLineThickness('b_i',2);
			applet.setLineThickness('b_u',2);
			applet.setLineThickness('c_i',5);
			applet.setLineThickness('c_u',5);
		} else if($('BC').checked) {
			applet.setValue('tamanho2',1);
			applet.setValue('tamanho1',0);			
			applet.setValue('tamanho3',0);
			applet.setLineThickness('a_i',5);
			applet.setLineThickness('a_u',5);
			applet.setLineThickness('b_i',2);
			applet.setLineThickness('b_u',2);
			applet.setLineThickness('c_i',2);
			applet.setLineThickness('c_u',2);
		} else if($('AC').checked) {
			applet.setValue('tamanho3',1);
			applet.setValue('tamanho1',0);			
			applet.setValue('tamanho2',0);
			applet.setLineThickness('a_i',2);
			applet.setLineThickness('a_u',2);
			applet.setLineThickness('b_i',5);
			applet.setLineThickness('b_u',5);
			applet.setLineThickness('c_i',2);
			applet.setLineThickness('c_u',2);
		}
	} else {
		applet.setValue('tamanho1',0);
		applet.setValue('tamanho2',0);			
		applet.setValue('tamanho3',0);
		applet.setLineThickness('a_i',2);
		applet.setLineThickness('a_u',2);
		applet.setLineThickness('b_i',2);
		applet.setLineThickness('b_u',2);
		applet.setLineThickness('c_i',2);
		applet.setLineThickness('c_u',2);
	}

	if($('checkBoxReta').checked) {
		if($('AB').checked) {
			applet.setValue('reta1',1);
			applet.setValue('reta2',0);
			applet.setValue('reta3',0);
		} else if($('BC').checked) {
			applet.setValue('reta2',1);
			applet.setValue('reta1',0);			
			applet.setValue('reta3',0);
		} else if($('AC').checked) {
			applet.setValue('reta3',1);
			applet.setValue('reta1',0);			
			applet.setValue('reta2',0);
		}
	} else {
		applet.setValue('reta1',0);
		applet.setValue('reta2',0);			
		applet.setValue('reta3',0);
	}
	
}

/***********************************************
 * Funcoes gerais do funcionamento do software *
 ***********************************************/
function setAtividade(nome,estado,forcar) {
	if (forcar == undefined) {
		forcar=false;
	}
	if (!forcar) {
		if ((getResp(nome)<estado) || getResp(nome)=='' || getResp(nome)=="undefined") {
			setResp(nome,estado);
		}
	} else {
		setResp(nome,estado);
	}
}

function valida(valor) {
	valor = valor.replace('.',',');
	if ((valor==null) || (valor=='undefined')) {
		return '';
	}
	return valor;
}

/*********************************************
 * Funcoes do arquivo procnumerico do Matias *
 *********************************************/
 function validaExpressao(valor)
{
	valor = String(valor).replace(/\,/g,".");
	valor = valor.replace(/[0-9\+\-\*\/\(\)π\.]/gi,"");
	valor = valor.replace(/pi/gi,"");
	valor = valor.replace(/√/gi,"");
	valor = valor.replace(/\^/gi,"");
	valor = valor.replace(/[²³]/gi,"");
	valor = valor.replace(/\s/gi,"");
	if (valor.length==0) return true;
	else return false;
}


function contaParenteses(valor)
{

	valor = String(valor);
	var novovalor1 = valor.replace(/\)/g,"");
	var novovalor2 = valor.replace(/\(/g,"");
	
	return (novovalor1.length == novovalor2.length);

}

function processaExpressaoParenteses(valor)
{

	if ((valor!='') && (validaExpressao(valor)) && contaParenteses(valor))
	{
		var count = 0;
		var countMax = 0;
		valor = String(valor);
		valor = valor.replace(/\s/gi,"");

		for (var i=0;i<valor.length;i++) 
		{
			if (valor.charAt(i)=="(") 
				{
				count++;
				countMax=Math.max(countMax,count);
				valor = valor.replace(/\(/,"{"+String(count)+"}");
				}
			if (valor.charAt(i)==")") 
				{
				valor = valor.replace(/\)/,"{"+String(count)+"}");
				count--;
				}
		}
		
		

		var debug = 100;
		var conteudo = "";
		var elements = Array(); 
		while ((valor.indexOf('{')>-1) && (debug>0))
		{
			valor = valor.replace("{"+countMax+"}","{X}");
			valor = valor.replace("{"+countMax+"}","{X}");
			var re = /\{X\}(.*)\{X\}/;
			elements.push(re.exec(valor)[1]);
			valor = valor.replace(re,"["+Number(elements.size()-1)+"]");
			if (valor.indexOf("{"+countMax+"}")==-1) countMax--;
			debug--;	
		}
		elements.push(valor);

		
		for (var i=0;i<elements.size();i++) 
		{
			var re = /\[(.{0,2})\]/;
			
			debug = 100;
			while (re.test(elements[i]) && (debug>0))
			{
				elements[i]=elements[i].replace(re,'('+elements[re.exec(elements[i])[1]]+')');
				debug--;
			}

			elements[i]=processaExpressao(elements[i]);
			
		}
		
		return elements.last();
	
	} else return NaN;
	

}

function processaExpressao(valor)
{
	
	if ((valor!='') && (validaExpressao(valor)))
	{

		valor = valor.replace(/\,/g,".");
		valor = String(valor).replace(/pi/gi,'π');
		valor = colocaOperacoesPI(valor);
		valor = processaRaiz(valor);
		valor = processaPow(valor);
		valor = valor.replace(/π/gi,'Math.PI');
		valor = valor.replace(/\-\-/gi,'- -');
		
		
		try
		{
			eval('var resp='+valor);
		}
		catch (err) {var resp = NaN};
		return resp;
	}
	else return NaN;
}

function colocaOperacoesPI(valor)
{
	valor = String(valor).replace(/([0-9\)π\.])π/g,'$1*π');
	valor = String(valor).replace(/π([0-9\(π\.])/g,'π*$1');
	return valor;
}

function processaRaiz(valor)
{

	valor = String(valor).replace(/√([π,0-9\.\(\)²³]{0,})/g,'Math.sqrt($1)');
	return valor;
}

function processaPow(valor)
{	
	
	valor = String(valor).replace(/²/g,'^2');
	valor = String(valor).replace(/³/g,'^3');

	
	var re1 = /[\√\^\+\-\*\/]{1,}\^/;
	var re2 = /\^[\√\^\+\-\*\/]{1,}/;
	
	
	if ((re1.test(valor)) || (re2.test(valor))) {
		return 'Math.pow()';
	} 
	else
	{
		
		// (1) ^ (2)
		valor = String(valor).replace(/\(([\^π0-9\.\-]{1,})\)\^\(([\^π0-9\.\-]{1,})\)/g,'Math.pow($1,$2)');
		
		// 1 ^ (2)
		valor = String(valor).replace(/([√π,0-9\.]{1,})\^\(([π,0-9\.\-]{1,})\)/g,'Math.pow($1,$2)');
		
		// (1) ^ 2
		valor = String(valor).replace(/\(([\^√π,0-9\.\-]{1,})\)\^([π,0-9\.]{1,})/g,'Math.pow($1,$2)');
		
		// 1 ^ 2
		valor = String(valor).replace(/([√π,0-9\.]{1,})\^([π,0-9\.]{1,})/g,'Math.pow($1,$2)');
		
		
		return valor;
	}
}



function roundNumber(num, dec) {
	var result = Math.round( Math.round( num * Math.pow( 10, dec + 1 ) ) / Math.pow( 10, 1 ) ) / Math.pow(10,dec);
	return result;
}

