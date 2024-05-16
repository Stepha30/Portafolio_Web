var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Stephanie Serrano')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Programadora Frontend JR')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>Estudiante!</strong>')
    .pauseFor(2500)
    .start();