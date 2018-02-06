
alert("alert!")


var prices = [[1, 2, 3], [2, 2.5, 3], [4, 5, 6], [8, 9, 10]]

var reciept = function () {
    var name = document.querySelector("#name").innerHTML;
    var quantity = document.querySelector("#quantity").innerHTML;
    var type = document.quearySelector("select option:checked").value;
    var size = document.querySelector("input[type=radio]:checked").value;
    

    alert("clicked");
   
}

window.onload = function () {
    document.querySelector("#submit").onclick = reciept;
}

