import puppeteer from 'puppeteer';

/* export async function ProductName(){
  const element = await page.waitForSelector('.showcase>.short-showcase-description>.short-description>h1');
  console.log(element)
} */

export default async function Scrap() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.netshoes.com.br/camisa-internacional-iii-2223-sn-torcedor-adidas-masculina-preto-FB8-0611-006');
  // seletor css para o nome do produto: .showcase>.short-showcase-description>.short-description>h1
  // seletor css para lista de imagens do produto (li dentro de ul): .photo>.thumbs>.swiper-container-vertical>.swiper-wrapper
  // Set screen size
  await page.setViewport({ width: 1024, height: 1024 });

  const elementos = await page.evaluate(() => {
    // /html/body/main/div[2]/section/section[2]/div[3]/div[2]/div/span[1]/strong
    return [document.querySelector('.price').textContent,document.querySelector('.separator.features>p').textContent,document.querySelector('.showcase>.short-showcase-description>.short-description>h1').textContent]
  });
/*   const element = await page.waitForSelector('.showcase>.short-showcase-description>.short-description>h1');
  console.log(element) */
  // Agora, 'elementos' conterá o texto de todos os elementos com a classe 'default-price'
  console.log(elementos);
  //default-price

  // Type into search box
  //await page.type('.search-box__input', 'automate beyond recorder');

  // Wait and click on first result
  //const searchResultSelector = '.search-box__link';
  //await page.waitForSelector(searchResultSelector);
  //await page.click(searchResultSelector);

  // Locate the full title with a unique string
  //const textSelector = await page.waitForSelector(
  //  'text/Customize and automate'
  //);
  //const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // Print the full title
  //console.log('The title of this blog post is "%s".', fullTitle);

  await browser.close();
}

Scrap()