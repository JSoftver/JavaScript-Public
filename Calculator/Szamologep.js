function szamolas() {
    var urlap = document.forms['urlap'];
    var kijelzo = urlap.elements['kijelzo'].value != "" ? parseInt(urlap.elements['kijelzo'].value) : 0;
    var kijelzo2 = urlap.elements['kijelzo2'].value != "" ? parseInt(urlap.elements['kijelzo2'].value) : 0;
    var eredmeny = kijelzo + kijelzo2;

    document.getElementById("eredmeny").innerHTML = eredmeny;
  }
