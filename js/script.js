function PopupCentrer(page, options) {
    var top = (screen.height - hauteur) / 2;
    var left = (screen.width - largeur) / 2;
    var hauteur = (screen.height) / 1.5;
    var largeur = (screen.width) / 1.5;
    window.open(page, "", "top=" + top + ",left=" + left + ",width=" + largeur + ",height=" + hauteur + "," + options);
}