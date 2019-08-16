function validateForm() {
  event.preventDefault();
    let dados = document.forms["myForm"]["fname"].value;
    if (dados == "") {
      alert("Por favor, informe o seu nome :)");
      return false;
    }
  document.getElementById("nome").value = dados;
  let firstName = document.getElementById("nome").value;
  document.getElementById("nome").innerText = firstName
  }

  function validateAnswer() {
    event.preventDefault();  
    let resposta1 = parseFloat(document.getElementById("btn-r1").value);
    let resposta2 = parseFloat(document.getElementById("btn-r2").value);
    let resposta3 = parseFloat(document.getElementById("btn-r3").value);
    

  if(resposta1 === 10){ 
  document.getElementById("r1").innerHTML = "Acertou! :)";
  }
  else{
    document.getElementById("r1").innerHTML = "Errou! :( <br> A resposta correta é 10.";
    }
    
  if(resposta2 === 5){ 
      document.getElementById("r2").innerHTML = "Acertou! :)";
    }
    else{
      document.getElementById("r2").innerHTML = "Errou! :( <br> A resposta correta é 5.";
      }

  if(resposta3 === 10){ 
      document.getElementById("r3").innerHTML = "Acertou! :)";
    }
    else{
      document.getElementById("r3").innerHTML = "Errou! :( <br> A resposta correta é 10.";
      }
    
    }
