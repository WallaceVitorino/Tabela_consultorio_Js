
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  // extraindo informaçoes do paciente
  var paciente = obtemPacienteDoFormulario(form);
  
  //mensagem de erro para numeros invalidos
  var erro = validaPaciente(paciente);

  var mensagemErro = document.querySelector("#mensagem-erro");

  if(erro.length > 0){

    mensagemErro.textContent = erro;

    return;
  }else{
    mensagemErro.innerHTML = "";
  }
  //validaçao do formulario em branco
  if (validaFormularioBranco(paciente) == true){
     
    mensagemErro.textContent = "Por favor preencha todos os campos para adicionar um paciente válido!";
    return;
  }else{ mensagemErro.innerHTML = "";}

    adicionaPacientes(paciente);

    form.reset()

});

function adicionaPacientes(paciente){
  
  //cria a Tr e Td do paciente
  var pacienteTr = montaTr(paciente);

  // adiciconando paciente a tabela
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);
  
}

function obtemPacienteDoFormulario(form){
  
  var paciente = {
    nome:form.nome.value,
    peso:form.peso.value,
    altura:form.altura.value,
    gordura:form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function montaTr(paciente){
  
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;

}

function montaTd(dado, classe){
  
  var td = document.createElement("td"); 
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}



