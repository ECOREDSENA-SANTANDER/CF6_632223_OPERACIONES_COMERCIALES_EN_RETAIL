<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Recursos del puesto de pago
    
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-8
        p Es principal recurso es la terminal POS (punto de venta), es una máquina que se encuentra ubicada en cada puesto de pago. Su función es registrar los productos, brindar información al cliente y recopilar datos de ventas para el almacén.
        p La terminal POS se compone de las siguientes partes:
        ol.lista-ol--cuadro.fa-ol
          li 
            .lista-ol--cuadro__vineta.bgazuloscuro
              span.texto-negro #[b 1]
            span.mb-0 #[b CPU o unidad de memoria.] Procesa y almacena la información.
          li 
            .lista-ol--cuadro__vineta.bgazuloscuro
              span.texto-negro #[b 2]
            span.mb-0 #[b Gaveta.] Guarda el dinero, cheques y otros documentos de valor.
          li 
            .lista-ol--cuadro__vineta.bgazuloscuro
              span.texto-negro #[b 3]
            span.mb-0 #[b Impresora.] Emite los tiquetes de compra que se entregan al cliente.
          li 
            .lista-ol--cuadro__vineta.bgazuloscuro
              span.texto-negro #[b 4]
            span.mb-0 #[b Visor.] Proporciona información visual al cliente.
          li 
            .lista-ol--cuadro__vineta.bgazuloscuro
              span.texto-negro #[b 5]
            span.mb-0 #[b Teclado.] Permite ingresar los datos necesarios para procesar las transacciones.
      .col-8.col-md-8.col-lg-4
        img(src='@/assets/curso/temas/tema2/imagen1.png', alt='')

    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Administrar dinero y documentos
    p Al preparar la jornada laboral, de acuerdo con las instrucciones del retail y su política de apertura de caja, se debe cumplir con el siguiente procedimiento:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Entrega y orden" :icono="require('@/assets/curso/temas/tema2/tbimg1-1.png')")
        .row.align-items-center.justify-content-center
          .col-md-2.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema2/tbotra1-1.png" alt="")
          .col-md-7.mb-4.mb-md-0
            p El dinero es entregado, ordenado y guardado de acuerdo con los procedimientos operacionales.
      .py-4.py-md-5(titulo="Higiene y aseo" :icono="require('@/assets/curso/temas/tema2/tbimg1-2.png')")
        .row.align-items-center.justify-content-center
          .col-md-2.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema2/tbotra1-2.png" alt="")
          .col-md-7.mb-4.mb-md-0
            p El puesto de trabajo debe permanecer limpio y ordenado, cumpliendo con las normativas de higiene y aseo del área.
      .py-4.py-md-5(titulo="Apertura de caja" :icono="require('@/assets/curso/temas/tema2/tbimg1-3.png')")
        .row.align-items-center.justify-content-center
          .col-md-2.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema2/tbotra1-3.png" alt="")
          .col-md-7.mb-4.mb-md-0
            p La caja registradora se abre de acuerdo con los controles administrativos y de seguridad establecidos.
      .py-4.py-md-5(titulo="Almacenamiento de comprobantes" :icono="require('@/assets/curso/temas/tema2/tbimg1-3.png')")
        .row.align-items-center.justify-content-center
          .col-md-2.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema2/tbotra1-4.png" alt="")
          .col-md-7.mb-4.mb-md-0
            p Los comprobantes impresos de apertura de caja se almacenan según los controles administrativos y de seguridad establecidos.
      .py-4.py-md-5(titulo="Apertura de caja" :icono="require('@/assets/curso/temas/tema2/tbimg1-5.png')")
        .row.align-items-center.justify-content-center
          .col-md-2.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema2/tbotra1-5.png" alt="")
          .col-md-7.mb-4.mb-md-0
            p La apertura y cierre de la caja se registran conforme a los controles administrativos y de seguridad establecidos.

    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Equipos tecnológicos
    p.mb-4 La tecnología es esencial para el trabajo del cajero. A continuación, se presentan algunos de los equipos disponibles para su función:

    .row.fondo2.align-items-center.p-3.mb-5(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

        .tarjetaf.p-3.mb-4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-6
                h4.mb-4 El #[em scanner] balanza
                p.mb-4 Este equipo combina un lector de códigos de barras y una balanza para pesar frutas y verduras, conectándose a la terminal POS. Su función es proporcionar información de ventas con agilidad y exactitud.
                p #[b El uso del #[em scanner] balanza permite:]
                ul.lista-ul.mb-0.ps-3
                  li.d-flex.mb-0
                    i.fas.fa-check-circle.texto-azul
                    p.mb-0 Brindar al cliente mayor seguridad, rapidez y exactitud en el registro.
                  li.d-flex.mb-0
                    i.fas.fa-check-circle.texto-azul
                    p.mb-0 Aumentar la productividad en el puesto de pago.
                  li.d-flex.mb-0
                    i.fas.fa-check-circle.texto-azul
                    p.mb-0 Mejorar la confiabilidad en la información de ventas.
              .col-lg-5
                img(alt="" src="@/assets/curso/temas/tema2/sly1-1.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-6
                h4.mb-4 El datáfono
                p.mb-4 El datáfono es el equipo que permite procesar los pagos cuando los clientes utilizan tarjetas de débito o crédito. Su función principal es comunicarse con los bancos y las entidades financieras para autorizar y completar las transacciones. Algunos datáfonos incluyen un teclado o PIN PAD separado para que los clientes ingresen su clave personal de manera segura.
              .col-lg-5
                img(alt="" src="@/assets/curso/temas/tema2/sly1-2.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-6
                h4.mb-4 El desactivador de #[em tags]
                p El desactivador de #[em tags] es el equipo utilizado para desactivar los dispositivos de seguridad colocados en los productos del almacén, evitando que salgan sin ser registrados. Estos tags se encuentran principalmente en textiles, variedades y licores.
                p Los puestos de pago también incorporan desactivadores para los #[em tags] que se encuentran internamente en el empaque de algunos cosméticos y medicamentos. Estos dispositivos son colocados por el fabricante y no son reutilizables.
                p Es importante retirar el #[em tag] del producto para evitar que las alarmas se activen en las salidas del almacén, incomodando al cliente.
              .col-lg-5
                img(alt="" src="@/assets/curso/temas/tema2/sly1-3.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-6
                h4.mb-4 Sistema Neumático #[em (shut)]
                p.mb-4 El sistema neumático, conocido como #[em shut], consiste en una serie de conductos que conectan el puesto de pago con la caja general o tesorería. Su función es transportar una cápsula que contiene el dinero de las ventas realizadas. En los #[em retailers] que no disponen de este sistema, el dinero se envía con un directivo encargado de la recogida.
              .col-lg-5
                img(alt="" src="@/assets/curso/temas/tema2/sly1-4.png")

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-9
        .mb-4.d-flex.ps-lg-0
          .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
            h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Teclados
            img.icon(src='@/assets/curso/temas/icon.svg') 
        p La distribución del teclado y su correcto uso permiten operar fácilmente la terminal, brindar un mejor servicio a los clientes y diferenciar los medios de pago para cumplir con lo esta blecido por la Dirección de Impuestos y Aduanas Nacionales (DIAN).
        .cajon.color-primario.p-4.mb-4
          p En el siguiente video, se presenta el proceso de registro de productos, como uno de los ejemplos de teclados utilizados en #[em retail].
          p #[b Nota:] Se debe considerar que no hay un estándar único para este tipo de operaciones.
      .col-6.col-md-6.col-lg-3
       img(src='@/assets/curso/temas/tema2/imagen2.png', alt='')

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-sm-12.col-md-12.col-lg-10
            .tarjeta.color-acento-contenido.p-3
              .row.justify-content-around.align-items-center
                .col-auto
                  img(src="@/assets/curso/temas/tema1/imgcajavideo.png").img65
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h4.mb-1 Registro de productos
                      p.mb-0 Registro y escaneo de productos para el cálculo del total de la compra y continuar con el proceso de venta. ¡Ingrese!
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=nYWj9Tru7mc" target="_blank")
                        span Ir al enlace
                        i.fas.fa-video

    .mb-4.d-flex.ps-lg-0
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Sistema transaccional
        img.icon(src='@/assets/curso/temas/icon.svg') 
    
    p.mb-5 Según Angulo y Maldonado (2016), 
    .row.justify-content-center.align-items-center
      .col-sm-12.col-md-12.col-lg-10
        .bloque-texto-f.bgazulclaro.pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto #[b "Se entiende por sistema de información transaccional aquel diseñado para recolectar, modificar, almacenar y recuperar información generada por las transacciones en una organización"].
    
    p.mb-4 En el #[em retail], un sistema transaccional se refiere al conjunto organizado de personas, procedimientos, software, bases de datos y dispositivos para registrar transacciones comerciales consumadas.

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-9
        .cajon.naranja.p-4.mb-4
          p No se trata solo de comprar y vender; el verdadero éxito radica en dejar a los clientes satisfechos. Para lograrlo, es esencial aprender a brindar la mejor experiencia posible. En el contexto actual, la relación entre las tiendas físicas de #[em retail] y sus clientes es principalmente transaccional. Estas tiendas existen para satisfacer la oferta y la demanda, abrir nuevos canales, implementar segmentaciones a medida e integrar procesos tecnológicos avanzados. 
      .col-6-col-md-6.col-lg-3
        img(src='@/assets/curso/temas/tema2/imagen3.png', alt='')

    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Elementos en el puesto de trabajo
    p El cargo de cajero se desempeña en un sitio cerrado y/o abierto, normalmente en cubículos. Este puesto de trabajo conlleva ciertos riesgos, como la pérdida de dinero por errores al dar cambio, cobrar incorrectamente un producto o realizar un registro de transacción de forma incorrecta, es por esto, considerando que el cajero maneja valores de la organización, que se requiere de su parte 	de una gran atención y precisión en sus tareas.
    p El cajero pasa la mayor parte de su jornada laboral de pie y no puede abandonar la caja sin previo aviso a su superior y dejando constancia del hecho. Es fundamental que el cajero mantenga un alto nivel de concentración para evitar errores y garantizar un servicio eficiente y seguro. Por ello, también se debe prestar atención a su comodidad y bienestar, proporcionando un entorno de trabajo ergonómico y pausas regulares para prevenir la fatiga.
    p.mb-5 A continuación, se describen algunos elementos del puesto de trabajo que se deben considerar para lograr un mejor desempeño:

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-md-8.col-lg-4
        img(src='@/assets/curso/temas/tema2/imagen4.png', alt='')
      .col-sm-12.col-md-12.col-lg-8

        .tarjeta.tarjeta--naranja.p-4
          LineaTiempoC.color-acento-contenido(text-small)
            .row.align-items-center.justify-content-center.p-4(titulo="")
              .col-md-3
                img(src='@/assets/curso/temas/tema2/slya1-1.png', alt='Texto que describa la imagen')
              .col-md-7.mb-4.mb-md-0
                h4 Escritorio
                p Escritorio pequeño donde se ubica la caja registradora y se pueden ordenar adecuadamente los utensilios de trabajo.
            .row.align-items-center.justify-content-center.p-4(titulo="")
              .col-md-3
                img(src='@/assets/curso/temas/tema2/slya1-2.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                h4 Comunicación
                p Escritorio pequeño donde se ubica la caja registradora y se pueden ordenar adecuadamente los utensilios de trabajo.









</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
