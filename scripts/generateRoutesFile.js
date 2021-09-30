const resourcesJSON = require("../src/resources/all.json");
const fs = require("fs");
const writeStream = fs.createWriteStream("pre-render-routes.txt");
const pathName = writeStream.path;

const categoriesRaw = resourcesJSON.map((category) => category.categoryName);
const categories = [...new Set(categoriesRaw)];
const categoriesFormated = categories.map(
  (category) => `category/` + category.toLowerCase()
);

writeStream.write(`/\n`);
categoriesFormated.forEach((category) => writeStream.write(`${category}\n`));

writeStream.on("finish", () => {
  console.log(`wrote all the array data to file ${pathName}`);
});

writeStream.on("error", (err) => {
  console.error(`There is an error writing the file ${pathName} => ${err}`);
});

writeStream.end();
