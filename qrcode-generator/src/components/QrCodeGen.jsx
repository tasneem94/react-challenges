import { useState } from "react";
import QRCode from "react-qr-code";
const QrCodeGen = () => {
  const [input, setinput] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState("");

  const handleClick = () => {
    setQrCodeValue(input);
    setinput("");
  };
  return (
    <div className="qr-code-container">
      <div className="heading">QR Code Generator</div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your value..."
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button disabled={input.trim() === ""} onClick={handleClick}>
          Generate
        </button>
      </div>
      <div>
        <QRCode
          className="qr-code"
          size={300}
          value={qrCodeValue}
          bgColor="#fff"
        />
      </div>
    </div>
  );
};

export default QrCodeGen;
