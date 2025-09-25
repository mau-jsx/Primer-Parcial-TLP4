interface detalles {
  nombre: string;
  ram: string;
  procesador: string;
}

class Notebook implements detalles {
  constructor(
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}

  detalles() {
    return {
      nombre: this.nombre,
      ram: this.ram,
      procesador: this.procesador,
    };
  }
}

class Desktop implements detalles {
  constructor(
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}

  detalles() {
    return {
      nombre: this.nombre,
      ram: this.ram,
      procesador: this.procesador,
    };
  }
}

class Servidor implements detalles {
  constructor(
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}

  detalles() {
    return {
      nombre: this.nombre,
      ram: this.ram,
      procesador: this.procesador,
    };
  }
}

class EquipoFactory {
  crearEquipo(tipo: string, nombre: string, ram: string, procesador: string) {
    if (tipo === "Notebook") {
      return new Notebook(nombre, ram, procesador);
    }
    if (tipo === "Desktop") {
      return new Desktop(nombre, ram, procesador);
    }
    if (tipo === "Servidor") {
      return new Servidor(nombre, ram, procesador);
    } else {
      throw new Error("No esta ningun dispositivos");
    }
  }
}

const factory = new EquipoFactory();
const server = factory.crearEquipo(
  "Servidor",
  "Dell PowerEdge",
  "32GB",
  "Xeon"
);
console.log(server.detalles());
