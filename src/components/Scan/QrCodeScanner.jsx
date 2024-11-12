import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import s from './qrCodeScanner.module.css';
import { SCAN_DATE } from '../../const.js'

export const QrCodeScanner = () => {
   const [scanned, setScanned] = useState(null);

   const onScanNend = (result) => {
      setScanned(result[0].rawValue)

      const prevDate = JSON.parse(localStorage.getItem(SCAN_DATE) || '[]');

      localStorage.setItem(
         SCAN_DATE,
         JSON.stringify([...prevDate, result[0].rawValue]));


   };

   return (
      <div className={s.wrapper}>
         <Scanner
            onScan={onScanNend}
            components={{
               audio: false,
               finder: false,
            }}
            styles={{ container: { width: 200 } }} />
         <p className={s.result}>{scanned}</p>
      </div>
   );
};