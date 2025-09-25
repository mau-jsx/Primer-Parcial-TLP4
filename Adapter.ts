class invetarioViejo {
  addltem(nombre: string) {
    console.log(`Se agrego el item ${nombre}`);
  }
}

interface equipo {
  nombre: string;
  red: string;
  estado: string;
}

class AdaptadorInvetario {
  constructor(private inventarioviejo: invetarioViejo) {}
  private equipo: equipo[] | equipo[] = [];

  agregarEquipo(nombre: string, red: string, estado: string) {
    this.equipo.push({ nombre, red, estado });
  }

  listarEquipos() {
    return this.equipo;
  }
}

const inventarioV = new invetarioViejo();
const adaptador = new AdaptadorInvetario(inventarioV);
adaptador.agregarEquipo("Router Cisco", "Red", "Disponible");
console.log(adaptador.listarEquipos());
