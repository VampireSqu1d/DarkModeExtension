
if (document.querySelector(".popup")) {
    const circle = document.querySelector(".circle");//circle from the toggle button
    const button = document.querySelector(".toggleButton");//div container of the button

    let buttonOn = false;//state variable

    button.addEventListener("click", () => {
        if(!buttonOn) {
            buttonOn = true;
            circle.style.animation = 'moveCircleRight .5s forwards';
            //circle.style.animation = 'transformToYellow .5s forwards';
            button.style.animation = 'transformToBlue .5s forwards';
            console.log('boton encendido');
            chrome.tabs.executeScript({
                file: "appOn.js"
            })

            return;
        }

        buttonOn = false;
        circle.style.animation = 'moveCircleLeft .5s forwards';
        //circle.style.animation = 'transformToBlue .5s forwards';
        button.style.animation = 'transformToYellow .5s forwards';
        console.log('boton apagado');
        chrome.tabs.executeScript({
            file: "appOff.js"
        })
    });

}
