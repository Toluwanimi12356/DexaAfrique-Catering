window.addEventListener('scroll',()=>{
  document.getElementById('nav').classList.toggle('stuck',scrollY>60);
  document.getElementById('stb').classList.toggle('on',scrollY>400);
});
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});
document.querySelectorAll('.rv').forEach(el=>{
  new IntersectionObserver(e=>{
    if(e[0].isIntersecting)el.classList.add('in');
  },{threshold:0.1}).observe(el);
});

