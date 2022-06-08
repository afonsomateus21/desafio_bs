const vinculo = document.getElementById('vinculo');
const titulo = document.getElementById('titulo');
const autor = document.getElementById('autor');
const edicao = document.getElementById('edicao');
const issn = document.getElementById('issn');
const ano = document.getElementById('ano');
const editora = document.getElementById('editora');

const form = document.getElementById('form');

let formularioValido = true;

const isApenasNumeros = (edicao) => {
  const padrao = /^\d*$/;
  return padrao.test(edicao);
}

const validarAno = (ano) => {
  return ano > 1900 && ano < 2019;
}

let livro = {};
let livros = [];
let index = 0;

form.addEventListener('submit', (e) => {
  if (vinculo.value === '') {
    e.preventDefault();
    formularioValido = false;
    document.getElementById('vinculoError').innerHTML = 'Esse campo é obrigatório';
  }

  if (titulo.value === '') {
    e.preventDefault();
    formularioValido = false;
    document.getElementById('tituloError').innerHTML = 'Esse campo é obrigatório';
  }

  if (autor.value === '') {
    e.preventDefault();
    formularioValido = false;
    document.getElementById('autorError').innerHTML = 'Esse campo é obrigatório';
  }

  if (edicao.value === '') {
    e.preventDefault();
    formularioValido = false;
    document.getElementById('edicaoError').innerHTML = 'Esse campo é obrigatório';
  }

  if (edicao.value !== '' && !isApenasNumeros(edicao.value)) {
    e.preventDefault();
    formularioValido = false;
    document.getElementById('edicaoError').innerHTML = 'Esse campo só aceita números';
  }

  if (issn.value === '') {
    e.preventDefault();
    formularioValido = false;
    document.getElementById('issnError').innerHTML = 'Esse campo é obrigatório';
  }

  if (issn.value !== '' && !isApenasNumeros(edicao.value)) {
    e.preventDefault();
    formularioValido = false;
    document.getElementById('issnError').innerHTML = 'Esse campo só aceita números';
  }

  if (ano.value === '') {
    e.preventDefault();
    formularioValido = false;
    document.getElementById('anoError').innerHTML = 'Esse campo é obrigatório';
  }

  if (ano.value !== '' && !isApenasNumeros(ano.value)) {
    e.preventDefault();
    formularioValido = false;
    document.getElementById('anoError').innerHTML = 'Esse campo só aceita números';
  }

  if (ano.value !== '' && !validarAno(ano.value)) {
    e.preventDefault();
    formularioValido = false;
    document.getElementById('anoError').innerHTML = 'O ano deve estar entre 1900 e 2019';
  }

  if (issn.value !== '' && !isApenasNumeros(edicao.value)) {
    e.preventDefault();
    formularioValido = false;
    document.getElementById('issnError').innerHTML = 'Esse campo só aceita números';
  }

  if (editora.value === '') {
    e.preventDefault();
    formularioValido = false;
    document.getElementById('editoraError').innerHTML = 'Esse campo é obrigatório';
  }

  if (formularioValido) {
    livro = {
      "vinculo": vinculo.value,
      "titulo": titulo.value,
      "autor": autor.value,
      "edicao": edicao.value,
      "issn": issn.value,
      "ano": ano.value,
      "editora": editora.value
    }

    livros.push(livro);

    form.reset();

    montarTabela();
  }
})

function montarTabela() {
  const corpoTabela = document.getElementById('corpo-tabela-livros');
  
  for(index; index < livros.length; ++index) {
    let trElement = document.createElement("tr")

    let th = document.createElement('th');
    let tdTitulo = document.createElement('td');
    let tdAutor = document.createElement('td');
    let tdEdicao = document.createElement('td');
    let tdIssn = document.createElement('td');
    let tdAno = document.createElement('td');
    let tdEditora = document.createElement('td');

    th.innerHTML = `${livros[index].vinculo}`;
    tdTitulo.innerHTML = `${livros[index].titulo}`;
    tdAutor.innerHTML = `${livros[index].autor}`;
    tdEdicao.innerHTML = `${livros[index].edicao}`;
    tdIssn.innerHTML = `${livros[index].issn}`;
    tdAno.innerHTML = `${livros[index].ano}`;
    tdEditora.innerHTML = `${livros[index].editora}`;

    trElement.addEventListener("dblclick", function(e) {
      excluirLivro(livros[index].issn);
    })

    trElement.append(th);
    trElement.append(tdTitulo);
    trElement.append(tdAutor);
    trElement.append(tdEdicao);
    trElement.append(tdIssn);
    trElement.append(tdAno);
    trElement.append(tdEditora);

    corpoTabela.append(trElement);
  }
}


