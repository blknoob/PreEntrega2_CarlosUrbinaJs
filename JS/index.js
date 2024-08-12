const inventarioTienda = [
  {
    categoria: "bicicletas",
    tipo: "bicicleta de ruta",
    marca: "trinx",
    color: "blanco",
    cantidad: 12,
    precio: 600000,
  },
  {
    categoria: "bicicletas",
    tipo: "bicicleta de paseo",
    marca: "urban",
    color: "azul",
    cantidad: 20,
    precio: 250000,
  },
  {
    categoria: "bicicletas",
    tipo: "bicicleta pLegable",
    marca: "frontera",
    color: "negro",
    cantidad: 8,
    precio: 180000,
  },

  {
    categoria: "equipamiento",
    tipo: "casco",
    marca: "livall",
    color: "blanco",
    cantidad: 6,
    precio: 90000,
  },
  {
    categoria: "equipamiento",
    tipo: "guantes",
    marca: "trinx",
    color: "negro",
    cantidad: 60,
    precio: 25000,
  },
  {
    categoria: "equipamiento",
    tipo: "lentes fotocromaticos",
    marca: "squdo",
    color: "rojo",
    cantidad: 23,
    precio: 35000,
  },

  {
    categoria: "accesorios",
    tipo: "transmision",
    marca: "shimano",
    color: "predeterminado",
    cantidad: 12,
    precio: 80000,
  },
  {
    categoria: "accesorios",
    tipo: "sit frenos v-brake",
    marca: "shimano",
    color: "negro",
    cantidad: 15,
    precio: 45000,
  },
];

class Inventario {
  constructor(categoria, tipo, marca, color, cantidad, precio) {
    this.categoria = categoria;
    this.tipo = tipo;
    this.marca = marca;
    this.color = color;
    this.cantidad = cantidad;
    this.precio = precio;
  }
  anadirProducto() {
    (this.categoria = prompt(
      "A que categoria pertenece: Bicicletas,  Equipamiento  o  Accesorios"
    )),
      (this.tipo = prompt("Tipo de Producto")),
      (this.marca = prompt("Marca del Producto")),
      (this.color = prompt("Color del Producto")),
      (this.cantidad = parseInt(prompt("Cantidad de Productos"))),
      (this.precio = parseInt(prompt("Precio del Producto")));

    const nuevoProducto = {
      categoria: this.categoria,
      tipo: this.tipo,
      marca: this.marca,
      color: this.color,
      cantidad: this.cantidad,
      precio: this.precio,
    };
    inventarioTienda.push(nuevoProducto);
  }
}

let bienvenidos = parseInt(
  prompt(
    "Bienvenidos a nuetra tienda SOK CORES que desea hacer en el Inventario: 1.- Agregar producto,  2.- Filtrar productos por color,  3.- Filtrar rango de precios (Ingrese el numero)"
  )
);

switch (bienvenidos) {
  case 1:
    const nuevoProducto = new Inventario();
    nuevoProducto.anadirProducto();
    let nuevoProductoJoin = nuevoProducto.jo;

    console.log(inventarioTienda);
    console.log("El nuevo producto ingresdo:", nuevoProducto);
    break;

  case 2:
    let color = prompt("Que color desea buscar");
    const busquedaColor = inventarioTienda.filter(
      (articulo) => articulo.color == color.toLowerCase()
    );
    if (busquedaColor.length == 0) {
      console.log("El color no existe en nuestro inventario");
    } else {
      console.log(
        "Hay",
        busquedaColor.length,
        "producto(s) en nuestro inventario"
      );
      console.log(busquedaColor);
    }

    break;
  case 3:
    let pregunta = prompt(
      "Rango que desea filtrar:  Mayor o Menor al precio a ingresar (Ingrese Mayor o Menor)"
    );
    let precioAfiltrar = parseInt(prompt("Rango de precios a filtrar"));
    switch (pregunta.toUpperCase()) {
      case "MAYOR":
        const filtrarMayor = inventarioTienda.filter(
          (articulo) => articulo.precio > precioAfiltrar
        );
        console.log(filtrarMayor);
        break;
      case "MENOR":
        const filtrarMenor = inventarioTienda.filter(
          (articulo) => articulo.precio < precioAfiltrar
        );
        console.log(filtrarMenor);
        break;
    }
    break;
  default:
    console.log("Entrada no valida");
    break;
}
