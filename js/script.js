const panels = Array.from(document.getElementsByClassName('panel'));

panels.forEach((panel, index, array) => {
    const classes = `text${panel.classList[1][panel.classList[1].length - 1]}`; // Save the class name to remove the hidden characteristic
    const texts = Array.from(document.getElementsByClassName(classes));

    panel.addEventListener('mouseover', (e) => {
        panel.style.width = '40%'; // Set the width in the hovered element

        texts.forEach((text, index, array) => {
            text.style.display = 'inherit';
        });

        for(let i = 0; i < array.length; i++) {
            if(i !== index) {
                array[i].style.width = '15%';
            }
        }
    });

    panel.addEventListener('mouseleave', (e) => {
        for(let i = 0; i < array.length; i++) {
            array[i].style.width = '20%';
        }

        texts.forEach((text, index, array) => {
            text.style.display = 'none';
        });
    })
});
