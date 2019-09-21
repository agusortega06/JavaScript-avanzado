

var pre = document.createElement('pre');
var block = document.createElement('code');
pre.appendChild(block);
document.querySelector('aside').appendChild(pre);

block.classList.add('hljs');
block.innerHTML = document.querySelector('#scriptSolucion').textContent;
hljs.highlightBlock(block);