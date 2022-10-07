let flagNum = document.getElementById("flagNum");
let selectedOption = flagNum.options[flagNum.selectedIndex].value;
localStorage.setItem('flagNum', selectedOption)


flagNum.addEventListener('change',
  function(){
    let selectedOption = this.options[flagNum.selectedIndex].value;
    localStorage.setItem('flagNum', selectedOption)
    selectedOption.se
});
  