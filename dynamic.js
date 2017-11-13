var rowNum = 0;  
var colNum = 0;
 
function createTable() {
       // Create table.

        rowNum = document.getElementById('mpg').value;
        colNum = document.getElementById('price').value;

        if( !isNumeric(rowNum) || !isNumeric(colNum)){
            alert("Please input a postive integer");
            return -1;
        }

        var table = document.createElement('table');
        table.id = "t1";
        for(i = 0; i < rowNum; i++ )
        {
            var row = table.insertRow(i);
            for(j = 0; j < colNum; j++)
            {
                var rowcol = row.insertCell(j);
                var input = document.createElement("INPUT");
                input.type ="text";
                input.id = "r" + (i+1) + "c" + (j+1);
                rowcol.appendChild(input); 
            }
            var mpg = row.insertCell(0);
            mpg.innerHTML = 'MPG ' + (i+1);
        } 

         // Create Headers for Table
         
            var header = table.createTHead();
            var columnHeader = header.insertRow(0);
             for(j = 0; j < colNum ; j++)
            {
                var colHead = columnHeader.insertCell(j);
                colHead.innerHTML = 'Price ' + (j+1);
            }
           var title = columnHeader.insertCell(0);
            title.innerHTML = 'Price/Fuel';    

        var div = document.getElementById('container');
        div.innerHTML = ""; //Empties any previous tables
        div.appendChild(table);
  }

function isNumeric(n) { // Validates helper function
  return (!isNaN(parseFloat(n)) && isFinite(n) && (n > 0));
}


function display(){
            if( validate() ){
            alert("All input was validated!");

            }
            else
            {
                alert("Please input a postive integer");
            }
}

function validate(){

    rowNum = document.getElementById('mpg').value;
    colNum = document.getElementById('price').value;
    for(i = 0 ; i < rowNum ; i++){
        for(j=0; j < colNum; j++){
        var elementName = "r" + (i+1) + "c" + (j+1); 
        var userInput =  document.getElementById(elementName).value;
            if(isNumeric(userInput)){
                console.log(userInput + " was correct input on " + elementName + "\n");
            }
            else
            {
                return false;
            }
        }
    }
    return true;
}

/*
function enterValues(){
        // Create table.
        rowNum = document.getElementById('mpg').value;
        colNum = document.getElementById('price').value;

        if( !isNumeric(rowNum) || !isNumeric(colNum)){ // VALIDATES USER INPUT
            alert("Please input a postive integer");
            return -1;                                 
        }


        var table = document.createElement('table');
        table.id = "t0";
        var row = table.insertRow(0);

            for(j = 0; j < colNum; j++)
            {
                var rowcol = row.insertCell(j);
                var input = document.createElement("INPUT");
                input.type ="text";
                input.id = "price" + (j+1);
                rowcol.appendChild(input); 
            }
        
        var div = document.getElementById('container0');
      //  div.innerHTML = ""; //Empties any previous tables
        div.appendChild(table);

        var col = table.insertRow(0);

            for(j = 0; j < colNum; j++)
            {
                var rowcol = row.insertCell(j);
                var input = document.createElement("INPUT");
                input.type ="text";
                input.id = "price" + (j+1);
                rowcol.appendChild(input); 
            }
        
        var div = document.getElementById('container0');
      //  div.innerHTML = ""; //Empties any previous tables
        div.appendChild(table);

}



*/