const TOTAL_PESSOAS = 3;
let pessoas = [];
let form = document.getElementById("formPessoa");
let dadosPessoas = document.getElementById("dadosPessoas");
let mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (pessoas.length >= TOTAL_PESSOAS) {
    mensagem.innerHTML = `<p style="color:red;">Limite de ${TOTAL_PESSOAS} pessoas atingido!</p>`;
    return;
  }

  let nome = document.getElementById("nome").value.trim();
  let idade = parseInt(document.getElementById("idade").value);
  let altura = parseFloat(document.getElementById("altura").value);

  pessoas.push({ nome, idade, altura });

  form.reset();
  mensagem.innerHTML = `<p style="color:green;">Pessoa ${pessoas.length} cadastrada com sucesso!</p>`;

  if (pessoas.length === TOTAL_PESSOAS) {
    exibirDados();
    form.style.display = "none";
    mensagem.innerHTML = `<p style="color:blue;">Todos os dados foram cadastrados.</p>`;
  }
});

function exibirDados() {
  dadosPessoas.innerHTML = "<h2>=== DADOS DAS PESSOAS ===</h2>";
  pessoas.forEach((pessoa, i) => {
    dadosPessoas.innerHTML += `
      <div class="pessoa">
        <strong>Pessoa ${i + 1}:</strong><br/>
        Nome: ${pessoa.nome}<br/>
        Idade: ${pessoa.idade}<br/>
        Altura: ${pessoa.altura.toFixed(2)} m<br/>
        Endereço simulado (índice no array): pessoas[${i}]<br/>
        Objeto completo: ${JSON.stringify(pessoa)}
      </div>
    `;
  });
}