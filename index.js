const inputEl = document.getElementById("input_el")
const convertedLengthEl = document.getElementById("converted_length")
const convertedVolumeEl = document.getElementById("converted_volume")
const convertedMassEl = document.getElementById("converted_mass")
const convertBtn = document.getElementById("button")



convertBtn.addEventListener("click", function(valNum) {
    //convertedLengthEl.innerText = `meters = ${meterToFeet(valNum)} feet `
    convertedLengthEl.innerText = `${inputEl.value} meters = ${meterToFeet(valNum)} feet | ${inputEl.value} feet = ${feetToMeter(valNum)} meters`
    convertedVolumeEl.innerText = `${inputEl.value} liters = ${litersToGallons(valNum)} gallons | ${inputEl.value} gallons = ${gallonsToLiters(valNum)} liters`
    convertedMassEl.innerText = `${inputEl.value} kilos = ${kiloToPounds(valNum)} pounds | ${inputEl.value} pounds = ${poundsToKilo(valNum)} kilos`

})

function meterToFeet() {
    return (inputEl.value*3.281).toFixed(3)
}
function feetToMeter() {
    return(inputEl.value/3.281).toFixed(3)
}
function litersToGallons() {
    return (inputEl.value/0.264).toFixed(3)
    
}
function gallonsToLiters() {
    return (inputEl.value*0.264).toFixed(3)
}

function kiloToPounds() {
    return (inputEl.value/2.204).toFixed(3) 
}

function poundsToKilo() {
   return (inputEl.value*2.204).toFixed(3)  
}



