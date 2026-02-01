
const pdfLib = require('pdf-lib');
const { PDFDocument } = pdfLib;

console.log('PDF-Lib Version:', require('pdf-lib/package.json').version);

async function testProtection() {
    try {
        console.log('Creating dummy PDF...');
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage();
        page.drawText('Test PDF');

        console.log('Keys on pdfDoc:', Object.keys(pdfDoc));
        console.log('Specific prototype keys:', Object.getOwnPropertyNames(Object.getPrototypeOf(pdfDoc)));

        if (typeof pdfDoc.encrypt === 'function') {
            console.log('encrypt function exists on created doc');
        } else {
            console.log('encrypt function DOES NOT EXIST on created doc');
        }

        const pdfBytes = await pdfDoc.save();

        console.log('Loading PDF...');
        const loadedPdf = await PDFDocument.load(pdfBytes);

        if (typeof loadedPdf.encrypt === 'function') {
            console.log('encrypt function exists on loaded doc');
        } else {
            console.log('encrypt function DOES NOT EXIST on loaded doc');
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

testProtection();
