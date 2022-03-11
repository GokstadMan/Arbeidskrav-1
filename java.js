// Pseudokode:

// Velkomsthilsen.Info.Alert!
// Hente inn tagger i JS.
// Input: Vennligst skriv inn "vare"
// ((variabel for antall av denne varen blir opprettet - antAvDenneVaren.
// Lage to knapper: [Legg til] og [Slett] for denne varen.
// [Legg til]  --  øker antAvDenneVaren medd 1 ++;
// [Slett]     --  Reduserer antAvDenneVaren med 1 --;
//
// Legge til "ny vare". For hver nye vare: Også [Slett] som sletter hele varen fra liste.
// Legge til - push ny vare i listArray, slette - splice vare fra listArray.
//
// Varen må legges i riktig kategori:
//  if(antAvDenneVaren >3) {Skriv ut liste i listItem1.innerHTML}
//    else if(antAvDenneVaren =1 eller 2 )  {Skriv ut liste i listItem2.innerHTML}
//    else if(antAvDenneVaren) = 0 {Skriv ut liste i listItem3.innerHTML}
//
// Hvis antAvDenneVaren = 0 så input "pris for vare?"
// Pris > 0 og må være et tall.
// Dessuten beregnes totalbeløp = pris*1 for hver vare i denne kategorien.))
//
// Jeg lager en enklere versjon der 3 kategorier lages: Det går ikke på antall og antAvDenneVaren utgår.
// "Varer jeg har nok av","Varer - Snart tom" og "Varer - Må handle"
// Hvis for ex "epler" legges til i en kategori 2 ggr vil varen synes 2 ggr og ikke ved 2-tall foran.
// Jeg tror dette blir enklere å kode!
// Pris og totalbeløp inngår selvsagt kun i kategorien"Varer - Må handles"
// Har ikke lagt supervekt på design da JavaScripten er det viktige.
// Kunne vel muligens satt opp en grid i css men men...

alert(
  "Hei og velkommen til handleliste. Brukeren legger inn en vare. Varen vil havne i en av tre kategorier. Hvis det er tomt for en vare må pris legges inn. Det må skrives tall når pris angis og prisen må være positiv. Lykke til."
);

// making first list - "list-enough"

let listEnough = document.getElementById("list-enough");
let arrayEnough = [];

function addProductEnough() {
  let enoughInput = document.getElementById("enough-input").value;
  arrayEnough.push({
    item: enoughInput,
  });

  listElements();
}

function listElements() {
  listEnough.innerHTML = "";
  for (let i = 0; i < arrayEnough.length; i++) {
    listEnough.innerHTML += `<li>${arrayEnough[i].item} </li>
        <button id="delete-btn" onclick="deleteElement(${i})">Slett</button>`;
  }
}

function deleteElement(i) {
  let answer = prompt("Er du helt sikker? (ja eller nei)");
  if (answer === "ja") {
    arrayEnough.splice(i, 1);
  }
  listElements();
}

// second list - "soon empty" same as above.

let listSoonEmpty = document.getElementById("list-soon-empty");
let arraySoonEmpty = [];

function addProductSoonEmpty() {
  let soonEmptyInput = document.getElementById("soon-empty-input").value;
  arraySoonEmpty.push({
    item: soonEmptyInput,
  });

  listElements2();
}

function listElements2() {
  listSoonEmpty.innerHTML = "";
  for (let i = 0; i < arraySoonEmpty.length; i++) {
    listSoonEmpty.innerHTML += `<li>${arraySoonEmpty[i].item} </li>
        <button id="delete-btn" onclick="deleteElement2(${i})">Slett</button>`;
  }
}

function deleteElement2(i) {
  let answer = prompt("Er du helt sikker? (ja eller nei)");
  if (answer === "ja") {
    arraySoonEmpty.splice(i, 1);
  }
  listElements2();
}

// third and last list - "must-buy"

let listMustBuy = document.getElementById("list-must-buy");
let arrayMustBuy = [];

function addProductMustBuy() {
  let mustBuyInput = document.getElementById("must-buy-input").value;
  let priceInput = document.getElementById("price-input").value;
  let totalSum = document.getElementById("total-sum");

  // test on priceInput:

  if ((isNaN(priceInput) || priceInput <= 0) === true) {
    alert(
      "Vennligst skriv inn prisen påny. Det må være et tall og tallet må være positivt!"
    );
  } else {
    arrayMustBuy.push({
      item: mustBuyInput,
      price: priceInput,
    });

    // make new array, arrayPrices from arrayMustBuy:

    let arrayPrices = arrayMustBuy.map((priceItem) => priceItem.price);
    let added = 0;

    for (let i = 0; i < arrayPrices.length; i++) {
      added += +arrayPrices[i];
      totalSum.innerHTML = `Totalt: ${added} kr`;
    }

    listElements3();
  }
}

function listElements3() {
  listMustBuy.innerHTML = "";
  for (let i = 0; i < arrayMustBuy.length; i++) {
    listMustBuy.innerHTML += `<li>${arrayMustBuy[i].item}, ${arrayMustBuy[i].price} kr
                <button id="delete-btn" onclick="deleteElement3(${i})">SLETT</button>
                </li>
                `;
  }
}

function deleteElement3(i) {
  let answer = prompt("Er du helt sikker? (ja eller nei)");
  if (answer === "ja") {
    arrayMustBuy.splice(i, 1);
  }
  listElements3();
  let totalSum = document.getElementById("total-sum");

  // Total doesn't change when products are erased. Must do following..
  // same block as earlier but with minus now!

  let arrayPrices = arrayMustBuy.map((priceItem) => priceItem.price);
  let added = 0;

  for (let i = 0; i < arrayPrices.length; i++) {
    added -= -arrayPrices[i];
    if (arrayPrices.length <1) {      //working on this one..
      added = 0;
    }
    totalSum.innerHTML = `Totalt: ${added} kr`;
  }
}
