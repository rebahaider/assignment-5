
//     const btn = document.getElementById('A1');
//     btn.addEventListener('click',function () {
//     btn.style.backgroundColor = '#1DD100';
// });

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
            document.getElementById("coupon-feild").setAttribute("class", "visible"); 
            alert("Seat limitation is full fill");
            return;
        };

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
        grandTotalCost("grand-total", parseInt(550));

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
    function grandTotalCost(id, value) {
        const totalCost = document.getElementById(id).innerText;
        const convertedTotalCost = parseInt(totalCost);
        const sum = convertedTotalCost + parseInt(value);
        setInnerText("grand-total", sum);
    }

    function setInnerText(id, value) {
        document.getElementById(id).innerText = value;
    }
}