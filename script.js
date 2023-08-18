// Date de fin pour le compte à rebours
var countDownDate = new Date("September 30, 2023 00:00:00").getTime();

// Mettre à jour le compte à rebours chaque seconde
var x = setInterval(function () {
    // Obtenir la date et l'heure actuelles
    var now = new Date().getTime();

    // Calculer la distance entre la date de fin et la date actuelle
    var distance = countDownDate - now;

    // Calculer les jours, heures, minutes et secondes restantes
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mettre à jour les éléments HTML avec les valeurs calculées
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Si le compte à rebours est terminé, afficher "00" partout
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);
