import logo from './logo.svg';
import './App.css';

import { PDFDownloadLink } from '@react-pdf/renderer'
import PDFFile from './components/PDFFile';


function App() {
  return (
    <div className="App">
      <PDFDownloadLink 
        document={<PDFFile/>}
        fileName="FORM">
          {({loading}) => 
            (loading ? (<button>Loading document...</button>) : (<button>Download</button>))
          }
        </PDFDownloadLink>
      {/* <PDFFile/> */}
    </div>
  );
}

export default App;
