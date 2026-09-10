
document.getElementById("BemVindo").textContent = "Bem-vindo ao meu LinkTree!";
document.getElementById("BemVindo").classList.add("visivel"); 
setTimeout(function() {
    document.getElementById("BemVindo").classList.remove("visivel");
}, 3000);

// --- Passo 6: Botão de copiar link (feito com auxílio de IA) ---
 
const botoesCopiar = document.querySelectorAll(".copiar-link");
 
botoesCopiar.forEach((botao) => {
  botao.addEventListener("click", () => {
    const link = botao.closest(".link-item").querySelector("a").href;

    botao.disabled = true; 
 
    navigator.clipboard.writeText(link).then(() => {
      const textoOriginal = botao.textContent;
      botao.textContent = "✔";
      botao.classList.add("copiado");
 
      setTimeout(() => {
        botao.textContent = textoOriginal;
        botao.classList.remove("copiado");
        botao.disabled = false; 
      }, 1500);
    
    });
  });
});
 