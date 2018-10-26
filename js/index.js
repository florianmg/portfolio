$(document).ready(function() {

    /**** SMOOTH SCROLL ****/
    $('.scroll').on('click', function() { // on Click element class scroll
        var page = $(this).attr('href'); // Stock dans la var valleur de l'attribut
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });


   

});

function getAjax() {

    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "projects.json", false);
    //debugger;
    xhttp.send(null);
   
    let results = JSON.parse(xhttp.response)
    
    

    for (let i = 0; i < results.length; i++) {
        let name = results[i].name;
        let languages = results[i].languages;
        let url = results[i].url;
        let description = results[i].description;

        let line = document.createElement("DIV");
        let left = document.createElement("DIV");
        let right = document.createElement("DIV");
        let title = document.createElement("P");
        let lang = document.createElement("P");
        let img = document.createElement("IMG");
        let descr = document.createElement("P");

        title.innerHTML = name;
        lang.innerHTML = languages;
        descr.innerHTML = description;
        img.src = url;

        console.log(url);
        line.classList.add('line');
        left.classList.add('left');
        right.classList.add('right');
     

        if(i%2) {
            line.classList.add('pair');
        }
        left.appendChild(img);
        line.appendChild(left);
        right.appendChild(title);
        right.appendChild(descr);
        right.appendChild(lang);
        line.appendChild(right);
        document.querySelector('.projects').appendChild(line);

    }
}

//getAjax();
