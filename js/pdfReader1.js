const pdfjsLib = window['pdfjs-dist/build/pdf'];

pdfjsLib.GlobalWorkerOptions.workerSrc = 'path/to/pdf.worker.js';

const loadingTask = pdfjsLib.getDocument('path/to/document.pdf');
loadingTask.promise.then(pdf => {
    console.log('PDF loaded');
    
    // Fetch the first page
    pdf.getPage(1).then(page => {
        console.log('Page loaded');
        
        const scale = 1.5;
        const viewport = page.getViewport({ scale: scale });
        
        // Prepare canvas using PDF page dimensions
        const canvas = document.getElementById('pdf-canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        page.render(renderContext);
    });
}, reason => {
    console.error(reason);
});
