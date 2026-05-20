// Active nav link highlighting based on current page
(function(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.navbar-so .nav-link[data-page]').forEach(a=>{
    if(a.dataset.page === path || (path==='' && a.dataset.page==='index.html')){
      a.classList.add('active');
    }
  });
})();
// Scroll-to-top floating button
(function(){
  const btn = document.getElementById('scrollTopBtn');
  if(!btn) return;
  window.addEventListener('scroll',()=>{
    if(window.scrollY > 320) btn.classList.add('show');
    else btn.classList.remove('show');
  },{passive:true});
  btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
})();
// Current year in footer
(function(){
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();
// Enquiry form
(function(){
  const form = document.getElementById('enquiryForm');
  if(!form) return;
  form.addEventListener('submit',function(e){
    e.preventDefault();
    e.stopPropagation();
    if(!form.checkValidity()){
      form.classList.add('was-validated');
      return;
    }
    const alertBox = document.getElementById('formAlert');
    alertBox.classList.remove('d-none');
    alertBox.scrollIntoView({behavior:'smooth',block:'center'});
    form.reset();
    form.classList.remove('was-validated');
    setTimeout(()=>alertBox.classList.add('d-none'),6000);
  });
})();
