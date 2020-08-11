function PageChanger(page) {
    document.location = page;
    document.NavForm.PullDown.options[0].selected = true;
}

var platform = navigator.platform.substr(0,3);

if ((platform == 'Android') && (platform == 'iOs')) {
    document.write("Sajnáljuk, az oldal telefonokon még nem érhető el!")
} 

