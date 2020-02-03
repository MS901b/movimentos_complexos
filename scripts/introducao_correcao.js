var msgEspecificaCaracter = '<br>Você usou um caractere não permitido para escrever seu número. Lembre-se de que não é necessário usar símbolo para indicação de ângulo.<br>';
var msgEspecificaParenteses = '<br>Há algum erro na expressão que você digitou. Verifique se os parênteses estão corretamente dispostos.<br>';
var msgEspecificaForaApplet = '<br>O número que você digitou ficou fora do plano representado, mas a forma algébrica e trigonométrica desse número estão apresentadas no canto esquerdo do gráfico.<br>';

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
	var applet = document.ggbApplet;
	mudarEscala(-10,10,-10,10);
}

/**************************
 * Correcao da Introducao *
 **************************/
function corrigirExpressao() {
	var applet = document.ggbApplet;
	var valorZ = $('respostaZ').value;
	valorZ = valorZ.replace(/sen/gi,"sin");//Troca o "sen" por "sin"
	valorZ = valorZ.replace(/,/g,'.');
	
	valorZ=valorZ.replace(/\[/g,'(');
	valorZ=valorZ.replace(/\]/g,')');

	var err_msg = "";
	var erro = false;
	
	if(!validaCaracter(valorZ)) {
		erro = true;
		err_msg+=msgEspecificaCaracter;
		$('msgDinamicaEspecifica').update(err_msg);
		$('msgDinamicaEspecifica').style.color = "#ff0000";
	}
	if(!validaParenteses(valorZ)) {
		erro = true;
		err_msg+=msgEspecificaParenteses;
		$('msgDinamicaEspecifica').update(err_msg);
		$('msgDinamicaEspecifica').style.color = "#ff0000";
	}
	if(!validaForaApplet(valorZ)) {
		//console.log('Entrei fora');
		//erro = true;
		err_msg+=msgEspecificaForaApplet;
		$('msgDinamicaEspecifica').update(err_msg);
		$('msgDinamicaEspecifica').style.color = "#000000";
	}

	if(!erro) {
		$('respostaZ').value = '';
		$('msgDinamicaEspecifica').update(err_msg);
		valorZ = colocaGrau(valorZ);
		//alert(valorZ);
		applet.setFixed('Z',false);
		applet.evalCommand('Z = '+valorZ+'+0*i');
		applet.setVisible('Z',true);
		applet.setFixed('Z',true);
		applet.setLabelStyle('Z',0);
		applet.setLabelVisible('Z',true);
		applet.setVisible('text1',true);
	}
	else
	{
		applet.setVisible('Z',false);
		applet.setVisible('text1',false);

	}
	
}
