function displayData(){
    if((document.getElementById("input1").value.length == 0) || (document.getElementById("input2").value.length == 0) ){
        alert("Empty columns are not allowed");
    }
    else{
        createTABLE = document.createElement("table");
        createTABLE.className = "createTABLE"
        document.getElementById("displayTABLE").appendChild(createTABLE);

        createTR = document.createElement("tr");
        createTABLE.appendChild(createTR);

        createTD1 = document.createElement("td");
        createTD1.innerHTML = document.getElementById("input1").value;
        createTR.appendChild(createTD1);

        createTD2 = document.createElement("td");
        createTR.appendChild(createTD2);
        createAnchor = document.createElement("a");
        createAnchor.href = document.getElementById("input2").value;
        createAnchor.innerHTML = "Resume>>";
        createTD2.appendChild(createAnchor);
  
    } 
}