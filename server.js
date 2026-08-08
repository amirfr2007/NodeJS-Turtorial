const fs = require("fs").promises;
const path = require("path");

const Ops = async () => {
  await fs.writeFile(
    path.join(__dirname, "files", "data.txt"),
    "Hello my name is amir",
  );
  await fs.readFile(
    path.join(__dirname, "files", "data.txt"),
    "utf8",
    (err, data) => {
      if (err) throw err;
      console.log(data);
    },
  );
};

Ops();
