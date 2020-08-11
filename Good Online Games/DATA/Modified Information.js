var lastmoddate = document.lastModified;

if (lastmoddate == 0) {
    var pageData = "Utoljára módosítva: ismeretlen <BR>&copy; Copyright 2020 Cuczi Tech Good Online Games Corporation";
}

else {
    var PageData ="Utoljára módosítva: " + lastmoddate + "<BR>&copy; Copyright 2020 Cuczi Tech Good Online Games Corporation"; 
}

document.writeln(PageData);