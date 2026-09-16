PORTAFOLIO DE ARQUITECTURA DE REDES
Rediseño de interfaz, experiencia de usuario y accesibilidad


COMO ABRIRLO
Abre index.html con un navegador. No necesita servidor ni conexión a internet:
no se descargan tipografías ni librerías externas.


QUE SE CONSERVO
Los nombres de los archivos (index.html, estilos.css, script.js, README.txt),
las rutas de la carpeta "archivos" y las fechas de cada evidencia quedaron
exactamente como estaban.


DIRECCION DE DISENO
El sitio dejó de plantearse como una página de presentación y pasó a plantearse
como un índice documental, que es lo que realmente resuelve: encontrar una
evidencia y abrirla. La referencia visual son las publicaciones técnicas del
IEEE: fondo claro tipo papel, azul institucional, filetes finos en lugar de
tarjetas con sombra, y una figura técnica con pie numerado (Fig. 1).


1. DISENO VISUAL

- Se retiró la estética genérica anterior: fondo casi negro, acentos neón,
  manchas difuminadas de color, gradientes decorativos y sombras de resplandor.
- Paleta sobria y contrastada. Todas las combinaciones de texto y fondo se
  midieron contra WCAG 2.1: el valor más bajo es 5.68:1 y la mayoría supera
  7:1, es decir, nivel AA cumplido y AAA en casi todo el sitio.
     Azul institucional  #00629B    Tinta         #12202E
     Papel               #FFFFFF    Texto tenue   #55616F
     Lienzo              #F1F3F6    Filete        #D4DAE2
- Tipografía en dos familias con papeles distintos: serif (Georgia) para
  títulos y datos numéricos, sans del sistema para la interfaz, y monoespaciada
  solo para fechas y folios. Escala fija de 13 a 46 px.
- El texto más pequeño de la interfaz pasó de 7 px a 13 px. El cuerpo base es
  de 16 px con interlínea 1.65.
- Se eliminó el interletrado negativo extremo de los títulos (era de -5 px).
- Las fechas y los conteos usan cifras tabulares para que las columnas alineen.


2. EXPERIENCIA DE USUARIO Y NAVEGACION

- Antes había que dar tres clics para llegar a un PDF (Parciales, luego el
  parcial, luego la sección). Ahora todas las evidencias están visibles desde
  el inicio y se llega a cualquier archivo en un clic.
- Registro único con filtros por sección, búsqueda por texto y agrupación por
  mes. La búsqueda ignora acentos y mayúsculas: "practica" encuentra "Práctica".
- Las coincidencias de la búsqueda se resaltan dentro de cada resultado.
- Las tarjetas de "Secciones del curso" filtran el registro y desplazan hacia
  él, en lugar de abrir una ventana nueva.
- Los datos personales y la información del curso ya no están escondidos en una
  ventana: son una sección más de la página.
- La única ventana que se conserva es la del video, porque ahí sí tiene sentido.
- El menú superior marca la sección en la que estás mientras te desplazas.
- Atajos: la tecla "/" enfoca el buscador y "Esc" limpia la búsqueda.


3. INTERACTIVIDAD Y MICROINTERACCIONES

- Estados definidos en todos los controles: reposo, hover, foco, activo y
  presionado. Los filtros activos se marcan con aria-pressed.
- Foco visible y uniforme en todo el sitio (contorno azul de 2 px separado del
  elemento), pensado para quien navega con teclado.
- Las filas del registro marcan con una barra azul la fila señalada.
- El video muestra un indicador de carga hasta que puede reproducirse, y avisa
  con un mensaje claro si el archivo no está en la carpeta.
- Cuando una búsqueda no arroja resultados, el mensaje explica qué pasó y
  ofrece un botón para volver al registro completo.
- Transiciones cortas (160 ms) y solo donde responden a una acción. La única
  animación continua es el flujo de datos de la figura, muy tenue.
- Se respeta "prefers-reduced-motion": si el sistema pide menos movimiento, se
  desactivan las animaciones.


ACCESIBILIDAD

- Enlace para saltar al contenido, marcas semánticas (header, main, section,
  footer, dl, time) y jerarquía de encabezados sin saltos: h1, h2, h3.
- Los 44 elementos interactivos de la página tienen nombre accesible.
- La ventana del video usa <dialog> nativo, cierra con Esc o clic afuera y
  devuelve el foco al botón que la abrió.
- El conteo de resultados se anuncia con aria-live al filtrar o buscar.
- Áreas táctiles de 44 px como mínimo en móvil.
- Tema claro y oscuro, ambos con contraste verificado. Toma la preferencia del
  sistema la primera vez y recuerda la elección después.
- Estilos de impresión: al imprimir se ocultan barra, filtros y botones.


CORRECCION INCLUIDA

El enlace de la Práctica No. 2 estaba roto: el archivo en disco se llama
"Practica 2 -  Escritorio Remoto ..." con dos espacios después del guion y la
lista tenía uno solo. Se corrigió la referencia sin renombrar el archivo.
Los 19 enlaces del registro fueron verificados uno por uno.


ARCHIVOS

index.html    estructura y contenido
estilos.css   tokens de color, tipografía, espaciado y componentes
script.js     datos de las evidencias, filtros, búsqueda y ventana del video

El video del proyecto va en:
archivos/primer-parcial/proyecto/video.mp4

===========================================================================
SEGUNDA ITERACION: MALLA ANIMADA, PARCIALES Y FICHA CON FOTOGRAFIA
===========================================================================


A. MALLA DE RED ANIMADA EN LA PORTADA

Se retiró el diagrama estático (la figura SVG con su pie "Fig. 1") y en su
lugar la portada completa tiene detrás un lienzo <canvas> con una malla viva de
nodos enlazados, sin texto ni pie de ningún tipo.

Cómo se comporta:
- Los nodos van a la deriva y los enlaces aparecen y desaparecen solos según la
  distancia entre ellos, como en una topología que se reconfigura.
- Cada cierto tiempo un pulso recorre un enlace: son los nodos comunicándose.
- El cursor aparta suavemente los nodos cercanos, como al separar los hilos de
  una telaraña, e ilumina los enlaces de esa zona. Al alejar el cursor la malla
  se reacomoda sola, nunca se apelmaza.
- Al hacer clic, el nodo más cercano emite tráfico hacia sus vecinos.

Cómo está hecho (módulo "7. Malla de red animada" en script.js):
- Canvas 2D, sin librerías. Se adapta a pantallas de alta densidad.
- Los colores se leen de las variables del tema, así que la malla cambia de
  color al pasar de claro a oscuro.
- Se detiene sola cuando la portada sale de pantalla o la pestaña pasa a
  segundo plano, para no gastar batería.
- Con "prefers-reduced-motion" dibuja un solo fotograma y se queda quieta.
- Sobre la malla hay un velo degradado que mantiene el contraste del texto: el
  título y los datos siguen cumpliendo WCAG AA.

Para ajustarla, las constantes están al inicio del módulo:
DISTANCIA_ENLACE, RADIO_PUNTERO, DENSIDAD, MAX_NODOS y MAX_PULSOS.


B. NAVEGACION POR PARCIALES

Justo debajo del nombre de la materia y de la animación hay una barra propia de
parciales: Todo el curso, Primer parcial y Segundo parcial, con el número de
evidencias de cada uno.

- La barra queda fija bajo el menú superior, así que se puede cambiar de parcial
  desde cualquier punto de la página sin volver arriba.
- Al elegir un parcial se filtra el registro completo, se actualizan los conteos
  de todas las secciones y la página baja sola al registro.
- Funciona con las flechas izquierda y derecha del teclado.
- El segundo parcial está activo aunque esté vacío: muestra un mensaje propio
  que aclara que la sección ya está preparada. En cuanto agregues evidencias con
  parcial: "segundo" en script.js, aparecerán ahí sin tocar nada más.
- Las cifras de las pestañas se calculan de los datos, no están escritas en el
  HTML.


C. FICHA DEL ALUMNO CON FOTOGRAFIA

La ficha ahora encabeza con el retrato y el nombre del alumno, y debajo quedan
los datos de la asignatura sin repetir información.

Para poner tu foto:
  1. Guarda la imagen como  archivos/foto-alumno.jpg
  2. Recárgala. No hay que tocar el código.

Mientras el archivo no exista se muestra un marcador con las iniciales y la ruta
donde va la imagen; en cuanto aparece, el marcador desaparece solo. Si prefieres
otro nombre o formato, cambia el atributo src de <img id="fotoAlumno"> en
index.html. Se recomienda una imagen cuadrada de 600 x 600 px o mayor: el marco
recorta con object-fit sin deformar la cara.


D. INTERACTIVIDAD Y ESTETICA

- Entrada escalonada de las filas del registro cada vez que cambia un filtro,
  de 28 ms entre una y otra.
- Una sola secuencia de entrada al cargar, en la portada.
- El retrato se eleva levemente y marca su borde al pasar el cursor.
- Las pestañas de parcial tienen estado presionado real (aria-pressed) y no solo
  un color distinto.
- Todo el movimiento se desactiva con "prefers-reduced-motion".
- Al imprimir se ocultan la malla y la barra de parciales.


ESTRUCTURA DE script.js

  1. Datos de las evidencias        7. Malla de red animada
  2. Utilidades                     8. Fotografía del alumno
  3. Estado y filtros               9. Tema claro y oscuro
  4. Dibujado                      10. Atajos de teclado
  5. Interacción                   11. Arranque
  6. Navegación y parciales

Cada bloque es independiente: se puede mover o quitar sin romper los demás.


===========================================================================
TERCERA ITERACION: MALLA MAS VISIBLE, TABLERO Y TITULAR
===========================================================================


A. MALLA DE RED: MAS PRESENCIA Y MEJOR RESPUESTA AL CURSOR

Visibilidad:
- Los nodos pasaron de 1.1-2.8 px de radio a 1.9-4.0 px.
- Las líneas pasaron de 0.75-1.2 px a 1.0-1.7 px de grosor y de 0.30 a 0.42 de
  opacidad, con extremos redondeados.
- El alcance de los enlaces subió de 148 a 165 px, así que la malla se lee como
  una red tejida y no como puntos sueltos.
- Los pulsos que viajan por los enlaces son más grandes y llevan un halo.

Efecto al pasar el cursor:
- Cada nodo guarda un valor de luz de 0 a 1 según su distancia al cursor, que se
  interpola cuadro a cuadro. Por eso enciende y apaga con suavidad en lugar de
  saltar de golpe.
- Los nodos iluminados crecen hasta un 85 %, cambian de tinta neutra a azul de
  marca y ganan una aureola con degradado radial más un anillo fino.
- Los enlaces de la zona engordan hasta 1.5 px extra y suben medio punto de
  opacidad.
- Del cursor salen hilos hacia cada nodo cercano, con grosor proporcional a la
  cercanía.
- Un halo radial acompaña al cursor y da cuerpo a la zona activa.
- El foco de luz persigue al cursor con inercia y la influencia entra y sale de
  forma gradual, también al sacar el cursor de la portada.

Constantes para ajustarlo, al inicio del módulo de la malla:
DISTANCIA_ENLACE, RADIO_PUNTERO, DENSIDAD, MAX_NODOS, MAX_PULSOS y SUAVIZADO.


B. TABLERO DE ACTIVIDADES DEL CURSO

La sección "Secciones del curso" pasó a ser "Actividades del curso": un tablero
informativo, sin hipervínculos de filtrado repetidos. Muestra siempre el curso
completo, sin separarse por parciales, aunque arriba haya un parcial
seleccionado.

Tres niveles de lectura:
1. Cifras globales: actividades registradas, tipos de actividad, documentos y
   video, y parciales con entregas.
2. Barra de composición: un tramo por tipo de actividad, proporcional al número
   de entregas, con los colores de cada categoría.
3. Una tarjeta por tipo con el conteo, el porcentaje sobre el total, una pista
   proporcional y el reparto entre primer y segundo parcial.

Detalles:
- Los porcentajes se calculan por resto mayor, así que suman 100 exacto y no
  99 o 101 por redondeo.
- Todo sale de los datos de script.js: al agregar evidencias, el tablero se
  actualiza solo, incluidas las del segundo parcial.
- Las barras crecen de izquierda a derecha al cargar, escalonadas 70 ms.
- El filtrado por categoría sigue existiendo donde corresponde: en los chips del
  registro, que es donde el usuario está buscando.


C. TITULAR DEL CURSO

- Bloque titular con filete azul degradado a la izquierda que agrupa rótulo,
  nombre y subtítulo, dándole cuerpo al encabezado.
- El nombre del curso ahora es el único elemento grande de la portada: escala
  fluida de 44 a 68 px, interlínea 1.02, interletrado -0.022 em y equilibrado de
  líneas con text-wrap: balance.
- Encima, un sello con las siglas de la universidad junto a la carrera.
- Debajo, un subtítulo separado por un filete fino.
- La entrada al cargar es escalonada: primero el filete, luego rótulo, nombre,
  subtítulo, texto y datos.
