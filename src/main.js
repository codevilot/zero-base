import UploadButton from './components/UploadButton.js';

const root = document.getElementById('root');

const ReactDOMRoot = ReactDOM.createRoot(root);

ReactDOMRoot.render(
  <React.StrictMode>
    <UploadButton status="idle" />
    <UploadButton status="pending" />
    <UploadButton status="resolved" />
    <UploadButton status="rejected" />
    <UploadButton status="disabled" />
  </React.StrictMode>
);
