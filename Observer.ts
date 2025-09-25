interface Observador {
  notificar(nombreEquipo: string, nuevoEstado: string): void;
}

class Soporte implements Observador {
  notificar(nombreEquipo: string, nuevoEstado: string): void {
    console.log(
      `Soporte notificado: ${nombreEquipo} ha cambiado su estado a ${nuevoEstado}`
    );
  }
}

class Equipo {
  private observadores: Observador[] = [];

  constructor(
    public nombre: string,
    public tipo: string,
    public estado: string
  ) {}

  agregarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    this.observadores.forEach((observador) => {
      observador.notificar(this.nombre, this.estado);
    });
  }
}

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portantil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparacion");


