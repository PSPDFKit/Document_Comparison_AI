//import "./assets/pspdfkit.js";
//import jimp from './node_modules/jimp';

// We need to inform PSPDFKit where to look for its library assets, i.e. the location of the `pspdfkit-lib` directory.
//const baseUrl = `${window.location.protocol}//${window.location.host}/assets/`;

/*PSPDFKit.load({
	baseUrl,
	container: "#pspdfkit",
	document: "documentLeft.pdf"
})
.then(async instance => {
	console.log("PSPDFKit loaded", instance);

	const pageIndex = 1;
	// Get page width.
	const { width } = instance.pageInfoForIndex(pageIndex);

	// Render page.
	const img1 = await instance.renderPageAsImageURL({ width }, pageIndex);
	const img2 = await instance.renderPageAsImageURL({ width }, pageIndex);
	console.log(img1);

	//const img1 = undefined;//img1Context.getImageData(0, 0, width, height);
	//const img2 = undefined;//img2Context.getImageData(0, 0, width, height);
	//const diff = diffContext.createImageData(width, height);
	const width2 = 0;
	const height = 0;
	



	const BlobToImageData = function(blobUrl){
		//let blobUrl = URL.createObjectURL(blob);
	
		return new Promise((resolve, reject) => {
					let img = new Image();
					img.onload = () => resolve(img);
					img.onerror = err => reject(err);
					img.src = blobUrl;
				}).then(img => {
					URL.revokeObjectURL(blobUrl);
					// Limit to 256x256px while preserving aspect ratio
					let [w,h] = [img.width,img.height]
					let aspectRatio = w/h
					// Say the file is 1920x1080
					// divide max(w,h) by 256 to get factor
					let factor = Math.max(w,h)/256
					w = w/factor
					h = h/factor
	
					// REMINDER
					// 256x256 = 65536 pixels with 4 channels (RGBA) = 262144 data points for each image
					// Data is encoded as Uint8ClampedArray with BYTES_PER_ELEMENT = 1
					// So each images = 262144bytes
					// 1000 images = 260Mb
					let canvas = document.createElement("canvas");
					canvas.width = w;
					canvas.height = h;
					let ctx = canvas.getContext("2d");
					ctx.drawImage(img, 0, 0);
	
					return ctx.getImageData(0, 0, w, h);    // some browsers synchronously decode image here
				})
	}



	
	let resultImageData = await BlobToImageData(img1);
	let resultImageData2 = await BlobToImageData(img2);
	console.log("image data");
	console.log(resultImageData);
	console.log(resultImageData2);

	let jimage1 = await jimp.read(imgUrl);
	console.log("jimage1");
	console.log(jimage1);

	const {width3, height3} = resultImageData;
	var output = new Uint8ClampedArray(resultImageData.width * resultImageData.height * 4);



	pixelmatch(resultImageData.data, resultImageData2.data, resultImageData2.data, width3, height3, {threshold: 0.1});
	console.log(output);

})

.catch(error => {
	console.error(error.message);
});
*/


