(function(){
  "use strict";

  var AVATAR_COLORS = ["var(--accent)","var(--accent-3)","#F7CBB4"];

  var companies = [
    { id:"halliburton", name:"Halliburton", vinculo:"Proveedores tecnológicos", sector:"Oil & Gas / Tecnología", descripcion:"Servicios y tecnología de perforación para operaciones no convencionales en Vaca Muerta.", evidencia:"Alta", periodo:"2026", fuente:"https://ir.halliburton.com/news-releases/news-release-details/pampa-energia-selects-halliburton-support-enterprise-digital", initials:"HA", color:0 },
    { id:"sacde", name:"SACDE", vinculo:"Contratistas / EPC", sector:"Ingeniería y construcción", descripcion:"Construcción y montaje industrial de gran escala para proyectos de energía en la Patagonia.", evidencia:"Alta", periodo:"2024-2026", fuente:"https://pampa.com/prensa/con-una-inversion-de-us-2-700-millones-pampa-energia-construira-la-planta-de-urea-mas-grande-de-la-region-y-una-de-las-mas-grandes-del-mundo/", initials:"SA", color:1 },
    { id:"tecnimont", name:"Tecnimont", vinculo:"Contratistas / EPC", sector:"Ingeniería y construcción", descripcion:"Ingeniería, procurement y construcción (EPC) para plantas de proceso industrial a gran escala.", evidencia:"Alta", periodo:"2026", fuente:"https://ri.pampa.com/press-release/pampa-ingresa-al-negocio-de-fertilizantes-con-la-construccion-de-la-mayor-planta-de-urea-de-latam/", initials:"TE", color:2 },
    { id:"maire", name:"MAIRE", vinculo:"Contratistas / EPC", sector:"Ingeniería industrial", descripcion:"Grupo internacional de ingeniería industrial especializado en proyectos EPC de energía y fertilizantes.", evidencia:"Alta", periodo:"2026", fuente:"https://pampa.com/prensa/con-una-inversion-de-us-2-700-millones-pampa-energia-construira-la-planta-de-urea-mas-grande-de-la-region-y-una-de-las-mas-grandes-del-mundo/", initials:"MA", color:0 },
    { id:"nextchem", name:"Nextchem", vinculo:"Proveedores tecnológicos", sector:"Tecnología de procesos", descripcion:"Tecnología de procesos para la industria química y de fertilizantes.", evidencia:"Alta", periodo:"2026", fuente:"https://pampa.com/prensa/con-una-inversion-de-us-2-700-millones-pampa-energia-construira-la-planta-de-urea-mas-grande-de-la-region-y-una-de-las-mas-grandes-del-mundo/", initials:"NE", color:1 },
    { id:"stamicarbon", name:"Stamicarbon", vinculo:"Proveedores tecnológicos", sector:"Fertilizantes / tecnología", descripcion:"Licenciante de tecnología para plantas de urea y fertilizantes nitrogenados.", evidencia:"Alta", periodo:"2026", fuente:"https://pampa.com/prensa/con-una-inversion-de-us-2-700-millones-pampa-energia-construira-la-planta-de-urea-mas-grande-de-la-region-y-una-de-las-mas-grandes-del-mundo/", initials:"ST", color:2 },
    { id:"kbr", name:"KBR", vinculo:"Proveedores tecnológicos", sector:"Fertilizantes / ingeniería", descripcion:"Tecnología e ingeniería de procesos para plantas de fertilizantes.", evidencia:"Alta", periodo:"2026", fuente:"https://pampa.com/prensa/con-una-inversion-de-us-2-700-millones-pampa-energia-construira-la-planta-de-urea-mas-grande-de-la-region-y-una-de-las-mas-grandes-del-mundo/", initials:"KB", color:0 },
    { id:"rakiduam", name:"Rakiduam", vinculo:"Contratistas / EPC", sector:"Oil & Gas / Facilidades", descripcion:"Construcción y puesta en marcha de instalaciones de tratamiento de petróleo y gas en Vaca Muerta.", evidencia:"Alta", periodo:"2025", fuente:"https://es.linkedin.com/posts/rakiduamn_proyecto-ic%C3%B3nico-en-rinc%C3%B3n-de-aranda-neuqu%C3%A9n-activity-7314365814508261376-Wcg2", initials:"RA", color:1 },
    { id:"grupo-provemet", name:"Grupo Provemet", vinculo:"Proveedores", sector:"Metalúrgica / piping", descripcion:"Fabricación metalúrgica y piping para proyectos industriales de energía.", evidencia:"Media-Alta", periodo:"2026", fuente:"https://ar.linkedin.com/in/diego-kreszes-84079084", initials:"GP", color:2 },
    { id:"tyc-s-a", name:"TYC S.A.", vinculo:"Proveedores", sector:"Ingeniería / fabricación", descripcion:"Ingeniería y fabricación para la cadena de valor de Vaca Muerta.", evidencia:"Media-Alta", periodo:"2026", fuente:"https://www.linkedin.com/company/tyc-sa/", initials:"TS", color:0 },
    { id:"msi-montajes-y-servicios-industriales", name:"MSI - Montajes y Servicios Industriales", vinculo:"Proveedores", sector:"Servicios industriales / calibración / ensayos", descripcion:"Montajes industriales, calibración y ensayos para el sector energético.", evidencia:"Alta", periodo:"2026", fuente:"https://msi.ar/", initials:"MM", color:1 },
    { id:"kompass-srl", name:"Kompass SRL", vinculo:"Proveedores", sector:"Servicios petroleros", descripcion:"Servicios petroleros para operaciones de exploración y producción.", evidencia:"Alta", periodo:"2026", fuente:"https://kompasssrl.com/", initials:"KO", color:2 },
    { id:"la-colonia", name:"La Colonia", vinculo:"Proveedores", sector:"Combustibles y lubricantes", descripcion:"Distribución de combustibles y lubricantes industriales.", evidencia:"Alta", periodo:"2026", fuente:"https://lacolonia.com.ar/servicios/", initials:"CO", color:0 },
    { id:"emu-s-a", name:"EMU S.A.", vinculo:"Proveedores", sector:"Equipos industriales / Oil & Gas", descripcion:"Equipos industriales para el sector Oil & Gas.", evidencia:"Alta", periodo:"2026", fuente:"https://www.emu.com.ar/", initials:"ES", color:1 },
    { id:"ca-group", name:"CA Group", vinculo:"Servicios profesionales", sector:"Servicios empresariales", descripcion:"Servicios empresariales tercerizados para compañías industriales.", evidencia:"Alta", periodo:"2026", fuente:"https://cagroup.com.ar/nosotros/", initials:"CG", color:2 },
    { id:"howest", name:"Howest", vinculo:"Proveedores", sector:"Equipamiento eléctrico", descripcion:"Equipamiento eléctrico para instalaciones industriales.", evidencia:"Alta", periodo:"2026", fuente:"https://www.howest.com.ar/", initials:"HO", color:0 },
    { id:"ipe-energia", name:"IPE Energía", vinculo:"Servicios profesionales", sector:"Ingeniería / energía / Oil & Gas", descripcion:"Ingeniería y servicios técnicos para el sector energético.", evidencia:"Alta", periodo:"2026", fuente:"https://ipe-energia.com/clientes/", initials:"IE", color:1 },
    { id:"fricsa", name:"FRICSA", vinculo:"Proveedores", sector:"Servicios industriales / Oil & Gas", descripcion:"Servicios industriales para operaciones de Oil & Gas.", evidencia:"Alta", periodo:"2025", fuente:"https://fricsa.com.ar/wp-content/uploads/2025/10/Presentacion-FRICSA-S.A.-Rev16.pdf", initials:"FR", color:2 },
    { id:"gevelux", name:"Gevelux", vinculo:"Proveedores", sector:"Materiales eléctricos APE", descripcion:"Materiales y soluciones eléctricas para proyectos industriales.", evidencia:"Alta", periodo:"2026", fuente:"https://www.gevelux.com/", initials:"GE", color:0 },
    { id:"inteligentia", name:"Inteligentia", vinculo:"Servicios profesionales", sector:"IA / transformación digital", descripcion:"Soluciones de inteligencia artificial y transformación digital para empresas.", evidencia:"Alta", periodo:"2026", fuente:"https://inteligentia.ai/", initials:"IN", color:1 },
    { id:"synvelt", name:"Synvelt", vinculo:"Servicios profesionales", sector:"Transformación digital / IT", descripcion:"Transformación digital y servicios de TI para el sector industrial.", evidencia:"Alta", periodo:"2026", fuente:"https://www.synvelt.com/", initials:"SY", color:2 },
    { id:"sumiservices", name:"Sumiservices", vinculo:"Proveedores", sector:"Suministros industriales", descripcion:"Abastecimiento de suministros industriales.", evidencia:"Media-Alta", periodo:"2026", fuente:"https://sumiservices.net/", initials:"SU", color:0 },
    { id:"patagonia-resources", name:"Patagonia Resources", vinculo:"Servicios profesionales", sector:"RR.HH. / servicios para energía", descripcion:"Servicios de recursos humanos para la industria energética patagónica.", evidencia:"Media-Alta", periodo:"2026", fuente:"https://patagoniaresources.com.ar/es/nosotros", initials:"PR", color:1 },
    { id:"comitans", name:"COMITANS", vinculo:"Servicios profesionales", sector:"Ingeniería / proyectos / gestión comercial", descripcion:"Consultoría en ingeniería, proyectos y gestión comercial.", evidencia:"Media-Alta", periodo:"2026", fuente:"https://www.comitans.com/es/mercados/clientes/", initials:"CO", color:2 },
    { id:"enausa", name:"ENAUSA", vinculo:"Proveedores", sector:"Combustibles B2B", descripcion:"Comercialización de combustibles B2B para generación térmica.", evidencia:"Alta", periodo:"2026", fuente:"https://www.enausa.com.ar/industrias/generacion", initials:"EN", color:0 },
    { id:"tenaris", name:"Tenaris", vinculo:"Proveedores", sector:"Tubulares / Oil & Gas", descripcion:"Fabricación de tubos de acero sin costura para la industria Oil & Gas.", evidencia:"Media", periodo:"2025-2026", fuente:"https://www.tenaris.com/", initials:"TE", color:1 },
    { id:"techint", name:"Techint", vinculo:"Contratistas / EPC", sector:"Ingeniería y construcción", descripcion:"Ingeniería y construcción de infraestructura energética.", evidencia:"Media", periodo:"Histórica", fuente:"https://www.techint.com/", initials:"TE", color:2 },
    { id:"siemens", name:"Siemens", vinculo:"Proveedores tecnológicos", sector:"Generación eléctrica", descripcion:"Tecnología y equipamiento para generación eléctrica.", evidencia:"Media", periodo:"Histórica", fuente:"https://www.siemens-energy.com/", initials:"SI", color:0 },
    { id:"wartsila", name:"Wärtsilä", vinculo:"Proveedores tecnológicos", sector:"Generación eléctrica", descripcion:"Motores, generación y servicios de operación y mantenimiento para plantas de energía.", evidencia:"Media-Alta", periodo:"Histórica", fuente:"https://www.wartsila.com/", initials:"WÄ", color:1 },
    { id:"ypf", name:"YPF", vinculo:"Operadores / productoras", sector:"Oil & Gas", descripcion:"Operadora integrada de petróleo y gas, líder en Vaca Muerta.", evidencia:"Alta", periodo:"2025-2026", fuente:"https://ri.pampa.com/nuestros-activos/petroleo-y-gas/exploracion-y-produccion-ep/", initials:"YP", color:2 },
    { id:"pan-american-energy-pae", name:"Pan American Energy (PAE)", vinculo:"Operadores / productoras", sector:"Oil & Gas / LNG", descripcion:"Productora de petróleo y gas con proyectos de exportación de GNL.", evidencia:"Alta", periodo:"2024-2026", fuente:"https://www.sec.gov/Archives/edgar/data/1469395/000129281426001793/ex99-1.htm", initials:"PA", color:0 },
    { id:"harbour-energy", name:"Harbour Energy", vinculo:"Operadores / productoras", sector:"Oil & Gas / LNG", descripcion:"Compañía internacional de exploración y producción de Oil & Gas.", evidencia:"Alta", periodo:"2024-2026", fuente:"https://www.sec.gov/Archives/edgar/data/1469395/000129281426001793/ex99-1.htm", initials:"HE", color:1 },
    { id:"golar", name:"Golar", vinculo:"Proveedores tecnológicos", sector:"LNG", descripcion:"Infraestructura flotante de licuefacción de gas natural (FLNG).", evidencia:"Alta", periodo:"2024-2026", fuente:"https://www.sec.gov/Archives/edgar/data/1469395/000129281426001793/ex99-1.htm", initials:"GO", color:2 },
    { id:"vista-energy", name:"Vista Energy", vinculo:"Operadores / productoras", sector:"Oil & Gas", descripcion:"Operadora independiente de petróleo no convencional en Vaca Muerta.", evidencia:"Alta", periodo:"2024-2026", fuente:"https://www.sec.gov/Archives/edgar/data/1469395/000129281426001793/ex99-1.htm", initials:"VE", color:0 },
    { id:"pluspetrol", name:"Pluspetrol", vinculo:"Operadores / productoras", sector:"Oil & Gas", descripcion:"Productora de petróleo y gas con operaciones en Vaca Muerta.", evidencia:"Alta", periodo:"2024-2026", fuente:"https://www.sec.gov/Archives/edgar/data/1469395/000129281426001793/ex99-1.htm", initials:"PL", color:1 },
    { id:"transportadora-de-gas-del-sur-tgs", name:"Transportadora de Gas del Sur (TGS)", vinculo:"Operadores / productoras", sector:"Midstream / gas", descripcion:"Transporte de gas natural y procesamiento de líquidos en el sistema troncal sur.", evidencia:"Alta", periodo:"2025-2026", fuente:"https://ri.pampa.com/nuestros-activos/petroleo-y-gas/midstream/transportadora-del-gas-de-sur-tgs/", initials:"TG", color:2 },
    { id:"ciesa", name:"CIESA", vinculo:"Operadores / productoras", sector:"Midstream", descripcion:"Holding de infraestructura de transporte de gas natural.", evidencia:"Alta", periodo:"2025-2026", fuente:"https://www.sec.gov/Archives/edgar/data/1469395/000129281426002185/ex08-1.htm", initials:"CI", color:0 },
    { id:"transener", name:"Transener", vinculo:"Operadores / productoras", sector:"Transmisión eléctrica", descripcion:"Transmisión de energía eléctrica de alta tensión.", evidencia:"Alta", periodo:"2025-2026", fuente:"https://www.sec.gov/Archives/edgar/data/1469395/000129281426002185/ex08-1.htm", initials:"TR", color:1 },
    { id:"citelec", name:"Citelec", vinculo:"Operadores / productoras", sector:"Transmisión eléctrica", descripcion:"Holding de control del sistema de transmisión eléctrica.", evidencia:"Alta", periodo:"2025-2026", fuente:"https://www.sec.gov/Archives/edgar/data/1469395/000129281426002185/ex08-1.htm", initials:"CI", color:2 },
    { id:"oldelval", name:"OldelVal", vinculo:"Operadores / productoras", sector:"Oleoductos", descripcion:"Transporte de petróleo crudo por oleoducto desde la cuenca neuquina.", evidencia:"Alta", periodo:"2025-2026", fuente:"https://www.sec.gov/Archives/edgar/data/1469395/000129281426002185/ex08-1.htm", initials:"OL", color:0 },
    { id:"vmos", name:"VMOS", vinculo:"Operadores / productoras", sector:"Oleoductos / logística", descripcion:"Proyecto de oleoducto para exportación de crudo desde Vaca Muerta.", evidencia:"Alta", periodo:"2025-2026", fuente:"https://www.sec.gov/Archives/edgar/data/1469395/000129281426001793/ex99-1.htm", initials:"VM", color:1 },
    { id:"southern-energy", name:"Southern Energy", vinculo:"Operadores / productoras", sector:"LNG", descripcion:"Proyecto de exportación de GNL desde Argentina.", evidencia:"Alta", periodo:"2025-2026", fuente:"https://www.sec.gov/Archives/edgar/data/1469395/000129281426001793/ex99-1.htm", initials:"SE", color:2 },
    { id:"san-matias-pipeline", name:"San Matías Pipeline", vinculo:"Operadores / productoras", sector:"Midstream / gas", descripcion:"Transporte de gas natural en la región patagónica.", evidencia:"Alta", periodo:"2025-2026", fuente:"https://www.sec.gov/Archives/edgar/data/1469395/000129281426002185/ex08-1.htm", initials:"SM", color:0 },
    { id:"pampa-energia", name:"Pampa Energía", vinculo:"Operadores / productoras", sector:"Energía integrada · Oil & Gas / Generación", descripcion:"Compañía integrada de energía: exploración y producción de petróleo y gas, generación eléctrica y petroquímica.", evidencia:"Alta", periodo:"2026", fuente:"https://ri.pampa.com/", initials:"PE", color:1, accountType:"empresa" }
  ];

  var companyById = {};
  companies.forEach(function(c){ companyById[c.id] = c; });

  var userPosts = [];

  var rfqs = [
    { id:1, title:"Empaque corrugado — 50,000 u/mes", buyer:"Grupo Alimenta", category:"Empaque corrugado", location:"León, GTO", budget:"$80–120k MXN", deadline:"15 nov", quotes:6, match:96 },
    { id:2, title:"Transporte refrigerado ruta CDMX–Monterrey", buyer:"Distribuidora Rialto", category:"Logística", location:"CDMX", budget:"$45–60k MXN/mes", deadline:"30 oct", quotes:4, match:88 },
    { id:3, title:"Insumos químicos grado alimenticio", buyer:"Lácteos del Centro", category:"Químicos", location:"Querétaro, QRO", budget:"$200k MXN", deadline:"5 dic", quotes:9, match:81 },
    { id:4, title:"Componentes metálicos troquelados", buyer:"AutoParts Saltillo", category:"Metalmecánica", location:"Saltillo, COAH", budget:"$150–300k MXN", deadline:"20 nov", quotes:5, match:74 }
  ];

  function esc(s){ var d=document.createElement("div"); d.textContent=s; return d.innerHTML; }
  function uniq(a){ return a.filter(function(v,i){ return a.indexOf(v)===i; }); }

  function evidenceBadge(level){
    var bg = level === "Alta" ? "color-mix(in srgb, var(--accent-2) 45%, white)" : level === "Media-Alta" ? "color-mix(in srgb, var(--accent) 32%, white)" : "var(--surface-2)";
    var dot = level === "Alta" ? "var(--accent-2-strong)" : level === "Media-Alta" ? "var(--accent-strong)" : "var(--ink-faint)";
    return '<span class="tag" style="display:inline-flex;align-items:center;gap:6px;background:'+bg+';color:var(--ink);">'+
      '<span style="width:6px;height:6px;border-radius:50%;background:'+dot+';display:inline-block;flex:0 0 auto;"></span>Evidencia '+esc(level)+'</span>';
  }

  function selfTag(c){
    if(!c.selfRegistered) return '';
    return '<span class="tag" style="color:var(--accent-3-strong);">Autodeclarado por la empresa</span>';
  }

  function fuenteLink(url, label){
    return '<a href="'+esc(url)+'" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;color:var(--accent-strong);font-size:.8rem;font-weight:700;text-decoration:none;">'+
      esc(label || 'Ver fuente pública')+
      '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 17 17 7M9 7h8v8"></path></svg></a>';
  }

  function vinculoGroup(c){
    return c.vinculo || "Proveedores";
  }

  /* ---------- contact info (plan-gated) ---------- */
  var PLAN_LABELS = {
    gratis: "Gratis", pro: "Pro", enterprise: "Enterprise",
    destacado: "Destacado", porcotizacion: "Por cotización"
  };
  function domainFor(c){
    if(!c.fuente) return null;
    try{ return new URL(c.fuente).hostname.replace(/^www\./,""); }
    catch(e){ return null; }
  }
  function contactFor(c){
    var domain = domainFor(c);
    if(!domain) return null;
    return { email: "contacto@"+domain, domain: domain };
  }
  function hasContactAccess(){
    return !!(currentUser && currentUser.plan && currentUser.plan !== "gratis");
  }

  /* ---------- account / auth ---------- */
  var currentUser = null;

  function slugify(name){
    var base = name.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
    if(!base) base = "empresa";
    var id = base, n = 2;
    while(companyById[id]){ id = base+"-"+n; n++; }
    return id;
  }
  function initialsOf(name){
    var words = name.trim().split(/\s+/).filter(Boolean);
    if(!words.length) return "EM";
    if(words.length === 1) return words[0].slice(0,2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  }

  function renderAccount(){
    if(!currentUser) return;
    var initials = currentUser.initials, name = currentUser.name;
    document.getElementById("myAvatarBtn").textContent = initials;
    document.getElementById("myAvatarBtn").title = name + " — tu cuenta (clic para cerrar sesión)";
    document.getElementById("accountAvatar").textContent = initials;
    document.getElementById("composerAvatar").textContent = initials;
    document.getElementById("accountName").textContent = name;
    document.getElementById("accountRole").textContent = currentUser.vinculo + " · " + currentUser.sector;

    var planLabel = PLAN_LABELS[currentUser.plan] || "Gratis";
    var planEl = document.getElementById("accountPlan");
    if(planEl){
      planEl.innerHTML = '<span class="tag" style="'+(hasContactAccess() ? 'color:var(--success);border-color:var(--success);' : '')+'">Plan '+esc(planLabel)+'</span>'+
        '<button type="button" class="link-btn" data-goto-planes style="margin-left:8px;font-size:.76rem;font-weight:700;color:var(--accent-strong);background:none;border:0;cursor:pointer;padding:0;">Cambiar plan</button>';
      planEl.querySelectorAll('[data-goto-planes]').forEach(function(b){
        b.addEventListener('click', function(){ switchView('planes'); closeAuthDropdown(); });
      });
    }

    // Stats are about the network as a whole, not about any one company —
    // nobody gets a privileged "my network" view anymore.
    var alta = companies.filter(function(c){ return c.evidencia === "Alta"; }).length;
    var cats = uniq(companies.map(vinculoGroup)).length;
    document.getElementById("accountStats").innerHTML =
      '<div class="mini-stat"><b>'+companies.length+'</b><span>Empresas en la red</span></div>'+
      '<div class="mini-stat"><b>'+alta+'</b><span>Evidencia alta</span></div>'+
      '<div class="mini-stat"><b class="mono" style="color:var(--accent-strong)">'+cats+'</b><span>Categorías</span></div>';
  }

  // No more full-page gate: the map and directory are public. Login/register
  // live in a small dropdown off the nav, and only actions that need an
  // identity (posting, publishing an RFQ) actually ask for one.
  function refreshAuthUI(){
    var loggedIn = !!currentUser;
    document.getElementById("authToggleBtn").hidden = loggedIn;
    document.getElementById("registerToggleBtn").hidden = loggedIn;
    document.getElementById("myAvatarBtn").hidden = !loggedIn;
    document.getElementById("notifBtn").hidden = !loggedIn;
    document.getElementById("composerHint").textContent = loggedIn ? "Visible para toda tu red B2B" : "Iniciá sesión para publicar";
    if(loggedIn) renderAccount();
  }

  function openAuthDropdown(tab){
    switchAuthTab(tab || "login");
    document.getElementById("authDropdown").hidden = false;
  }
  function closeAuthDropdown(){
    document.getElementById("authDropdown").hidden = true;
  }

  function bootApp(){
    refreshAuthUI();
    renderFeed();
    renderCategoryFilters();
    renderDirectory();
    renderRfq();
    renderSuggestions();
    switchView("feed");
  }

  function switchAuthTab(tab){
    document.querySelectorAll(".auth-pane").forEach(function(p){
      p.hidden = p.getAttribute("data-auth-pane") !== tab;
    });
  }
  document.querySelectorAll("[data-auth-tab]").forEach(function(b){
    b.addEventListener("click", function(){ switchAuthTab(b.getAttribute("data-auth-tab")); });
  });

  /* ---------- register: empresa / proveedor category split ---------- */
  var REG_CATEGORIES = {
    empresa: ["Operadores / productoras", "Contratistas / EPC", "Servicios profesionales", "Otro"],
    proveedor: ["Proveedores", "Proveedores tecnológicos", "Contratistas / EPC", "Servicios profesionales", "Otro"]
  };
  var REG_SUBTEXT = {
    empresa: "Registrá tu empresa para pedir cotizaciones a proveedores verificados de la red.",
    proveedor: "Registrate como proveedor para que las empresas de la red te encuentren y te envíen solicitudes de cotización."
  };

  function renderRegCategories(kind){
    var sel = document.getElementById("regVinculo");
    var opts = REG_CATEGORIES[kind] || REG_CATEGORIES.empresa;
    sel.innerHTML = opts.map(function(o){ return '<option value="'+esc(o)+'">'+esc(o)+'</option>'; }).join("");
  }

  function switchRegTab(kind){
    document.querySelectorAll("#regAudienceTabs [data-reg-tab]").forEach(function(b){
      b.setAttribute("aria-selected", b.getAttribute("data-reg-tab") === kind ? "true" : "false");
    });
    document.getElementById("regSubtext").textContent = REG_SUBTEXT[kind] || REG_SUBTEXT.empresa;
    renderRegCategories(kind);
    document.getElementById("registerForm").setAttribute("data-account-type", kind);
  }
  document.querySelectorAll("#regAudienceTabs [data-reg-tab]").forEach(function(b){
    b.addEventListener("click", function(){ switchRegTab(b.getAttribute("data-reg-tab")); });
  });
  switchRegTab("empresa");

  function switchPlanTab(tab){
    document.querySelectorAll("#planAudienceTabs [data-plan-tab]").forEach(function(b){
      b.setAttribute("aria-selected", b.getAttribute("data-plan-tab") === tab ? "true" : "false");
    });
    document.querySelectorAll(".pricing-grid[data-plan-pane]").forEach(function(p){
      p.hidden = p.getAttribute("data-plan-pane") !== tab;
    });
  }
  document.querySelectorAll("[data-plan-tab]").forEach(function(b){
    b.addEventListener("click", function(){ switchPlanTab(b.getAttribute("data-plan-tab")); });
  });

  function currentAuthPane(){
    var visible = document.querySelector(".auth-pane:not([hidden])");
    return visible ? visible.getAttribute("data-auth-pane") : null;
  }

  document.getElementById("authToggleBtn").addEventListener("click", function(){
    closeMobileNav();
    var dd = document.getElementById("authDropdown");
    if(dd.hidden || currentAuthPane() !== "login") openAuthDropdown("login"); else closeAuthDropdown();
  });

  document.getElementById("registerToggleBtn").addEventListener("click", function(){
    closeMobileNav();
    var dd = document.getElementById("authDropdown");
    if(dd.hidden || currentAuthPane() !== "register") openAuthDropdown("register"); else closeAuthDropdown();
  });

  // ---------- mobile hamburger nav ----------
  function closeMobileNav(){
    var nav = document.getElementById("topNav");
    nav.setAttribute("data-open", "false");
    document.getElementById("navToggleBtn").setAttribute("aria-expanded", "false");
  }
  document.getElementById("navToggleBtn").addEventListener("click", function(){
    closeAuthDropdown();
    var nav = document.getElementById("topNav");
    var open = nav.getAttribute("data-open") === "true";
    nav.setAttribute("data-open", open ? "false" : "true");
    this.setAttribute("aria-expanded", open ? "false" : "true");
  });

  document.addEventListener("click", function(ev){
    var dd = document.getElementById("authDropdown");
    var opensAuth = ev.target.closest("#authToggleBtn, #registerToggleBtn, #composerText, #publishPost, #toggleRfqForm");
    if(!dd.hidden && !dd.contains(ev.target) && !opensAuth){
      closeAuthDropdown();
    }
    var nav = document.getElementById("topNav");
    if(nav.getAttribute("data-open") === "true" && !nav.contains(ev.target) && !ev.target.closest("#navToggleBtn")){
      closeMobileNav();
    }
  });

  document.getElementById("loginForm").addEventListener("submit", function(ev){
    ev.preventDefault();
    currentUser = companyById["pampa-energia"];
    if(!currentUser.plan) currentUser.plan = "gratis";
    refreshAuthUI();
    renderPlanButtons();
    closeAuthDropdown();
  });

  document.getElementById("registerForm").addEventListener("submit", function(ev){
    ev.preventDefault();
    var empresa = document.getElementById("regEmpresa").value.trim();
    var vinculo = document.getElementById("regVinculo").value;
    var sector = document.getElementById("regSector").value.trim();
    var fuente = document.getElementById("regFuente").value.trim();
    var errEl = document.getElementById("regError");
    var accountTypeBtn = document.querySelector("#regAudienceTabs [data-reg-tab][aria-selected='true']");
    var accountType = accountTypeBtn ? accountTypeBtn.getAttribute("data-reg-tab") : "empresa";

    if(!empresa || !vinculo || !sector){
      errEl.textContent = "Completá empresa, categoría y sector para crear el perfil.";
      errEl.hidden = false;
      return;
    }
    errEl.hidden = true;

    var record = {
      id: slugify(empresa), name: empresa, vinculo: vinculo, sector: sector,
      descripcion: "", evidencia: fuente ? "Media-Alta" : "Media",
      periodo: "", fuente: fuente, initials: initialsOf(empresa),
      color: companies.length % 3, selfRegistered: true, accountType: accountType, plan: "gratis"
    };
    companies.unshift(record);
    companyById[record.id] = record;
    currentUser = record;
    renderCategoryFilters();
    renderDirectory();
    renderSuggestions();
    refreshAuthUI();
    renderPlanButtons();
    closeAuthDropdown();
    this.reset();
    switchRegTab("empresa");
    openCompany(record.id);
  });

  /* ---------- plan selection (simulated — no real payments) ---------- */
  function renderPlanButtons(){
    document.querySelectorAll("[data-plan-card]").forEach(function(card){
      var key = card.getAttribute("data-plan-card");
      var planKey = key.split(":")[1];
      var btn = card.querySelector("[data-select-plan]");
      if(!btn) return;
      var isCurrent = !!(currentUser && currentUser.plan === planKey);
      card.classList.toggle("is-current-plan", isCurrent);
      if(isCurrent){
        btn.textContent = "Tu plan actual";
        btn.disabled = true;
        btn.classList.add("btn-outline");
        btn.classList.remove("btn-accent");
      } else {
        btn.disabled = false;
        btn.textContent = btn.getAttribute("data-default-label") || btn.textContent;
      }
      if(!btn.getAttribute("data-default-label")){
        btn.setAttribute("data-default-label", isCurrent ? "" : btn.textContent);
      }
    });
  }
  document.querySelectorAll("[data-select-plan]").forEach(function(btn){
    btn.setAttribute("data-default-label", btn.textContent);
    btn.addEventListener("click", function(){
      if(!currentUser){
        var kind = btn.getAttribute("data-select-plan").split(":")[0];
        openAuthDropdown("register");
        switchRegTab(kind === "proveedor" ? "proveedor" : "empresa");
        return;
      }
      var planKey = btn.getAttribute("data-select-plan").split(":")[1];
      currentUser.plan = planKey;
      refreshAuthUI();
      renderPlanButtons();
      refreshOpenContactPane();
    });
  });
  renderPlanButtons();

  document.getElementById("myAvatarBtn").addEventListener("click", function(){
    currentUser = null;
    refreshAuthUI();
  });

  /* ---------- render: feed ---------- */
  function renderFeed(){
    var el = document.getElementById("feedList");
    var items = userPosts.concat(companies);
    el.innerHTML = items.map(function(it){
      if(it.__user){
        return '<article class="card card-pad">'+
          '<div class="post-head">'+
            '<div class="avatar-lg" style="width:42px;height:42px;border-radius:11px;border:0;font-size:.78rem;color:var(--ink);background:var(--accent-2)">'+it.initials+'</div>'+
            '<div><div class="post-name">'+esc(it.name)+'</div><div class="post-meta">'+esc(it.sector)+' · '+esc(it.time)+'</div></div>'+
          '</div>'+
          '<p class="post-text">'+esc(it.text)+'</p>'+
        '</article>';
      }
      var c = it;
      return '<article class="card card-pad">'+
        '<div class="post-head">'+
          '<div class="avatar-lg" style="width:42px;height:42px;border-radius:11px;border:0;font-size:.78rem;color:var(--ink);background:'+AVATAR_COLORS[c.color]+'">'+c.initials+'</div>'+
          '<div><div class="post-name">'+esc(c.name)+'</div><div class="post-meta">'+esc(c.sector)+'</div></div>'+
        '</div>'+
        '<p class="post-text"><strong>'+esc(c.vinculo)+'.</strong>'+(c.descripcion ? ' '+esc(c.descripcion) : '')+'</p>'+
        '<div class="post-tags">'+evidenceBadge(c.evidencia)+selfTag(c)+'</div>'+
        '<div class="post-actions">'+
          (c.fuente ? fuenteLink(c.fuente) : '<span style="font-size:.78rem;color:var(--ink-faint);">Sin fuente pública</span>')+
          '<button data-goto="'+c.id+'" style="margin-left:auto;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><path d="M9 12h6M12 9v6"></path></svg>Ver ficha</button>'+
        '</div>'+
      '</article>';
    }).join('');
    el.querySelectorAll('[data-goto]').forEach(function(b){ b.addEventListener('click', function(){ openCompany(b.getAttribute('data-goto')); }); });
  }

  /* ---------- render: directory ---------- */
  var categories = ["Todos"].concat(uniq(companies.map(vinculoGroup)));
  var activeCategory = "Todos";

  function renderCategoryFilters(){
    var el = document.getElementById("categoryFilters");
    el.innerHTML = categories.map(function(cat){
      return '<button class="chip" data-cat="'+esc(cat)+'" aria-pressed="'+(cat===activeCategory)+'">'+esc(cat)+'</button>';
    }).join('');
    el.querySelectorAll('[data-cat]').forEach(function(b){
      b.addEventListener('click', function(){ activeCategory = b.getAttribute('data-cat'); renderCategoryFilters(); renderDirectory(); });
    });
  }

  function renderDirectory(){
    var q = (document.getElementById("globalSearch").value || "").toLowerCase().trim();
    var list = companies.filter(function(c){
      var matchesCat = activeCategory === "Todos" || vinculoGroup(c) === activeCategory;
      var matchesQ = !q || (c.name+" "+c.sector+" "+c.vinculo).toLowerCase().indexOf(q) !== -1;
      return matchesCat && matchesQ;
    });
    document.getElementById("dirCount").textContent = list.length + (list.length===1? " empresa encontrada" : " empresas encontradas") + " — perfiles verificados con fuentes públicas.";
    var el = document.getElementById("companyGrid");
    if(!list.length){ el.innerHTML = '<p style="color:var(--ink-faint);font-size:.88rem;padding:20px 0;">No encontramos empresas que coincidan con tu búsqueda.</p>'; return; }
    el.innerHTML = list.map(function(c){
      return '<button class="card card-pad company-card" data-goto="'+c.id+'">'+
        '<div class="top">'+
          '<div class="avatar-lg" style="width:44px;height:44px;border-radius:12px;border:0;font-size:.8rem;color:var(--ink);background:'+AVATAR_COLORS[c.color]+'">'+c.initials+'</div>'+
          '<div style="min-width:0;">'+
            '<div style="font-weight:800;font-size:.92rem;">'+esc(c.name)+'</div>'+
            '<div class="cat">'+esc(c.vinculo)+'</div>'+
            '<div class="loc">'+esc(c.sector)+'</div>'+
          '</div>'+
        '</div>'+
        '<div class="certs">'+evidenceBadge(c.evidencia)+selfTag(c)+'</div>'+
        '<div class="footline"><span style="font-size:.72rem;color:var(--ink-faint);">'+(c.fuente? 'Fuente pública citada' : 'Sin fuente pública')+'</span><span style="font-size:.72rem;color:var(--accent-strong);font-weight:700;">Ver ficha →</span></div>'+
      '</button>';
    }).join('');
    el.querySelectorAll('[data-goto]').forEach(function(b){ b.addEventListener('click', function(){ openCompany(b.getAttribute('data-goto')); }); });
  }

  /* ---------- render: rfq ---------- */
  function renderRfq(){
    var el = document.getElementById("rfqList");
    el.innerHTML = rfqs.map(function(r){
      return '<article class="card card-pad rfq-card">'+
        '<div class="top">'+
          '<div><h3>'+esc(r.title)+'</h3><div class="buyer">'+esc(r.buyer)+' · '+esc(r.location)+'</div></div>'+
          '<span class="match-pill"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"></path></svg>'+r.match+'% match</span>'+
        '</div>'+
        '<div class="rfq-meta">'+
          '<div><span>Categoría</span><b style="font-family:var(--font-body);font-weight:700;">'+esc(r.category)+'</b></div>'+
          '<div><span>Presupuesto</span><b>'+esc(r.budget)+'</b></div>'+
          '<div><span>Entrega</span><b>'+esc(r.deadline)+'</b></div>'+
          '<div><span>Cotizaciones</span><b>'+r.quotes+'</b></div>'+
        '</div>'+
        '<div class="rfq-foot"><span style="font-size:.76rem;color:var(--ink-faint);">Publicado por un comprador verificado</span><button class="btn btn-accent btn-sm">Cotizar ahora</button></div>'+
      '</article>';
    }).join('');
  }

  /* ---------- company detail ---------- */
  var lastView = "feed";
  var lastOpenCompanyId = null;
  var lastOpenTab = "about";
  function refreshOpenContactPane(){
    var detailView = document.getElementById("view-detail");
    if(!detailView || detailView.hidden || !lastOpenCompanyId) return;
    var c = companyById[lastOpenCompanyId];
    if(!c) return;
    var pane = document.querySelector('[data-pane="contacto"]');
    if(!pane) return;
    pane.innerHTML = contactPaneHtml(c);
    pane.querySelectorAll('[data-open-planes]').forEach(function(b){
      b.addEventListener('click', function(){ switchView('planes'); });
    });
    pane.querySelectorAll('[data-open-login]').forEach(function(b){
      b.addEventListener('click', function(){ openAuthDropdown('login'); });
    });
  }
  function contactPaneHtml(c){
    if(hasContactAccess()){
      var info = contactFor(c);
      if(!info){
        return '<div class="card card-pad" style="box-shadow:none;max-width:60ch;">'+
          '<p style="font-size:.85rem;color:var(--ink-faint);">Esta ficha todavía no tiene un dominio público del que inferir un contacto.</p>'+
        '</div>';
      }
      return '<div class="card card-pad" style="box-shadow:none;max-width:60ch;">'+
        '<div style="font-size:.72rem;text-transform:uppercase;letter-spacing:.05em;color:var(--ink-faint);font-weight:800;margin-bottom:8px;">Contacto</div>'+
        '<p style="font-size:.9rem;color:var(--ink);margin-bottom:6px;"><b>Email:</b> '+esc(info.email)+'</p>'+
        '<p style="font-size:.76rem;color:var(--ink-faint);margin-bottom:14px;">Inferido del dominio público de la empresa. Dato ilustrativo del prototipo, no verificado.</p>'+
        '<a class="btn btn-outline btn-sm" href="mailto:'+esc(info.email)+'">Escribir por email</a>'+
      '</div>';
    }
    var loggedIn = !!currentUser;
    return '<div class="card card-pad" style="box-shadow:none;max-width:60ch;text-align:center;padding:28px 20px;">'+
      '<div style="width:40px;height:40px;border-radius:50%;background:var(--surface-2);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;">'+
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ink-faint)" stroke-width="2"><rect x="4" y="10" width="16" height="10" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path></svg>'+
      '</div>'+
      (loggedIn
        ? '<p style="font-size:.88rem;color:var(--ink);margin-bottom:4px;font-weight:700;">Los datos de contacto son para cuentas pagas</p>'+
          '<p style="font-size:.82rem;color:var(--ink-soft);margin-bottom:16px;">Disponibles desde el plan Pro (empresas) o Destacado (proveedores).</p>'+
          '<button type="button" class="btn btn-accent btn-sm" data-open-planes>Ver planes</button>'
        : '<p style="font-size:.88rem;color:var(--ink);margin-bottom:4px;font-weight:700;">Iniciá sesión para ver el contacto</p>'+
          '<p style="font-size:.82rem;color:var(--ink-soft);margin-bottom:16px;">Los datos de contacto están disponibles para cuentas con un plan pago.</p>'+
          '<button type="button" class="btn btn-accent btn-sm" data-open-login>Iniciar sesión</button>'
      )+
    '</div>';
  }
  function openCompany(id, preserveTab){
    var c = companyById[id];
    if(!c) return;
    lastOpenCompanyId = id;

    var card = document.getElementById("detailCard");
    var tabs = [
      {key:"about", label:"Acerca de"},
      {key:"contacto", label:"Contacto"},
      {key:"fuente", label:"Fuente"}
    ];
    var activeTab = preserveTab && lastOpenTab ? lastOpenTab : "about";

    var panes = {
      about: '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;">'+
          '<span class="tag">'+esc(c.vinculo)+'</span>'+
          '<span class="tag">'+esc(c.sector)+'</span>'+
          evidenceBadge(c.evidencia)+selfTag(c)+
        '</div>'+
        (c.descripcion ? '<p style="font-size:.95rem;line-height:1.6;color:var(--ink);max-width:70ch;">'+esc(c.descripcion)+'</p>' : ''),
      contacto: contactPaneHtml(c),
      fuente: c.fuente ? (
        '<div class="card card-pad" style="box-shadow:none;max-width:60ch;">'+
          '<div style="font-size:.72rem;text-transform:uppercase;letter-spacing:.05em;color:var(--ink-faint);font-weight:800;margin-bottom:8px;">Fuente pública citada</div>'+
          '<p style="font-size:.85rem;color:var(--ink-soft);word-break:break-all;margin-bottom:14px;">'+esc(c.fuente)+'</p>'+
          fuenteLink(c.fuente, 'Abrir fuente')+
        '</div>'
      ) : (
        '<div class="card card-pad" style="box-shadow:none;max-width:60ch;">'+
          '<p style="font-size:.85rem;color:var(--ink-faint);">Esta empresa todavía no cargó una fuente pública que respalde el vínculo.</p>'+
        '</div>'
      )
    };

    card.innerHTML =
      '<div class="detail-cover"></div>'+
      '<div class="detail-head">'+
        '<div class="avatar-xl" style="background:'+AVATAR_COLORS[c.color]+'">'+c.initials+'</div>'+
        '<div class="detail-info"><h2>'+esc(c.name)+'</h2><p style="color:var(--ink-soft);font-size:.88rem;margin-top:2px;">'+esc(c.sector)+' · '+esc(c.vinculo)+'</p></div>'+
        evidenceBadge(c.evidencia)+
      '</div>'+
      '<div class="detail-tabs" id="detailTabs">'+tabs.map(function(t){ return '<button data-tab="'+t.key+'" aria-selected="'+(t.key===activeTab)+'">'+t.label+'</button>'; }).join('')+'</div>'+
      tabs.map(function(t){ return '<div class="detail-pane" data-pane="'+t.key+'" '+(t.key===activeTab?'':'hidden')+'>'+panes[t.key]+'</div>'; }).join('');

    card.querySelectorAll('[data-tab]').forEach(function(btn){
      btn.addEventListener('click', function(){
        card.querySelectorAll('[data-tab]').forEach(function(b){ b.setAttribute('aria-selected','false'); });
        btn.setAttribute('aria-selected','true');
        var key = btn.getAttribute('data-tab');
        lastOpenTab = key;
        card.querySelectorAll('[data-pane]').forEach(function(p){ p.hidden = p.getAttribute('data-pane') !== key; });
      });
    });
    card.querySelectorAll('[data-open-planes]').forEach(function(b){
      b.addEventListener('click', function(){ switchView('planes'); });
    });
    card.querySelectorAll('[data-open-login]').forEach(function(b){
      b.addEventListener('click', function(){ openAuthDropdown('login'); });
    });

    switchView("detail");
  }

  /* ---------- suggestions ---------- */
  function renderSuggestions(){
    var el = document.getElementById("suggestList");
    var suggestions = companies.slice(0,4);
    el.innerHTML = suggestions.map(function(c){
      return '<div class="suggest-item">'+
        '<div class="avatar-sm" style="background:'+AVATAR_COLORS[c.color]+'">'+c.initials+'</div>'+
        '<div class="info"><b>'+esc(c.name)+'</b><span>'+esc(c.sector)+'</span></div>'+
        '<button class="btn btn-outline btn-sm" data-goto="'+c.id+'" style="padding:5px 12px;">Ver</button>'+
      '</div>';
    }).join('');
    el.querySelectorAll('[data-goto]').forEach(function(b){ b.addEventListener('click', function(){ openCompany(b.getAttribute('data-goto')); }); });
  }

  /* ---------- view switching ---------- */
  function switchView(name){
    if(name !== "detail") lastView = name;
    var isPlanes = name === "planes";
    document.querySelector("main.layout").hidden = isPlanes;
    document.getElementById("view-planes").hidden = !isPlanes;
    ["feed","directorio","rfq","detail"].forEach(function(v){
      document.getElementById("view-"+v).hidden = (isPlanes || v !== name);
    });
    document.querySelectorAll('#topNav button').forEach(function(b){
      b.setAttribute('aria-current', b.getAttribute('data-nav') === name ? "true" : "false");
    });
    window.scrollTo({top:0, behavior:"auto"});
  }

  document.querySelectorAll('[data-nav]').forEach(function(el){
    el.addEventListener('click', function(ev){
      ev.preventDefault();
      closeMobileNav();
      switchView(el.getAttribute('data-nav'));
    });
  });

  document.getElementById("backBtn").addEventListener('click', function(){ switchView(lastView); });

  document.getElementById("globalSearch").addEventListener('input', function(){
    switchView("directorio");
    renderDirectory();
  });

  document.getElementById("toggleRfqForm").addEventListener('click', function(){
    if(!currentUser){ openAuthDropdown("login"); return; }
    var f = document.getElementById("rfqForm");
    f.hidden = !f.hidden;
  });

  document.getElementById("submitRfq").addEventListener('click', function(){
    var titulo = document.getElementById("fTitulo").value.trim();
    var categoria = document.getElementById("fCategoria").value.trim();
    var ubicacion = document.getElementById("fUbicacion").value.trim();
    var entrega = document.getElementById("fEntrega").value.trim();
    var presupuesto = document.getElementById("fPresupuesto").value.trim();
    if(!titulo || !categoria){ document.getElementById("fTitulo").focus(); return; }
    rfqs.unshift({ id: Date.now(), title:titulo, buyer:(currentUser && currentUser.name) || "Empresa de la red", category:categoria||"General",
      location:ubicacion||"—", budget:presupuesto||"A definir", deadline:entrega||"A definir", quotes:0, match:100 });
    renderRfq();
    ["fTitulo","fCategoria","fUbicacion","fEntrega","fPresupuesto"].forEach(function(id){ document.getElementById(id).value=""; });
    document.getElementById("rfqForm").hidden = true;
  });

  document.getElementById("composerText").addEventListener('focus', function(){
    if(!currentUser){ this.blur(); openAuthDropdown("login"); }
  });

  document.getElementById("publishPost").addEventListener('click', function(){
    if(!currentUser){ openAuthDropdown("login"); return; }
    var t = document.getElementById("composerText").value.trim();
    if(!t) return;
    userPosts.unshift({ __user:true, id: Date.now(), name:(currentUser && currentUser.name) || "Vos", initials:(currentUser && currentUser.initials) || "YO", sector:"Publicación propia", time:"ahora", text:t });
    renderFeed();
    document.getElementById("composerText").value = "";
  });

  bootApp();
})();