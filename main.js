function resultado(n) {

    let Efectivo, cuentasCobrar, Inventarios, InversionesC, totalCorrientes, totalC;
    let propiedades, InversionesL, activos, Inversionesi, totalNoCorrientes, totalNoC;
    let total

    if (n === 1) {
    Efectivo = parseInt(document.getElementById("Efectivo").value);
    cuentasCobrar = parseInt(document.getElementById("cuentasCobrar").value);
    Inventarios = parseInt(document.getElementById("Inventarios").value);
    InversionesC = parseInt(document.getElementById("InversionesC").value);
    totalCorrientes = document.getElementById("totalCorrientesP");
    totalC = Efectivo+cuentasCobrar+Inventarios+InversionesC;
    totalCorrientes.innerHTML = totalC;

    propiedades = parseInt(document.getElementById("propiedades").value);
    InversionesL = parseInt(document.getElementById("InversionesL").value);
    activos = parseInt(document.getElementById("activos").value);
    Inversionesi = parseInt(document.getElementById("Inversionesi").value);
    totalNoCorrientes = document.getElementById("totalNoCorrientesP");
    
    totalNoC = propiedades+InversionesL+activos+Inversionesi;
    totalNoCorrientes.innerHTML = totalNoC;

    total = document.getElementById("total23");
    total.innerHTML = totalC + totalNoC;
    } else {
    Efectivo = parseInt(document.getElementById("Efectivo2").value);
    cuentasCobrar = parseInt(document.getElementById("cuentasCobrar2").value);
    Inventarios = parseInt(document.getElementById("Inventarios2").value);
    InversionesC = parseInt(document.getElementById("InversionesC2").value);
    totalCorrientes = document.getElementById("totalCorrientesE");
    totalC = Efectivo+cuentasCobrar+Inventarios+InversionesC;
    totalCorrientes.innerHTML = totalC;

    
    propiedades = parseInt(document.getElementById("propiedades2").value);
    InversionesL = parseInt(document.getElementById("InversionesL2").value);
    activos = parseInt(document.getElementById("activos2").value);
    Inversionesi = parseInt(document.getElementById("Inversionesi2").value);
    totalNoCorrientes = document.getElementById("totalNoCorrientesE");

    totalNoC = propiedades+InversionesL+activos+Inversionesi;
        totalNoCorrientes.innerHTML = totalNoC;

    total = document.getElementById("total24");
    total.innerHTML = totalC + totalNoC;
    }
}
