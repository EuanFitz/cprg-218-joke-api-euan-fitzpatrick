jokedisplay.textContent = "Select a joke!";
funnypic.src = "images/egglaugh.jpg";

fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
.then(response => response.json())
.then(data => {
    joketype.textContent = 'Random joke of the day';
    if(data.joke){
        jokedisplay.textContent = data.joke;
    }else{
        jokedisplay.textContent = data.setup + "... " + data.delivery;
    }
});

fetch("https://v2.jokeapi.dev/joke/programming?safe-mode")
.then(response => response.json())
.then(data => {
    programming.addEventListener('click', function(){
        joketype.textContent = 'A Random Programming Joke';
        jokedisplay.style.backgroundColor = 'purple';
        funnypic.src = "images/beardguylaugh.jpg";
    jokedisplay.style.color = 'white';
        if(data.joke){
            jokedisplay.textContent = data.joke;
        }else{
            jokedisplay.textContent = data.setup + "... " + data.delivery;
        }})
    });

fetch("https://v2.jokeapi.dev/joke/pun?safe-mode")
.then(response => response.json())
.then(data => {
    pun.addEventListener('click', function(){
        joketype.textContent = 'A Random Pun'
        jokedisplay.style.backgroundColor = 'red';
        funnypic.src = "images/pugredbackground.jpg";
    jokedisplay.style.color = 'black';
        if(data.joke){
            jokedisplay.textContent = data.joke;
        }else{
            jokedisplay.textContent = data.setup + "... " + data.delivery;
        }})
    });

fetch("https://v2.jokeapi.dev/joke/misc?safe-mode")
.then(response => response.json())
.then(data => {
    misc.addEventListener('click', function(){
        joketype.textContent = 'A Random Miscellaneous Joke';
        jokedisplay.style.backgroundColor = 'white';
        funnypic.src = "images/cowtongue.jpg";
    jokedisplay.style.color = 'black';
        if(data.joke){
            jokedisplay.textContent = data.joke;
        }else{
            jokedisplay.textContent = data.setup + "... " + data.delivery;
        }})
    });

fetch("https://v2.jokeapi.dev/joke/spooky?safe-mode")
.then(response => response.json())
.then(data => {
   spooky.addEventListener('click', function(){
    jokedisplay.style.backgroundColor = 'black';
    jokedisplay.style.color = 'white';
    joketype.textContent = 'A Random Spooky joke';
    funnypic.src = "images/skeletonlaugh.jpg";
        if(data.joke){
            jokedisplay.textContent = data.joke;
        }else{
            jokedisplay.textContent = data.setup + "... " + data.delivery;
        }})
    });

fetch("https://v2.jokeapi.dev/joke/Christmas?safe-mode")
.then(response => response.json())
.then(data => {
    christmas.addEventListener('click', function(){
        joketype.textContent = 'A Random Christmas Joke';
        jokedisplay.style.backgroundColor = 'green';
        jokedisplay.style.color = 'white';
        funnypic.src = "images/santaclause.jpg";
        if(data.joke){
            jokedisplay.textContent = data.joke;
        }else{
            jokedisplay.textContent = data.setup + "... " + data.delivery;
        }})
    });

    openmodal.addEventListener('click', function(){
        modal.showModal();
    });
    closemodal.addEventListener('click', function(){
        modal.close();
    });