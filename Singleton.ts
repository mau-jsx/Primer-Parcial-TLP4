class Configuracion {
  private static instancia: Configuracion;
  private constructor() {}
  static obtenerInstancia() {
    if (!Configuracion.instancia) {
      return (Configuracion.instancia = new Configuracion());
    } else return Configuracion.instancia;
  }

  get(modo: string) {
    console.log(`Modo: ${modo}`);
  }

  set(modo: string, tipo: string) {
    console.log(`Modo: ${modo}, Tipo: ${tipo}`);
  }
}
const conf1 = Configuracion.obtenerInstancia();
const conf2 = Configuracion.obtenerInstancia();

conf1.set("modo", "produccion");
console.log(conf2.get("modo"));
