const { processingData } = require("../entities/filesEntity");

const processingFile = (req, res) => {
  processingData(req).then((response) => {
    const { status, message, data } = response;
    res.status(status).json(data);
  });
};

module.exports = {
  processingFile,
};
