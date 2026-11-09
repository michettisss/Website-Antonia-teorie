function mostraSezione(idSezione) {
  // CORREZIONE: Le classi vanno scritte in un'unica stringa separate dalla virgola
  const sezioni = document.querySelectorAll('.sezione, .sezione-trasparente');
  
  // Nasconde tutte le sezioni rimuovendo la classe 'attiva'
  sezioni.forEach(s => s.classList.remove('attiva'));
  
  // Mostra solo quella cliccata aggiungendo 'attiva'
  const sezioneDaMostrare = document.getElementById(idSezione);
  if (sezioneDaMostrare) {
    sezioneDaMostrare.classList.add('attiva');
  }
}

function apriGossip(titolo, fotoArray, testo) {
  const elementTitolo = document.getElementById("pop-titolo");
  const elementGalleria = document.getElementById("pop-galleria");
  const elementTesto = document.getElementById("pop-testo");

  elementTitolo.innerText = titolo;
  elementTesto.innerText = testo;

  // Puliamo la galleria da foto precedenti
  elementGalleria.innerHTML = "";

  // Creiamo i tag img per ogni foto che abbiamo passato
  // fotoArray deve essere scritto così: ['img1.jpg', 'img2.jpg']
  fotoArray.forEach(url => {
    const nuovaImg = document.createElement("img");
    nuovaImg.src = url;
    nuovaImg.style.width = "100%"; // O la grandezza che preferisci
    nuovaImg.style.borderRadius = "15px";
    nuovaImg.style.marginBottom = "10px";
    elementGalleria.appendChild(nuovaImg);
  });

  document.getElementById("popupFullscreen").style.display = "block";
  document.body.style.overflow = "hidden";
}

function chiudiGossip() {
  // Nasconde il popup
  document.getElementById("popupFullscreen").style.display = "none";
  // Riattiva lo scroll del sito
  document.body.style.overflow = "auto";
}