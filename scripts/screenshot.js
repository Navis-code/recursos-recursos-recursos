const resourcesJSON = require("../src/resources/all.json");
const puppeteer = require("puppeteer");

const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");
const { statSync, readdirSync, unlink, existsSync, mkdirSync } = require("fs");
const { join } = require("path");

const FOLDER_PATH = "/src/assets/screenshots";
const excludeSH = ["Udemy", "Youtube", "Twitch"];
/*
## Comprueba directorio si existe según FOLDER_PATH
## Si no está lo crea con mkdir
## Irá ejecutando screenshots correspondiente si no da ningún error (revisar url de JSON)
## Realizará la compresión de las imagenes y transforma a .webp
## Borrado de archivos .png
## Finalizará el proceso
*/

const compressImg = async () => {
  console.log("\nCompressing images...");
  const files = await imagemin(["." + FOLDER_PATH + "/*.{jpg,png}"], {
    destination: "." + FOLDER_PATH,
    plugins: [
      imageminWebp({
        quality: 50,
      }),
    ],
  });

  console.log(files);
  console.log("End compressing images");
};

const capture = async ({ name, url }, screenshotsFolder) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1024, height: 768 });
    await page.screenshot({
      path: `${screenshotsFolder}/${name}.png`,
    });
    await browser.close();
  } catch (error) {
    console.error(error);
    console.error(
      `\n ❌ Screenshot fallida nombre: ${name} ## Revisar url: ${url}`
    );
    console.error("Continuando con el resto...");
  }
};

async function makeScreenshots(resources) {
  console.log("Check directory...");
  const screenshotsFolder = join(__dirname, "..", FOLDER_PATH);
  if (!(await folderExists(screenshotsFolder))) {
    mkdirSync(screenshotsFolder, {
      recursive: true,
    });
  }
  console.log("Creating screenshots...");
  for (let index = 0; index < resources.length; index++) {
    const resource = resources[index];
    if (!excludeSH.includes(resource.categoryName)) {
      await capture(resource, screenshotsFolder);
    }
    writeProgressBarOnConsole(index, resources.length);
  }
  // RESIZE IMG
  await compressImg(screenshotsFolder);
  removePngFiles(screenshotsFolder);
  process.exit();
}

function writeProgressBarOnConsole(index, length) {
  const dots = ".".repeat(index);
  const left = length - index;
  const empty = " ".repeat(left);
  process.stdout.write(
    `\r[${dots}${empty}] ${Math.round(((index + 1) * 100) / length)}%`
  );
}

async function folderExists(folder) {
  try {
    statSync(folder);
    return true;
  } catch (err) {
    if (err.code === "ENOENT") return false;
    throw err;
  }
}

function removePngFiles(screenshotsFolder) {
  console.log("Deleting unused assets...");
  const files = readdirSync(screenshotsFolder);
  const filesFiltered = files.filter((file) =>
    file.match(new RegExp(`.*\.png`, "ig"))
  );
  filesFiltered.forEach((file) => {
    if (existsSync(`${screenshotsFolder}/${file}`)) {
      unlink(`${screenshotsFolder}/${file}`, () => {});
    } else {
      console.log("File doesn't exist");
    }
  });
}

makeScreenshots(resourcesJSON);
