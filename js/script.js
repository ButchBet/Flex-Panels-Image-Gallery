const panels = Array.from(document.getElementsByClassName('panel'));

panels.forEach((panel, index, array) => {
    const classes = `text${panel.classList[1][panel.classList[1].length - 1]}`; // Save the class name to remove the hidden characteristic
    const texts = Array.from(document.getElementsByClassName(classes));

    panel.addEventListener('mouseover', (e) => {
        if(window.outerWidth < 800) {
            panel.style.width = '40%'; // Set the width in the hovered element
            
            
            for(let i = 0; i < array.length; i++) {
                if(i !== index) {
                    array[i].style.width = '15%';
                }
            }
        } else {
            panel.style.height = '40%'; // Set the height in the hovered element
            
            
            for(let i = 0; i < array.length; i++) {
                if(i !== index) {
                    array[i].style.height = '15%';
                }
            }
        }


        texts.forEach((text, index, array) => {
            text.style.display = 'inherit';
        });
    });

    panel.addEventListener('mouseleave', (e) => {
        if(window.outerWidth < 801) {
            for(let i = 0; i < array.length; i++) {
                array[i].style.width = '20%';
            }
        } else {
            for(let i = 0; i < array.length; i++) {
                array[i].style.height = '20%';
            }
        }
        
        texts.forEach((text, index, array) => {
            text.style.display = 'none';
        });
    })
});


window.addEventListener('resize', (e) => {
    if(window.outerWidth < 801) {
        for(let i = 0; i < panels.length; i++) {
            panels[i].style.height = '100%';   
        }
    }
});