let orderButton = document.querySelector("#home button");

orderButton.onclick = function () {
    alert("Thank you for ordering Kumbakonam Degree Coffee! ☕");
};


function orderCoffee(coffeeName) {

    let price;

    if (coffeeName === "Degree Coffee") {
        price = 30;
    }
    else if (coffeeName === "Strong Coffee") {
        price = 40;
    }
    else if (coffeeName === "Special Coffee") {
        price = 50;
    }

    alert(
        "☕ " + coffeeName +
        "\nPrice: ₹" + price +
        "\n\n✅ Your order has been placed successfully!"
    );
}


function showCoffeeDetails() {
    document.getElementById("coffeeDetails").style.display = "block";
}

function hideCoffeeDetails() {
    document.getElementById("coffeeDetails").style.display = "none";
}


function showStrongCoffeeDetails() {
    document.getElementById("strongCoffeeDetails").style.display = "block";
}

function hideStrongCoffeeDetails() {
    document.getElementById("strongCoffeeDetails").style.display = "none";
}


function showSpecialCoffeeDetails() {
    document.getElementById("specialCoffeeDetails").style.display = "block";
}

function hideSpecialCoffeeDetails() {
    document.getElementById("specialCoffeeDetails").style.display = "none";
}
document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all the fields");
        return;
    }

    alert("Message sent successfully! ☕");

    document.getElementById("contactForm").reset();

});