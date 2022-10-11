'use strict'

// Array tiedoille.
const taustaArray = [
    {
        taustatyoh2: 'Taustatyö',
        tavoiteh3: 'Videon tavoite',
        p1: 'Videon tavoitteena on toimia eräänlaisena "mainosvideona" palvelulle.',
        kohderyhmah3: 'Kohderyhmä',
        p2: 'Kohderyhmänä pidämme kaikkia Metropolialaisia sekä niitä, jotka kaipaavat Metropoliasta lisää tietoa. Metguide toimii alustavana suunnistusoppaana kaikkeen Metropoliaan liittyvissä asioissa.',
    },
]

// Valitaan haluttu kohta sivulla.
let divElem = document.getElementById('dom');

// for loop jos olisi paljon tavaraa arrayssa.
for (let i = 0; i < taustaArray.length; i++) {
    let htmlKoodi = `
        <h2> ${taustaArray[i].taustatyoh2} </h2>
        <h3> ${taustaArray[i].tavoiteh3} </h3>
        <p> ${taustaArray[i].p1} </p>
        <h3> ${taustaArray[i].kohderyhmah3} </h3>
        <p> ${taustaArray[i].p2}</p>
    `;

    // Pusketaan haluttu sisältö HTML:ään.
    divElem.innerHTML += htmlKoodi;
}