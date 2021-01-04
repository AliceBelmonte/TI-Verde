function validar(){
	var nome = formulario.tnome.value;
	var email = formulario.temail.value;
	var senha = formulario.tsenha.value;
	var mensagem = formulario.tmensagem.value;

	if(nome == ""){
		alert('Preencha o campo Nome.');
		formulario.tnome.focus();
		return false;
	}

	//indexOf analisa o conteudo

	if(email == "" || email.indexOf('@') == -1){
		alert('Preencha o campo E-mail com um E-mail válido.');
		formulario.temail.focus();
		return false;
	}

	//length verifica o comprimento

	if(senha == "" || senha.length <= 5){
		alert('Preencha o campo Senha com no minimo 6 caracteres.');
		formulario.tsenha.focus();
		return false;
	}

	if(mensagem == ""){
		alert('Preencha o campo Mensagem.');
		formulario.tmensagem.focus();
		return false;
	}
}