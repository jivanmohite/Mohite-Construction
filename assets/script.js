
document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav-links');
 if(toggle&&nav) toggle.addEventListener('click',()=>{nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false')});
 document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
 const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.12});
 document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 const form=document.querySelector('#enquiry-form');
 if(form) form.addEventListener('submit',e=>{
   e.preventDefault();
   if(!form.reportValidity()) return;
   const d=new FormData(form);
   const msg=`Hello Mohite Construction,%0AName: ${encodeURIComponent(d.get('name'))}%0APhone: ${encodeURIComponent(d.get('phone'))}%0AService: ${encodeURIComponent(d.get('service'))}%0ALocation: ${encodeURIComponent(d.get('location'))}%0AMessage: ${encodeURIComponent(d.get('message'))}`;
   window.open(`https://wa.me/919561600677?text=${msg}`,'_blank','noopener');
   const status=document.querySelector('#form-status'); if(status) status.textContent='Your enquiry has been prepared in WhatsApp. Please press Send there to share it with us.';
 });
});
