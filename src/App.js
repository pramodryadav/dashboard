import { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import CropperDemo from './components/cropper';
import Useref from './components/UseRef';

function App() {



return (
	<div className="App">
		
<CropperDemo/>
<Useref/>
	</div>
);
}

export default App;
