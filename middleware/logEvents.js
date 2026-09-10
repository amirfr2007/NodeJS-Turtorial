const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fsPromises = require("fs").promises;
const fs = require("fs");
const path = require("path");

const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), "yyyy/MM/dd  HH:mm:ss")}`;
  const logItem = `${dateTime}   ${uuid()}   ${message}`;

  try {
    if (!fs.existsSync(path.join(__dirname, "..", "Logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "Logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "..", "Logs", logName),
      logItem + "\n",
    );
  } catch (err) {
    console.error(err);
  }
};

const logger = (req, res, next) => {
  logEvents(`${req.headers.origin}\t${req.method}\t${req.url}`, "reqLog.txt");
  console.log(`${req.method} ${req.path}`);
  next();
};
module.exports = { logEvents, logger };
