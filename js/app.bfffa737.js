(function(e){function a(a){for(var o,t,c=a[0],s=a[1],d=a[2],u=0,l=[];u<c.length;u++)t=c[u],Object.prototype.hasOwnProperty.call(i,t)&&i[t]&&l.push(i[t][0]),i[t]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(l.length)l.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,t=1;t<n.length;t++){var c=n[t];0!==i[c]&&(o=!1)}o&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},t={app:0},i={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"77eaa142","chunk-0206bfa0":"07f4fcb8","chunk-110f1f0b":"c729ecf3","chunk-13a6037e":"725eca6a","chunk-179248a2":"0882ec97","chunk-18f95272":"bb47be6d","chunk-2a9fce91":"79146cce","chunk-2c06842c":"f5617033","chunk-2d0c5615":"01eba69d","chunk-2d0e96ec":"ec734bee","chunk-2d208d90":"ab67193c","chunk-2d21d0e2":"f77c22e4","chunk-2d22c123":"c9115eca","chunk-2e80bb9a":"b3e4ecbc","chunk-319206de":"06f535cf","chunk-36769079":"0093655a","chunk-4cdd78c0":"b1eae698","chunk-515a8379":"471b9110","chunk-53ccb27e":"03f89fab","chunk-55d286b8":"69a8245e","chunk-59974754":"d7b5c639","chunk-5d1ce150":"33dbeb12","chunk-60cbc06b":"e7f70342","chunk-623f2040":"f9fac6f0","chunk-659152b8":"3f7b8817","chunk-6a43ec24":"3e891bb4","chunk-6e1e538a":"034b6f92","chunk-6e613899":"2a976d39","chunk-766a929b":"1ae4942d","chunk-7794bb60":"f954ae38","chunk-c796899c":"ed37a8e2","chunk-e8a7823a":"c0dd9220","chunk-fde47172":"7ec6a62b",comple:"badef338",creditos:"a69d078c",glosario:"42a55f32",intro:"44b7d729",referencias:"2838b605",sintesis:"bf9a169d",tema1:"c381c8b6",tema2:"6a154262",tema3:"979fd791",tema4:"3c18c0ae"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-110f1f0b":1,"chunk-179248a2":1,"chunk-2a9fce91":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-5d1ce150":1,"chunk-60cbc06b":1,"chunk-623f2040":1,"chunk-6a43ec24":1,"chunk-6e1e538a":1,"chunk-6e613899":1,"chunk-766a929b":1,"chunk-7794bb60":1,comple:1,creditos:1,glosario:1,referencias:1};t[e]?a.push(t[e]):0!==t[e]&&n[e]&&a.push(t[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-110f1f0b":"52141945","chunk-13a6037e":"31d6cfe0","chunk-179248a2":"52141945","chunk-18f95272":"31d6cfe0","chunk-2a9fce91":"52141945","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"ed060abb","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"416b9f9a","chunk-5d1ce150":"52141945","chunk-60cbc06b":"09438581","chunk-623f2040":"52141945","chunk-659152b8":"31d6cfe0","chunk-6a43ec24":"52141945","chunk-6e1e538a":"3ba0a060","chunk-6e613899":"52141945","chunk-766a929b":"8da28923","chunk-7794bb60":"52141945","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-fde47172":"31d6cfe0",comple:"eaf07512",creditos:"002e6ca8",glosario:"97e8e09b",intro:"31d6cfe0",referencias:"121fc9c5",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",i=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===o||u===i))return a()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){d=l[c],u=d.getAttribute("data-href");if(u===o||u===i)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete t[e],m.parentNode.removeChild(m),n(r)},m.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){t[e]=0})));var o=i[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=i[e]=[a,n]}));a.push(o[2]=r);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var l=new Error;d=function(a){u.onerror=u.onload=null,clearTimeout(m);var n=i[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+t+")",l.name="ChunkLoadError",l.type=o,l.request=t,n[1](l)}i[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=a,d=d.slice();for(var l=0;l<d.length;l++)a(d[l]);var m=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},i=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),d=Object(s["a"])(c,t,i,!1,null,null,null),u=d.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),p=n("ae58"),f=n("7e58");l["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=b,h=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Recursos del cajero",descripcionCurso:"Este componente formativo tiene como objetivo desarrollar competencias técnicas, humanas y personales en el puesto de pago, una posición representativa en el <i>retail</i>, debido al contacto directo que se tiene con el cliente. Se profundizará en las funciones esenciales del cajero, recursos del puesto de pago, administración de dinero, equipos tecnológicos, medios de pago y normativa relacionada con el recaudo de caja.",imagenBannerPrincipal:n("9710"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")},{clases:["banner-principal-decorativo-3"],imagen:n("7d72")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"El cajero",desarrolloContenidos:!0},{nombreRuta:"tema2",numero:"2",titulo:"Recursos del puesto de pago",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Administrar dinero y documentos ",hash:"t_2_1"},{numero:"2.2",titulo:"Equipos tecnológicos  ",hash:"t_2_2"},{numero:"2.3",titulo:"Elementos en el puesto de trabajo",hash:"t_2_3"},{numero:"2.4",titulo:"Manejo de valores",hash:"t_2_4"}]},{nombreRuta:"tema3",numero:"3",titulo:"Medios de pago",desarrolloContenidos:!0},{nombreRuta:"tema4",numero:"4",titulo:"Normativa del recaudo de caja",desarrolloContenidos:!0,subMenu:[{numero:"4.1",titulo:"Seguridad y salud en el trabajo",hash:"t_4_1"},{numero:"4.2",titulo:"Leyes de protección de datos",hash:"t_4_2"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/CF6_632223_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"El cajero",referencia:"Blanco, L. A. (2013). Ética integral. Bogotá, Colombia: Ecoe Ediciones",tipo:"Libro",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69262?page=59"},{tema:"Leyes de protección de datos",referencia:"Oró, R. (2015). La protección de datos.",tipo:"Libro",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/57741?prev=as"}],glosario:[{termino:"Caja registradora",significado:"Máquina sumadora para uso de comerciantes, que llena diversos cometidos, pues indica el importe de la compra al cliente, imprime un cupón justificativo del gasto, inscribe y suma el importe de las ventas, dificulta los desfalcos y permite guardar momentáneamente el dinero."},{termino:"Cajero automático",significado:"Máquina sumadora para uso de comerciantes, que llena diversos cometidos, pues indica el importe de la compra al cliente, imprime un cupón justificativo del gasto, inscribe y suma el importe de las ventas, dificulta los desfalcos y permite guardar momentáneamente el dinero."},{termino:"Crédito",significado:"Cuando una transacción se acredita en su cuenta, aparece como una transacción positiva (+) y se agrega a su saldo (a diferencia de un débito, que aparece como una transacción negativa (-) y se resta de su saldo). Un ejemplo de crédito sería el dinero en efectivo que usted depositó."},{termino:"Débito",significado:"Cuando una transacción se debita en su cuenta, aparece como una transacción negativa (-) y se resta del saldo de su cuenta corriente vinculada, a diferencia de un crédito, que aparece como una transacción positiva (+) y se agrega a su saldo. Un ejemplo de débito en su cuenta corriente es una compra con tarjeta de débito en un comercio."},{termino:"Legalización",significado:"Documento mediante el cual se formaliza los gastos realizados con cargo al anticipo concedido y se reintegran los recursos no gastados."},{termino:"Pagos por aplicación móvil",significado:"Esta es una aplicación (app) que te permite pagar desde tu celular sin llevar las tarjetas contigo, de forma más fácil y segura, en comercios con datafonos habilitados. Para hacer uso de esta tecnología debes descargar la aplicación en tu <em>Smartphone</em>, crear una cuenta e inscribir las tarjetas."},{termino:"Reembolso de caja menor",significado:"Es el soporte del pago de los gastos que se han efectuado en pequeñas cantidades por conceptos tales como: comidas, pasajes, papelería, fotocopias, etc., estos pagos deben contar con las facturas o documentos equivalentes para su verificación."},{termino:"Saldo disponible",significado:"Su saldo disponible es el dinero en su cuenta de ahorros o cuenta corriente que está actualmente a su disposición para hacer compras, extracciones, etc. Este saldo se actualiza durante el día con las transacciones que haga."},{termino:"Tarjeta de crédito",significado:"Instrumento que permite realizar pagos sin tener dinero en efectivo. El cargo en la cuenta se produce, por lo general, al final del mes. También se puede trasladar el pago más allá de ese momento, pero esta operación conlleva el pago de intereses. Estas tarjetas también permiten retirar dinero en efectivo en los cajeros automáticos, aunque hay que pagar comisiones."},{termino:"Tarjeta de débito",significado:"Al igual que la tarjeta de crédito, es un medio que permite realizar pagos sin tener dinero en efectivo. La diferencia es que con la tarjeta de débito el cargo en la cuenta se produce inmediatamente, con lo que si no existe disponible el pago no se podrá realizar. Estas tarjetas también permiten retirar dinero en efectivo en los cajeros automáticos, aunque normalmente con comisiones si no se utiliza la red propia de la tarjeta."},{termino:"Transacción efectiva",significado:"Una transacción se hace efectiva una vez que se ha acreditado o debitado de una cuenta con éxito."},{termino:"Transacción rechazada",significado:"Usted deposita un cheque emitido para usted, pero la persona que lo libró no tiene fondos suficientes para cubrirlo. En este caso, si ya se le acreditó el depósito, se lo debitaremos de su cuenta, ya que no había fondos suficientes."}],referencias:[{referencia:"Blanco, L. A. (2013). Ética integral. Bogotá, Colombia: Ecoe Ediciones.",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69262?page=59"},{referencia:"Block, S. (2013). Fundamentos de administración financiera. McGraw Hill Interamericana.",link:""},{referencia:"Calleja, F. (2014). Contabilidad Administrativa. México: Editorial Pearson.",link:""},{referencia:"Krugman, O. (2008). Fundamentos de Economía. Barcelona. Editorial Reverté.",link:""},{referencia:"Oró, R. (2015). La protección de datos. Barcelona, Spain: Editorial UOC.",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/57741?page=12"},{referencia:"Pérez, L. (2007). Negociación Asertiva, una visión diferente de la cobranza. México. ICM División editorial.",link:""},{referencia:"Raju, J. (2010). Fijando Precios para Ganar Competitividad. Barcelona. Profit Editorial.",link:""},{referencia:"Angulo Novoa, J. C., & Maldonado Piracon, W. A. (2016). SISTEMAS DE INFORMACIÓN GERENCIAL TIPO TRANSACCIONAL PARA PYMES. Ágora, 3(3), 60–75.",link:"https://ojs.tdea.edu.co/index.php/agora/article/view/242"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Responsable del ecosistema",centro:"Dirección General"},{nombre:"Claudia Johana Gómez",cargo:"Responsable de línea de producción",centro:"Centro Agroturístico - Regional Santander"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Jaime Alberto Pérez Posada",cargo:"Instructor",centro:"Centro de Comercio - Regional Antioquia"},{nombre:"Zvi Daniel Grosman",cargo:"Diseñador instruccional",centro:"Centro Agropecuario La Granja  - Regional Tolima"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Revisor metodológico y pedagógico",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor Pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Sandra Patricia Hoyos Sepúlveda",cargo:"Revisión y corrección de estilo",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital "},{nombre:"Diana Lizeth Lozada Díaz",cargo:"Diseñadora instruccional",centro:"Centro Agroturístico - Regional Santander"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Julian Fernando Vanegas Vega",cargo:"Diseñador de contenidos digitales",centro:"Centro Agroturístico - Regional Santander"},{nombre:"Lucenith Pinilla Moreno",cargo:"Desarrolladora <i>full-stack</i> Junior",centro:"Centro Agroturístico - Regional Santander"},{nombre:"María Alejandra Vera Briceño",cargo:"Animadora y producción audiovisual",centro:"Centro Agroturístico - Regional Santander"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Laura Paola Gelvez Manosalva",cargo:"Validadora de recursos educativos digitales",centro:"Centro Agroturístico - Regional Santander"},{nombre:"Erika Fernanda Mejía Pinzón",cargo:"Evaluadora para contenidos inclusivos y accesibles",centro:"Centro Agroturístico - Regional Santander"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:g,store:h["a"],render:function(e){return e(u)}}).$mount("#app")},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.457b8430.svg"},"7d72":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.c56173db.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.637075af.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},9710:function(e,a,n){e.exports=n.p+"img/imagen.8c363d0b.png"},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.c6bce0d2.png"}});
//# sourceMappingURL=app.bfffa737.js.map