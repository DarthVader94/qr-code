import { GENERATE_DATE } from '../const.js'
import { QRCodeSVG } from 'qrcode.react';
import s from './HistoryScan.module.css';

export const GenerateHistory = () => {
   const date = JSON.parse(localStorage.getItem(GENERATE_DATE) || '[]')
   console.log(date)

   return (
      <div>
         //!Изменения
         {date.map((text) => (
            <p className={s.history__scan} key={text}>{text}
               <QRCodeSVG value={text} size={100} />
            </p>
         ))}
      </div>
   )
}