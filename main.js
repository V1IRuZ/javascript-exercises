// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement("p");
p.classList.add("p");
p.textContent = "Hey I'm red!";
p.style.cssText = "color: red;";

container.appendChild(p);

const h3 = document.createElement("h3");
h3.classList.add("h3");
h3.textContent = "I'm blue h3!";
h3.style.cssText = "color: blue;";

container.appendChild(h3);


const theDiv = document.createElement("div");
theDiv.classList.add("theDiv");
theDiv.style.cssText = "border: 2px solid black; background: pink;";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const p2 = document.createElement("p")
p2.textContent = "ME TOO!";

theDiv.appendChild(h1);
theDiv.appendChild(p2);

container.appendChild(theDiv)


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
