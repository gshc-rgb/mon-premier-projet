const motDePasse = document.getElementById("votreMotDePasse");
const btn = document.getElementById("monButtonForm");
const message = document.getElementById("message");
const caracteresSpeciaux = "!@#$%^&*";

btn.addEventListener("click", function (event) {
    event.preventDefault();

    const texteMotDePasse = motDePasse.value;

    let majuscule = false;
    let ilContient = false;
    let chiffre = false;


    for (const c of texteMotDePasse) {
        if (c >= 'A' && c <= 'Z') {
            majuscule = true;
            break;
        }
    }

    for (const b of texteMotDePasse) {
        if (b >= 0 && b <= 9) {
            chiffre = true;
            break;
        }
    }

    for (const s of caracteresSpeciaux) {
        if (texteMotDePasse.includes(s)) {
            ilContient = true;
            break;
        }
    }

    if (texteMotDePasse.length < 8) {
        message.textContent = "Trop court (minimum 8 caractères).";
        message.className = "alert alert-danger";
    } else if (!majuscule) {
        message.textContent = "Il manque une majuscule.";
        message.className = "alert alert-danger";
    } else if (!ilContient) {
        message.textContent = "Manque au moins un caractère spécial (!@#$%^&*).";
        message.className = "alert alert-danger";
    }
    else if (!chiffre) {
        message.textContent = "Manque au moins un chiffre !!";
        message.className = "alert alert-danger";
    }
    if (texteMotDePasse.length >= 8 && majuscule == true && ilContient == true && chiffre == true) {
        message.textContent = "Merci !! Votre mot de passe est valide.";
        message.className = "alert alert-success";
    }
});
