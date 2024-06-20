
const allBtn = document.getElementsByClassName("add-btn");

let seatCount = 0;
let seatNumber = 40;

for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {

        seatCount = seatCount + 1;
        seatNumber = seatNumber - 1;

        // seat limitation
        const seatLimit = parseInt(4);
        if (seatLimit - seatCount < 0) {
            alert("Seat limitation is full and you got discount");
            document.getElementById("coupon-feild").setAttribute("class", "visible");
            return;
        };
        const phoneNumber = document.getElementById("phone-number").value;
        const button = document.getElementById("disable-button");
        if (!isNaN(phoneNumber) && phoneNumber.trim() !== '') {
            button.disabled = false;
            button.style.backgroundColor = '#1DD100';
            
        }
        else {
            button.disabled = true;
        }

        const seatName = e.target.innerText;
        const selectedContainer = document.getElementById("selected-seat-container");
        const p = document.createElement("p");
        p.innerText = seatName;
        const p2 = document.createElement("p");
        p2.innerText = "Economy";
        const price = document.createElement("p");
        price.innerText = 550;

        selectedContainer.appendChild(p);
        selectedContainer.appendChild(p2);
        selectedContainer.appendChild(price);

        // total cost calculation
        totalCost("total-price", parseInt(550));

        // grand total calculation
        grandTotalCost();

        // show discount price
        const discountPrice = document.getElementById("discount-price").innerText;

        btn.style.backgroundColor = '#1DD100';
        btn.disabled = true;

        setInnerText("seat-count", seatCount);
        setInnerText("seat-number", seatNumber);

    });

    // total cost calculation
    function totalCost(id, value) {
        const totalCost = document.getElementById(id).innerText;
        const convertedTotalCost = parseInt(totalCost);
        const sum = convertedTotalCost + parseInt(value);
        setInnerText("total-price", sum);
    }
    // grand total calculation
    function grandTotalCost(status) {
        const totalCost = document.getElementById("total-price").innerText;
        if (status == undefined) {
            const convertedTotalCost = parseInt(totalCost)
            setInnerText("grand-total", convertedTotalCost);
        }
        else {
            const couponCode = document.getElementById("coupon").value;
            if (couponCode == "NEW15") {
                const discounted = totalCost * 0.15;
                document.getElementById("grand-total").innerText = totalCost - discounted;
                document.getElementById("discount-price").innerText = totalCost - discounted;
                document.getElementById("coupon-feild").setAttribute("class", "hidden");
            }
            else if (couponCode == "Couple 20") {
                const discounted = totalCost * 0.2;
                document.getElementById("grand-total").innerText = totalCost - discounted;
                document.getElementById("discount-price").innerText = totalCost - discounted;
                document.getElementById("coupon-feild").setAttribute("class", "hidden");
            }
            else {
                alert("Please enter a valid coupon code");
            }
        }


    }

    function setInnerText(id, value) {
        document.getElementById(id).innerText = value;
    }
}