console.log('JS sourced');

let hats = ['stocking cap', 'baseball cap', 'fedora', 'top hat'];

let hatList = document.querySelector('#new-inner-dom');

for (let hat of hats) {
  hatList.innerHTML += `<li>${hat}</li>`;
}