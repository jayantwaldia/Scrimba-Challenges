
let n = 0;

function submitName(e) {
    if (e.code === 'Enter') {
        document.getElementById('submit').click();
    }
}
 
document.getElementById("submit").onclick = function() {
    var n = document.getElementById("num").value;
    document.getElementById("num").innerHTML = n;
    

    let len = n +" meters = " + (n*3.28084).toFixed(3) +" feet | " + n + " feet = " + (n/3.28084).toFixed(3) + " meters";
    document.getElementById("length").textContent = len; 


    let vol = n +" liters = " + (n*0.264172).toFixed(3) +" gallons | " + n + " gallons = " + (n/0.264172).toFixed(3) + " liters";
    document.getElementById("volume").textContent = vol; 


    let mass = n +" kilos = " + (n*2.2).toFixed(3) +" pounds | " + n + " pounds = " + (n/2.2).toFixed(3) + " kilos";
    document.getElementById("mass").textContent = mass;
}


let len = n +" meters = " + (n*3.28084).toFixed(3) +" feet | " + n + " feet = " + (n/3.28084).toFixed(3) + " meters";
document.getElementById("length").textContent = len; 




let mass = n +" kilos = " + (n*2.2).toFixed(3) +" pounds | " + n + " pounds = " + (n/2.2).toFixed(3) + " kilos";
document.getElementById("mass").textContent = mass; 