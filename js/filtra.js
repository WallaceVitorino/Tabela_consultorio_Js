var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", ()=>{
    
    console.log(campoFiltro.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (campoFiltro.value.length > 0){

        for (let i = 0; i < pacientes.length; i++) {
                const paciente = pacientes[i];

                var tdNome = paciente.querySelector(".info-nome");

                var nome = tdNome.textContent; 

                var expressao = new RegExp(campoFiltro.value, "i");

                if( !expressao.test(nome)){
                    paciente.classList.add("invisivel");
                }else{
                    paciente.classList.remove("invisivel");
            }
        }
    }else{
        for (let i = 0; i < pacientes.length; i++) {
            const paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
    

})