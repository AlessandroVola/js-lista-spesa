// creo array per lista della spesa
const groceryList = [`Mele`, `Pere`, `Limoni`, `Latte`, `Biscotti`];

// inizializzo la variabile del contatore
let i = 0;

const htmlContainer = document.querySelector(".container");
htmlContainer.innerHTML = ``

// ciclo while
while (i < groceryList.length) {
    console.log(groceryList[i]);
    htmlContainer.innerHTML += `<div> 
                                    ${groceryList[i]}
                                </div>`
    i++; //per incrementare contatore i
}
