// pdfReader! 🪲 Free

// pdfReader

// pdfReader with 


function updateStatus(msg) {
  document.getElementById("fileStatus").textContent = msg;
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
       {
    const rawOut = document.getElementById("devRawOutput");
    rawOut.textContent = rawText;
  }

  // Remove stray UTF-8 junk (Â)
  let cleanText = rawText.replace(/Â/g, "");
  
   }
  return decodedText;
  }
