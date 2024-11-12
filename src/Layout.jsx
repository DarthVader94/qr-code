import { QrCodeGenerate } from './components/Generator/QrcodeCenerate.jsx';
import { QrCodeScanner } from './components/Scan/QrCodeScanner'
import { Navigation } from './components/Navigator/Navigation';
import { Routes, Route } from "react-router-dom";
import { GenerateHistory } from './components/GenerateHistory.jsx';
import { ScanHistory } from './components/ScanHistory.jsx';

export const Layout = () => {
   return (
      <div>
         <Navigation />
         {/*<QrCodeGenerate />*/}
         {/*<QrCodeScanner />*/}
         <Routes>
            <Route path="/generate" element={< QrCodeGenerate />} />
            <Route path="/scan" element={< QrCodeScanner />} />
            <Route path="/generateHistory" element={< GenerateHistory />} />
            <Route path="/scanHistory" element={< ScanHistory />} />
         </Routes>
      </div>
   );
};

