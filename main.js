//shadow host
const divElement = document.createElement("div");

//element yang beada di dalam shadow dom
const headingElement= document.createElement("h1");
headingElement.innerText="ini merupakan konten didalam shadow DOM";

//melampirkan shadow root pada shadow host
//mengatur mode show dengan nilai open
const shadowRoot = divElement.attachShadow({mode: "open"});

//memasukan elemnt heading ke dalam shadow root
shadowRoot.appendChild(headingElement);

//memasukan elemen shadow host ke regular DOM
document.body.appendChild(divElement);
