// Função para adicionar um item à lista
function adicionarItem() {
  const input = document.getElementById("novo-item");
  const itemTexto = input.value.trim();

  // Verifica se o campo não está vazio
  if (itemTexto === "") {
    alert("Por favor, digite um item.");
    return;
  }

  // Cria um novo item de lista (li)
  const li = document.createElement("li");

  // Cria o texto do item
  const texto = document.createTextNode(itemTexto);
  li.appendChild(texto);

  // Cria o botão de remover
  const btnRemover = document.createElement("button");
  btnRemover.textContent = "ﾠ";
  btnRemover.onclick = function () {
    removerItem(li);
  };

  li.appendChild(btnRemover);

  // Adiciona o novo item na lista
  const lista = document.getElementById("lista");
  lista.appendChild(li);

  // Limpa o campo de input
  input.value = "";
}

// Função para remover um item da lista
function removerItem(item) {
  item.remove();
}
