// Write your code here!
const container = document.querySelector('main');
container.remove("main");

const newH1 = document.createElement('h1');
newH1.setAttribute('id', 'victory');
document.body.appendChild(newH1);
const newHeader = document.getElementById('victory')

newHeader.textContent = ("YOUR-NAME is the champion" )