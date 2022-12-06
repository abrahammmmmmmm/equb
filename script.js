function onFormSubmit(){
    if(validate()) {
        var formData = readFormData();
        insertNewRecord(formData);
        resetForm();
    }
}


function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["amount"] = document.getElementById("amount").value;

    return formData;
}


function insertNewRecord(data){
    var table = document.getElementById("display").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.amount;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = '<button onClick="onDelete(this)">Delete</button>';

}

function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
}

function onDelete(td){
    if (confirm('You tripping ma boy..deletin records n shi..you sure you wanna do this?')){
        row = td.parentElement.parentElement;
        document.getElementById("display").deleteRow(row.rowIndex);
        resetForm();
    }
}
  
function validate(){
    isValid = true;
    if (document.getElementById("name").value == ""){
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");


    } else {
        isValid = true;
        if(!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
}


var names = [];

(function(){
    
    document.getElementById("entry").addEventListener('click', function() {
        names.push(document.getElementById("name").value);
  
        
    });
})();

function rand(){
let random = Math.floor(Math.random()*(names.length));
document.getElementById("random-name").innerHTML=names[(random)];

}

