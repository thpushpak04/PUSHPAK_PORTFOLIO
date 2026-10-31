const fs = require("fs");
const path = require("path");

const resumeFilename = "Pushpak-Thakur-Resume.pdf";
const resumePath = path.join(__dirname, "assets", resumeFilename);

if (!fs.existsSync(resumePath)) {
  console.error(`Missing assets/${resumeFilename}`);
  process.exit(1);
}

console.log(`Site downloads use assets/${resumeFilename} only.`);
