

for( var teller = 1  ; teller <= 20  ; teller++) {
    console.log(teller);
    document.getElementById("resultaat").innerHTML += "<h6>" + teller + "</h6>";
    console.log(teller % 2);

    if(teller % 2 == 0) {
        document.getElementById("resultaat").innerHTML += "<h6>" + teller + "<h6>";
    }
    else{
        console.log(teller);
    }


}