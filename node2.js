document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".submit").addEventListener('click', () => {
        alert("Submited Successfully");
    })

    document.querySelector("div.input").addEventListener('click', () => {
        dropdown();
    })

    function dropdown() {
        document.querySelector(".options").classList.toggle("hidden");
    }

    document.querySelector(".sd").addEventListener('click', () => {
        document.querySelector(".answer").innerHTML = "SD Kusuma Bangsa";
        document.querySelector(".options").classList.toggle("hidden");
    })
    document.querySelector(".smp").addEventListener('click', () => {
        document.querySelector(".answer").innerHTML = "SMP Kusuma Bangsa";
        document.querySelector(".options").classList.toggle("hidden");
    })
    document.querySelector(".sma").addEventListener('click', () => {
        document.querySelector(".answer").innerHTML = "SMA Kusuma Bangsa";
        document.querySelector(".options").classList.toggle("hidden");
    })
})