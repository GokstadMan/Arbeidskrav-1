// Pseudokode:

// Velkomsthilsen.Info.Alert!
// Hente inn tagger i JS.
// Input: Vennligst skriv inn "vare"
// variabel for antall av denne varen blir opprettet - antAvDenneVaren.
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
// Dessuten beregnes totalbeløp = pris*1 for hver vare i denne kategorien.
//
// Funksjoner: addElement, deleteElement, listElement, calculatePriceAndTotalAmount, findItemCategory
//
//

alert(
  "Hei og velkommen til handleliste. Brukeren legger inn en vare. Varen vil havne i en av tre kategorier,avhengig av antall. Se nedenfor! Hvis det er tomt for en vare må pris legges inn. Det må skrives tall når pris angis og prisen må være positiv. Lykke til."
);

let listItem = document.getElementById("list-item");
let listItem1 = document.getElementById("list-item-1");
let listItem2 = document.getElementById("list-item-2");
let listItem3 = document.getElementById("list-item-3");
let toDoContainer = document.getElementById("todo-container");

var listArray = [];

function addElement() {
  let inputText = document.getElementById("input-text").value;
  listArray.push({
    name: inputText,
  });

  listElements();
}

function listElements() {
  listItem2.innerHTML = "";
  for (let i = 0; i < listArray.length; i++) {
    listItem2.innerHTML += `<li><h4>${listArray[i].name} ${i + 1} stk</h4>
        <button id="delete-btn" onclick="deleteElement(${i})">Slett</button> 
        <button id="btn" onclick="addElement(${i})">Legg til</button></li>`;
  }
}

function deleteElement(i) {
  let answer = prompt("Er du helt sikker? (ja eller nei)");
  if (answer === "ja") {
    listArray.splice(i, 1);
  }
  listElements();
}
