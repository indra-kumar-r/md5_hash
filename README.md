<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MD5 Hash Converter - README</title>
</head>
<body>
    <h1>MD5 Hash Converter</h1>

    <p>A simple web-based tool for converting text input into its MD5 hash equivalent. This project uses <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> (with the help of the CryptoJS library) to generate MD5 hashes.</p>

    <h2>Features</h2>
    <ul>
        <li>Input any text in the text box.</li>
        <li>Click on the "Generate" button to convert the text to its MD5 hash.</li>
        <li>No page reload or refresh required due to the use of JavaScript.</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li><strong>HTML</strong>: Basic structure of the page.</li>
        <li><strong>CSS</strong>: For styling the page.</li>
        <li><strong>JavaScript</strong>: Used to handle form submission, prevent page reload, and generate the MD5 hash.</li>
        <li><strong>CryptoJS</strong>: A JavaScript library to generate the MD5 hash.</li>
    </ul>

    <h2>Live Demo</h2>
    <p>You can try out the tool live here: <a href="#">Insert Live Demo Link here</a></p>

    <h2>Installation</h2>
    <p>To run this project locally, follow these steps:</p>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/yourusername/md5-hash-converter.git</code></pre>
        </li>
        <li>Navigate to the project folder:
            <pre><code>cd md5-hash-converter</code></pre>
        </li>
        <li>Open the <code>index.html</code> file in your browser:
            <pre><code>open index.html</code></pre>
        </li>
    </ol>

    <h2>Usage</h2>
    <ol>
        <li>Enter any text in the input field provided.</li>
        <li>Click on the <strong>Generate</strong> button to see the MD5 hash of the input text below the button.</li>
    </ol>

    <h2>Code Explanation</h2>
    <h3>HTML</h3>
    <p>The HTML structure includes a form for entering text, a button to generate the hash, and a section to display the resulting MD5 hash.</p>

    <h3>JavaScript</h3>
    <p>The script listens for the form submission, prevents the page from refreshing, and then generates the MD5 hash using the CryptoJS library.</p>
    <pre><code>

document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector(".form");
form.addEventListener("submit", function(event) {
event.preventDefault(); // Prevent form submission and page reload
convertToMD5();
});
});

function convertToMD5() {
const inputText = document.getElementById("inputText").value;
const outputHash = document.getElementById("outputHash");

    const hash = CryptoJS.MD5(inputText).toString();
    outputHash.textContent = hash;

}
</code></pre>

    <h3>CSS</h3>
    <p>The CSS file contains basic styling to give the page a clean and modern look.</p>

    <h2>Contributing</h2>
    <p>If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Ensure you follow the coding standards and add tests for any new functionality.</p>

    <h3>Steps to contribute:</h3>
    <ul>
        <li>Fork the repository.</li>
        <li>Create a new branch for your feature or bug fix.</li>
        <li>Commit your changes.</li>
        <li>Push to your forked repository.</li>
        <li>Open a pull request.</li>
    </ul>

    <h2>License</h2>
    <p>This project is open-source and available under the <a href="#">MIT License</a>.</p>

</body>
</html>
