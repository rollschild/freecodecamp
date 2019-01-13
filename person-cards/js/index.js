function Person(props) {
  return (
    React.createElement("div", { className: "person" },
      React.createElement("h3", null, props.name)));


}

var app =
React.createElement("div", null,
  React.createElement(Person, { name: "Jovi" }),
  React.createElement(Person, { name: "Eva" }),
  React.createElement(Person, { name: "Julie" }));



ReactDOM.render(app, document.querySelector('#root'));