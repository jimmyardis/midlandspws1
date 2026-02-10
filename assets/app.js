const mobileBtn = document.querySelector('[data-mobile-btn]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
if (mobileBtn && mobileMenu){
  mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
}

document.querySelectorAll('[data-lightbox]').forEach(img=>{
  img.addEventListener('click', ()=>{
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt') || '';
    const wrap = document.createElement('div');
    wrap.style.position='fixed';
    wrap.style.inset='0';
    wrap.style.background='rgba(0,0,0,.72)';
    wrap.style.display='grid';
    wrap.style.placeItems='center';
    wrap.style.zIndex='9999';
    wrap.style.padding='24px';
    wrap.innerHTML = `
      <div style="max-width: 1100px; width: 100%;">
        <img src="${src}" alt="${alt}" style="width:100%; height:auto; border-radius:18px; border:1px solid rgba(255,255,255,.18); box-shadow: 0 18px 50px rgba(0,0,0,.55);" />
        <div style="text-align:center; margin-top:10px; color: rgba(255,255,255,.8); font-size:13px;">Click anywhere to close</div>
      </div>
    `;
    wrap.addEventListener('click', ()=> wrap.remove());
    document.body.appendChild(wrap);
  });
});