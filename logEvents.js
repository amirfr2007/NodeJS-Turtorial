const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fsPromises = require("fs").promises;
const fs = require("fs");
const path = require("path");

const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), "yyyy/MM/dd  HH:mm:ss")}`;
  const logItem = `${dateTime}   ${uuid()}   ${message}`;
  console.log(logItem);

  try {
    if (!fs.existsSync(path.join(__dirname, "Logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "Logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "Logs", logName),
      logItem + "\n",
    );
  } catch (err) {
    console.error(err);
  }
};
module.exports = logEvents;
