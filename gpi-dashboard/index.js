function gpiApp() {
  return {
    currentScreen: "login",
    currentTab: "vcenter_home",
    isLoggingIn: false, // Evita cliques múltiplos e duplicação
    loginForm: { email: "", password: "" },
    searchQuery: "",
    stats: {
      total_documents: 24,
      total_tips: 18,
      total_links: 42,
      total_views: 1245,
    },

    login() {
      if (this.isLoggingIn) return; // Bloqueia clique duplicado

      this.isLoggingIn = true;
      this.currentScreen = "loading";

      setTimeout(() => {
        this.currentScreen = "dashboard";
        this.currentTab = "vcenter_home";
        this.isLoggingIn = false;
      }, 2500);
    },

    logout() {
      this.currentScreen = "login";
      this.loginForm = { email: "", password: "" };
      this.isLoggingIn = false;
    },

    moveLetterAway(event, element) {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < 150) {
        element.style.transform = `translate(${-deltaX / 3}px, ${
          -deltaY / 3
        }px) scale(1.1)`;
      } else {
        element.style.transform = "translate(0, 0) scale(1)";
      }
    },
  };
}

// Funcionalidade de Ideias (fora do Alpine, pois usa DOM direto)
const ideias = [];

document.getElementById("formIdeia")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value.trim();
  const descricao = document.getElementById("descricao").value.trim();
  const autor = document.getElementById("autor").value.trim();

  if (!titulo || !descricao || !autor) return;

  ideias.push({
    id: Date.now(),
    titulo,
    descricao,
    autor,
    data: new Date().toLocaleDateString("pt-BR"),
  });

  document.getElementById("totalIdeias").textContent = ideias.length;
  document.getElementById("totalIdeiasHeader").textContent = ideias.length;

  renderIdeias();
  e.target.reset();
});

function renderIdeias() {
  const lista = document.getElementById("listaIdeias");

  if (ideias.length === 0) {
    lista.innerHTML =
      '<p class="text-center text-gray-500 py-12">Nenhuma ideia registrada ainda. Seja o primeiro!</p>';
    return;
  }

  lista.innerHTML = ideias
    .map(
      (ideia) => `
      <div class="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
        <div class="flex justify-between items-start mb-3">
          <h4 class="font-bold text-lg text-gray-800">${ideia.titulo}</h4>
          <span class="text-sm text-gray-500">${ideia.data}</span>
        </div>
        <p class="text-gray-600 mb-4">${ideia.descricao}</p>
        <p class="text-sm text-gray-500"><strong>Autor:</strong> ${ideia.autor}</p>
      </div>
    `
    )
    .join("");
}
