const apiURL = "http://localhost:3000/filmes"; 

function carregarFilmes() {
  const container = document.getElementById("lista-filmes");
  let html = "";

  fetch(apiURL)
    .then(response => response.json())
    .then(filmes => {
      filmes.forEach(filme => {
        html += `
          <div class="col">
            <div class="card h-100">
              <a href="detalhes.html?id=${filme.id}">
                <img src="${filme.imagem}" class="card-img-top" alt="Cartaz do filme ${filme.titulo}">
              </a>
              <div class="card-body">
                <h5 class="card-title">${filme.titulo}</h5>
                <p class="card-text">${filme.descricao}</p>
              </div>
            </div>
          </div>
        `;
      });

      container.innerHTML = html;
    })
    .catch(error => console.error('Erro ao carregar filmes:', error));
}

function carregarDetalhes() {
  const id = new URLSearchParams(window.location.search).get('id');

  if (id) {
    fetch(`${apiURL}/${id}`)
      .then(response => response.json())
      .then(filme => {
        const container = document.getElementById("detalhes");

        if (filme) {
          container.innerHTML = `
            <h1>${filme.titulo}</h1>
            <img src="${filme.detalhes.imagem}" alt="Imagem do filme ${filme.titulo}">
            <p class="mt-3"><strong>Ano:</strong> ${filme.detalhes.ano}<br>
            <strong>Diretor:</strong> ${filme.detalhes.diretor}<br>
            <strong>País:</strong> ${filme.detalhes.pais}<br>
            <strong>Duração:</strong> ${filme.detalhes.duracao}<br>
            <strong>Gênero:</strong> ${filme.detalhes.genero}<br><br>
            ${filme.detalhes.descricao}</p>
            <a href="index.html" class="btn btn-primary mt-4">Voltar</a>
          `;
        }
      })
      .catch(error => console.error('Erro ao carregar detalhes:', error));
  }
}

// Verifica qual página estamos para executar a função certa
if (document.getElementById("lista-filmes")) {
  carregarFilmes();
} else if (document.getElementById("detalhes")) {
  carregarDetalhes();
}