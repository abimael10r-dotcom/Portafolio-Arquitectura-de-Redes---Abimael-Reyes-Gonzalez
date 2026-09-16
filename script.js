/* ============================================================
   PORTAFOLIO · ARQUITECTURA DE REDES
   Lógica del registro de evidencias
   ------------------------------------------------------------
   Los nombres de archivo y las fechas se conservan tal como
   fueron entregados originalmente.
   ============================================================ */

"use strict";

/* ---------- 1. Datos ---------- */

const evidencias = [
    { fecha:"2026-09-17", fechaTexto:"17 de septiembre", titulo:"Glosario 1er Parcial - Abimael Reyes Gonzalez", categoria:"glosario", parcial:"primer", descripcion:"Glosario de términos del primer parcial.", archivo:"archivos/primer-parcial/glosario/Glosario 1er Parcial - Abimael Reyes Gonzalez.pdf" },
    { fecha:"2026-09-11", fechaTexto:"11 de septiembre", titulo:"P6 - English Participation - Abimael Reyes González", categoria:"participacion", parcial:"primer", descripcion:"Participación realizada en idioma inglés.", archivo:"archivos/primer-parcial/participaciones/P6 - English Participation - Abimael Reyes González.pdf" },
    { fecha:"2026-09-10", fechaTexto:"10 de septiembre", titulo:"video", categoria:"proyecto", parcial:"primer", descripcion:"Exposición en video del artículo trabajado en inglés.", archivo:"archivos/primer-parcial/proyecto/video.mp4", video:true },
    { fecha:"2026-09-10", fechaTexto:"10 de septiembre", titulo:"T6 - Velocidades SONET-SDH - Abimael Reyes González", categoria:"tarea", parcial:"primer", descripcion:"Investigación sobre jerarquías de velocidad SONET y SDH.", archivo:"archivos/primer-parcial/tareas/T6 - Velocidades SONET-SDH - Abimael Reyes González.pdf" },
    { fecha:"2026-09-04", fechaTexto:"4 de septiembre", titulo:"P5 - Abimael Reyes González", categoria:"participacion", parcial:"primer", descripcion:"Participación correspondiente a la quinta sesión.", archivo:"archivos/primer-parcial/participaciones/P5 - Abimael Reyes González.pdf" },
    { fecha:"2026-09-03", fechaTexto:"3 de septiembre", titulo:"Practica 2 - Escritorio Remoto - Abimael Reyes González", categoria:"practica", parcial:"primer", descripcion:"Configuración y uso de escritorio remoto.", archivo:"archivos/primer-parcial/practicas/Practica 2 - Escritorio Remoto - Abimael Reyes González.pdf" },
    { fecha:"2026-09-03", fechaTexto:"3 de septiembre", titulo:"Propuesta PDF para Artículo en Ingles", categoria:"proyecto", parcial:"primer", descripcion:"Propuesta del artículo seleccionado para el proyecto.", archivo:"archivos/primer-parcial/proyecto/Propuesta PDF para Artículo en Ingles.pdf" },
    { fecha:"2026-09-03", fechaTexto:"3 de septiembre", titulo:"T4 - Tecnologías de acceso a Internet - Abimael Reyes González", categoria:"tarea", parcial:"primer", descripcion:"Segunda parte del estudio sobre tecnologías de acceso.", archivo:"archivos/primer-parcial/tareas/T4 - Tecnologías de acceso a Internet - Abimael Reyes González.pdf" },
    { fecha:"2026-08-29", fechaTexto:"29 de agosto", titulo:"P4 - Abimael Reyes González", categoria:"participacion", parcial:"primer", descripcion:"Evidencia de la cuarta sesión.", archivo:"archivos/primer-parcial/participaciones/P4 - Abimael Reyes González.pdf" },
    { fecha:"2026-08-27", fechaTexto:"27 de agosto", titulo:"T3 - Tecnologías de acceso a Internet - Abimael Reyes González", categoria:"tarea", parcial:"primer", descripcion:"Investigación sobre tecnologías de acceso a Internet.", archivo:"archivos/primer-parcial/tareas/T3 - Tecnologías de acceso a Internet - Abimael Reyes González.pdf" },
    { fecha:"2026-08-27", fechaTexto:"27 de agosto", titulo:"Practica 1 - Identificación de Recursos de Red - Abimael Reyes González", categoria:"practica", parcial:"primer", descripcion:"Identificación de recursos y dispositivos de red.", archivo:"archivos/primer-parcial/practicas/Practica 1 - Identificación de Recursos de Red - Abimael Reyes González.pdf" },
    { fecha:"2026-08-21", fechaTexto:"21 de agosto", titulo:"P3 - Abimael Reyes González", categoria:"participacion", parcial:"primer", descripcion:"Participación correspondiente a la tercera sesión.", archivo:"archivos/primer-parcial/participaciones/P3 - Abimael Reyes González.pdf" },
    { fecha:"2026-08-20", fechaTexto:"20 de agosto", titulo:"Practica 0 - Inventario de equipos - Abimael Reyes González", categoria:"practica", parcial:"primer", descripcion:"Inventario de equipos de cómputo y recursos disponibles.", archivo:"archivos/primer-parcial/practicas/Practica 0 - Inventario de equipos - Abimael Reyes González.pdf" },
    { fecha:"2026-08-20", fechaTexto:"20 de agosto", titulo:"T2 - Componentes de red - Abimael Reyes González", categoria:"tarea", parcial:"primer", descripcion:"Investigación sobre los componentes de una red.", archivo:"archivos/primer-parcial/tareas/T2 - Componentes de red - Abimael Reyes González.pdf" },
    { fecha:"2026-08-14", fechaTexto:"14 de agosto", titulo:"P2 - Abimael Reyes González", categoria:"participacion", parcial:"primer", descripcion:"Primera actividad de la segunda sesión.", archivo:"archivos/primer-parcial/participaciones/P2 - Abimael Reyes González.pdf" },
    { fecha:"2026-08-14", fechaTexto:"14 de agosto", titulo:"P1 - Abimael Reyes González", categoria:"participacion", parcial:"primer", descripcion:"Segunda actividad de la segunda sesión.", archivo:"archivos/primer-parcial/participaciones/P1 - Abimael Reyes González.pdf" },
    { fecha:"2026-08-13", fechaTexto:"13 de agosto", titulo:"P0 - Abimael Reyes González", categoria:"participacion", parcial:"primer", descripcion:"Participación inicial de la asignatura.", archivo:"archivos/primer-parcial/participaciones/P0 - Abimael Reyes González.pdf" },
    { fecha:"2026-08-13", fechaTexto:"13 de agosto", titulo:"T1 - Redes de Datos - Abimael Reyes González", categoria:"tarea", parcial:"primer", descripcion:"Primera tarea sobre redes de datos.", archivo:"archivos/primer-parcial/tareas/T1 - Redes de Datos - Abimael Reyes González.pdf" }
];

const categorias = [
    { id:"tarea",         titulo:"Tareas",         singular:"Tarea",         resumen:"Investigaciones y actividades del curso." },
    { id:"practica",      titulo:"Prácticas",      singular:"Práctica",      resumen:"Practicas en equipo sobre Aquitectura de Redes." },
    { id:"participacion", titulo:"Participaciones",singular:"Participación", resumen:"Evidencias de las sesiones de clase." },
    { id:"glosario",      titulo:"Glosario",       singular:"Glosario",      resumen:"Glosarios de los parciales." },
    { id:"video",      titulo:"Video",       singular:"Video",      resumen:"Propuesta y video del artículo en inglés." }
];

const MESES = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
const MESES_CORTOS = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];

/* ---------- 2. Utilidades ---------- */

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const escapar = (txt) => String(txt).replace(/[&<>"']/g, (c) =>
    ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));

/* Compara ignorando acentos y mayúsculas, para que "practica" encuentre "Práctica". */
const normalizar = (txt) => String(txt)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const nombreCategoria = (id) => categorias.find((c) => c.id === id)?.singular ?? id;

function partesFecha(iso) {
    const [anio, mes, dia] = iso.split("-").map(Number);
    return { anio, mes: mes - 1, dia };
}

function fechaCorta(iso) {
    const { dia, mes } = partesFecha(iso);
    return `${String(dia).padStart(2, "0")} ${MESES_CORTOS[mes]}`;
}

function claveMes(iso) {
    const { anio, mes } = partesFecha(iso);
    return `${anio}-${mes}`;
}

function tituloMes(iso) {
    const { anio, mes } = partesFecha(iso);
    return `${MESES[mes].charAt(0).toUpperCase()}${MESES[mes].slice(1)} de ${anio}`;
}

/* Resalta la coincidencia de la búsqueda dentro de un texto ya escapado. */
function resaltar(texto, consulta) {
    const seguro = escapar(texto);
    if (!consulta) return seguro;

    const base = normalizar(seguro);
    const aguja = normalizar(consulta);
    const inicio = base.indexOf(aguja);
    if (inicio === -1) return seguro;

    const fin = inicio + aguja.length;
    return `${seguro.slice(0, inicio)}<mark>${seguro.slice(inicio, fin)}</mark>${seguro.slice(fin)}`;
}

/* ---------- 3. Estado ---------- */

const NOTAS_PARCIAL = {
    todos:   "Agosto a septiembre de 2026",
    primer:  "Agosto a septiembre de 2026",
    segundo: "Sin entregas cargadas todavía"
};

const estado = { parcial: "todos", categoria: "todas", consulta: "" };

const ordenadas = [...evidencias].sort((a, b) => b.fecha.localeCompare(a.fecha));

function filtrar() {
    const consulta = normalizar(estado.consulta.trim());

    return ordenadas.filter((ev) => {
        if (estado.parcial !== "todos" && ev.parcial !== estado.parcial) return false;
        if (estado.categoria !== "todas" && ev.categoria !== estado.categoria) return false;
        if (!consulta) return true;

        const campos = [ev.titulo, ev.descripcion, ev.fechaTexto, nombreCategoria(ev.categoria)];
        return campos.some((campo) => normalizar(campo).includes(consulta));
    });
}

/* ---------- 4. Dibujado ---------- */

const lista    = $("#listaEvidencias");
const conteo   = $("#conteo");
const limpiar  = $("#btnLimpiar");
const busqueda = $("#busqueda");

const ICONO_PDF = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>';
const ICONO_PLAY = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>';

function filaEvidencia(ev, i = 0) {
    const q = estado.consulta.trim();

    const accion = ev.video
        ? `<button class="abrir" type="button" data-video="1">${ICONO_PLAY}Reproducir</button>`
        : `<a class="abrir" href="${escapar(ev.archivo)}" target="_blank" rel="noopener">${ICONO_PDF}Abrir PDF</a>`;

    return `
        <article class="evidencia" style="--i:${i}">
            <time class="evidencia-fecha" datetime="${ev.fecha}">${fechaCorta(ev.fecha)}</time>
            <div>
                <h3 class="evidencia-titulo">${resaltar(ev.titulo, q)}</h3>
                <p class="evidencia-nota">${resaltar(ev.descripcion, q)}</p>
            </div>
            <span class="etiqueta et-${ev.categoria}">${escapar(nombreCategoria(ev.categoria))}</span>
            ${accion}
        </article>
    `;
}

function dibujarRegistro() {
    const resultados = filtrar();

    // Estado de los filtros
    const filtroActivo = estado.parcial !== "todos"
        || estado.categoria !== "todas"
        || estado.consulta.trim() !== "";
    limpiar.hidden = !filtroActivo;

    const etiquetaSeccion = estado.categoria === "todas"
        ? ""
        : ` en ${categorias.find((c) => c.id === estado.categoria).titulo.toLowerCase()}`;

    const etiquetaParcial = estado.parcial === "todos"
        ? ""
        : ` del ${estado.parcial} parcial`;

    conteo.innerHTML = resultados.length === 1
        ? `<strong>1</strong> evidencia${etiquetaSeccion}${etiquetaParcial}`
        : `<strong>${resultados.length}</strong> evidencias${etiquetaSeccion}${etiquetaParcial}`;

    // Sin resultados
    if (!resultados.length) {
        const parcialVacio = estado.parcial !== "todos" && !deParcial().length;

        lista.innerHTML = parcialVacio
            ? `<div class="vacio">
                   <h3>El ${escapar(estado.parcial)} parcial aún no tiene entregas</h3>
                   <p>La sección ya está preparada: en cuanto se carguen los trabajos aparecerán aquí.</p>
                   <button class="btn btn-secundario" type="button" data-limpiar="1">Ver todo el curso</button>
               </div>`
            : `<div class="vacio">
                   <h3>Ninguna evidencia coincide con la búsqueda</h3>
                   <p>Revisa la palabra escrita o vuelve a mostrar el registro completo.</p>
                   <button class="btn btn-secundario" type="button" data-limpiar="1">Mostrar todas las evidencias</button>
               </div>`;
        return;
    }

    // Agrupado por mes
    let html = "";
    let mesPrevio = null;
    let indice = 0;

    resultados.forEach((ev) => {
        const clave = claveMes(ev.fecha);
        if (clave !== mesPrevio) {
            const delMes = resultados.filter((x) => claveMes(x.fecha) === clave).length;
            html += `<h3 class="mes">${tituloMes(ev.fecha)}<span>${delMes} ${delMes === 1 ? "entrega" : "entregas"}</span></h3>`;
            mesPrevio = clave;
        }
        html += filaEvidencia(ev, indice++);
    });

    lista.innerHTML = html;

    // Entrada escalonada sólo cuando el contenido cambia por una acción del usuario
    lista.classList.remove("animar");
    void lista.offsetWidth;
    lista.classList.add("animar");
}

function deParcial() {
    return estado.parcial === "todos"
        ? evidencias
        : evidencias.filter((e) => e.parcial === estado.parcial);
}

function dibujarFiltros() {
    const grupo = $("#filtrosCategoria");

    grupo.insertAdjacentHTML("beforeend", [{ id: "todas", titulo: "Todas" }]
        .concat(categorias.map((c) => ({ id: c.id, titulo: c.titulo })))
        .map((b) => `
            <button class="chip" type="button" data-categoria="${b.id}" aria-pressed="false">
                ${escapar(b.titulo)} <b data-total="${b.id}">0</b>
            </button>`).join(""));
}

/* Los conteos se recalculan cada vez que cambia el parcial elegido. */
function actualizarConteos() {
    const base = deParcial();
    $$("#filtrosCategoria .chip b").forEach((b) => {
        const id = b.dataset.total;
        b.textContent = id === "todas" ? base.length : base.filter((e) => e.categoria === id).length;
    });
}

function sincronizarChips() {
    $$("#filtrosCategoria .chip").forEach((chip) => {
        chip.setAttribute("aria-pressed", String(chip.dataset.categoria === estado.categoria));
    });
    const videos = evidencias.filter((e) => e.video).length;
    $("#fichaTotal").textContent =
        `${evidencias.length - videos} documentos y ${videos} video${videos === 1 ? "" : "s"}`;

    $$("#grupoParciales .pestana").forEach((p) => {
        p.setAttribute("aria-pressed", String(p.dataset.parcial === estado.parcial));
    });
    actualizarConteos();
}

/* Tablero de actividades: resumen cuantitativo de TODO el curso.
   No filtra ni enlaza: sólo informa del volumen y la composición. */
function dibujarTablero() {
    const total = evidencias.length;
    const parciales = [
        { id: "primer",  nombre: "1.er parcial" },
        { id: "segundo", nombre: "2.º parcial" }
    ];

    // --- Cifras globales ---
    const documentos = evidencias.filter((e) => !e.video).length;
    const videos = total - documentos;
    const conEntregas = parciales.filter((p) => evidencias.some((e) => e.parcial === p.id)).length;

    const resumen = [
        { cifra: total, etiqueta: "Actividades registradas", destacado: true },
        { cifra: categorias.length, etiqueta: "Tipos de actividad" },
        { cifra: documentos, etiqueta: `Documentos PDF y ${videos} video${videos === 1 ? "" : "s"}` },
        { cifra: `${conEntregas}/${parciales.length}`, etiqueta: "Parciales con entregas" }
    ];

    $("#tableroResumen").innerHTML = resumen.map((r) => `
        <div class="resumen-dato ${r.destacado ? "destacado" : ""}">
            <span class="resumen-cifra">${r.cifra}</span>
            <small>${escapar(r.etiqueta)}</small>
        </div>`).join("");

    // --- Barra de composición del curso ---
    $("#tableroBarra").innerHTML = categorias.map((c, i) => {
        const n = evidencias.filter((e) => e.categoria === c.id).length;
        if (!n) return "";
        return `<span class="barra-tramo m-${c.id}"
                      style="flex:${n}; animation-delay:${i * 70}ms"
                      title="${escapar(c.titulo)}: ${n}"></span>`;
    }).join("");

    // --- Porcentajes por resto mayor: así suman 100 exacto y no 99 o 101 ---
    const crudos = categorias.map((c) => {
        const n = evidencias.filter((e) => e.categoria === c.id).length;
        return { id: c.id, n, exacto: total ? (n / total) * 100 : 0 };
    });
    let repartido = crudos.reduce((s, r) => s + (r.pct = Math.floor(r.exacto)), 0);
    crudos
        .map((r, i) => ({ i, resto: r.exacto - Math.floor(r.exacto) }))
        .sort((a, b) => b.resto - a.resto)
        .slice(0, Math.max(0, 100 - repartido))
        .forEach((r) => { crudos[r.i].pct += 1; });

    // --- Tarjeta por tipo de actividad ---
    $("#tableroMetricas").innerHTML = categorias.map((c, i) => {
        const n = crudos[i].n;
        const pct = crudos[i].pct;

        const reparto = parciales.map((p) => {
            const k = evidencias.filter((e) => e.categoria === c.id && e.parcial === p.id).length;
            return `<span class="${k ? "" : "vacia"}"><i></i>${p.nombre} <b>${k}</b></span>`;
        }).join("");

        return `
            <article class="metrica m-${c.id}">
                <div class="metrica-cabeza">
                    <span class="metrica-cifra">${n}</span>
                    <span class="metrica-porcentaje">${pct}%</span>
                </div>
                <div class="metrica-pista">
                    <i style="transform:scaleX(${(n / total).toFixed(3)}); animation-delay:${i * 70}ms"></i>
                </div>
                <h3>${escapar(c.titulo)}</h3>
                <p>${escapar(c.resumen)}</p>
                <div class="metrica-reparto">${reparto}</div>
            </article>`;
    }).join("");
}

function dibujarPortada() {
    $("#totalEvidencias").textContent = evidencias.length;
    $("#ultimaEntrega").textContent = fechaCorta(ordenadas[0].fecha);
    // Las cifras de las pestañas salen de los datos, no del HTML
    const videos = evidencias.filter((e) => e.video).length;
    $("#fichaTotal").textContent =
        `${evidencias.length - videos} documentos y ${videos} video${videos === 1 ? "" : "s"}`;

    $$("#grupoParciales .pestana").forEach((p) => {
        const id = p.dataset.parcial;
        const total = id === "todos"
            ? evidencias.length
            : evidencias.filter((e) => e.parcial === id).length;
        $("b", p).textContent = total;
        p.disabled = false;
    });
}

/* ---------- 5. Interacción ---------- */

function aplicarCategoria(id, { desplazar = false } = {}) {
    estado.categoria = id;
    sincronizarChips();
    dibujarRegistro();

    if (desplazar) {
        $("#registro").scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function limpiarFiltros() {
    estado.parcial = "todos";
    estado.categoria = "todas";
    estado.consulta = "";
    busqueda.value = "";
    $("#notaParcial").textContent = NOTAS_PARCIAL.todos;
    sincronizarChips();
    dibujarRegistro();
}

// Búsqueda con pequeño retardo para no redibujar en cada pulsación
let temporizador;
busqueda.addEventListener("input", (e) => {
    clearTimeout(temporizador);
    const valor = e.target.value;
    temporizador = setTimeout(() => {
        estado.consulta = valor;
        dibujarRegistro();
    }, 120);
});

// Pestañas de parcial
function aplicarParcial(id, { desplazar = true } = {}) {
    estado.parcial = id;
    estado.categoria = "todas";
    $("#notaParcial").textContent = NOTAS_PARCIAL[id] ?? "";
    sincronizarChips();
    dibujarRegistro();
    if (desplazar) $("#registro").scrollIntoView({ behavior: "smooth", block: "start" });
}

$("#grupoParciales").addEventListener("click", (e) => {
    const pestana = e.target.closest(".pestana");
    if (pestana) aplicarParcial(pestana.dataset.parcial);
});

// Flechas para moverse entre pestañas con el teclado
$("#grupoParciales").addEventListener("keydown", (e) => {
    if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
    const pestanas = $$("#grupoParciales .pestana");
    const actual = pestanas.indexOf(document.activeElement);
    if (actual === -1) return;
    e.preventDefault();
    const paso = e.key === "ArrowRight" ? 1 : -1;
    const siguiente = pestanas[(actual + paso + pestanas.length) % pestanas.length];
    siguiente.focus();
    aplicarParcial(siguiente.dataset.parcial, { desplazar: false });
});

// Chips de sección
$("#filtrosCategoria").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (chip) aplicarCategoria(chip.dataset.categoria);
});

// Índice de secciones y tarjeta del parcial
document.addEventListener("click", (e) => {
    if (e.target.closest("[data-limpiar]")) limpiarFiltros();
});

limpiar.addEventListener("click", limpiarFiltros);

// Marca de la barra: volver al inicio
$("#btnInicio").addEventListener("click", () => {
    $("#inicio").scrollIntoView({ behavior: "smooth", block: "start" });
});

/* ---------- 6. Navegación ---------- */

const menu = $("#menu");
const btnMenu = $("#btnMenu");
const enlacesMenu = $$("#menu a");

const esMovil = () => window.matchMedia("(max-width: 760px)").matches;

function cerrarMenu() {
    if (!esMovil()) return;
    menu.hidden = true;
    btnMenu.setAttribute("aria-expanded", "false");
}

function ajustarMenu() {
    menu.hidden = esMovil() ? true : false;
    btnMenu.setAttribute("aria-expanded", "false");
    if (!esMovil()) menu.removeAttribute("hidden");
}

btnMenu.addEventListener("click", () => {
    const abierto = btnMenu.getAttribute("aria-expanded") === "true";
    btnMenu.setAttribute("aria-expanded", String(!abierto));
    menu.hidden = abierto;
});

menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) cerrarMenu();
});

window.addEventListener("resize", ajustarMenu);
ajustarMenu();

// Sección activa en el menú
const secciones = $$("main section[id]");
if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (!entrada.isIntersecting) return;
            enlacesMenu.forEach((a) => {
                a.setAttribute("aria-current", String(a.getAttribute("href") === `#${entrada.target.id}`));
            });
        });
    }, { rootMargin: "-64px 0px -65% 0px", threshold: 0 });

    secciones.forEach((s) => observador.observe(s));
}

/* ---------- 7. Ventana del video ---------- */

const ventana   = $("#ventanaVideo");
const video     = $("#reproductorVideo");
const cargando  = $("#cargandoVideo");
let ultimoFoco  = null;

function abrirVideo(origen) {
    ultimoFoco = origen ?? document.activeElement;
    cargando.hidden = false;

    if (typeof ventana.showModal === "function") {
        ventana.showModal();
    } else {
        ventana.setAttribute("open", "");
    }
    video.load();
}

function cerrarVideo() {
    video.pause();
    if (ventana.open && typeof ventana.close === "function") {
        ventana.close();
    } else {
        ventana.removeAttribute("open");
    }
    ultimoFoco?.focus();
}

lista.addEventListener("click", (e) => {
    const boton = e.target.closest("[data-video]");
    if (boton) abrirVideo(boton);
});

$("#btnCerrarVideo").addEventListener("click", cerrarVideo);
ventana.addEventListener("close", () => video.pause());

// Cerrar al pulsar fuera del cuadro
ventana.addEventListener("click", (e) => {
    if (e.target === ventana) cerrarVideo();
});

video.addEventListener("loadeddata", () => { cargando.hidden = true; });
video.addEventListener("canplay",    () => { cargando.hidden = true; });
video.addEventListener("error", () => {
    cargando.innerHTML = "<span>No se encontró el archivo de video en la carpeta del proyecto.</span>";
});

/* ---------- 7. Malla de red animada (Máxima expansión, despegue amplio y desplazamiento derecho) ---------- */
(function mallaRed() {
    const lienzo = $("#mallaRed");
    if (!lienzo || !lienzo.getContext) return;

    const ctx = lienzo.getContext("2d", { alpha: true });
    const seccion = lienzo.parentElement;
    const menosMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)");

    const DISTANCIA_ENLACE = 210;   // Rango de enlace ligeramente mayor para mantener uniones fluidas a distancia
    const RADIO_PUNTERO     = 300;   // Mayor área de influencia para reaccionar antes al cursor
    const DENSIDAD          = 13000; // Menor densidad relativa para que los nodos respiren holgadamente
    const MAX_NODOS         = 90;    // Cantidad optimizada para evitar saturación en áreas abiertas
    const MAX_PULSOS        = 18;
    const SUAVIZADO         = 0.10;  

    let ancho = 0, alto = 0, centroX = 0, centroY = 0, dpr = 1;
    let nodos = [], pulsos = [];
    let cuadro = null, visible = true;
    let ultimoPulso = 0;
    const puntero = { x: -9999, y: -9999, sx: -9999, sy: -9999, activo: false, fuerza: 0 };
    let color = { rgb: "0, 98, 155", tinta: "18, 32, 46" };

    function leerColores() {
        const estilos = getComputedStyle(document.documentElement);
        color = {
            rgb:    aRGB(estilos.getPropertyValue("--brand").trim())    || "0, 98, 155",
            tinta:  aRGB(estilos.getPropertyValue("--ink-2").trim())    || "60, 74, 89"
        };
    }

    function aRGB(hex) {
        const h = hex.replace("#", "");
        if (h.length !== 6) return null;
        const n = parseInt(h, 16);
        return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
    }

    function medir() {
        const caja = seccion.getBoundingClientRect();
        ancho = Math.max(1, Math.round(caja.width));
        alto  = Math.max(1, Math.round(caja.height));
        
        // Desplazamiento del cúmulo hacia la derecha de forma más pronunciada
        centroX = (ancho / 2) + Math.min(ancho * 0.22, 240);
        centroY = alto / 2;
        
        dpr = Math.min(window.devicePixelRatio || 1, 2);

        lienzo.width  = ancho * dpr;
        lienzo.height = alto * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        sembrar();
    }

    function sembrar() {
        const objetivo = Math.min(MAX_NODOS, Math.round((ancho * alto) / DENSIDAD));

        nodos = Array.from({ length: objetivo }, () => {
            const angulo = Math.random() * Math.PI * 2;
            // Rango de expansión drásticamente mayor para cubrir de extremo a extremo
            const radioBase = Math.random() * Math.min(ancho, alto) * 0.78;
            return {
                x: centroX + Math.cos(angulo) * radioBase,
                y: centroY + Math.sin(angulo) * radioBase,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                r: 2.0 + Math.random() * 2.0,
                fase: Math.random() * Math.PI * 2,
                anguloOriginal: angulo,
                distanciaOriginal: radioBase,
                luz: 0        
            };
        });
        pulsos = [];
    }

    function mover(t) {
        if (puntero.sx < -1000) { puntero.sx = puntero.x; puntero.sy = puntero.y; }
        puntero.sx += (puntero.x - puntero.sx) * SUAVIZADO;
        puntero.sy += (puntero.y - puntero.sy) * SUAVIZADO;

        const objetivoFuerza = puntero.activo ? 1 : 0;
        puntero.fuerza += (objetivoFuerza - puntero.fuerza) * 0.08;

        // Onda de respiración muy amplia para alternar expansión profunda y contracción suave
        const cicloRespiracion = Math.sin(t * 0.00038) * 0.42; 

        // Repulsión local ampliada para mantener separación natural entre nodos cercanos
        for (let i = 0; i < nodos.length; i++) {
            for (let j = i + 1; j < nodos.length; j++) {
                const ni = nodos[i];
                const nj = nodos[j];
                const dx = nj.x - ni.x;
                const dy = nj.y - ni.y;
                const dist = Math.hypot(dx, dy);
                const distanciaMinima = 65; // Margen de separación superior entre partículas

                if (dist < distanciaMinima && dist > 0.1) {
                    const fuerzaRepulsion = (1 - dist / distanciaMinima) * 0.016;
                    const fx = (dx / dist) * fuerzaRepulsion;
                    const fy = (dy / dist) * fuerzaRepulsion;
                    
                    ni.vx -= fx;
                    ni.vy -= fy;
                    nj.vx += fx;
                    nj.vy += fy;
                }
            }
        }

        nodos.forEach((n) => {
            const radioDeseado = n.distanciaOriginal * (1 + cicloRespiracion);
            const objetivoX = centroX + Math.cos(n.anguloOriginal + t * 0.00006) * radioDeseado;
            const objetivoY = centroY + Math.sin(n.anguloOriginal + t * 0.00006) * radioDeseado;

            n.vx += (objetivoX - n.x) * 0.00035;
            n.vy += (objetivoY - n.y) * 0.00035;

            n.x += n.vx;
            n.y += n.vy;

            // Dispersión reactiva potente ante el movimiento del cursor
            if (puntero.fuerza > 0.01) {
                const dx = n.x - puntero.sx;
                const dy = n.y - puntero.sy;
                const d = Math.hypot(dx, dy);
                
                if (d < RADIO_PUNTERO && d > 1) {
                    const factorEscape = (1 - d / RADIO_PUNTERO) ** 1.3;
                    const fuerzaScatter = 0.22 * puntero.fuerza * factorEscape;
                    
                    n.vx += (dx / d) * fuerzaScatter + (Math.random() - 0.5) * 0.1;
                    n.vy += (dy / d) * fuerzaScatter + (Math.random() - 0.5) * 0.1;
                }
            }

            n.vx = Math.max(-0.7, Math.min(0.7, n.vx * 0.98));
            n.vy = Math.max(-0.7, Math.min(0.7, n.vy * 0.98));
            n.fase += 0.012;

            const dl = Math.hypot(n.x - puntero.sx, n.y - puntero.sy);
            const objetivoLuz = puntero.fuerza * Math.max(0, 1 - dl / RADIO_PUNTERO) ** 1.6;
            n.luz += (objetivoLuz - n.luz) * 0.14;
        });

        if (t - ultimoPulso > 650 && pulsos.length < MAX_PULSOS && nodos.length > 2) {
            ultimoPulso = t;
            const a = nodos[(Math.random() * nodos.length) | 0];
            const vecinos = nodos.filter((n) => n !== a && Math.hypot(n.x - a.x, n.y - a.y) < DISTANCIA_ENLACE);
            if (vecinos.length) {
                pulsos.push({ a, b: vecinos[(Math.random() * vecinos.length) | 0], t: 0 });
            }
        }

        pulsos.forEach((p) => { p.t += 0.011; });
        pulsos = pulsos.filter((p) => p.t < 1);
    }

    function pintar() {
        ctx.clearRect(0, 0, ancho, alto);

        if (puntero.fuerza > 0.02) {
            const halo = ctx.createRadialGradient(
                puntero.sx, puntero.sy, 0,
                puntero.sx, puntero.sy, RADIO_PUNTERO
            );
            halo.addColorStop(0,   `rgba(${color.rgb}, ${(0.15 * puntero.fuerza).toFixed(3)})`);
            halo.addColorStop(0.5, `rgba(${color.rgb}, ${(0.055 * puntero.fuerza).toFixed(3)})`);
            halo.addColorStop(1,   `rgba(${color.rgb}, 0)`);
            ctx.fillStyle = halo;
            ctx.beginPath();
            ctx.arc(puntero.sx, puntero.sy, RADIO_PUNTERO, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.lineCap = "round";
        for (let i = 0; i < nodos.length; i++) {
            for (let j = i + 1; j < nodos.length; j++) {
                const a = nodos[i], b = nodos[j];
                const d = Math.hypot(a.x - b.x, a.y - b.y);
                if (d > DISTANCIA_ENLACE) continue;

                const cerca = 1 - d / DISTANCIA_ENLACE;
                const luz = Math.max(a.luz, b.luz);

                ctx.strokeStyle = `rgba(${color.rgb}, ${(cerca * 0.45 + luz * 0.4).toFixed(3)})`;
                ctx.lineWidth = 0.9 + cerca * 0.7 + luz * 1.3;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
            }
        }

        if (puntero.fuerza > 0.02) {
            nodos.forEach((n) => {
                if (n.luz < 0.05) return;
                ctx.strokeStyle = `rgba(${color.rgb}, ${(n.luz * 0.65).toFixed(3)})`;
                ctx.lineWidth = 0.9 + n.luz * 1.5;
                ctx.beginPath();
                ctx.moveTo(n.x, n.y);
                ctx.lineTo(puntero.sx, puntero.sy);
                ctx.stroke();
            });
        }

        nodos.forEach((n) => {
            const latido = 1 + Math.sin(n.fase) * 0.12;
            const radio = n.r * latido * (1 + n.luz * 0.8);

            if (n.luz > 0.05) {
                const brillo = ctx.createRadialGradient(n.x, n.y, radio * 0.4, n.x, n.y, radio + 14);
                brillo.addColorStop(0, `rgba(${color.rgb}, ${(n.luz * 0.4).toFixed(3)})`);
                brillo.addColorStop(1, `rgba(${color.rgb}, 0)`);
                ctx.fillStyle = brillo;
                ctx.beginPath();
                ctx.arc(n.x, n.y, radio + 14, 0, Math.PI * 2);
                ctx.fill();

                ctx.strokeStyle = `rgba(${color.rgb}, ${(n.luz * 0.65).toFixed(3)})`;
                ctx.lineWidth = 1.2;
                ctx.beginPath();
                ctx.arc(n.x, n.y, radio + 5, 0, Math.PI * 2);
                ctx.stroke();
            }

            ctx.fillStyle = n.luz > 0.12
                ? `rgba(${color.rgb}, ${(0.7 + n.luz * 0.3).toFixed(3)})`
                : `rgba(${color.tinta}, ${(0.5 + n.luz * 0.3).toFixed(3)})`;
            ctx.beginPath();
            ctx.arc(n.x, n.y, radio, 0, Math.PI * 2);
            ctx.fill();
        });

        pulsos.forEach((p) => {
            if (p.t < 0) return;
            const x = p.a.x + (p.b.x - p.a.x) * p.t;
            const y = p.a.y + (p.b.y - p.a.y) * p.t;
            const alfa = Math.sin(p.t * Math.PI);

            ctx.fillStyle = `rgba(${color.rgb}, ${(alfa * 0.28).toFixed(3)})`;
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = `rgba(${color.rgb}, ${(alfa * 0.95).toFixed(3)})`;
            ctx.beginPath();
            ctx.arc(x, y, 2.8, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    function animar(t) {
        mover(t);
        pintar();
        cuadro = requestAnimationFrame(animar);
    }

    function arrancar() {
        if (cuadro || menosMovimiento.matches) return;
        cuadro = requestAnimationFrame(animar);
    }

    function detener() {
        if (!cuadro) return;
        cancelAnimationFrame(cuadro);
        cuadro = null;
    }

    seccion.addEventListener("pointermove", (e) => {
        if (e.pointerType === "touch") return;
        const caja = seccion.getBoundingClientRect();
        puntero.x = e.clientX - caja.left;
        puntero.y = e.clientY - caja.top;
        puntero.activo = true;
    });
    seccion.addEventListener("pointerleave", () => {
        puntero.activo = false;
    });

    seccion.addEventListener("pointerdown", (e) => {
        if (menosMovimiento.matches || !nodos.length) return;
        const caja = seccion.getBoundingClientRect();
        const x = e.clientX - caja.left;
        const y = e.clientY - caja.top;

        const origen = nodos.reduce((mejor, n) =>
            Math.hypot(n.x - x, n.y - y) < Math.hypot(mejor.x - x, mejor.y - y) ? n : mejor);

        nodos
            .filter((n) => n !== origen && Math.hypot(n.x - origen.x, n.y - origen.y) < DISTANCIA_ENLACE)
            .slice(0, 5)
            .forEach((destino, i) => pulsos.push({ a: origen, b: destino, t: -i * 0.06 }));
    });

    leerColores();
    medir();

    if (menosMovimiento.matches) {
        pintar();
    } else {
        arrancar();
    }

    window.addEventListener("resize", () => {
        clearTimeout(medir._t);
        medir._t = setTimeout(() => { medir(); if (menosMovimiento.matches) pintar(); }, 180);
    });

    document.addEventListener("visibilitychange", () => {
        document.hidden || !visible ? detener() : arrancar();
    });

    if ("IntersectionObserver" in window) {
        new IntersectionObserver(([e]) => {
            visible = e.isIntersecting;
            visible && !document.hidden ? arrancar() : detener();
        }, { threshold: 0 }).observe(seccion);
    }

    menosMovimiento.addEventListener("change", (e) => {
        if (e.matches) { detener(); pintar(); } else { arrancar(); }
    });

    document.addEventListener("tema-cambiado", () => { leerColores(); pintar(); });
})();
/* ---------- 8. Fotografía del alumno ---------- */

/* El marcador de la ficha desaparece en cuanto exista el archivo de la foto.
   Para cambiar la imagen basta con sustituir archivos/foto-alumno.jpg */
(function retratoAlumno() {
    const foto = $("#fotoAlumno");
    const marco = foto?.closest(".retrato");
    if (!foto || !marco) return;

    const mostrar = () => marco.classList.add("con-foto");
    const ocultar = () => { marco.classList.remove("con-foto"); foto.style.display = "none"; };

    if (foto.complete) {
        foto.naturalWidth ? mostrar() : ocultar();
    } else {
        foto.addEventListener("load", mostrar);
        foto.addEventListener("error", ocultar);
    }
})();

/* ---------- 9. Tema ---------- */

const btnTema = $("#btnTema");
const prefiereOscuro = window.matchMedia("(prefers-color-scheme: dark)");

function aplicarTema(tema) {
    document.documentElement.dataset.tema = tema;
    const oscuro = tema === "oscuro";
    btnTema.setAttribute("aria-pressed", String(oscuro));
    $(".solo-lectores", btnTema).textContent = oscuro ? "Activar tema claro" : "Activar tema oscuro";
    document.dispatchEvent(new CustomEvent("tema-cambiado"));
}

let temaGuardado = null;
try { temaGuardado = localStorage.getItem("tema-portafolio"); } catch (_) { /* almacenamiento no disponible */ }

aplicarTema(temaGuardado ?? (prefiereOscuro.matches ? "oscuro" : "claro"));

btnTema.addEventListener("click", () => {
    const nuevo = document.documentElement.dataset.tema === "oscuro" ? "claro" : "oscuro";
    aplicarTema(nuevo);
    try { localStorage.setItem("tema-portafolio", nuevo); } catch (_) { /* almacenamiento no disponible */ }
});

prefiereOscuro.addEventListener("change", (e) => {
    if (!temaGuardado) aplicarTema(e.matches ? "oscuro" : "claro");
});

/* ---------- 10. Atajos de teclado ---------- */

document.addEventListener("keydown", (e) => {
    const escribiendo = ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName);

    if (e.key === "/" && !escribiendo) {
        e.preventDefault();
        busqueda.focus();
        busqueda.select();
    }

    if (e.key === "Escape") {
        if (document.activeElement === busqueda && busqueda.value) {
            limpiarFiltros();
            return;
        }
        cerrarMenu();
    }
});

/* ---------- 11. Arranque ---------- */

dibujarFiltros();
dibujarTablero();
dibujarPortada();
sincronizarChips();
dibujarRegistro();
