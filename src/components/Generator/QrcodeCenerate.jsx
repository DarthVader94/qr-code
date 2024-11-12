import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import s from './qrCode.module.css';
import { GENERATE_DATE } from '../../const.js'

// Создаю функц генератор и экспорт ее
// Экспорт
export const QrCodeGenerate = () => {
   const [value, setValue] = useState('');
   const [result, setresult] = useState('');

   const onClickHand = () => {
      const prevDate = JSON.parse(localStorage.getItem(GENERATE_DATE) || '[]');

      localStorage.setItem(
         GENERATE_DATE,
         JSON.stringify([...prevDate, value]));
      setresult(value);
      setValue('');
   };

   const onChangeHand = (event) => {
      setValue(event.target.value);
      setresult('')
   };


   return (
      <div className={s.wrapper}>
         <input
            placeholder='tray me'
            type="text"
            value={value}
            onChange={onChangeHand}
            className={s.input__result}
         />
         <button
            type='button'
            onClick={onClickHand}
            className={s.btn}>
            click QRcode
         </button>
         {result !== '' && (
            <div className={s.qr__wrapp}>
               <QRCodeSVG value={result} size={180} className={s.qr} />
            </div>
         )}
      </div>

   );
};

