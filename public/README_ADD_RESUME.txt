Place the actual PDF resume file here so the site's download link works.

Steps (Windows PowerShell):
1. Copy the file from Downloads to the project public folder:
   cp "C:\Users\Nikhil Tiwari\Downloads\Nikhil_Tiwari_Resume_26-8-2026.pdf" public\Nikhil_Tiwari_Resume_26-8-2026.pdf

2. Verify the file exists:
   ls public\Nikhil_Tiwari_Resume_26-8-2026.pdf

After placing the file, refresh the dev server at http://localhost:3000 and the Download Resume link will serve the PDF.
