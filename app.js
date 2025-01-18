let amigos = [];

function adicionarAmigo() {
      let nomeAmigo = document.querySelector('input');
      if (nomeAmigo.value == "") {
            alert('Por favor, insira um nome.');
      } else {
            amigos.push(nomeAmigo.value);
            nomeAmigo.value = ' ';
            listarAmigos();
      }
}

function listarAmigos() {
      let listaAmigos = document.getElementById('listaAmigos');
      listaAmigos.innerHTML = "";
      for (let i = 0; i < amigos.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = amigos[i];
            listaAmigos.appendChild(li);
      }
}

function sortearAmigo() {
      let resultadoSorteio = document.getElementById('resultado');
      if (amigos.length == 0) {
            alert('Por favor, insira um nome.');
      }else{
            let indice = Math.floor(Math.random() * amigos.length);
            resultadoSorteio.innerHTML = "";
            let li = document.createElement('li');
            li.innerHTML = `O amigo secreto sorteado é: ${amigos[indice]}`;
            resultadoSorteio.appendChild(li)
      }
}

