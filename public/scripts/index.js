


const App = (props)=> React.createElement('div', {className : "App"}, ...props.children)

ReactDOM.render(
  React.createElement(React.StrictMode, null, ReactcreateElement(App, {children:headline, reactlogo})),
  document.getElementById('react-root')
)

const ReactDOMRoot = ReactDOM.crateRoot(document.getElementById('react-dom'))

ReactDOMRoot.render(React.createElement(React.StrictMode, null , React.createElement(App, null, )))