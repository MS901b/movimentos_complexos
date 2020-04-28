var SalvaLocalLoaded = true;
var GGBLoaded = false;
var HTMLLoaded = false;

document.observe('dom:safeLoaded', function(ev) {
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
    if (SalvaLocalLoaded && GGBLoaded && HTMLLoaded) InitOnLoad();
}

function InitOnLoad() {
    setAtividade('atividade_1', 2, false); //Comecou a fazer a atividade_1

    switch (PosicaoAtual.Parte) {
        case 0: //Parte1
            registerListeners();

            /* Traz respostas do aluno */
            $('parte1_q1_a').value = valida(getResp('atividade1_parte1_q1_a'));
            Event.observe('parte1_q1_a', 'change', function(evento) {
                setResp('atividade1_parte1_q1_a', $('parte1_q1_a').value);
            });

            $('parte1_q2_b').value = valida(getResp('atividade1_parte1_q2_b'));
            Event.observe('parte1_q2_b', 'change', function(evento) {
                setResp('atividade1_parte1_q2_b', $('parte1_q2_b').value);
            });

            $('parte1_q3_b').value = valida(getResp('atividade1_parte1_q3_b'));
            Event.observe('parte1_q3_b', 'change', function(evento) {
                setResp('atividade1_parte1_q3_b', $('parte1_q3_b').value);
            });

            $('parte1_q4_a_1').checked = (getResp('atividade1_parte1_q4_a') == 'congruentes');
            $('parte1_q4_a_2').checked = (getResp('atividade1_parte1_q4_a') == 'equilateros');
            $('parte1_q4_a_3').checked = (getResp('atividade1_parte1_q4_a') == 'retangulos');
            $('parte1_q4_a_4').checked = (getResp('atividade1_parte1_q4_a') == 'razao');
            Event.observe('parte1_q4_a_1', 'change', function(evento) {
                setResp('atividade1_parte1_q4_a', $('parte1_q4_a_1').value);
            });
            Event.observe('parte1_q4_a_2', 'change', function(evento) {
                setResp('atividade1_parte1_q4_a', $('parte1_q4_a_2').value);
            });
            Event.observe('parte1_q4_a_3', 'change', function(evento) {
                setResp('atividade1_parte1_q4_a', $('parte1_q4_a_3').value);
            });
            Event.observe('parte1_q4_a_4', 'change', function(evento) {
                setResp('atividade1_parte1_q4_a', $('parte1_q4_a_4').value);
            });

            break;
        case 1: //Parte2
            /* Traz respostas do aluno */
            $('parte2_q6_a').value = valida(getResp('atividade1_parte2_q6_a'));
            Event.observe('parte2_q6_a', 'change', function(evento) {
                setResp('atividade1_parte2_q6_a', $('parte2_q6_a').value);
            });

            $('parte2_q6_b_1').checked = (getResp('atividade1_parte2_q6_b') == 'sim');
            $('parte2_q6_b_2').checked = (getResp('atividade1_parte2_q6_b') == 'nao');
            Event.observe('parte2_q6_b_1', 'change', function(evento) {
                setResp('atividade1_parte2_q6_b', $('parte2_q6_b_1').value);
            });
            Event.observe('parte2_q6_b_2', 'change', function(evento) {
                setResp('atividade1_parte2_q6_b', $('parte2_q6_b_2').value);
            });

            $('parte2_q7_a_11').value = valida(getResp('atividade1_parte2_q7_a_11'));
            Event.observe('parte2_q7_a_11', 'change', function(evento) {
                setResp('atividade1_parte2_q7_a_11', $('parte2_q7_a_11').value);
            });

            $('parte2_q7_b_11').value = valida(getResp('atividade1_parte2_q7_b_11'));
            Event.observe('parte2_q7_b_11', 'change', function(evento) {
                setResp('atividade1_parte2_q7_b_11', $('parte2_q7_b_11').value);
            });

            $('parte2_q7_b_21').value = valida(getResp('atividade1_parte2_q7_b_21'));
            Event.observe('parte2_q7_b_21', 'change', function(evento) {
                setResp('atividade1_parte2_q7_b_21', $('parte2_q7_b_21').value);
            });

            $('parte2_q7_b_31').value = valida(getResp('atividade1_parte2_q7_b_31'));
            Event.observe('parte2_q7_b_31', 'change', function(evento) {
                setResp('atividade1_parte2_q7_b_31', $('parte2_q7_b_31').value);
            });

            $('parte2_q7_c_11').value = valida(getResp('atividade1_parte2_q7_c_11'));
            Event.observe('parte2_q7_c_11', 'change', function(evento) {
                setResp('atividade1_parte2_q7_c_11', $('parte2_q7_c_11').value);
            });

            $('parte2_q8_a_1').checked = (getResp('atividade1_parte2_q8_a') == 'complemento');
            $('parte2_q8_a_2').checked = (getResp('atividade1_parte2_q8_a') == 'suplemento');
            $('parte2_q8_a_3').checked = (getResp('atividade1_parte2_q8_a') == 'mesmo');
            $('parte2_q8_a_4').checked = (getResp('atividade1_parte2_q8_a') == 'diferentes');
            Event.observe('parte2_q8_a_1', 'change', function(evento) {
                setResp('atividade1_parte2_q8_a', $('parte2_q8_a_1').value);
            });
            Event.observe('parte2_q8_a_2', 'change', function(evento) {
                setResp('atividade1_parte2_q8_a', $('parte2_q8_a_2').value);
            });
            Event.observe('parte2_q8_a_3', 'change', function(evento) {
                setResp('atividade1_parte2_q8_a', $('parte2_q8_a_3').value);
            });
            Event.observe('parte2_q8_a_4', 'change', function(evento) {
                setResp('atividade1_parte2_q8_a', $('parte2_q8_a_4').value);
            });

            break;

        case 2: //Parte3
            /* Traz respostas do aluno */
            $('parte3_q9_a_11').value = valida(getResp('atividade1_parte3_q9_a_11'));
            Event.observe('parte3_q9_a_11', 'change', function(evento) {
                setResp('atividade1_parte3_q9_a_11', $('parte3_q9_a_11').value);
            });

            $('parte3_q9_a_21').value = valida(getResp('atividade1_parte3_q9_a_21'));
            Event.observe('parte3_q9_a_21', 'change', function(evento) {
                setResp('atividade1_parte3_q9_a_21', $('parte3_q9_a_21').value);
            });

            $('parte3_q9_b_11').value = valida(getResp('atividade1_parte3_q9_b_11'));
            Event.observe('parte3_q9_b_11', 'change', function(evento) {
                setResp('atividade1_parte3_q9_b_11', $('parte3_q9_b_11').value);
            });

            $('parte3_q9_b_21').value = valida(getResp('atividade1_parte3_q9_b_21'));
            Event.observe('parte3_q9_b_21', 'change', function(evento) {
                setResp('atividade1_parte3_q9_b_21', $('parte3_q9_b_21').value);
            });

            $('parte3_q9_c_11').value = valida(getResp('atividade1_parte3_q9_c_11'));
            Event.observe('parte3_q9_c_11', 'change', function(evento) {
                setResp('atividade1_parte3_q9_c_11', $('parte3_q9_c_11').value);
            });

            $('parte3_q9_c_21').value = valida(getResp('atividade1_parte3_q9_c_21'));
            Event.observe('parte3_q9_c_21', 'change', function(evento) {
                setResp('atividade1_parte3_q9_c_21', $('parte3_q9_c_21').value);
            });

            $('parte3_q9_d').value = valida(getResp('atividade1_parte3_q9_d'));
            Event.observe('parte3_q9_d', 'change', function(evento) {
                setResp('atividade1_parte3_q9_d', $('parte3_q9_d').value);
            });

            break;

        case 3: //Parte4
            initParte4();

            /* Traz respostas do aluno */
            $('parte4_q10_a_1').checked = (getResp('atividade1_parte4_q10_a') == 'sim');
            $('parte4_q10_a_2').checked = (getResp('atividade1_parte4_q10_a') == 'nao');
            Event.observe('parte4_q10_a_1', 'change', function(evento) {
                setResp('atividade1_parte4_q10_a', $('parte4_q10_a_1').value);
            });
            Event.observe('parte4_q10_a_2', 'change', function(evento) {
                setResp('atividade1_parte4_q10_a', $('parte4_q10_a_2').value);
            });

            $('parte4_q10_b').value = valida(getResp('atividade1_parte4_q10_b'));
            Event.observe('parte4_q10_b', 'change', function(evento) {
                setResp('atividade1_parte4_q10_b', $('parte4_q10_b').value);
            });

            $('parte4_q10_c_1').checked = (getResp('atividade1_parte4_q10_c') == 'sim');
            $('parte4_q10_c_2').checked = (getResp('atividade1_parte4_q10_c') == 'nao');
            Event.observe('parte4_q10_c_1', 'change', function(evento) {
                setResp('atividade1_parte4_q10_c', $('parte4_q10_c_1').value);
            });
            Event.observe('parte4_q10_c_2', 'change', function(evento) {
                setResp('atividade1_parte4_q10_c', $('parte4_q10_c_2').value);
            });

            $('parte4_q10_d_11').value = valida(getResp('atividade1_parte4_q10_d_11'));
            Event.observe('parte4_q10_d_11', 'change', function(evento) {
                setResp('atividade1_parte4_q10_d_11', $('parte4_q10_d_11').value);
            });

            break;

        case 4: //Parte5
            initParte5();

            /* Traz respostas do aluno */
            $('parte5_q11_a_1').checked = (getResp('atividade1_parte5_q11_a') == 'sim');
            $('parte5_q11_a_2').checked = (getResp('atividade1_parte5_q11_a') == 'nao');
            Event.observe('parte5_q11_a_1', 'change', function(evento) {
                setResp('atividade1_parte5_q11_a', $('parte5_q11_a_1').value);
            });
            Event.observe('parte5_q11_a_2', 'change', function(evento) {
                setResp('atividade1_parte5_q11_a', $('parte5_q11_a_2').value);
            });

            $('parte5_q11_b_1').checked = (getResp('atividade1_parte5_q11_b') == 'sim');
            $('parte5_q11_b_2').checked = (getResp('atividade1_parte5_q11_b') == 'nao');
            Event.observe('parte5_q11_b_1', 'change', function(evento) {
                setResp('atividade1_parte5_q11_b', $('parte5_q11_b_1').value);
            });
            Event.observe('parte5_q11_b_2', 'change', function(evento) {
                setResp('atividade1_parte5_q11_b', $('parte5_q11_b_2').value);
            });

            break;

        default: //Parte6
            apagaSorteioGuardado();
            randomTransformacao();

            /*
            $('parte6_q13_a_1').checked=(getResp('atividade1_parte6_q13_a')=='complemento');
            $('parte6_q13_a_2').checked=(getResp('atividade1_parte6_q13_a')=='suplemento');
            $('parte6_q13_a_3').checked=(getResp('atividade1_parte6_q13_a')=='mesmo');
            $('parte6_q13_a_4').checked=(getResp('atividade1_parte6_q13_a')=='diferentes');
            Event.observe('parte6_q13_a_1', 'change', function(evento){
            	setResp('atividade1_parte6_q13_a',$('parte6_q13_a_1').value);
            });
            Event.observe('parte6_q13_a_2', 'change', function(evento){
            	setResp('atividade1_parte6_q13_a',$('parte6_q13_a_2').value);
            });
            Event.observe('parte6_q13_a_3', 'change', function(evento){
            	setResp('atividade1_parte6_q13_a',$('parte6_q13_a_3').value);
            });
            Event.observe('parte6_q13_a_4', 'change', function(evento){
            	setResp('atividade1_parte6_q13_a',$('parte6_q13_a_4').value);
            });

            $('parte6_q13_b_11').value = valida(getResp('atividade1_parte6_q13_b_11'));
            Event.observe('parte6_q13_b_11', 'change', function(evento){
            	setResp('atividade1_parte6_q13_b_11',$('parte6_q13_b_11').value);
            });

            $('parte6_q13_b_21').value = valida(getResp('atividade1_parte6_q13_b_21'));
            Event.observe('parte6_q13_b_21', 'change', function(evento){
            	setResp('atividade1_parte6_q13_b_21',$('parte6_q13_b_21').value);
            });

            $('parte6_q14_a_1').checked=(getResp('atividade1_parte6_q14_a')=='complemento');
            $('parte6_q14_a_2').checked=(getResp('atividade1_parte6_q14_a')=='suplemento');
            $('parte6_q14_a_3').checked=(getResp('atividade1_parte6_q14_a')=='mesmo');
            $('parte6_q14_a_4').checked=(getResp('atividade1_parte6_q14_a')=='diferentes');
            Event.observe('parte6_q14_a_1', 'change', function(evento){
            	setResp('atividade1_parte6_q14_a',$('parte6_q14_a_1').value);
            });
            Event.observe('parte6_q14_a_2', 'change', function(evento){
            	setResp('atividade1_parte6_q14_a',$('parte6_q14_a_2').value);
            });
            Event.observe('parte6_q14_a_3', 'change', function(evento){
            	setResp('atividade1_parte6_q14_a',$('parte6_q14_a_3').value);
            });
            Event.observe('parte6_q14_a_4', 'change', function(evento){
            	setResp('atividade1_parte6_q14_a',$('parte6_q14_a_4').value);
            });

            $('parte6_q14_b_11').value = valida(getResp('atividade1_parte6_q14_b_11'));
            Event.observe('parte6_q14_b_11', 'change', function(evento){
            	setResp('atividade1_parte6_q14_b_11',$('parte6_q14_b_11').value);
            });

            $('parte6_q14_b_21').value = valida(getResp('atividade1_parte6_q14_b_21'));
            Event.observe('parte6_q14_b_21', 'change', function(evento){
            	setResp('atividade1_parte6_q14_b_21',$('parte6_q14_b_21').value);
            });

            $('parte6_q15_a_1').checked=(getResp('atividade1_parte6_q15_a')=='complemento');
            $('parte6_q15_a_2').checked=(getResp('atividade1_parte6_q15_a')=='suplemento');
            $('parte6_q15_a_3').checked=(getResp('atividade1_parte6_q15_a')=='mesmo');
            $('parte6_q15_a_4').checked=(getResp('atividade1_parte6_q15_a')=='diferentes');
            Event.observe('parte6_q15_a_1', 'change', function(evento){
            	setResp('atividade1_parte6_q15_a',$('parte6_q15_a_1').value);
            });
            Event.observe('parte6_q15_a_2', 'change', function(evento){
            	setResp('atividade1_parte6_q15_a',$('parte6_q15_a_2').value);
            });
            Event.observe('parte6_q15_a_3', 'change', function(evento){
            	setResp('atividade1_parte6_q15_a',$('parte6_q15_a_3').value);
            });
            Event.observe('parte6_q15_a_4', 'change', function(evento){
            	setResp('atividade1_parte6_q15_a',$('parte6_q15_a_4').value);
            });

            $('parte6_q15_b_11').value = valida(getResp('atividade1_parte6_q15_b_11'));
            Event.observe('parte6_q15_b_11', 'change', function(evento){
            	setResp('atividade1_parte6_q15_b_11',$('parte6_q15_b_11').value);
            });

            $('parte6_q15_b_21').value = valida(getResp('atividade1_parte6_q15_b_21'));
            Event.observe('parte6_q15_b_21', 'change', function(evento){
            	setResp('atividade1_parte6_q15_b_21',$('parte6_q15_b_21').value);
            });
            */

            break;
    }

    radioChecked();

}

function tudoCerto() {
    if (PosicaoAtual.Parte == 5) { //Ultima parte
        setAtividade('atividade_1', 3, true); //atividade_1 estah feita
    }
}


/*****************************
 *	Funcoes de Inicializacao *
 *****************************/
var msgErroRotacao = 'Você já sabe que houve uma rotação. Observe o ângulo mostrado ao lado para determinar o argumento de Z<sub>1</sub>, lembre-se que seu módulo deve ser 1 e que Z<sub>2</sub> = 0+0i.';
var msgErroDilatacao = 'Você já sabe que houve uma dilatação. Observe agora o tamanho dos lados para determinar qual deve ser o módulo de Z<sub>1</sub>, lembre-se que Z<sub>2</sub> = 0 + 0i.';
var msgErroTranslacao = 'Você já sabe que houve uma translação. Observe o valor de vértices correspondentes para determinar o quanto houve de alteração na parte real e na parte imaginária.';
var msgErroRotaDilatacao = 'Você já sabe que ocorreram dilatação e rotação. Observe o ângulo mostrado ao lado para determinar o argumento de Z<sub>1</sub> e  o tamanho dos lados para determinar qual deve ser o módulo de Z<sub>1</sub>.';

function initParte4() {
    var applet = document.ggbApplet;
    applet.setFixed('Z_2', true);
}

function initParte5() {
    var applet = document.ggbApplet;
    applet.setCoords('Z_1', 1, 0);
    applet.setFixed('Z_1', true);
    applet.setCoords('Z_2', 0, 0);
}

/*******************
 * Update listener *
 *******************/
function registerListeners() {
    var applet = document.ggbApplet;
    applet.registerObjectUpdateListener('Z_1', 'updateListener');
    applet.registerObjectUpdateListener('Z_2', 'updateListener');
}

function updateListener(objName) {
    var applet = document.ggbApplet;

    var z1Real = applet.getXcoord('Z_1');
    z1Real = roundNumber(z1Real, 2);
    var z1Imaginario = applet.getYcoord('Z_1');
    z1Imaginario = roundNumber(z1Imaginario, 2);

    var z2Real = applet.getXcoord('Z_2');
    z2Real = roundNumber(z2Real, 2);
    var z2Imaginario = applet.getYcoord('Z_2');
    z2Imaginario = roundNumber(z2Imaginario, 2);

    $('z1Dinamico').update(z1Real + ((z1Imaginario >= 0) ? '+' : '') + z1Imaginario + 'i');
    $('z1DinamicoFormula').update(z1Real + ((z1Imaginario >= 0) ? '+' : '') + z1Imaginario + 'i');

    $('z2Dinamico').update(z2Real + ((z2Imaginario >= 0) ? '+' : '') + z2Imaginario + 'i');
    $('z2DinamicoFormula').update(z2Real + ((z2Imaginario >= 0) ? '+' : '') + z2Imaginario + 'i');

    var aLinhaReal = applet.getXcoord("A'");
    aLinhaReal = roundNumber(aLinhaReal, 2);
    var aLinhaImaginario = applet.getYcoord("A'");
    aLinhaImaginario = roundNumber(aLinhaImaginario, 2);
    //alert(applet.getXcoord('aLinha'));
    //alert(applet.getYcoord('aLinha'));
    $('aLinhaDinamico').update(aLinhaReal + ((aLinhaImaginario >= 0) ? '+' : '') + aLinhaImaginario + 'i');

}


/**********************
 * Selecionou Questao *
 **********************/
function selecionou_q_8() {
    var applet = document.ggbApplet;
    applet.setFixed('Z_1', false);
    applet.setColor('Z_1', 0, 0, 255);
}

function selecionou_q_12() {
    var applet = document.ggbApplet;
    applet.setFixed('Z_2', false);
    applet.setColor('Z_2', 0, 0, 255);
}

function selecionou_q_13() {
    switch (Number(getResp('transformacao1'))) {
        case 0: //Rotacao
            rotacao(getResp('a'), getResp('b'));
            $('msgErroDinamicaQ13B').update(msgErroRotacao);
            break;
        case 1: //Dilatacao
            dilatacao(getResp('real'));
            $('msgErroDinamicaQ13B').update(msgErroDilatacao);
            break;
        default: //Translacao
            translacao(getResp('aReal'), getResp('bReal'));
            $('msgErroDinamicaQ13B').update(msgErroTranslacao);
            break;
    }
}

function selecionou_q_14() {
    switch (Number(getResp('transformacao2'))) {
        case 0: //Rotacao
            rotacao(getResp('a'), getResp('b'));
            $('msgErroDinamicaQ14B').update(msgErroRotacao);
            break;
        case 1: //Dilatacao
            dilatacao(getResp('real'));
            $('msgErroDinamicaQ14B').update(msgErroDilatacao);
            break;
        default: //Translacao
            translacao(getResp('aReal'), getResp('bReal'));
            $('msgErroDinamicaQ14B').update(msgErroTranslacao);
            break;
    }

}

function selecionou_q_15() {
    switch (Number(getResp('transformacao3'))) {
        case 0: //Rotacao
            rotacao(getResp('a'), getResp('b'));
            $('msgErroDinamicaQ15B').update(msgErroRotacao);
            break;
        case 1: //Dilatacao
            dilatacao(getResp('real'));
            $('msgErroDinamicaQ15B').update(msgErroDilatacao);
            break;
        default: //Translacao
            translacao(getResp('aReal'), getResp('bReal'));
            $('msgErroDinamicaQ15B').update(msgErroTranslacao);
            break;
    }
}

/************
 * Correcao *
 ************/
function corrige_q_1_a(valor) {
    valor[0] = valor[0].replace(/,/g, '.');
    return [comparaComplexo(valor[0] + '+0*i', '2.5i')];
}

function corrige_q_2_a(valor) {
    var applet = document.ggbApplet;
    return [Math.abs(applet.getXcoord('Z_1') - 2) < 0.1 && Math.abs(applet.getYcoord('Z_1') - 1) < 0.1 &&
        Math.abs(applet.getXcoord('Z_2') - 1) < 0.1 && Math.abs(applet.getYcoord('Z_2') - 1) < 0.1
    ];
}

function corrige_q_2_b(valor) {
    valor[0] = valor[0].replace(/,/g, '.');
    var applet = document.ggbApplet;
    var xCoord = applet.getXcoord("B'");
    var yCoord = applet.getYcoord("B'");
    return [comparaComplexo(valor[0] + '+0*i', xCoord + '+(' + yCoord + ')*i')];
}

function corrige_q_3_a(valor) {
    var applet = document.ggbApplet;
    return [Math.abs(applet.getXcoord('Z_1') - 2) < 0.1 && Math.abs(applet.getYcoord('Z_1') - 1) < 0.1 &&
        Math.abs(applet.getXcoord('Z_2') - 1) < 0.1 && Math.abs(applet.getYcoord('Z_2') - 2) < 0.1
    ];
}

function corrige_q_3_b(valor) {
    valor[0] = valor[0].replace(/,/g, '.');
    var applet = document.ggbApplet;
    var xCoord = applet.getXcoord("B'");
    var yCoord = applet.getYcoord("B'");
    return [comparaComplexo(valor[0] + '+0*i', xCoord + '+(' + yCoord + ')*i')];
}

function corrige_q_4(valor) {
    return [valor[0] ? true : null, valor[1] ? false : null, valor[2] ? false : null, valor[3] ? false : null];
}

function corrige_q_5(valor) {
    var applet = document.ggbApplet;
    return [Math.abs(applet.getXcoord('Z_1') - 1) < 0.1 && Math.abs(applet.getYcoord('Z_1') - 0) < 0.1 &&
        Math.abs(applet.getXcoord('Z_2') - 0) < 0.1 && Math.abs(applet.getYcoord('Z_2') - 0) < 0.1
    ];
}

function corrige_q_6_a(valor) {
    valor[0] = processaExpressaoParenteses(valor[0]);
    return [valor[0] == 1];
}

function corrige_q_6_b(valor) {
    return [valor[0] ? false : null, valor[1] ? true : null];
}

function corrige_q_7_a(valor) {
    valor[0] = processaExpressao(valor[0]) % 360;
    var applet = document.ggbApplet;
    var angulo0 = Math.round(radianosParaGraus(applet.getValue('α'))) % 360;
    return [Math.abs(valor[0] - angulo0) < 0.01];
}

function corrige_q_7_b(valor) {
    valor[0] = processaExpressao(valor[0]) % 360;
    valor[1] = processaExpressao(valor[1]) % 360;
    valor[2] = processaExpressao(valor[2]) % 360;
    var applet = document.ggbApplet;
    var angulo0 = Math.round(radianosParaGraus(applet.getValue('θ_1'))) % 360;
    var angulo1 = Math.round(radianosParaGraus(applet.getValue('θ_2'))) % 360;
    var angulo2 = Math.round(radianosParaGraus(applet.getValue('θ_3'))) % 360;
    return [Math.abs(valor[0] - angulo0) < 0.01, Math.abs(valor[1] - angulo1) < 0.01, Math.abs(valor[2] - angulo2) < 0.01];
}

function corrige_q_7_c(valor) {
    valor[0] = processaExpressao(valor[0]) % 360;
    var applet = document.ggbApplet;
    var angulo0 = Math.round(radianosParaGraus(applet.getValue('α'))) % 360;
    return [Math.abs(valor[0] - angulo0) < 0.01];
}

function corrige_q_8(valor) {
    return [valor[0] ? false : null, valor[1] ? false : null, valor[2] ? true : null, valor[3] ? false : null];
}

function corrige_q_9_a(valor) {
    valor[0] = processaExpressao(valor[0]);
    valor[1] = processaExpressao(valor[1]);
    var applet = document.ggbApplet;
    return [Math.abs(valor[0] - applet.getValue("distanciaAB")) < 0.01, Math.abs(valor[1] - applet.getValue("distanciaA'B'")) < 0.01];
}

function corrige_q_9_b(valor) {
    valor[0] = processaExpressao(valor[0]);
    valor[1] = processaExpressao(valor[1]);
    var applet = document.ggbApplet;
    return [Math.abs(valor[0] - applet.getValue("distanciaCB")) < 0.01, Math.abs(valor[1] - applet.getValue("distanciaC'B'")) < 0.01];
}

function corrige_q_9_c(valor) {
    valor[0] = processaExpressao(valor[0]);
    valor[1] = processaExpressao(valor[1]);
    var applet = document.ggbApplet;
    return [Math.abs(valor[0] - applet.getValue("distanciaCA")) < 0.01, Math.abs(valor[1] - applet.getValue("distanciaC'A'")) < 0.01];
}

function corrige_q_9_d(valor) {
    valor[0] = processaExpressaoParenteses(valor[0]);
    var applet = document.ggbApplet;
    return [Math.abs(valor[0] - applet.getXcoord("Z_1")) < 0.01];
}

function corrige_q_10_a(valor) {
    return [valor[0] ? true : null, valor[1] ? false : null];
}

function corrige_q_10_b(valor) {
    valor[0] = processaExpressaoParenteses(valor[0]);
    var applet = document.ggbApplet;
    return [Math.abs(valor[0] - applet.getValue("distZ_1")) < 0.01];
}

function corrige_q_10_c(valor) {
    return [valor[0] ? true : null, valor[1] ? false : null];
}

function corrige_q_10_d(valor) {
    valor[0] = processaExpressaoParenteses(valor[0]) % 360;
    var applet = document.ggbApplet;
    var angulo0 = Math.round(radianosParaGraus(applet.getValue('δ_1'))) % 360;
    return [Math.abs(valor[0] - angulo0) < 0.01];
}

function corrige_q_11_a(valor) {
    return [valor[0] ? false : null, valor[1] ? true : null];
}

function corrige_q_11_b(valor) {
    return [valor[0] ? false : null, valor[1] ? true : null];
}

function corrige_q_12(valor) {
    var applet = document.ggbApplet;
    return [(Math.abs(applet.getXcoord("A'") - 0) < 0.1 && Math.abs(applet.getYcoord("A'") - 0) < 0.1) ||
        (Math.abs(applet.getXcoord("B'") - 0) < 0.1 && Math.abs(applet.getYcoord("B'") - 0) < 0.1) ||
        (Math.abs(applet.getXcoord("C'") - 0) < 0.1 && Math.abs(applet.getYcoord("C'") - 0) < 0.1)
    ];
}

function corrige_q_13_a(valor) {
    var transformacao = Number(getResp('transformacao1'));
    switch (transformacao) {
        case 0:
            return [valor[0] ? true : null, valor[1] ? false : null, valor[2] ? false : null, valor[3] ? false : null];
            break;

        case 1:
            return [valor[0] ? false : null, valor[1] ? false : null, valor[2] ? true : null, valor[3] ? false : null];
            break;

        case 2:
            return [valor[0] ? false : null, valor[1] ? true : null, valor[2] ? false : null, valor[3] ? false : null];
            break;
    }

}

function corrige_q_13_b(valor) {
    //valor[0] = validaExpressaoComplexo(valor[0]);
    //valor[1] = validaExpressaoComplexo(valor[1]);

    var transformacao = Number(getResp('transformacao1'));
    switch (transformacao) {
        case 0:
            var r1 = getResp('r1Rotacao');
            var r2 = getResp('r2Rotacao');
            break;

        case 1:
            var r1 = getResp('r1Dilatacao');
            var r2 = getResp('r2Dilatacao');
            break;

        case 2:
            var r1 = getResp('r1Translacao');
            var r2 = getResp('r2Translacao');
            break;
    }

    console.log(r1);
    console.log(r2);

    return [valor[0].length == 0 ? false : comparaComplexo(valor[0] + '+0*i', r1), valor[1].length == 0 ? false : comparaComplexo(valor[1] + '+0*i', r2)];

}

function corrige_q_14_a(valor) {
    var transformacao = Number(getResp('transformacao2'));
    switch (transformacao) {
        case 0:
            return [valor[0] ? true : null, valor[1] ? false : null, valor[2] ? false : null, valor[3] ? false : null];
            break;

        case 1:
            return [valor[0] ? false : null, valor[1] ? false : null, valor[2] ? true : null, valor[3] ? false : null];
            break;

        case 2:
            return [valor[0] ? false : null, valor[1] ? true : null, valor[2] ? false : null, valor[3] ? false : null];
            break;
    }

}

function corrige_q_14_b(valor) {
    //valor[0] = validaExpressaoComplexo(valor[0]);
    //valor[1] = validaExpressaoComplexo(valor[1]);

    var transformacao = Number(getResp('transformacao2'));
    switch (transformacao) {
        case 0:
            var r1 = getResp('r1Rotacao');
            var r2 = getResp('r2Rotacao');
            break;

        case 1:
            var r1 = getResp('r1Dilatacao');
            var r2 = getResp('r2Dilatacao');
            break;

        case 2:
            var r1 = getResp('r1Translacao');
            var r2 = getResp('r2Translacao');
            break;
    }
    //console.log(r1);
    //console.log(r2);

    return [valor[0].length == 0 ? false : comparaComplexo(valor[0] + '+0*i', r1), valor[1].length == 0 ? false : comparaComplexo(valor[1] + '+0*i', r2)];
}

function corrige_q_15_a(valor) {
    var transformacao = Number(getResp('transformacao3'));
    switch (transformacao) {
        case 0:
            return [valor[0] ? true : null, valor[1] ? false : null, valor[2] ? false : null, valor[3] ? false : null];
            break;

        case 1:
            return [valor[0] ? false : null, valor[1] ? false : null, valor[2] ? true : null, valor[3] ? false : null];
            break;

        case 2:
            return [valor[0] ? false : null, valor[1] ? true : null, valor[2] ? false : null, valor[3] ? false : null];
            break;
    }

}

function corrige_q_15_b(valor) {
    //valor[0] = validaExpressaoComplexo(valor[0]);
    //valor[1] = validaExpressaoComplexo(valor[1]);

    var transformacao = Number(getResp('transformacao3'));
    switch (transformacao) {
        case 0:
            var r1 = getResp('r1Rotacao');
            var r2 = getResp('r2Rotacao');
            break;

        case 1:
            var r1 = getResp('r1Dilatacao');
            var r2 = getResp('r2Dilatacao');
            break;

        case 2:
            var r1 = getResp('r1Translacao');
            var r2 = getResp('r2Translacao');
            break;
    }
    //console.log(r1);
    //console.log(r2);
    return [valor[0].length == 0 ? false : comparaComplexo(valor[0] + '+0*i', r1), valor[1].length == 0 ? false : comparaComplexo(valor[1] + '+0*i', r2)];
}

/*****************************
 *	Funcoes de Valor Inicial *
 *****************************/
function set_inicial_q7() {
    var applet = document.ggbApplet;
    applet.setFixed('Z_1', true);
    applet.setColor('Z_1', 0, 0, 0);
    removeEsperando({ Parte: 1, Questao: 'parte2_q7', Item: 0 }, 'Este item está baseado no valor de Z<sub>1</sub>.');
    removeEsperando({ Parte: 1, Questao: 'parte2_q7', Item: 1 }, 'Este item está baseado no valor de Z<sub>1</sub>.');
    removeEsperando({ Parte: 1, Questao: 'parte2_q7', Item: 2 }, 'Este item está baseado no valor de Z<sub>1</sub>.');
}

function unset_inicial_q7() {
    var applet = document.ggbApplet;
    applet.setFixed('Z_1', false);
    applet.setColor('Z_1', 0, 0, 255);
    adicionaEsperando({ Parte: 1, Questao: 'parte2_q7', Item: 0 });
    adicionaEsperando({ Parte: 1, Questao: 'parte2_q7', Item: 1 });
    adicionaEsperando({ Parte: 1, Questao: 'parte2_q7', Item: 2 });
}

function set_inicial_q9() {
    var applet = document.ggbApplet;
    //alert(applet.getXcoord('Z_1'));
    //alert(Math.abs(applet.getXcoord('Z_1')-1));
    if (Math.abs(applet.getXcoord('Z_1') - 1) > 0.01) {
        applet.setFixed('Z_1', true);
        applet.setColor('Z_1', 0, 0, 0);
        removeEsperando({ Parte: 2, Questao: 'parte3_q9', Item: 0 }, 'Este item está baseado no valor de Z<sub>1</sub>.');
        removeEsperando({ Parte: 2, Questao: 'parte3_q9', Item: 1 }, 'Este item está baseado no valor de Z<sub>1</sub>.');
        removeEsperando({ Parte: 2, Questao: 'parte3_q9', Item: 2 }, 'Este item está baseado no valor de Z<sub>1</sub>.');
        removeEsperando({ Parte: 2, Questao: 'parte3_q9', Item: 3 }, 'Este item está baseado no valor de Z<sub>1</sub>.');
        return true;
    } else {
        var Perg = {
            conteudo: 'Z<sub>1</sub> deve ser diferente de 1.',
            layout: ['seta_baixo', 'direita'],
            largura: 10,
            callback: function() {},
            respostas: [{ sim: 'Ok' }]
        };
        var tmp = new PopupCallback(this.link, Perg.conteudo, Perg.layout, Perg.largura, Perg.callback, Perg.respostas, this);
        tmp.abre();

        $('p3_q9').update('<br>Valor de Z<sub style="color: red;">1</sub> inválido.');
        $('p3_q9').setStyle({
            color: 'red'
        });

        return false;
    }
}

function unset_inicial_q9() {
    var applet = document.ggbApplet;
    applet.setFixed('Z_1', false);
    applet.setColor('Z_1', 0, 0, 255);
    adicionaEsperando({ Parte: 2, Questao: 'parte3_q9', Item: 0 });
    adicionaEsperando({ Parte: 2, Questao: 'parte3_q9', Item: 1 });
    adicionaEsperando({ Parte: 2, Questao: 'parte3_q9', Item: 2 });
    adicionaEsperando({ Parte: 2, Questao: 'parte3_q9', Item: 3 });
    $('p3_q9').update('');

}

function set_inicial_q10() {
    var applet = document.ggbApplet;
    if (Math.abs(applet.getValue('distZ_1') - 1) > 0.1 && Math.abs(applet.getXcoord('Z_1') - 0) > 0.1 && Math.abs(applet.getYcoord('Z_1') - 0) > 0.1) {
        applet.setFixed('Z_1', true);
        applet.setColor('Z_1', 0, 0, 0);
        removeEsperando({ Parte: 3, Questao: 'parte4_q10', Item: 0 }, 'Este item está baseado no valor de Z<sub>1</sub>.');
        removeEsperando({ Parte: 3, Questao: 'parte4_q10', Item: 1 }, 'Este item está baseado no valor de Z<sub>1</sub>.');
        removeEsperando({ Parte: 3, Questao: 'parte4_q10', Item: 2 }, 'Este item está baseado no valor de Z<sub>1</sub>.');
        removeEsperando({ Parte: 3, Questao: 'parte4_q10', Item: 3 }, 'Este item está baseado no valor de Z<sub>1</sub>.');
        return true;
    } else {
        var Perg = {
            conteudo: 'A parte real e imaginária de Z<sub>1</sub> não podem ser nulas. O módulo de Z<sub>1</sub> deve ser diferente de 1.',
            layout: ['seta_baixo', 'direita'],
            largura: 10,
            callback: function() {},
            respostas: [{ sim: 'Ok' }]
        };
        var tmp = new PopupCallback(this.link, Perg.conteudo, Perg.layout, Perg.largura, Perg.callback, Perg.respostas, this);
        tmp.abre();

        $('p4_q10').update('<br>Valor de Z<sub style="color: red;">1</sub> inválido.');
        $('p4_q10').setStyle({
            color: 'red'
        });

        return false;
    }
}

function unset_inicial_q10() {
    var applet = document.ggbApplet;
    applet.setFixed('Z_1', false);
    applet.setColor('Z_1', 0, 0, 255);
    adicionaEsperando({ Parte: 3, Questao: 'parte4_q10', Item: 0 });
    adicionaEsperando({ Parte: 3, Questao: 'parte4_q10', Item: 1 });
    adicionaEsperando({ Parte: 3, Questao: 'parte4_q10', Item: 2 });
    adicionaEsperando({ Parte: 3, Questao: 'parte4_q10', Item: 3 });
    $('p4_q10').update('');
}

function verificaZ2NaoZero() {
    var applet = document.ggbApplet;
    var resp = false;
    if ((applet.getXcoord("Z_2")) != 0 || (applet.getYcoord('Z_2') != 0)) {
        resp = true;
    }
    return resp;

}

function set_inicial_q11() {
    var applet = document.ggbApplet;
    if (verificaTrianguloVisivel() && verificaZ2NaoZero()) {
        applet.setFixed('Z_2', true);
        applet.setColor('Z_2', 0, 0, 0);
        removeEsperando({ Parte: 4, Questao: 'parte5_q11', Item: 0 }, 'Este item está baseado no valor de Z<sub>2</sub>.');
        removeEsperando({ Parte: 4, Questao: 'parte5_q11', Item: 1 }, 'Este item está baseado no valor de Z<sub>2</sub>.');
        return true;
    } else {
        var Perg = {
            conteudo: "O triângulo A'B'C' deve ser inteiramente visível e o valor de Z<sub>2</sub> deve ser diferente de 0.",
            layout: ['seta_baixo', 'direita'],
            largura: 10,
            callback: function() {},
            respostas: [{ sim: 'Ok' }]
        };
        var tmp = new PopupCallback(this.link, Perg.conteudo, Perg.layout, Perg.largura, Perg.callback, Perg.respostas, this);
        tmp.abre();

        $('p5_q11').update('<br>Valor de Z<sub style="color: red;">2</sub> inválido.');
        $('p5_q11').setStyle({
            color: 'red'
        });

        return false;
    }
}

function unset_inicial_q11() {
    var applet = document.ggbApplet;
    applet.setFixed('Z_2', false);
    applet.setColor('Z_2', 0, 0, 255);
    adicionaEsperando({ Parte: 4, Questao: 'parte5_q11', Item: 0 });
    adicionaEsperando({ Parte: 4, Questao: 'parte5_q11', Item: 1 });
    $('p5_q11').update('');
}