const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    const copyOfCats = [...cats, "Broom"];
    return copyOfCats;
}

function prependCat(){
    const newCats = ["Arnold", ...cats];
    return newCats;
}

function removeLastCat(){
    const lessLastCat = cats.slice(0, -1);
    return lessLastCat;
}

function removeFirstCat(){
    const lessFirstCat = cats.slice(1);
    return lessFirstCat;
}