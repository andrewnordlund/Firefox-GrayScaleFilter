filter = false;
function BWFilter() {
    if (filter == false) { document.body.style.filter = "grayscale(100%)"; filter = true; }
    else { document.body.style.filter = "none"; filter = false; }
} browser.runtime.onConnect.addListener(BWFilter);