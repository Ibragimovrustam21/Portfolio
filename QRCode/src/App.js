import { useEffect, useState } from 'react';
import './App.css';


export const App = () => {
  const [QRCode, setQRCode] = useState('')
  const [temp, setTemp] = useState('')
  const [value, setValue] = useState('')

  useEffect(() => {
    setQRCode(`https://api.qrserver.com/v1/create-qr-code/?data=${value}&size=${""}x${""}`)
  }, [value])

  const keyPress = (e) => { if (e.key === 'Enter') setValue(temp) }

  return (
    <div className="App container">
      <h3 className='text-center text-white'>React QRCode Generator </h3>
      <input
        type='text'
        className='form-control'
        placeholder='QR Code name'
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
        onKeyPress={(e) => keyPress(e)}
      />
      <div className='qrcode_img'>
        {value && <img src={QRCode} alt='qrcode_img' />}
      </div>
      <div className='btn_groups'>
        <button
          className='btn btn-primary'
          type='button'
          onClick={()=>setValue(temp)}
        >
          Generate
        </button>
        <a
          href={QRCode}
          className='text-decoration-none '
          download='QRCode'
          type='button'
        >
          Download
        </a>
      </div>
    </div>
  );
}

