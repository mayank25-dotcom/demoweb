(function(){
 const $=(s,p=document)=>p.querySelector(s);
 const year=$("#year"); if(year) year.textContent=new Date().getFullYear();
 const toggle=$("#menuToggle"), nav=$("#mainNav");
 if(toggle&&nav) toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
 const products=window.ZOYA_PRODUCTS||[];
 function card(p){return `<article class="product-card"><a class="product-image" href="product.html?id=${encodeURIComponent(p.id)}"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="product-tag">${p.tag}</span><span class="image-arrow">↗</span></a><div class="product-card-body"><span class="product-category">${p.category}</span><h3><a href="product.html?id=${encodeURIComponent(p.id)}">${p.name}</a></h3><p>${p.description}</p><a class="product-enquire" href="index.html#quote" data-product="${p.name}">Enquire about product <span>→</span></a></div></article>`;}
 const featured=$("#featuredProducts"); if(featured) featured.innerHTML=products.slice(0,4).map(card).join("");
 const all=$("#allProducts"), search=$("#productSearch"), filter=$("#categoryFilter"), count=$("#resultCount"), empty=$("#emptyState");
 if(all){
   const params=new URLSearchParams(location.search); let active=params.get("category")||"All";
   if(filter) filter.value=active;
   function render(){const q=(search?.value||"").toLowerCase();const list=products.filter(p=>(active==="All"||p.category===active)&&(`${p.name} ${p.category} ${p.description}`).toLowerCase().includes(q));all.innerHTML=list.map(card).join("");if(count)count.textContent=`Showing ${list.length} product${list.length===1?"":"s"}`;if(empty)empty.hidden=list.length!==0;document.querySelectorAll(".filter-link").forEach(b=>b.classList.toggle("selected",b.dataset.category===active));}
   render(); search?.addEventListener("input",render);filter?.addEventListener("change",()=>{active=filter.value;render();});document.querySelectorAll(".filter-link").forEach(b=>b.addEventListener("click",()=>{active=b.dataset.category;filter.value=active;render();}));
 }
 const form=$("#quoteForm");
 if(form) form.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent("Zoya Nexus product enquiry");const body=encodeURIComponent(`Name: ${d.get("name")}\nEmail: ${d.get("email")}\nPhone: ${d.get("phone")}\nCategory: ${d.get("category")}\nMessage: ${d.get("message")}`);location.href=`mailto:sales@zoyanexus.com?subject=${subject}&body=${body}`;const note=$("#formNote");if(note)note.textContent="Your email app should open with the enquiry prepared. Please send it to complete your enquiry.";});
 document.addEventListener("click",e=>{const a=e.target.closest("[data-product]");if(a){const msg=$("#quoteForm textarea");if(msg)msg.value=`I am interested in: ${a.dataset.product}`;}});
})();