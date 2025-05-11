
    
      
      
      function carregarFilmes() {
        const container = document.getElementById("lista-filmes");
        let html = "";
      
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
      }
      
      if (document.getElementById("lista-filmes")) {
        carregarFilmes();
      }