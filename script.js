document.addEventListener("DOMContentLoaded", function(e){
    var table = document.getElementById("table");
   
    var tableLength = table.rows[1].cells.length;

    

function addRow () {
    //insertion d'une line
    var row = table.insertRow();
  
    //insertion des colons vides
    
    for (let i = 0; i < tableLength; i++) {
        var cell = row.insertCell();
        cell.innerHTML = "";
        
    }

  }



  addRow();
  addRow();

});


