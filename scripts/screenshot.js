const resourcesJSON = require("../src/resources/all.json");
const puppeteer = require("puppeteer");

const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");

const compressImg = async () => {
  console.log("\nCompressing images...");
  const files = await imagemin(["../src/assets/screenshots/*.{jpg,png}"], {
    destination: "../src/assets/screenshots",
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  });

  console.log(files);
};

const capture = async ({ name, url }) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1024, height: 768 });
    await page.screenshot({
      path: `../src/assets/screenshots/${name}.png`,
    });
    await browser.close();
  } catch (error) {
    console.error(
      `\n ❌ Screenshot fallida nombre: ${name} ## Revisar url: ${url}`
    );
    console.error("Continuando con el resto...");
  }
};

async function makeScreenshots(resources) {
  console.log("Creating screenshots...");
  for (let index = 0; index < resources.length; index++) {
    const resource = resources[index];
    await capture(resource);
    writeProgressBarOnConsole(index, resources.length);
  }
  // RESIZE IMG
  await compressImg();
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

makeScreenshots(resourcesJSON);
