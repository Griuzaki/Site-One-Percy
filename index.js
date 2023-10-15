// window.alert("oi")  alertar se o javascript esta funcionando

//OBJETIVO 1  - quando no botão do personagem na lista, marcar o botão como selecionado 
// passo 1 - pegar os botões no js pra poder verificar quando o usúario clicar, em cima de um deles
const mainbuttons = document.querySelectorAll(".second-button");



const characters = document.querySelectorAll(".characters");


mainbuttons.forEach((secondbutton, indice) => {
    secondbutton.addEventListener("click", () => {



        deselectButton();
        DeselectCharacter();


        secondbutton.classList.add("selected");
        characters[indice].classList.add("selected");




    });
});


function DeselectCharacter() {
    const charactersSelected = document.querySelector(".characters.selected");
    charactersSelected.classList.remove("selected");
}

function deselectButton() {
    const secondButtonSelected = document.querySelector(".second-button.selected");
    secondButtonSelected.classList.remove("selected");
}
