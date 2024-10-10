let randomNumber = Math.floor(Math.random() * 10) + 1;

function kontrolliArvamus() {
    let kasutajaArvamus = parseInt(document.getElementById("arvamus").value);
    let vastus = "";

    if (kasutajaArvamus < randomNumber) {
        vastus = "Suurem";
    } else if (kasutajaArvamus > randomNumber) {
        vastus = "Väiksem";
    } else if (kasutajaArvamus === randomNumber) {
        vastus = "Õige, tubli!";
    } else {
        vastus = "Palun sisesta kehtiv number!";
    }

    document.getElementById("tulemus").innerText = vastus;
}
