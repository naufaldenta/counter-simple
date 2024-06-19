let count = 0;

let value = document.querySelector("#value");
let buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        let styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
            value.textContent = count;
        } else if (styles.contains("increase")) {
            count++;
            value.textContent = count;
        } else if (styles.contains("reset")) {
            count = 0;
            value.textContent = count;
        }

        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "#E2BBE9";
        }

    })
});