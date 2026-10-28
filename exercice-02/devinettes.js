// Variables globales pour stocker l'état du jeu
let nombreSecret;
let essaisRestants;
let plageMin, plageMax;

const message = document.getElementById("message");

function effacerMessages() {
    message.innerText = "";
}

function initialiserPartie() {
    effacerMessages();

    plageMin = Number(document.getElementById("min").value);
    plageMax = Number(document.getElementById("max").value);
    essaisRestants = Number(document.getElementById("nbEssais").value);

    if (isNaN(plageMin) || isNaN(plageMax) || isNaN(essaisRestants)) {
        message.innerText = " Veuillez entrer des valeurs numériques.";
        message.className = "alert alert-danger";

        nombreSecret = null;
        return;
    }
    if (plageMin >= plageMax) {
        message.innerText = " La plage minimale doit être inférieure à la plage maximale.";
        message.className = "alert alert-danger";

        nombreSecret = null;
        return;
    }
    if (essaisRestants <= 0) {
        message.innerText = " Il faut au moins 1 essai autorisé.";
        message.className = "alert alert-danger";

        nombreSecret = null;
        return;
    }

    nombreSecret = Math.floor(Math.random() * (plageMax - plageMin + 1) + plageMin);

    document.getElementById("consigne").innerText = "Proposez un nombre entre " + plageMin + " et " + plageMax + " :";
}

function verifierProposition() {
    effacerMessages();

    if (nombreSecret === undefined || nombreSecret === null) {
        message.innerText = "Veuillez d'abord faire une configuration valide.";
        message.className = "alert alert-danger";

        return;
    }

    const saisie = document.getElementById("proposition").value;
    const proposition = Number(saisie);

    if (saisie === "" || isNaN(proposition)) {
        message.innerText = " Saisissez un nombre valide.";
        message.className = "alert alert-danger";

        return;
    }
    if (proposition < plageMin || proposition > plageMax) {
        message.innerText = " Le nombre doit être compris dans la plage définie (" + plageMin + " à " + plageMax + ").";
        message.className = "alert alert-danger";

        return;
    }

    essaisRestants--;

    if (proposition === nombreSecret) {
        message.innerText = " trouvé le nombre secret : " + nombreSecret;
        message.className = "alert alert-success";

        nombreSecret = null;
    } else if (essaisRestants === 0) {
        message.innerText = " plus d'essais. Le nombre secret était : " + nombreSecret;
        message.className = "alert alert-danger";

        nombreSecret = null;
    }
    else if (proposition < nombreSecret) {
        message.innerText = " PLUS GRAND. Essais restants : " + essaisRestants;
        message.className = "alert alert-danger";

    } else if (proposition > nombreSecret) {
        message.innerText = " PLUS PETIT. Essais restants : " + essaisRestants;
        message.className = "alert alert-danger";

    }

    document.getElementById("proposition").value = "";
}
