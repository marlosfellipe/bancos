function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se o campoPesquisa for uma string sem nada
    if (!campoPesquisa ) {
      section.innerHTML = "<p style= 'color: white';>Nada foi encontrado, digite novamente.</p>"
      return 
    }

    console.log(typeof campoPesquisa)

    campoPesquisa =  campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()

      // Se titulo inclues campoPesuisa, então, faça...
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        //Cria um novo elemento.
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a> 
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }
      if (!resultados) {
        resultados = "<p style= 'color: white';>Nada foi encontrado, digite novamente.</p>"
      }
      
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }