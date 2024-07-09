import { useState } from "react";
import QRCode from "react-qr-code";
const QrCodeGen = () => {
  const [input, setinput] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState("");

  const handleClick = (e) => {
    setQrCodeValue(input);
  };
  return (
    <div className="qr-code-container">
      <div className="heading">QR Code Generator</div>
      <div className="input-conatiner">
        <input
          type="text"
          placeholder="Enter your value..."
          onChange={(e) => setinput(e.target.value)}
        />
        <button disabled={input.trim() === ""} onClick={handleClick}>
          Generate
        </button>
      </div>
      <div className="qr-code-container">
        <QRCode size={256} value={qrCodeValue} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QrCodeGen;
