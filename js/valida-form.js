
function validaPaciente(paciente){
  if(validaPeso(paciente.peso) && validaAltura(paciente.altura)){
    return "";
  }else{return "Altura ou peso inválidos. Por favor verifique e tente novamente!";}
}

function validaFormularioBranco(paciente){
  var formularioBranco = true;

      if(!paciente.nome == 0 && !paciente.peso == 0 && !paciente.altura == 0 && !paciente.gordura == 0){
      formularioBranco = false; 
    }

  return formularioBranco;
}