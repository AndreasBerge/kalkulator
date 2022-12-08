const inp1 = document.querySelector("#inp1");
const inp2 = document.querySelector("#inp2");
const inp3 = document.querySelector("#inp3");

const år_kapitalMål = document.querySelector("#år_kapitalMål")

const resetButton = document.querySelector("#resetButton");
const form = document.querySelector("form");
const navRRbutton = document.querySelector("#navRRbutton");
const navTTKMbutton = document.querySelector("#navTTKMbutton");

const heading = document.querySelector("h3");

const resDiv = document.querySelector("#resDiv");

const res0 = document.querySelector("#res0");
const res1 = document.querySelector("#res1");

function calulator(startCap, interest, yearsEndCap, type) {
    const interestFactor = interest / 100 + 1;
    if (type === "rentersRente") {
        const result = Math.floor(startCap * (interestFactor ** yearsEndCap));
        const difference = Math.floor(result - startCap);
        res0.textContent = `Etter ${yearsEndCap} år har kapitalen vokst til ${result.toLocaleString()} kr.`;
        res1.textContent = `Differanse: ${difference.toLocaleString()} kr.`;
        resDiv.classList.add("resDivAfter");
    } else if (type === "tidTilKapitalMål") {
        const endCap = Number(yearsEndCap.toLocaleString());
        const divided = yearsEndCap / startCap;
        const logDivided = Math.log(divided);
        const logInterestFactor = Math.log(interestFactor);
        let result = logDivided / logInterestFactor;
        resultRounded = result.toFixed(1);
        res0.textContent = `Med ${interest}% rente har kapitalen vokst til ${endCap.toLocaleString()} kr etter ${resultRounded} år.`;
        resDiv.classList.add("resDivAfter");
    }
}

const calcSelect = {
    rentersRente: true
}

function resetValues() {
    if (calcSelect.rentersRente) {
        form.removeEventListener("submit", tidTilKapitalMål_EL);
    } else {
        form.removeEventListener("submit", rentersRente_EL);
    }
    resDiv.classList.remove("resDivAfter");
    res0.textContent = null;
    res1.textContent = null;
    inp1.value = null;
    inp2.value = null;
    inp3.value = null;
    // resDiv.style.display = "none";
}

function rentersRente_EL(e) {
    e.preventDefault();
    const type = "rentersRente";
    calulator(inp1.value, inp2.value, inp3.value, type);
    // resDiv.style.display = "block";
}

function rentersRenteDef() {
    resetValues();
    heading.textContent = "Renters rente";
    år_kapitalMål.textContent = "Antall år:";
    form.addEventListener("submit", rentersRente_EL);
}

function tidTilKapitalMål_EL(e) {
    e.preventDefault();
    res1.style.display = "none";
    const type = "tidTilKapitalMål";
    calulator(inp1.value, inp2.value, inp3.value, type);
    // resDiv.style.display = "block";
}

navTTKMbutton.addEventListener("click", () => {
    calcSelect.rentersRente = false;
    resetValues();
    heading.textContent = "Tid til kapitalmål";
    år_kapitalMål.textContent = "Kapitalmål:";
    form.addEventListener("submit", tidTilKapitalMål_EL);
})

navRRbutton.addEventListener("click", () => {
    calcSelect.rentersRente = true;
    res1.style.display = "block";
    rentersRenteDef();
})

window.addEventListener("DOMContentLoaded", () => {
    rentersRenteDef();
})

resetButton.addEventListener("click", () => {
    resetValues();
})
