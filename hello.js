//alert("hi");
var i;
for (i = 0; i < 10; i += 2) {
    console.log(i);
}

function SayHelloBack() {
    var name = document.getElementById("nameInput").value;
    document.getElementById("output").innerHTML = "Hello to you, " + name + ".";
}

var person = {height: 1.5, name: "donna"};
person.grow = function (amount) { this.height += amount; }

person.grow(0.1);