
// pdfReader.js
// Clean, simple PDF loader with DEV MODE output

const DEV_MODE = "raw";  // turn off later when finished

function updateStatus(msg) {
  document.getElementById("pdfStatus").textContent = msg;
}

// Load PDF and return full extracted text
export async function loadPDF(file) {
  const pdf = await pdfjsLib.getDocument({ url: URL.createObjectURL(file) }).promise;
  let fullText = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map(item => item.str);
    fullText += strings.join("\n") + "\n";
  }
  return fullText;
}

// Main reader function your button will call
export async function readPDFAndDecode(file) {
  const rawText = await loadPDF(file);

  // DEV MODE: show raw text panel
  if (DEV_MODE === "raw") {
    const rawOut = document.getElementById("devRawOutput");
    if (rawOut) rawOut.textContent = rawText;
  }
  return rawText;
}

  
