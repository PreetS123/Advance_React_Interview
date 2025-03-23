import { createRoot } from "react-dom/client";
import "./index.css";



const virtualNode = {
  type: "div",
  props: {
    class: "heading-container",
    children: {
      0: "This is",
      1: {
        type: "h1",
        props: {
          key: "10",
          id: "heading",
          children: "devtools.tech",
        },
      },
      2: {
        type: "h2",
        props: {
          id: "heading",
          children: "is Awesome!!",
        },
      },
      3: {
        type: "input",
        props: {
          type: "text",
          value: "Devtools Tech",
        },
      },
      4: {
        type: "button",
        props: {
          children: "Click",
        },
      },
      5: 0,
      6: {
        props: {
          children: {
            0: {
              type: "div",
              props: {
                children: "React",
              },
            },
            1: {
              type: "div",
              props: {
                children: "Fragment",
              },
            },
          },
        },
      },
      7: "",
    },
  },
};

function renderAndAppend(node, parent) {
  const renderedContent = render(node);
  if (renderedContent) {
    parent.appendChild(renderedContent);
  }
}

function render(node) {
  // do actual heavy lifting here
  // early escape condition
  if (!node) {
    return null;
  }
  if (typeof node !== "object") {
    return document.createTextNode(node.toString());
  }

  // fragment
  if (!node.type && node.props && node.props.children) {
    // handle fragments
    const fragment = document.createDocumentFragment();
    const children = node.props.children || {};

    Object.keys(children).forEach((key) => {
      //{ type:'div',props:{children:'React'}}
      const child = children[key];
      renderAndAppend(child, fragment);
    });
    return fragment;
  }

  // html elements
  //{ type:'div'}
  // <div id="heading"></div>
  const element = document.createElement(node.type);
  const props = node.props || {};

  Object.keys(props).forEach((prop) => {
    // class, id, children
    if (prop === "children") {
      return;
    } else if (prop === "class") {
      // element.className = 'heading-container'
      element.className = props[prop];
    } else {
      // element.setAttribute('id','heading');
      element.setAttribute(prop, props[prop]);
    }
  });

  if (props.children) {
    if (typeof props.children === "object" && !Array.isArray(props.children)) {
      // we will do something
      Object.keys(props.children).forEach((key) => {
        //
        const child = props.children[key];
        renderAndAppend(child, element);
      });
    } else {
      renderAndAppend(props.children, element);
    }
  }

  return element;
}

function renderToDOM(virtualNode, domNode) {
  // vn => actual DOM
  // if falsely value => empty string, 0, null, undefined
  // return null
  // proper html elements
  // with type, props, children
  // typ is missing but we can have props & children
  // primitive string, number
  // textNode
  // recursion here!

  // final root html element
  const renderedContent = render(virtualNode);
  if (renderedContent) {
    domNode.appendChild(renderedContent);
  }
}


// Correct way to call renderToDOM
const rootElement = document.getElementById("root");
createRoot(rootElement); // Just initializes React root but doesn't use it
renderToDOM(virtualNode, rootElement);