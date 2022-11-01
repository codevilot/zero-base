import { UploadButton } from './UploadButton.js';

export function App() {
  const style = {
    height: '270px',
    width: '129px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };
  return (
    <div style={style}>
      <UploadButton state="upload"></UploadButton>
      <UploadButton state="uploading"></UploadButton>
      <UploadButton state="uploaded">커스텀완료</UploadButton>
      <UploadButton state="failed">커스텀실패</UploadButton>
      <UploadButton state="cantupload"></UploadButton>
    </div>
  );
}
