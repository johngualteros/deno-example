import { App } from "../src/index.jsx";

ReactDom.hydrate(<App pathname={window.location.pathname}/>, document.getElementById('root'));