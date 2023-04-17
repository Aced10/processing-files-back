const fs = require("fs");
const formidable = require("formidable");
const {
  vocalsNumber,
  consonantNumber,
  numberOfCaracters,
  numberOfSpaces,
  mostRepeatedWord,
} = require("../helpers/textFunctions");

const processingData = async (req, callback) => {
  const form = new formidable.IncomingForm();
  return new Promise((resolve, reject) => {
    form.parse(req, (error, fields, files) => {
      if (error)
        resolve({
          status: 500,
          message: "Error in file processing!",
          data: [],
        });
      const arrayKeys = Object.keys(files);
      const filesResult = [];
      for (const key of arrayKeys) {
        const file = files[key];
        if (!isFileValid(file.mimetype)) continue;
        try {
          const data = readTextFile(file.filepath);
          filesResult.push({
            tittle: file.originalFilename,
            content: data,
            vocalsNumber: vocalsNumber(data),
            consonantNumber: consonantNumber(data),
            numberOfCaracters: numberOfCaracters(data),
            numberOfSpaces: numberOfSpaces(data),
            mostRepeatedWord: mostRepeatedWord(data),
          });
        } catch (err) {
          resolve({
            status: 500,
            message: "Error reading file!",
            data: [],
          });
        }
      }
      resolve({
        status: 200,
        message: "Document processing success!",
        data: filesResult,
      });
    });
  });
};

const readTextFile = (filePath) => {
  return fs.readFileSync(filePath, "utf8", (err, data) => {
    if (err) return new Error("Error reading file!");
    return data;
  });
};

const isFileValid = (file) => {
  const type = file.split("/").pop();
  const validTypes = ["plain"];
  return validTypes.includes(type);
};

module.exports = {
  processingData,
};
