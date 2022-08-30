// creo array per lista della spesa
const groceryList = [`Mele`, `Pere`, `Limoni`, `Latte`, `Biscotti`]

// inizializzo la variabile del contatore
i = 0


// ciclo while
while (i < groceryList.length) {
    console.log(groceryList[i]);
    document.getElementById("elemento-Spesa").innerHTML = (groceryList[i]);
    i++; //per incrementare contatore i
}
