function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Loga a seção no console para fins de depuração (opcional)
    console.log(section);
  
    // Inicializa uma string vazia para armazenar os resultados
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value 
    
campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado no array 'dados'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria um novo elemento de div para cada resultado
      resultados += `
        <div class="item-resultado" style="background-image: url('${dado.imagem}');">
          <h2 class="texto-contorno"> 
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta texto-contorno">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Saiba Mais</a>
        </div>
      `;
    }
    }
    // Atribui os resultados gerados ao conteúdo da seção
    section.innerHTML = resultados;
  }


