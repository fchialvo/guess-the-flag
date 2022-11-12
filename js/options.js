function update() {
    var select = document.getElementById('language');
    var option = select.options[select.selectedIndex];
    console.log(option.value)
    if(option.value == "es"){
        location.href ="es/opciones.html"
    }
    else{
        location.href = "../options.html"
    }
}

