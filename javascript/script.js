
const nuolaida = document.getElementById('nuolaida'); /* randamas elementas su id nuolaida */
if (nuolaida) { /* tikrina ar yra toks elementas */
    nuolaida.addEventListener('click', function() { /* pridedamas veikimas paspaudus mygtuką */

        let pasirinkimas = confirm("Ar norite gauti 10% nuolaidą pirmam kursui?"); /* rodomas langas su tekstu ar nori nuolaidos, OK arba Cancel */
        if (pasirinkimas) { /* jei pasirenkama "OK" */
            alert("Puiku. Jūsų kodas: DOVANA10."); /* rodomas pranešimas su nuolaidos kodu */
        } else { /* jei pasirenkama "Cancel" */
            alert("Negavot 10 % nuolaidos"); /* rodomas pranešimas kad negavo nuolaidos */
        }
    });
}