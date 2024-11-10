function generateMD5Hash() {
    const form = document.querySelector(".form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        showOutputSection();
    });
}

function convertToMD5() {
    const inputText = document.getElementById("inputText").value;
    const outputHash = document.getElementById("outputHash");

    const hash = CryptoJS.MD5(inputText).toString();
    outputHash.textContent = hash;
}

function copyToClipboard() {
    console.log(123);
    const outputHash = document.getElementById("outputHash");
    if (outputHash.textContent) {
        navigator.clipboard.writeText(outputHash.textContent);
    }
}

function showOutputSection() {
    const outputSection = document.querySelector(".output");
    if (outputSection.textContent) {
        outputSection.style.display = "flex";
    }

    showTooltip();
}

function showTooltip() {
    console.log(123);
    const outputSection = document.querySelector(".output");
    const clickToCopy = document.querySelector(".clickToCopy");
    const copiedToClipboard = document.querySelector(".copiedToClipboard");

    outputSection.addEventListener("mouseenter", () => {
        clickToCopy.style.display = "flex";
    });

    outputSection.addEventListener("mouseleave", () => {
        clickToCopy.style.display = "none";
    });

    outputSection.addEventListener("click", () => {
        clickToCopy.style.display = "none";
        copiedToClipboard.style.display = "flex";

        setTimeout(() => {
            copiedToClipboard.style.display = "none";
        }, 1000);
    });
}

generateMD5Hash();
