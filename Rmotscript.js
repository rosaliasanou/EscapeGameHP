let essais = 3;
const bonMotDePasse = "Alohomora";

function verifierMotDePasse(){

    let saisie = document.getElementById("champ").value;

    if(saisie === bonMotDePasse){

        document.getElementById("message").innerHTML =
        "Bravo tu est le plus intelligents des sorciers!";

        document.getElementById("suivant").style.display = "inline";

    } else {

        essais--;

        if(essais > 0){

            document.getElementById("message").innerHTML =
            "Mauvais mot de passe. Il reste " + essais + " essais.";

        } else {

            document.getElementById("message").innerHTML =
            "Plus d'essais ! Essaie la Magie.";

            document.getElementById("magie").style.display = "inline";

        }

    }

}

function magie(){

    document.getElementById("choix").style.display = "block";

}

function verifierChoix(choix){

    let resultat = document.getElementById("resultat");

    resultat.style.display = "block";
    document.getElementById("suivant").style.display = "inline";

    if(choix === "Alohomora"){

        resultat.innerHTML =
        "Bravo tu est le plus intelligent des sorciers!";

    } else {

        resultat.innerHTML =
        "C'est faux la réponse est Alohomora!";

    }

}

function pageSuivante(){

    window.location.href = "page2.html";

}