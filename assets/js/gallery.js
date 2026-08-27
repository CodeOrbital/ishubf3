let img=document.getElementsByTagName('img')[0];
let caption = document.getElementsByTagName('figcaption')[0];
function showimg(){
  let choice = document.getElementById("choice").value;
  let source = '../assets/images/'+choice+'.png';
  img.src = source;
  let src0=choice[0].toUpperCase();
  let srcr= choice.slice(1);
  let cap = src0 + srcr;
  caption.textContent = cap;
  img.alt='cap';
}