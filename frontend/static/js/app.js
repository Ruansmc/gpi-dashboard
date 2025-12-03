// static/js/app.js
// Sidebar toggle
const btnToggle = document.getElementById("btn-toggle");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

if (btnToggle && sidebar && main) {
  btnToggle.addEventListener("click", () => {
    if (
      sidebar.style.width === "64px" ||
      sidebar.classList.contains("collapsed")
    ) {
      sidebar.style.width = "16rem"; // 64
      sidebar.classList.remove("collapsed");
      main.style.marginLeft = "16rem";
    } else {
      sidebar.style.width = "64px";
      sidebar.classList.add("collapsed");
      main.style.marginLeft = "64px";
    }
  });
}

// Envio de ideia no dashboard (form na página /dashboard)
const form = document.getElementById("form-ideia");
if (form) {
  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const analista = document.getElementById("analista").value;
    const texto = document.getElementById("texto").value;
    const msgEl = document.getElementById("msg-ideia");

    try {
      const res = await fetch("/ideias/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ analista, texto }),
      });
      const data = await res.json();
      if (res.ok) {
        msgEl.textContent = "✅ Ideia enviada!";
        msgEl.className = "text-sm text-green-600";
        // limpa
        document.getElementById("texto").value = "";
        // atualiza lista de ideias (se houver)
        loadIdeias();
      } else {
        msgEl.textContent = data.mensagem || "Erro ao enviar";
        msgEl.className = "text-sm text-red-600";
      }
    } catch (err) {
      msgEl.textContent = "Erro de conexão";
      msgEl.className = "text-sm text-red-600";
    }
  });
}

// Envio de ideia na página /ideias
const formPage = document.getElementById("form-ideia-page");
if (formPage) {
  formPage.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const analista = document.getElementById("analista-page").value;
    const texto = document.getElementById("texto-page").value;
    const msg = document.getElementById("msg-page");

    try {
      const res = await fetch("/ideias/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ analista, texto }),
      });
      if (res.ok) {
        msg.textContent = "✅ Ideia salva!";
        msg.className = "text-sm text-green-600";
        document.getElementById("texto-page").value = "";
        loadIdeias();
      } else {
        const data = await res.json();
        msg.textContent = data.mensagem || "Erro";
        msg.className = "text-sm text-red-600";
      }
    } catch (err) {
      msg.textContent = "Erro conexão";
      msg.className = "text-sm text-red-600";
    }
  });
}

// carrega todas as ideias e preenche a lista
async function loadIdeias() {
  try {
    const res = await fetch("/ideias/");
    if (!res.ok) return;
    const ideas = await res.json();
    const ul = document.getElementById("lista-ideias");
    if (!ul) return;
    ul.innerHTML = "";
    ideas.forEach((i, idx) => {
      const li = document.createElement("li");
      li.className = "p-3 bg-gray-50 rounded flex justify-between items-start";
      li.innerHTML = `<div><div class="font-semibold">${
        i.analista
      }</div><div class="text-sm text-gray-700">${i.texto}</div></div>
                      <div class="text-xs text-gray-500">#${idx + 1}</div>`;
      ul.appendChild(li);
    });
  } catch (err) {
    console.error("erro load ideias", err);
  }
}

// abrir notion (simples)
document.querySelectorAll("#notion-open, #notion-open-2").forEach((btn) => {
  btn &&
    btn.addEventListener("click", () => {
      // troque a URL abaixo pela sua página do Notion
      window.open("https://www.notion.so/", "_blank");
    });
});

// carregar ideias ao iniciar (para páginas que tenham lista)
window.addEventListener("load", () => {
  loadIdeias();
});
