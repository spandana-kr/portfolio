(function(){
var h=document.querySelector('.hero'),L=[].slice.call(document.querySelectorAll('.big span'));
if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
h.addEventListener('pointermove',function(e){L.forEach(function(s){var r=s.getBoundingClientRect(),d=Math.hypot(e.clientX-(r.left+r.width/2),e.clientY-(r.top+r.height/2)),p=Math.max(0,1-d/260);
s.style.transform='translateY('+(-p*24)+'px)';
s.style.color='rgb('+Math.round(216+p*16)+','+Math.round(211-p*131)+','+Math.round(203-p*193)+')'})});
h.addEventListener('pointerleave',function(){L.forEach(function(s){s.style.transform='';s.style.color=''})});
})();
var m=document.getElementById('menu'),l=document.getElementById('links');
m.addEventListener('click',function(){var o=l.classList.toggle('open');m.setAttribute('aria-expanded',o)});
l.addEventListener('click',function(){l.classList.remove('open');m.setAttribute('aria-expanded','false')});