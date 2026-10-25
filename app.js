const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const money = n => `${Number(n).toLocaleString("ar-SA",{maximumFractionDigits:2})} ر.س`;
const sampleProducts = [
 {id:"p1",name:"حقيبة يومية بتصميم أنيق",category:"الحقائب",price:129,oldPrice:159,store:"متجر لمسة",rating:4.8,stock:12,badge:"خصم مميز",image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=85",description:"حقيبة أنيقة وعملية للاستخدام اليومي، بتصميم يجمع البساطة واللمسة العصرية."},
 {id:"p2",name:"حذاء رياضي مريح",category:"الأحذية",price:189,oldPrice:null,store:"خطوة",rating:4.7,stock:8,badge:"الأكثر طلبًا",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",description:"حذاء رياضي مريح مناسب للمشاوير اليومية، بتصميم خفيف ومظهر عصري."},
 {id:"p3",name:"ساعة بتصميم كلاسيكي",category:"الإكسسوارات",price:215,oldPrice:249,store:"وقت وأناقة",rating:4.9,stock:5,badge:"عرض",image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=85",description:"ساعة بتفاصيل أنيقة تناسب الإطلالات اليومية والمناسبات."},
 {id:"p4",name:"قميص قطني يومي",category:"الملابس",price:79,oldPrice:null,store:"خزانة",rating:4.6,stock:24,badge:"جديد",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",description:"قميص قطني ناعم بقصة مريحة وسهل التنسيق مع مختلف الإطلالات."},
 {id:"p5",name:"سماعات لاسلكية",category:"الإلكترونيات",price:149,oldPrice:179,store:"تك بلس",rating:4.5,stock:16,badge:"خصم",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85",description:"سماعات لاسلكية بتصميم عملي للاستماع أثناء التنقل والعمل."},
 {id:"p6",name:"مجموعة عناية بالبشرة",category:"الجمال",price:99,oldPrice:null,store:"نقاء",rating:4.7,stock:10,badge:"اختيار مميز",image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85",description:"مجموعة عناية يومية، راجع مكونات كل منتج للتأكد من ملاءمتها لك."},
 {id:"p7",name:"مصباح طاولة عصري",category:"المنزل",price:119,oldPrice:139,store:"بيت أجمل",rating:4.4,stock:7,badge:"عرض",image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85",description:"مصباح طاولة بتصميم بسيط يضيف إضاءة لطيفة للمكتب أو غرفة النوم."},
 {id:"p8",name:"حقيبة كتف صغيرة",category:"الحقائب",price:89,oldPrice:null,store:"متجر لمسة",rating:4.5,stock:0,badge:"نفد مؤقتًا",image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85",description:"حقيبة كتف صغيرة بتصميم عملي يناسب الخروج اليومي."},
 {id:"p9",name:"حذاء يومي خفيف",category:"الأحذية",price:139,oldPrice:null,store:"خطوة",rating:4.3,stock:14,badge:"جديد",image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=85",description:"حذاء خفيف سهل التنسيق للأنشطة اليومية."},
 {id:"p10",name:"نظارة شمسية عصرية",category:"الإكسسوارات",price:69,oldPrice:89,store:"وقت وأناقة",rating:4.6,stock:18,badge:"خصم",image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85",description:"نظارة شمسية بإطار عصري. تحقق من مواصفات حماية العدسات قبل الاستخدام."},
 {id:"p11",name:"حامل مكتب للهاتف",category:"الإلكترونيات",price:39,oldPrice:null,store:"تك بلس",rating:4.2,stock:31,badge:"عملي",image:"https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=700&q=85",description:"حامل هاتف للمكتب يساعد على تثبيت الجهاز أثناء المشاهدة أو المكالمات."},
 {id:"p12",name:"مزهرية ديكور",category:"المنزل",price:59,oldPrice:null,store:"بيت أجمل",rating:4.8,stock:9,badge:"اختيار مميز",image:"https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=700&q=85",description:"قطعة ديكور أنيقة تضيف لمسة بسيطة للمساحة المنزلية."}
];
const categoryInfo = [
 {name:"الملابس",icon:"👕",tint:"#e9f2ff"},{name:"الأحذية",icon:"👟",tint:"#f4edff"},{name:"الحقائب",icon:"👜",tint:"#fff0e7"},{name:"الإلكترونيات",icon:"🎧",tint:"#e8f8f1"},{name:"الجمال",icon:"🧴",tint:"#fff0f5"},{name:"المنزل",icon:"🪴",tint:"#f5f1e8"},{name:"الإكسسوارات",icon:"⌚",tint:"#edf0ff"},{name:"الأطفال",icon:"🧸",tint:"#fff5d9"}
];
let products = [...sampleProducts];
let cart = readJSON("sala_cart", []);
let favorites = readJSON("sala_favorites", []);
let activeCategory = "الكل", activeFilter = "all", searchTerm = "", sortMode = "featured";
let toastTimer;
function readJSON(k, fallback){try{return JSON.parse(localStorage.getItem(k)) ?? fallback}catch{return fallback}}
function saveState(){localStorage.setItem("sala_cart",JSON.stringify(cart));localStorage.setItem("sala_favorites",JSON.stringify(favorites))}
function showToast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2600)}
function safeText(v=""){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function getProduct(id){return products.find(p=>p.id===id)}
function getCount(){return cart.reduce((n,x)=>n+x.qty,0)}
function updateBadges(){$("#cartCount").textContent=getCount();$("#favCount").textContent=favorites.length}
function renderCategories(){
 $("#categoryGrid").innerHTML=categoryInfo.map(c=>`<button class="category-card" data-pick-category="${safeText(c.name)}"><span class="category-emoji" style="--tint:${c.tint}">${c.icon}</span><b>${safeText(c.name)}</b><small>${products.filter(p=>p.category===c.name).length} منتجات</small></button>`).join("");
}
function visibleProducts(){
 let arr=products.filter(p=>(activeCategory==="الكل"||p.category===activeCategory)&&(!searchTerm||`${p.name} ${p.category} ${p.store} ${p.description}`.toLowerCase().includes(searchTerm.toLowerCase()))&&(activeFilter!=="available"||p.stock>0)&&(activeFilter!=="sale"||p.oldPrice));
 if(sortMode==="newest")arr.reverse();if(sortMode==="priceAsc")arr.sort((a,b)=>a.price-b.price);if(sortMode==="priceDesc")arr.sort((a,b)=>b.price-a.price);if(sortMode==="rating")arr.sort((a,b)=>b.rating-a.rating);
 return arr;
}
function renderProducts(){
 const arr=visibleProducts();$("#productsTitle").textContent=searchTerm?`نتائج البحث عن «${searchTerm}»`:activeCategory==="الكل"?"منتجات قد تعجبك":`منتجات ${activeCategory}`;
 $("#productGrid").innerHTML=arr.map(p=>`<article class="product-card" data-product="${p.id}" tabindex="0" aria-label="${safeText(p.name)}">
 <div class="product-image"><img src="${safeText(p.image)}" alt="${safeText(p.name)}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x700/eaf1fc/1266e8?text=SALA'"><span class="product-badge">${p.stock===0?"غير متوفر":safeText(p.badge||"مختار لك")}</span><button class="heart-btn ${favorites.includes(p.id)?"active":""}" data-fav="${p.id}" aria-label="إضافة للمفضلة">${favorites.includes(p.id)?"♥":"♡"}</button><button class="quick-add" data-add="${p.id}" ${p.stock===0?"disabled":""}>${p.stock===0?"غير متوفر":"＋ إضافة إلى السلة"}</button></div>
 <div class="product-info"><span class="store-name">${safeText(p.store)}</span><h3>${safeText(p.name)}</h3><div class="rating">★ ${Number(p.rating).toFixed(1)} <span>(${Math.floor(p.rating*17)} تقييم)</span></div><div class="price-row"><strong class="price">${money(p.price)}</strong>${p.oldPrice?`<span class="old-price">${money(p.oldPrice)}</span>`:""}</div><div class="stock-note">${p.stock>0?`متوفر · ${p.stock} قطع`:"نفد المخزون"}</div></div></article>`).join("");
 $("#emptyState").classList.toggle("hidden",arr.length>0);$("#productGrid").classList.toggle("hidden",arr.length===0);
 $$(".nav-chip").forEach(b=>b.classList.toggle("active",b.dataset.category===activeCategory));
}
function chooseCategory(cat){activeCategory=cat;activeFilter="all";$$(".filter-chip").forEach(b=>b.classList.toggle("active",b.dataset.filter==="all"));renderProducts();$("#productsSection").scrollIntoView({behavior:"smooth",block:"start"})}
function toggleFavorite(id){if(favorites.includes(id)){favorites=favorites.filter(x=>x!==id);showToast("تمت إزالة المنتج من المفضلة")}else{favorites.push(id);showToast("تمت إضافة المنتج إلى المفضلة")}saveState();renderProducts();updateBadges()}
function addToCart(id,qty=1){const p=getProduct(id);if(!p||p.stock<1){showToast("هذا المنتج غير متوفر حاليًا");return}const item=cart.find(x=>x.id===id);if((item?.qty||0)+qty>p.stock){showToast("الكمية المطلوبة أكبر من المخزون المتاح");return}if(item)item.qty+=qty;else cart.push({id,qty});saveState();updateBadges();showToast("تمت إضافة المنتج إلى السلة")}
function cartSubtotal(){return cart.reduce((sum,x)=>{const p=getProduct(x.id);return sum+(p?p.price*x.qty:0)},0)}
function openPanel(type){
 const panel=$("#sidePanel"),overlay=$("#overlay");panel.classList.add("open");overlay.classList.remove("hidden");
 if(type==="cart"){ $("#panelTitle").textContent=`سلة التسوق (${getCount()})`;renderCartPanel()}
 else{$("#panelTitle").textContent=`المفضلة (${favorites.length})`;renderFavoritesPanel()}
}
function closePanel(){$("#sidePanel").classList.remove("open");$("#overlay").classList.add("hidden")}
function renderCartPanel(){
 const body=$("#panelBody");body.className="cart-list";
 if(!cart.length){body.innerHTML=`<div class="panel-empty"><span>🛍</span><h3>سلتك فارغة</h3><p>اكتشف المنتجات وأضف ما يعجبك.</p><button class="primary-btn" id="panelShop">ابدأ التسوق</button></div>`;$("#panelShop").onclick=()=>{closePanel();$("#productsSection").scrollIntoView({behavior:"smooth"})};return}
 body.innerHTML=cart.map(x=>{const p=getProduct(x.id);if(!p)return"";return `<div class="cart-item"><img src="${safeText(p.image)}" alt=""><div><h4>${safeText(p.name)}</h4><p>${safeText(p.store)}</p><strong>${money(p.price*x.qty)}</strong><div class="qty-control"><button data-qty="${p.id}" data-delta="-1">−</button><span>${x.qty}</span><button data-qty="${p.id}" data-delta="1">+</button></div></div><button class="remove-btn" data-remove="${p.id}">حذف</button></div>`}).join("")+`<div class="cart-summary"><div class="summary-row"><span>المجموع الفرعي</span><b>${money(cartSubtotal())}</b></div><div class="summary-row"><span>التوصيل</span><span>يحدد عند الطلب</span></div><div class="summary-row total"><span>الإجمالي الحالي</span><b>${money(cartSubtotal())}</b></div><div class="notice">الأسعار والمخزون النهائيان يجب التحقق منهما عند إنشاء الطلب.</div><button class="primary-btn full-btn" id="checkoutStart">متابعة إتمام الطلب ←</button><button class="text-btn full-btn" id="continueShopping">متابعة التسوق</button></div>`;
}
function renderFavoritesPanel(){
 const body=$("#panelBody");body.className="cart-list";const arr=favorites.map(getProduct).filter(Boolean);
 body.innerHTML=arr.length?arr.map(p=>`<div class="favorite-row"><img src="${safeText(p.image)}" alt=""><div><b>${safeText(p.name)}</b><small>${money(p.price)}</small></div><button data-add="${p.id}" ${p.stock===0?"disabled":""}>أضف للسلة</button><button class="remove-btn" data-fav="${p.id}">♥</button></div>`).join(""):`<div class="panel-empty"><span>♡</span><h3>لا توجد منتجات مفضلة</h3><p>اضغط على القلب في أي منتج لحفظه هنا.</p></div>`;
}
function openProduct(id){const p=getProduct(id);if(!p)return;$("#productModalBody").innerHTML=`<div class="product-detail"><img src="${safeText(p.image)}" alt="${safeText(p.name)}"><div><span class="eyebrow">${safeText(p.category)} · ${safeText(p.store)}</span><h2>${safeText(p.name)}</h2><div class="rating">★ ${p.rating.toFixed(1)} <span>تقييمات العملاء</span></div><div class="detail-price">${money(p.price)} ${p.oldPrice?`<small class="old-price">${money(p.oldPrice)}</small>`:""}</div><p>${safeText(p.description)}</p><p>${p.stock>0?`متوفر حاليًا (${p.stock} قطع)`:"نفد المخزون حاليًا"}</p><label class="form-field"><span>الكمية</span><select id="detailQty">${Array.from({length:Math.min(p.stock,10)},(_,i)=>`<option value="${i+1}">${i+1}</option>`).join("")||"<option>0</option>"}</select></label><button class="primary-btn full-btn" data-detail-add="${p.id}" ${p.stock===0?"disabled":""}>أضف إلى السلة</button><button class="text-btn full-btn" data-fav="${p.id}">${favorites.includes(p.id)?"♥ إزالة من المفضلة":"♡ أضف إلى المفضلة"}</button><div class="notice">هذه واجهة أولية. إتمام الدفع والشحن الحقيقي يحتاج إلى ربط خدمات موثوقة.</div></div></div>`;$("#productModal").showModal()}
function openAccount(){renderAccount("login");$("#accountModal").showModal()}
function renderAccount(mode){
 const host=$("#accountContent");
 if(mode==="signup"){host.innerHTML=`<h2>إنشاء حساب</h2><p>أنشئ حسابك للبدء في تجربة سَلى.</p><form id="accountForm"><label class="form-field"><span>الاسم الكامل</span><input name="name" required minlength="2" autocomplete="name"></label><label class="form-field"><span>البريد الإلكتروني</span><input name="email" type="email" required autocomplete="email"></label><label class="form-field"><span>كلمة المرور</span><input name="password" type="password" minlength="8" required autocomplete="new-password"></label><div class="notice">هذا النموذج لا ينشئ حسابًا حقيقيًا قبل ربط خدمة مصادقة مثل Supabase.</div><button class="primary-btn full-btn">إنشاء الحساب</button></form><button class="form-switch" data-account-mode="login">لديك حساب؟ تسجيل الدخول</button>`}
 else {host.innerHTML=`<h2>أهلًا بك في سَلى</h2><p>سجّل الدخول للوصول إلى حسابك وطلباتك.</p><form id="accountForm"><label class="form-field"><span>البريد الإلكتروني</span><input name="email" type="email" required autocomplete="email"></label><label class="form-field"><span>كلمة المرور</span><input name="password" type="password" required autocomplete="current-password"></label><div class="notice">تسجيل الدخول الحقيقي غير مفعّل حتى ربط نظام المصادقة وقاعدة البيانات.</div><button class="primary-btn full-btn">تسجيل الدخول</button></form><button class="form-switch" data-account-mode="signup">ليس لديك حساب؟ أنشئ حسابًا</button>`}
}
function openSeller(){const old=readJSON("sala_seller_application",null);$("#sellerContent").innerHTML=`<h2>انضم كبائع في سَلى</h2><p>قدّم معلومات متجرك، وستكون حالة الطلب محلية في هذا الإصدار إلى أن نربط قاعدة البيانات.</p>${old?`<div class="seller-status">لديك طلب محفوظ على هذا الجهاز باسم ${safeText(old.store)}. الحالة: بانتظار الربط والمراجعة.</div>`:""}<form id="sellerForm"><label class="form-field"><span>اسمك</span><input name="name" required minlength="2"></label><div class="form-grid"><label class="form-field"><span>البريد الإلكتروني</span><input name="email" type="email" required></label><label class="form-field"><span>رقم الهاتف</span><input name="phone" type="tel" required></label></div><label class="form-field"><span>اسم المتجر المقترح</span><input name="store" required></label><label class="form-field"><span>وصف نشاط المتجر</span><textarea name="description" required></textarea></label><div class="notice">إرسال الطلب يحفظه على هذا الجهاز فقط؛ لا يصل إلى الإدارة حتى إعداد الخادم وقاعدة البيانات.</div><button class="primary-btn full-btn">حفظ طلب الانضمام</button></form>`;$("#sellerModal").showModal()}
function openCheckout(){
 if(!cart.length){showToast("أضف منتجات إلى السلة أولًا");return}
 $("#checkoutContent").innerHTML=`<h2>إتمام الطلب</h2><p>أدخل معلومات التوصيل لمراجعة طلبك.</p><div class="notice">الدفع الإلكتروني غير مفعّل في هذه النسخة؛ لن يتم خصم أي مبلغ أو إرسال طلب حقيقي.</div><form id="checkoutForm"><label class="form-field"><span>اسم المستلم</span><input name="name" required autocomplete="name"></label><div class="form-grid"><label class="form-field"><span>رقم الهاتف</span><input name="phone" type="tel" required autocomplete="tel"></label><label class="form-field"><span>المدينة</span><input name="city" required></label></div><label class="form-field"><span>الحي والشارع والعنوان</span><textarea name="address" required></textarea></label><div class="summary-row total"><span>مجموع المنتجات</span><b>${money(cartSubtotal())}</b></div><button class="primary-btn full-btn">حفظ ملخص الطلب على هذا الجهاز</button></form>`;
 $("#checkoutModal").showModal()
}
function closeDialog(id){const d=$("#"+id);if(d?.open)d.close()}
function resetFilters(){activeCategory="الكل";activeFilter="all";searchTerm="";$("#searchInput").value="";sortMode="featured";$("#sortSelect").value="featured";$$(".filter-chip").forEach(b=>b.classList.toggle("active",b.dataset.filter==="all"));renderProducts()}
document.addEventListener("click",e=>{
 const cat=e.target.closest("[data-pick-category]");if(cat){chooseCategory(cat.dataset.pickCategory);return}
 const nav=e.target.closest("[data-category]");if(nav){chooseCategory(nav.dataset.category);return}
 const fav=e.target.closest("[data-fav]");if(fav){e.stopPropagation();toggleFavorite(fav.dataset.fav);if($("#productModal").open)openProduct(fav.dataset.fav);if($("#sidePanel").classList.contains("open")&&$("#panelTitle").textContent.includes("المفضلة"))renderFavoritesPanel();return}
 const add=e.target.closest("[data-add]");if(add){e.stopPropagation();addToCart(add.dataset.add);if($("#sidePanel").classList.contains("open")&&$("#panelTitle").textContent.includes("سلة")){renderCartPanel();$("#panelTitle").textContent=`سلة التسوق (${getCount()})`}return}
 const detailAdd=e.target.closest("[data-detail-add]");if(detailAdd){addToCart(detailAdd.dataset.detailAdd,Number($("#detailQty")?.value||1));closeDialog("productModal");return}
 const qty=e.target.closest("[data-qty]");if(qty){const item=cart.find(x=>x.id===qty.dataset.qty),p=getProduct(qty.dataset.qty);if(item&&p){const n=item.qty+Number(qty.dataset.delta);if(n<1)cart=cart.filter(x=>x.id!==p.id);else if(n<=p.stock)item.qty=n;else showToast("لا توجد كمية إضافية في المخزون");saveState();updateBadges();renderCartPanel();$("#panelTitle").textContent=`سلة التسوق (${getCount()})`}return}
 const remove=e.target.closest("[data-remove]");if(remove){cart=cart.filter(x=>x.id!==remove.dataset.remove);saveState();updateBadges();renderCartPanel();$("#panelTitle").textContent=`سلة التسوق (${getCount()})`;showToast("تم حذف المنتج من السلة");return}
 const card=e.target.closest("[data-product]");if(card&&!e.target.closest("button")){openProduct(card.dataset.product);return}
 const mode=e.target.closest("[data-account-mode]");if(mode){renderAccount(mode.dataset.accountMode);return}
 const close=e.target.closest("[data-close]");if(close){closeDialog(close.dataset.close);return}
});
$("#productGrid").addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches("[data-product]")){e.preventDefault();openProduct(e.target.dataset.product)}});
$("#searchInput").addEventListener("input",e=>{searchTerm=e.target.value.trim();$("#clearSearch").classList.toggle("show",!!searchTerm);renderProducts()});
$("#clearSearch").onclick=()=>{$("#searchInput").value="";searchTerm="";$("#clearSearch").classList.remove("show");renderProducts()};
$("#sortSelect").onchange=e=>{sortMode=e.target.value;renderProducts()};
$$(".filter-chip").forEach(b=>b.onclick=()=>{activeFilter=b.dataset.filter;$$(".filter-chip").forEach(x=>x.classList.toggle("active",x===b));renderProducts()});
$("#resetFilters").onclick=resetFilters;
$("#openCart").onclick=()=>openPanel("cart");$("#mobileCart").onclick=()=>openPanel("cart");$("#openFavorites").onclick=()=>openPanel("favorites");$("#mobileFavorites").onclick=()=>openPanel("favorites");$("#closePanel").onclick=closePanel;$("#overlay").onclick=closePanel;
$("#openAccount").onclick=openAccount;$("#mobileAccount").onclick=openAccount;
$("#mobileSearch").onclick=()=>{window.scrollTo({top:0,behavior:"smooth"});setTimeout(()=>$("#searchInput").focus(),350)};
$("#shopNow").onclick=()=>$("#productsSection").scrollIntoView({behavior:"smooth"});
$("#allCategories").onclick=()=>chooseCategory("الكل");
$("#becomeSeller").onclick=openSeller;
$("#continueShopping")?.addEventListener("click",closePanel);
$("#panelBody").addEventListener("click",e=>{if(e.target.id==="continueShopping")closePanel();if(e.target.id==="checkoutStart")openCheckout()});
$("#accountContent").addEventListener("submit",e=>{if(e.target.id==="accountForm"){e.preventDefault();showToast("اربط Supabase لتفعيل الحسابات الحقيقية") }});
$("#sellerContent").addEventListener("submit",e=>{if(e.target.id==="sellerForm"){e.preventDefault();const d=Object.fromEntries(new FormData(e.target));localStorage.setItem("sala_seller_application",JSON.stringify(d));$("#sellerContent").innerHTML=`<h2>تم حفظ الطلب على جهازك</h2><p>حُفظ طلب متجر ${safeText(d.store)} محليًا. لن يصل للإدارة قبل ربط قاعدة البيانات.</p><div class="seller-status">الحالة الحالية: محفوظ محليًا — غير مرسل إلى الخادم.</div><button class="primary-btn full-btn" onclick="document.getElementById('sellerModal').close()">حسنًا</button>`;showToast("تم حفظ الطلب محليًا")}});
$("#checkoutContent").addEventListener("submit",e=>{if(e.target.id==="checkoutForm"){e.preventDefault();const customer=Object.fromEntries(new FormData(e.target));const order={id:"SALA-"+Date.now().toString().slice(-8),createdAt:new Date().toISOString(),customer,items:cart.map(x=>({...x,product:getProduct(x.id)?.name||""})),subtotal:cartSubtotal(),status:"محفوظ محليًا — غير مرسل"};const orders=readJSON("sala_orders",[]);orders.unshift(order);localStorage.setItem("sala_orders",JSON.stringify(orders));$("#checkoutContent").innerHTML=`<h2>تم حفظ ملخص الطلب</h2><div class="seller-status">رقم الملخص: ${order.id}<br>الإجمالي: ${money(order.subtotal)}<br>حُفظ على هذا الجهاز فقط. لم يتم الدفع أو إرسال الطلب إلى متجر.</div><button class="primary-btn full-btn" id="finishLocalOrder">إنهاء</button>`;$("#finishLocalOrder").onclick=()=>{cart=[];saveState();updateBadges();closeDialog("checkoutModal");closePanel();renderCartPanel();showToast("تم إنهاء الملخص المحلي")}}});
$("#newsletterForm").onsubmit=e=>{e.preventDefault();showToast("تم التحقق من البريد في الواجهة فقط؛ خدمة الاشتراك غير مربوطة");e.target.reset()};
$("#year").textContent=new Date().getFullYear();
renderCategories();renderProducts();updateBadges();
setTimeout(()=>$("#splash").classList.add("done"),850);
if("serviceWorker" in navigator && location.protocol.startsWith("http"))navigator.serviceWorker.register("service-worker.js").catch(()=>{});
