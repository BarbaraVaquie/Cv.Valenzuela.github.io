document.querySelector('.ir-arriba')
addEventListener('click', ()=> {
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
});
let innercursor = document.querySelector('#cursor');
document.addEventListener('mousemove', movecursor);
function movecursor(e) {
  let x = e.clientX;
  let y = e.clientY;
 // console.log(x,y);
innercursor.style.left='${x}px';
innercursor.style.top='${y}px';
}