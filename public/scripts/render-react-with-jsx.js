import { Headline } from './scripts/components/Headline.js';
import { ReactLogo } from './scripts/components/ReactLogo.js';

const container = document.getElementById('react-root');
const ReactDomRoot = ReactDOM.createRoot(container);

ReactDomRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
