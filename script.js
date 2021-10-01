let btnLancer = document.getElementById("btnLancer");
let listResultats = document.getElementById("listResultats");
let message = document.getElementById("message");
let ul = document.createElement("ul");
let de = document.getElementById("des");

let resultat = "";

btnLancer.addEventListener("click",lancer);

function lancer(){
    resultat = Math.floor((Math.random() * de.value) + 1);
    console.log(resultat);
    console.log(de.value);
    if (resultat == 1) {
        message.innerHTML = " Pas de chance ! Ahahaha !";
    }
    else {
        message.innerHTML = "";
    }

    listResultats.appendChild(ul);

    let face1 = document.createElement("img");
    face1.setAttribute("src","img/img1.PNG");
    let face2 = document.createElement("img");
    face2.setAttribute("src","img/img2.PNG");
    let face3 = document.createElement("img");
    face3.setAttribute("src","img/img3.PNG");
    let face4 = document.createElement("img");
    face4.setAttribute("src","img/img4.PNG");
    let face5 = document.createElement("img");
    face5.setAttribute("src","img/img5.PNG");
    let face6 = document.createElement("img");
    face6.setAttribute("src","img/img6.PNG");
    let face7 = document.createElement("img");
    face7.setAttribute("src","img/img7.PNG");
    let face8 = document.createElement("img");
    face8.setAttribute("src","img/img8.PNG");
    let face9 = document.createElement("img");
    face9.setAttribute("src","img/img9.PNG");
    let face10 = document.createElement("img");
    face10.setAttribute("src","img/img10.PNG");
    let face11 = document.createElement("img");
    face11.setAttribute("src","img/img11.PNG");
    let face12 = document.createElement("img");
    face12.setAttribute("src","img/img12.PNG");
    let newItem = document.createElement("li");

    switch (resultat) {
        case 1:
            resultat = face1;
            newItem.appendChild(resultat);
            break;
        case 2:
            resultat = face2;
            newItem.appendChild(resultat);
            break;
        case 3:
            resultat = face3;
            newItem.appendChild(resultat);
            break;
        case 4:
            resultat = face4;
            newItem.appendChild(resultat);
            break;
        case 5:
            resultat = face5;
            newItem.appendChild(resultat);
            break;
        case 6:
            resultat = face6;
            newItem.appendChild(resultat);
            break;
        case 7:
            resultat = face7;
            newItem.appendChild(resultat);
            break;
        case 8:
            resultat = face8;
            newItem.appendChild(resultat);
            break;
        case 9:
            resultat = face9;
            newItem.appendChild(resultat);
            break;
        case 10:
            resultat = face10;
            newItem.appendChild(resultat);
            break;
        case 11:
            resultat = face11;
            newItem.appendChild(resultat);
            break;
        case 12:
            resultat = face12;
            newItem.appendChild(resultat);
            break;
        default:
            newItem.innerHTML = resultat;
    }

    console.log(resultat);

    
    ul.insertBefore(newItem, ul.childNodes[0]);
}