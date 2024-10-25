function añoPasado() {
    let Efectivo = parseInt(document.getElementById("Efectivo").value);
    let cuentasCobrar = parseInt(document.getElementById("cuentasCobrar").value);
    let Inventarios = parseInt(document.getElementById("Inventarios").value);
    let InversionesC = parseInt(document.getElementById("InversionesC").value);
    let totalCorrientesP = document.getElementById("totalCorrientesP");
    let totalC = Efectivo+cuentasCobrar+Inventarios+InversionesC;
    totalCorrientesP.innerHTML = totalC;

    
    let propiedades = parseInt(document.getElementById("propiedades").value);
    let InversionesL = parseInt(document.getElementById("InversionesL").value);
    let activos = parseInt(document.getElementById("activos").value);
    let Inversionesi = parseInt(document.getElementById("Inversionesi").value);
    let totalNoCorrientesP = document.getElementById("totalNoCorrientesP");
    
    let totalNoC = propiedades+InversionesL+activos+Inversionesi;
        totalNoCorrientesP.innerHTML = totalNoC;

    let total23 = document.getElementById("total23");
    total23.innerHTML = totalC + totalNoC;
}

function esteAño() {
    let Efectivo2 = parseInt(document.getElementById("Efectivo2").value);
    let cuentasCobrar2 = parseInt(document.getElementById("cuentasCobrar2").value);
    let Inventarios2 = parseInt(document.getElementById("Inventarios2").value);
    let InversionesC2 = parseInt(document.getElementById("InversionesC2").value);
    let totalCorrientesE = document.getElementById("totalCorrientesE");
    let totalC2 = Efectivo2+cuentasCobrar2+Inventarios2+InversionesC2;
    totalCorrientesE.innerHTML = totalC2;

    
    let propiedades2 = parseInt(document.getElementById("propiedades2").value);
    let InversionesL2 = parseInt(document.getElementById("InversionesL2").value);
    let activos2 = parseInt(document.getElementById("activos2").value);
    let Inversionesi2 = parseInt(document.getElementById("Inversionesi2").value);
    let totalNoCorrientesE = document.getElementById("totalNoCorrientesE");

    let totalNoC2 = propiedades2+InversionesL2+activos2+Inversionesi2;
        totalNoCorrientesE.innerHTML = totalNoC2;

    let total24 = document.getElementById("total24");
    total24.innerHTML = totalC2 + totalNoC2;
}