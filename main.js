window.addEventListener("load", () => {

  setTimeout(() => {
    const loader = document.getElementById("loader");
    const app = document.getElementById("app-wrapper");

    loader.style.opacity = "0";
    loader.style.transition = "0.3s ease";

    setTimeout(() => {
      loader.style.display = "none";
    }, 400);

    app.classList.add("show");

  }, 1500);

});

window.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("switch-compute");

  const soloContainer = document.querySelector(".container-solo-compute");
  const autoContainer = document.querySelector(".container-auto-compute");

  toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
      soloContainer.classList.add("hidden");
      autoContainer.classList.remove("hidden");
    } else {
      soloContainer.classList.remove("hidden");
      autoContainer.classList.add("hidden");
    }
  });
});


//------- BUTTON SECTION -------

function calculate() {
  const lot = parseFloat(document.getElementById("lot").value) || 0;
  const pips = parseFloat(document.getElementById("pips").value) || 0;

  const usd = lot * pips * 10;

  document.getElementById("result").innerText =
    "$" + usd.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
}

function autocalculate() {
  const lot1 = parseFloat(document.getElementById("auto-lot-1").value) || 0;
  const lot2 = parseFloat(document.getElementById("auto-lot-2").value) || 0;
  const lot3 = parseFloat(document.getElementById("auto-lot-3").value) || 0;
  const pips = parseFloat(document.getElementById("auto-pips").value) || 0;

  // PROFIT
  const profit1 = lot1 * 40 * 10;
  const profit2 = profit1 + lot1 * 40 * 10;
  const profit3 = profit1 + profit2 + lot1 * 40 * 10;

  // RISK
  const risk =
    (lot1 * pips * 10) +
    (lot2 * (pips - 10) * 10) +
    (lot3 * (pips - 20) * 10);

  // DISPLAY
  document.querySelector(".auto-result-profit-1").innerText =
    "$" + profit1.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

  document.querySelector(".auto-result-profit-2").innerText =
    "$" + profit2.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

  document.querySelector(".auto-result-profit-3").innerText =
    "$" + profit3.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

  document.querySelector(".auto-result-risk").innerText =
    "$" + risk.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    
}

function clearFields(){
  document.getElementById("result").textContent = "$0.00";
  document.getElementById("lot").value = "";
  document.getElementById("pips").value = "";

  document.getElementById("auto-result-profit-1").textContent = "$0.00";
  document.getElementById("auto-result-profit-2").textContent = "$0.00";
  document.getElementById("auto-result-profit-3").textContent = "$0.00";
  document.getElementById("auto-result-risk").textContent = "$0.00";
  
  document.getElementById("auto-lot-1").value = "";
  document.getElementById("auto-lot-2").value = "";
  document.getElementById("auto-lot-3").value = "";
  document.getElementById("auto-pips").value = "";
}
