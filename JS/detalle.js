function getCodigo(codigo){
    const parametro= new URLSearchParams(window.location.search);
    return parametro.get(codigo);
}

function crearDetalle(codigo) {
const detalleContainer = document.getElementById("detalle-container");

if (localStorage.getItem("discos")){
    const discos= JSON.parse(localStorage.getItem("discos"));

    discos.forEach(function(disco) {
        if (codigo==disco.codigo){
            const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");

      const figure = document.createElement("figure");
      const img = document.createElement("img");
      img.src = disco.imagen;
      img.alt = disco.album;
      figure.appendChild(img);

      const infoProduct = document.createElement("div");
      infoProduct.classList.add("info-product");

      const h2 = document.createElement("h2");
      h2.textContent = disco.banda + " " + disco.album;

      const descripcionP = document.createElement("p");
      descripcionP.classList.add("descripcion");
      descripcionP.textContent = disco.detalle;

      const precio= document.createElement("p");
      precio.textContent= "$" + disco.precio;
      precio.classList.add("precio");

      const buttonVolver=document.createElement("button");
      buttonVolver.textContent= "Volver"
      buttonVolver.classList.add("button")
      buttonVolver.onclick = function() {
        
        window.location.href = "index.html";
      };
      
      infoProduct.appendChild(h2);
      infoProduct.appendChild(descripcionP);
      infoProduct.appendChild(precio)
      

      
      itemDiv.appendChild(figure);
      itemDiv.appendChild(infoProduct);
      itemDiv.appendChild(buttonVolver);

      
      detalleContainer.appendChild(itemDiv);
      }
    
      
    })
}
 
  return detalleContainer.innerHTML
}