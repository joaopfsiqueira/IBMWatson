const lista = document.getElementById("lista");
fetch('http://localhost:3000/')
  .then(response => response.json())
  .then(data => {
    let allItems = ""
    data.map(Comentarios => {
      allItems += `
    <div class="listaComentariosdivh2">
    <span class="spanComentarios">${Comentarios.Comentario}</span>
    <button onclick="playAudio(${Comentarios.idComentario})">Ouvir</button>
    <audio id="${Comentarios.idComentario}audio">
        <source src='http://localhost:3000/audios/${Comentarios.idComentario}audio.mp3' />
      </audio>
    </div>
`
    })
    lista.innerHTML = allItems;
  })
  .catch(err => console.log(err))
  ;




const btnCadastrar = document.getElementById("btnSubmit");
btnCadastrar.addEventListener("click", async () => {
  const txtArea = document.getElementById("txtArea").value;
  if (!txtArea) {
    alert("Campo vazio! Preencha com alguma informação.")
  } else {
    const response = await sendComment(txtArea)
    const allComments = await response.json()
    let allItems = ""
    allComments.map(Comentarios => {
      allItems += `
          <div class="listaComentariosdivh2">
          <span class="spanComentarios">${Comentarios.Comentario}</span>
          <button type="submit">Ouvir</button>
          </div>
      `
    })
    lista.innerHTML = allItems;
  }
})

async function sendComment(txtArea) {
  return await fetch('http://localhost:3000/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ Comentario: txtArea })
  });
  // const comment = await enviarComentario.json();


}