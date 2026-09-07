/*<div id ="parent">
    <div id = "child1">
        <h1>I'm an h1 tag!</h1>
        <h2>I'm an h2 tag!</h2>
    </div>
    <div id = "child2">
        <h1>I'm an h1 tag!</h1>
        <h2>I'm an h2 tag!</h2>
    </div>
</div>*/
// const h1 = React.createElement("h1", {}, "I'm an h1 tag!");

// const child = React.createElement("div", { id: "child" }, h1);

// const parent = React.createElement("div", { id: "parent" }, child);

// Below code is hard to read and understand. So, we can use JSX to make it more readable and understandable. JSX is a syntax extension for JavaScript that looks similar to HTML

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an h1 tag!"),
    React.createElement("h2", {}, "I'm an h2 tag!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag!"),
    React.createElement("h2", {}, "I'm an h2 tag!"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!",
// );

// console.log(heading); // Returns a JS object which is a React element. It is not an HTML element. It is a JS object that describes the HTML element.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // Renders the JS object to the DOM. React takes care of converting the js object to an HTML element and appending it to the DOM.
