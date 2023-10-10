
const discosContainer = document.getElementById("discos-container");


fetch("./JS/JSON.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    
    localStorage.setItem("discos", JSON.stringify(data.discos));
    data.discos.forEach(function(disco) {
      
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
      descripcionP.classList.add("precio");
      descripcionP.textContent =  "$" + disco.precio;
      

      const button = document.createElement("button");
      button.textContent = "Ver + detalle";
      button.onclick = function() {
        
        window.location.href = "detalle.html?codigo=" + encodeURIComponent(disco.codigo);
      };

      
      infoProduct.appendChild(h2);
      infoProduct.appendChild(descripcionP);
      infoProduct.appendChild(button);

      
      itemDiv.appendChild(figure);
      itemDiv.appendChild(infoProduct);

      
      discosContainer.appendChild(itemDiv);
    });
  })
  .catch(function(error) {
    console.error("Error al cargar el JSON:", error);
  });