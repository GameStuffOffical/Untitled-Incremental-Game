var clicks = 0

function clickButton() {
    clicks += 1
    document.getElementById("clicks").textContent =  "Clicks: " + clicks
}