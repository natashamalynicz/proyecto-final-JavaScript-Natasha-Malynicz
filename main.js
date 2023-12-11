const productos [
{
    id: "iphone12";
    titulo: "iphone12";
    imagen:"./img/iphone-12.png";
    categoria:{
        nombre: "iphone 12",
        id: "iphone 12"
    },
    precio: 1000;

}


 ]



 const productos [
    {
        id: "iphone13";
        titulo: "iphone13";
        imagen:"./img/iphone-13.jpg";
        categoria:{
            nombre: "iphone 13"
            id: "iphone 13"
        },
        precio: 1000;
    
    }
    
    
     ]






     const productos [
        {
            id: "iphone 14";
            titulo: "iphone 14";
            imagen:"./img/iphone 14.png";
            categoria:{
                nombre: "iphone 14"
                id: "iphone 14"
            },
            precio: 1000;
        
        }
        
        
         ]






         const productos [
            {
                id: "iphone 15";
                titulo: "iphone 15";
                imagen:"./img/iphone 15.jpg";
                categoria:{
                    nombre: "iphone 15"
                    id: "iphone 15"
                },
                precio: 1000;
            
            }
            
            
             ]

             const contenedorProductos = document.querySelector ("#contenedor.productos");
             const botonesCategorias = document.querySelectorAll (".botonc");

             function cargarProductos() {
              productos.forEach (producto => {
                const div = document.createElement("div");
                div.classList.add ("producto"),
                div.innerHTML = `
                img class="producto-imagen" src="${producto-imagen} alt="${producto-titulo}">
                <div class="caracteristicas" >
                    <h3 class="producto-titulo">${producto-titulo}</h3>
                    <p class="producto-precio">$${producto-precio}</p>
                    <b<utton class="producto-agregar" id="${producto.id}agregar</button>
                </div>
                
                
                `
                contenedorProductos.append (div);
              }
                
                
                )
             }

             cargarProductos();

             botonesCategorias.forEach (boton => {
                boton.addEventListener ("click",(e) => {
                    botonesCategorias.forEach (boton => boton.classList.remove("active"));
                    e.currentTarget.classList.add("active");

                    const productosBoton = productos.filter ( producto =>producto.categoria.id === e.currentTarget.id)
                }
                
                )
             }
                
                )






             const productosEnCarrito = [;
                function agregarAlcarrito (e) {
                    const IdBoton =e.productosEnCarrito
                }
              

              ]



            //   <div class="producto">
            //     <img class="producto-imagen" src="./img/iphone-12.png" alt="imagencelular">
            //     <div class="caracteristicas" >
            //         <h3 class="producto-titulo"> iphone 12</h3>
            //         <p class="producto-precio">$1000</p>
            //         <button class="producto-agregar"> agregar</button>
            //     </div>


             
             
