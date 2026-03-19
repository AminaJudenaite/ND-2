
const nuolaida = document.getElementById('nuolaida');
if (nuolaida) {
    nuolaida.addEventListener('click', function() {

        let pasirinkimas = confirm("Ar norite gauti 10% nuolaidą pirmam kursui?");
        if (pasirinkimas) {
            alert("Puiku. Jūsų kodas: DOVANA10.");
        } else {
            alert("Negavot 10 % nuolaidos");
        }
    });
}