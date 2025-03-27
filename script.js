document.addEventListener("DOMContentLoaded", function () {
  setupPreview();
  loadReadme();
  setupProjectLinks();
});

function setupPreview() {
  const previewContainer = document.querySelector(".preview-container");
  const previewIframe = document.querySelector(".preview-iframe");
}

function setupProjectLinks() {
  document.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      e.preventDefault();
      const href = e.target.getAttribute("href");
      const projectName = e.target.textContent
        .toLowerCase()
        .replace(/\s+/g, "-");

      // Atualiza o iframe com base no projeto
      const previewIframe = document.querySelector(".preview-iframe");
      if (projectName === "jogo-do-dino") {
        previewIframe.src = "https://chromedino.com/";
      } else if (projectName === "calculadora") {
        previewIframe.src = "calculadora/index.html";
      } else if (projectName === "lista-de-tarefas") {
        previewIframe.src = "lista-de-tarefas/index.html";
      }

      // Carrega o README do projeto
      loadReadme(projectName);
    }
  });
}

async function loadReadme(project = "") {
  const contentContainer = document.querySelector(".content-container");
  try {
    const response = await fetch(project ? `${project}/README.md` : `README.md`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();

    // Configuração do marked para melhor renderização
    marked.setOptions({
      gfm: true,
      breaks: true,
      highlight: function (code, lang) {
        return code;
      },
    });

    // Converte o markdown para HTML
    contentContainer.innerHTML = marked.parse(text);

    // Adiciona estilos avançados para o conteúdo do markdown
    const style = document.createElement("style");
    style.textContent = `
      .content-container {
        line-height: 1.6;
        color: #24292e;
        font-size: 16px;
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
      }
      .content-container h1 {
        font-size: 2em;
        border-bottom: 1px solid #eaecef;
        padding-bottom: 0.3em;
      }
      .content-container h2 {
        font-size: 1.5em;
        border-bottom: 1px solid #eaecef;
        padding-bottom: 0.3em;
      }
      .content-container h3 { font-size: 1.25em; }
      .content-container h4 { font-size: 1em; }
      .content-container h1, .content-container h2,
      .content-container h3, .content-container h4,
      .content-container h5, .content-container h6 {
        margin-top: 24px;
        margin-bottom: 16px;
        font-weight: 600;
        line-height: 1.25;
      }
      .content-container p {
        margin-bottom: 16px;
      }
      .content-container code {
        padding: 0.2em 0.4em;
        margin: 0;
        font-size: 85%;
        background-color: rgba(27,31,35,0.05);
        border-radius: 3px;
        font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
      }
      .content-container pre {
        padding: 16px;
        overflow: auto;
        font-size: 85%;
        line-height: 1.45;
        background-color: #f6f8fa;
        border-radius: 6px;
        margin-bottom: 16px;
      }
      .content-container pre code {
        padding: 0;
        background-color: transparent;
      }
      .content-container a {
        color: #0366d6;
        text-decoration: none;
      }
      .content-container a:hover {
        text-decoration: underline;
      }
      .content-container img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 20px 0;
      }
      .content-container ul, .content-container ol {
        padding-left: 2em;
        margin-bottom: 16px;
      }
      .content-container li {
        margin: 0.25em 0;
      }
      .content-container blockquote {
        padding: 0 1em;
        color: #6a737d;
        border-left: 0.25em solid #dfe2e5;
        margin: 0 0 16px 0;
      }
    `;
    document.head.appendChild(style);

    // Atualiza os links para os projetos
    const links = contentContainer.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const projectName = this.textContent;
        const projectMap = {
          "Jogo do Dino": { url: "dino/dino.html", readme: "dino" },
          Calculadora: { url: "calculadora/index.html", readme: "calculadora" },
          "Lista de Tarefas": {
            url: "lista-de-tarefas/index.html",
            readme: "lista-de-tarefas",
          },
        };

        const project = projectMap[projectName];
        if (project) {
          const previewIframe = document.querySelector(".preview-iframe");
          previewIframe.src = project.url;
          loadReadme(project.readme);
        }
      });
    });
  } catch (error) {
    console.error("Erro ao carregar o README:", error);
    contentContainer.innerHTML = `
      <div style="text-align: center; padding: 20px; color: #721c24; background-color: #f8d7da; border: 1px solid #f5c6cb; border-radius: 4px;">
        <h3>Erro ao carregar o conteúdo</h3>
        <p>Não foi possível carregar o README. Por favor, tente novamente mais tarde.</p>
        <p><small>Detalhes do erro: ${error.message}</small></p>
      </div>
    `;
  }
}
