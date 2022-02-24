function enterTask(){
    inpVal = document.getElementById("tasks").value;
    if(inpVal.length == 0)
        alert("Error:: Enter something!");

    else{
        // Create div container
        var creDiv = document.createElement("div");
        creDiv.className = "flexProperty";
        document.getElementById("taskItems").appendChild(creDiv);

        // Strike Paragraph
        var crePara = document.createElement("p");
        crePara.innerHTML = inpVal;
        creDiv.appendChild(crePara);
        var cutPara = document.getElementsByTagName("p");
        for(var i=0;i<cutPara.length;i++){
            cutPara[i].onclick = function(){
                var parentTarget = this.parentElement;
                // strike the paragraph using CSS property text decoration
                parentTarget.children[0].style.textDecoration = "line-through";
            }
        }

        // Delete button
        var creButton = document.createElement("button");
        creButton.innerHTML = "Del";
        creDiv.appendChild(creButton);
        var closeButton = document.getElementsByTagName("button");
        for(var i=0;i<closeButton.length;i++){
            closeButton[i].onclick = function(){
                // Hiding the div container using display property
                this.parentElement.style.display = "none";
            }
        }
    }
    
}