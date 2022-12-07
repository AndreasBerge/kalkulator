const rentersRenteInp1 = document.querySelector("#rentersRenteInp1");
const rentersRenteInp2 = document.querySelector("#rentersRenteInp2");
const rentersRenteInp3 = document.querySelector("#rentersRenteInp3");
const rrResetButton = document.querySelector("#rrResetButton");
const rrForm = document.querySelector("#rrForm");

const rentersRenteResDiv = document.querySelector("#rentersRenteResDiv");

const rentersRenteRes0 = document.querySelector("#rentersRenteRes0");
const rentersRenteRes1 = document.querySelector("#rentersRenteRes1");

function calulatorRR(startCap, interest, years) {
    const interestFactor = interest / 100 + 1;
    const result = Math.floor(startCap * (interestFactor ** years));
    const difference = Math.floor(result - startCap);
    rentersRenteRes0.textContent = `Etter ${years} år har kapitalen vokst til ${result.toLocaleString()} kr.`;
    rentersRenteRes1.textContent = `Differanse: ${difference.toLocaleString()} kr.`;
    rentersRenteResDiv.classList.add("resDivAfter");
}

rrForm.addEventListener("submit", (e) => {
    e.preventDefault();
    calulatorRR(rentersRenteInp1.value, rentersRenteInp2.value, rentersRenteInp3.value);
})

rrResetButton.addEventListener("click", () => {
    rentersRenteResDiv.classList.remove("resDivAfter");
    rentersRenteRes0.textContent = null;
    rentersRenteRes1.textContent = null;
    rentersRenteInp1.value = null;
    rentersRenteInp2.value = null;
    rentersRenteInp3.value = null;
})

