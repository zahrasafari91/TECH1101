// testing
console.log("running!");

// Text
const app = document.getElementById("app");
const app2 = document.getElementById("app2");
const app3 = document.getElementById("app3");


// link
const link = document.getElementById("link");
console.log("link:",link);
const href = link.getAttribute("href");
console.log("href",href);

const link2 = document.getElementById("link2");
console.log("link2:",link2);
const href2 = link2.getAttribute("href");
console.log("href",href2);

const link3 = document.getElementById("link3");
console.log("link3:",link3);
const href3 = link3.getAttribute("href");
console.log("href",href3);



app.addEventListener("click", () => {
    app.textContent = "change";
});

app2.addEventListener("click", () => {
    app2.textContent = "change";
});

app3.addEventListener("click", () => {
    app3.textContent = "change";
});

