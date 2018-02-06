
// array that holds the prices 
var prices = [[1, 2, 3], [2, 2.5, 3], [4, 5, 6], [8, 9, 10]];

var receipt = function () {
    // record all fields in varialbes
    var name = document.querySelector("#name").value;
    var quantity = document.querySelector("#quantity").value;
    var type = document.querySelector("select option:checked").value;
    var size = document.querySelector("input[type=radio]:checked").value;
    var typeString = document.querySelector("select option:checked").innerHTML;
    var sizeString;

    //uses the size value to find a string for the reciept
    if (size == 0)
        sizeString = "small";
    else if (size == 1)
        sizeString = "medium";
    else if (size == 2)
        sizeString = "large";

    //records the date in the birthdate field
    var date1 = moment(document.getElementById("birthdate").value);
    //date for comparison (21 years from date)
    var date2 = moment().subtract(21, 'years');


    //adds html for the receipt 
    var receipt = "<div><h1>Receipt</h1> <br>" +
        name + " ordered " + quantity + " " + sizeString + " " + typeString + " @ " + prices[type][size] + "<br>" +
        "total due: $" + quantity * prices[type][size] + "</div>";

    //if type is coffee or tea prints receipt
    if (type == 0 || type == 1) {
        document.getElementById("ageVerification").style.visibility = "hidden";
        document.querySelector("#receipt").innerHTML = receipt;
    }
    else
        //if beer or wine checks the birthdate is before 21 years
        if (!(date1 < date2) ) {
            document.getElementById("ageVerification").style.visibility = "visible";
            document.querySelector("#receipt").innerHTML = ("Must be born before <br> <h3> " + moment().subtract(21, 'years').calendar() + " </h3>");
        }
        // if older than 21 prints reciept 
        else
            document.querySelector("#receipt").innerHTML = receipt;
        

   
}

//loads submit click button
window.onload = function () {
    document.querySelector("#submit").onclick = receipt;

}


