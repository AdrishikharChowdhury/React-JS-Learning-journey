console.log(React);
console.log(ReactDOM);

let h1=React.createElement('h1',null,"Hello form React");
let parent=document.querySelector("#root");
let root=ReactDOM.createRoot(parent);
root.render(h1);605262