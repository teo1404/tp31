dejar botónTema = documento.obtenerElementoPorId("cambiar")
dejar hache1 = documento.selector de consulta("h1")
documento.elementodocumento.Lista de clase.agregar("luz")
botónTema.texto interno="Modo Oscuro"
hache1.texto interno="Modo Claro"

función alternar modo oscuro() {
  si (documento.elementodocumento.Lista de clase.contiene("luz")) {
    documento.elementodocumento.Lista de clase.eliminar("luz");
    documento.elementodocumento.Lista de clase.agregar("oscuro");
    botónTema.texto interno="Modo Claro"
    hache1.texto interno="Modo Oscuro"
    botónTema.estilo.color de fondo = "var(--texto)"
    botónTema.estilo.color = "var(--fondo)"
  } demás si (documento.elementodocumento.Lista de clase.contiene("oscuro")) {
    documento.elementodocumento.Lista de clase.eliminar("oscuro");
    documento.elementodocumento.Lista de clase.agregar("luz");
    botónTema.texto interno="Modo Oscuro"
    botónTema.estilo.color de fondo = "var(--texto)"
    
    hache1.texto interno="Modo Claro"
  } demás {
    si (
      ventana.partidoMedia &&
      ventana.partidoMedia("(prefiere-combinación-de-colores: claro)").partidos
    ) {
      documento.elementodocumento.Lista de clase.agregar("oscuro");
    } demás {
      documento.elementodocumento.Lista de clase.agregar("luz");
    }
  }