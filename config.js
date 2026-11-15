/*
 * Réglages du site de démonstration.
 * Pour tester un autre établissement, remplacez l'identifiant ci-dessous
 * (HL Booking Pro > Widget de réservation > code d'intégration).
 */
window.HL_DEMO = {
  appUrl: "https://hl-booking-pro.vercel.app",
  establishment: "1af143b5-bd93-40de-a419-dc6e854d0996",
};

/* Charge le widget HL Booking Pro avec les options données. */
window.loadHLWidget = function (options) {
  var p = new URLSearchParams(location.search);
  var s = document.createElement("script");
  s.src = window.HL_DEMO.appUrl + "/widget.js";
  s.defer = true;
  s.dataset.establishment = p.get("id") || window.HL_DEMO.establishment;
  Object.keys(options || {}).forEach(function (k) {
    if (options[k]) s.dataset[k] = options[k];
  });
  document.body.appendChild(s);
};
