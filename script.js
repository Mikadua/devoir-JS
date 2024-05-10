// Sélectionnez les éléments de contrôle du style
const fontSizeSelect = document.getElementById("font-size");
const textColorInput = document.getElementById("nav-text-color");
const fontStyleSelect = document.getElementById("font-style");

// Fonction pour appliquer les styles
function applyNavStyles() {
  const fontSize = fontSizeSelect.value;
  const textColor = textColorInput.value;
  const fontStyle = fontStyleSelect.value;

  // Appliquez les styles au texte dans la barre de navigation
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.style.fontSize = fontSize;
    link.style.color = textColor;
    link.style.fontStyle = fontStyle;
  });
}

// Écoutez les changements dans les sélecteurs de style
fontSizeSelect.addEventListener("change", applyNavStyles);
textColorInput.addEventListener("input", applyNavStyles);
fontStyleSelect.addEventListener("change", applyNavStyles);

// Appliquez les styles au chargement initial de la page
applyNavStyles();
// Sélectionnez tous les liens dans la barre de navigation
const navLinks = document.querySelectorAll("nav ul li a");

// Écoutez les clics sur chaque lien
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    // Empêchez le comportement de lien par défaut
    event.preventDefault();

    // Obtenez l'ID de l'élément de contrôle correspondant
    const controlId = this.getAttribute("id").replace("nav-", "");

    // Sélectionnez l'élément de contrôle correspondant
    const control = document.getElementById(`nav-${controlId}`);

    // Basculez la classe d'invisibilité de l'élément de contrôle
    control.classList.toggle("invisible");
  });
});
