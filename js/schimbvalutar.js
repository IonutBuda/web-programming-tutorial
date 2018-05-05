var gbp, usd, eur, cad, ron;

function init() {
    gbp = document.getElementById("GBP");
    usd = document.getElementById("USD");
    eur = document.getElementById("EUR");
    cad = document.getElementById("CAD");
    ron = document.getElementById("RON");
};

init();

fx.base = "USD";
fx.settings = {
    from: "USD"
};
fx.rates = {
    "EUR": 0.21440,
    "GBP": 0.18981,
    "RON": 0.2568,
    "USD": 1
};
$.getJSON(
    'https://openexchangerates.org/api/latest.json?app_id=3d35147bd0254209af1baf1d2e12c297',
    function (data) {
        if (typeof fx !== "undefined" && fx.rates) {
            fx.rates = data.rates;
            fx.base = data.base;
        } else {
            var fxSetup = {
                rates: data.rates,
                base: data.base
            }
        }
    }
);

function ronfunc() {
    gbp.value = (fx.convert(parseFloat(ron.value), {from: "RON", to: "GBP"})).toFixed(2);
    usd.value = (fx.convert(parseFloat(ron.value), {from: "RON", to: "USD"})).toFixed(2);
    eur.value = (fx.convert(parseFloat(ron.value), {from: "RON", to: "EUR"})).toFixed(2);
    cad.value = (fx.convert(parseFloat(ron.value), {from: "RON", to: "CAD"})).toFixed(2);
};

function gbpfunc() {
    usd.value = (fx.convert(parseFloat(gbp.value), {from: "GBP", to: "USD"})).toFixed(2);
    eur.value = (fx.convert(parseFloat(gbp.value), {from: "GBP", to: "EUR"})).toFixed(2);
    cad.value = (fx.convert(parseFloat(gbp.value), {from: "GBP", to: "CAD"})).toFixed(2);
    ron.value = (fx.convert(parseFloat(gbp.value), {from: "GBP", to: "RON"})).toFixed(2);
};

function eurfunc() {
    gbp.value = (fx.convert(parseFloat(eur.value), {from: "EUR", to: "GBP"})).toFixed(2);
    usd.value = (fx.convert(parseFloat(eur.value), {from: "EUR", to: "USD"})).toFixed(2);
    cad.value = (fx.convert(parseFloat(eur.value), {from: "EUR", to: "CAD"})).toFixed(2);
    ron.value = (fx.convert(parseFloat(eur.value), {from: "EUR", to: "RON"})).toFixed(2);
};

function cadfunc() {
    gbp.value = (fx.convert(parseFloat(cad.value), {from: "CAD", to: "GBP"})).toFixed(2);
    usd.value = (fx.convert(parseFloat(cad.value), {from: "CAD", to: "USD"})).toFixed(2);
    eur.value = (fx.convert(parseFloat(cad.value), {from: "CAD", to: "EUR"})).toFixed(2);
    ron.value = (fx.convert(parseFloat(cad.value), {from: "CAD", to: "RON"})).toFixed(2);
};


function usdfunc() {
    gbp.value = (fx.convert(parseFloat(usd.value), {from: "USD", to: "GBP"})).toFixed(2);
    eur.value = (fx.convert(parseFloat(usd.value), {from: "USD", to: "EUR"})).toFixed(2);
    cad.value = (fx.convert(parseFloat(usd.value), {from: "USD", to: "CAD"})).toFixed(2);
    ron.value = (fx.convert(parseFloat(usd.value), {from: "USD", to: "RON"})).toFixed(2);
};




