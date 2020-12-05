const resourcesJSON = require("../src/resources/all.json");
const puppeteer = require("puppeteer");

const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");

const compressImg = async () => {
  console.log("Compressing images...");
  const files = await imagemin(["../src/assets/screenshots/*.{jpg,png}"], {
    destination: "../src/assets/screenshots",
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  });

  console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
};

const capture = async (resourceUrl, resourceName) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(resourceUrl);
    await page.setViewport({ width: 1024, height: 768 });
    await page.screenshot({
      path: `../src/assets/screenshots/${resourceName}.png`,
    });
    await browser.close();
  } catch (error) {
    console.error(
      `Screenshot fallida nombre: ${resourceName} ## Revisar url: ${resourceUrl}`
    );
    console.error("Continuando con el resto...");
  }
};

async function makeScreenshots(resources) {
  console.log("Creating screenshots...");
  for (let index = 0; index < resources.length; index++) {
    const resource = resources[index];
    await capture(resource.url, resource.name);
  }
  // RESIZE IMG
  await compressImg();
  process.exit();
}
makeScreenshots(resourcesJSON);
