# Responsive Design



El Responsive Design son técnicas que se utilizan para adaptar las aplicaciones web a la mayor cantidad de pantallas.



**Patrones en Responsive Design**

Desde mediados del año 2011 se comenzó a aplicar el diseño responsivo, Luke Wroblewski fue quien identifico los patrones comunes en el Responsive Design.

* Mostly Fluid.
* Colocación de columnas.
* Layout Shifter.
* Tiny tweaks.
* Off canvas.



**Ver patrones:**

* https://mediaqueri.es



**Conceptos**

* **Viewport**: es el área visible del navegador.
* **Portrait:** dispositivo en modo vertical (Smartphone)
* **Landscape:** dispositivo en modo horizontal (PC & Smartphone)



Los proyectos pueden comenzar orientados a menor resolución(Desktop First) o a la mayor(Mobile First). Técnicamente hablando es mejor comenzar un desarrollo desde el principio orientado a desarrollo móvil.



**Proyecto Base:**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Leonidas Esteban</title>
    <link rel="icon" type="image/png" href="images/favicon.png" />
    <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Source+Sans+Pro" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body>
    
    <header class="header">
      <div class="container">
        <figure class="logo">
          <img src="images/logo.png" height="50" alt="Logo de http://leonidasesteban.com" />
        </figure>
        <nav class="menu">
          <ol>
            <li>
              <a class="link" href="#projects">Portafolio</a>
            </li>
            <li>
              <a class="link" href="#eventos">Experiencia</a>
            </li>
            <li>
              <a class="link" href="#contacto">Trabajemos juntos</a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
    
    <section class="hero">
      <div class="container">
        <h1>
          Hola! Soy <strong>Leonidas Esteban</strong> <br/> Desarrollador  <strong>Javascript</strong> con <br> pasión por la <strong>enseñanza</strong>
        </h1>
        <img class="hero-image" src="images/hero.jpg" width="500" height="300" alt="imagen principal del sitio"> 
      </div>
    </section>
    
    <section id="projects" class="projects">
      <div class="container">
        <h2>Portafolio (Proyectos Destacados)</h2>
      <article class="project">
        <div class="project-details">
          <h3 class="project-title">Platzi Video</h3>
          <h6 class="project-course">React Native / React</h6>
          <p class="project-date"><small><strong>Fecha:</strong> 01/07/2018</small></p>
          <p class="project-url"><small><strong>Puedes verlo en:</strong> www.platzi.com/native</small></p>
          <p class="project-description">Platzi Video fue el resultado de 3 meses de trabajo
              para crear la mejor app para enseñar el funcionamiento
              de React y React Native. Desde crear un vista-detalle, hasta patrones avanzados de nevegación, este proyecto ha sido el ejemplo de futuros creadores de aplicaciones multiplataforma</p>
        </div>
        <figure class="project-imageContainer">
          <img class="project-image" width="500" src="images/platzi-video-react-native.png" alt="prouyecto del curso de React Native">
        </figure>
      </article>
      
      <article class="project">
          <div class="project-details">
            <h3 class="project-title">Platzi Video</h3>
            <h6 class="project-course">React Native / React</h6>
            <p class="project-date"><small><strong>Fecha:</strong> 01/07/2018</small></p>
            <p class="project-url"><small><strong>Puedes verlo en:</strong> www.platzi.com/native</small></p>
            <p class="project-description">Platzi Video fue el resultado de 3 meses de trabajo
                para crear la mejor app para enseñar el funcionamiento
                de React y React Native. Desde crear un vista-detalle, hasta patrones avanzados de nevegación, este proyecto ha sido el ejemplo de futuros creadores de aplicaciones multiplataforma</p>
          </div>
          <figure class="project-imageContainer">
            <img class="project-image" width="500" src="images/platzi-video-react-native.png" alt="prouyecto del curso de React Native">
          </figure>
        </article>
      </div> 
    </section>
    
    <div class="container">
      <h2 class="event-list-title">Más sobre mi experiencia</h2>
    </div>
    
    <section id="eventos" class="event-list">
      <div class="container">
        
        <article class="event">
          <figure class="event-imageContainer">
            <img class="event-image" src="images/platzi-conf.jpg" width="500" />
          </figure>
          <div class="event-detail">
            <h3 class="event-title">PlatziConf México 2018</h3>
            <p class="event-description">El evento más grande sobre gente que quiere aprender más de internet. En esté evento te comparto como tener una vida de constante aprendizaje.</p>
            <a class="event-url" href="https://www.youtube.com/watch?v=BIS7cWGgJg0" target="_blank">Ver Plática</a>
          </div>
        </article>
        
        <article class="event">
          <figure class="event-imageContainer">
            <img class="event-image" src="images/platzi-conf.jpg" width="500" />
          </figure>
          <div class="event-detail">
            <h3 class="event-title">PlatziConf México 2018</h3>
            <p class="event-description">El evento más grande sobre gente que quiere aprender más de internet. En esté evento te comparto como tener una vida de constante aprendizaje.</p>
            <a class="event-url" href="https://www.youtube.com/watch?v=BIS7cWGgJg0" target="_blank">Ver Plática</a>
          </div>
        </article>
        
        <article class="event">
          <figure class="event-imageContainer">
            <img class="event-image" src="images/platzi-conf.jpg" width="500" />
          </figure>
          <div class="event-detail">
            <h3 class="event-title">PlatziConf México 2018</h3>
            <p class="event-description">El evento más grande sobre gente que quiere aprender más de internet. En esté evento te comparto como tener una vida de constante aprendizaje.</p>
            <a class="event-url" href="https://www.youtube.com/watch?v=BIS7cWGgJg0" target="_blank">Ver Plática</a>
          </div>
        </article>
        
        <article class="event">
          <figure class="event-imageContainer">
            <img class="event-image" src="images/platzi-conf.jpg" width="500" />
          </figure>
          <div class="event-detail">
            <h3 class="event-title">PlatziConf México 2018</h3>
            <p class="event-description">El evento más grande sobre gente que quiere aprender más de internet. En esté evento te comparto como tener una vida de constante aprendizaje.</p>
            <a class="event-url" href="https://www.youtube.com/watch?v=BIS7cWGgJg0" target="_blank">Ver Plática</a>
          </div>
        </article>
      </div>
    </section>
    
    <section id="contacto" class="contact">
      <div class="container">
        <form action="/suscripcion/" class="form-email">
          <h3>¿Creamos algo juntos?</h3>
          <input type="text" placeholder="Déjame tu email" id="email">
          <button>Enviar</button>
        </form>
        <div class="social">
          <a href="https://twitter.com/leonidasesteban" class="social-link twitter"></a>
          <a href="https://facebook.com/leonidas.esteban" class="social-link facebook"></a>
          <a href="https://github.com/leonidasesteban" class="social-link github"></a>
          <a href="https://instagram.com/leonidasesteban" class="social-link instagram"></a>
        </div>
      </div>
    </section>
    
    <footer class="footer">
      <div class="container">
        <div>
          <p>Curso de Desarrollo web online 2018 <img src="images/platzi.png" width="80" alt="platzi"></p>
        </div>
        <div>
          <p>
            Designed with <\3 by <a href="https://twitter.com/thespianartist">@thespianartist</a>
          </p>
        </div>
      </div>
    </footer>
  
  </body>
</html>
```

```css
body {
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
}

h1, h2, h3, h4, h5, h6{
  font-family: 'Fjalla One', sans-serif;
  font-weight: normal;
}
h1 {
  font-size: 40px;
  line-height: 1.5;
  letter-spacing: -.2px;
  color: white;
  margin: 0;

}
h1 strong {
  color: #026fff;
}
h2 {
  color: #026fff;
  text-transform: uppercase;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 40px;
}
ol,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

figure {
  margin: 0;
}

.container {
  width: 1000px;
  margin: 0 auto;
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  height: inherit;
  flex-wrap: inherit;
}


/* HEADER */
.header {
  background-color: #1b2127;
  color: white;
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-between;
}
.header a {
  color: white;
  text-decoration: none;
}
.menu {
  height: inherit;
}
.header ol {
  display: flex;
  height: inherit;
}
.header ol li {
  height: inherit;
}
.header a {
  display: flex;
  align-items: center;
  height: inherit;
  padding: 0 10px;
}

/* HERO */
.hero {
  height: 300px;
  background-color: #1b2127;
  display: flex;
  align-items: center;
  justify-content: space-between;

}
.hero-image{
  object-fit: cover;
}


/* Projects */
.projects {
  background: #fafafa;
  padding: 20px;
}
.project {
  border: 1px solid gray;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 20px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.project-course,
.project-date,
.project-url {
  margin: 10px 0;
}
.project-description {
  font-size: 20px;
}
.project strong {
  font-family: 'Fjalla One', sans-serif;
}
.project-title {
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 10px;
}
.project-details {
  width: 500px;
}
.project-imageContainer {
  width: 500px;
}


/* EVENT */
.event-list {
  display: flex;
  flex-wrap: wrap;
}
.event-list-title {
  margin-left: 20px;
}
.event { 
  margin: 10px;
  width: 480px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  background: #f4fbff;
}
.event img {
  width: 480px;
  height: 200px;
  object-fit: cover;
}
.event-detail {
  margin: 20px 40px;
  margin-top: -40px;
  background-color: white;
  position: relative;
  padding: 20px;
  text-align: center;
}
.event-description {
  text-align: left;
}
.event-url {
  color: #056fff;
  border: 1px solid;
  padding: 5px 20px;
  text-decoration: none;
  border-radius: 5px;
}


/* CONTACT */
.contact {
  background-color: #056fff;
  color: white;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.social-link {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 0 10px;
  background-size: 50px 50px;
}
.social-link.twitter {
  background-image: url('../images/twitter.svg');
}
.social-link.facebook {
  background-image: url('../images/facebook.svg');
}
.social-link.github {
  background-image: url('../images/github.svg');
}
.social-link.instagram {
  background-image: url('../images/instagram.svg');
}
.form-email input {
  border-color: gray;
  border-style: solid;
  border-radius: 5px;
  padding: 10px 20px 10px 25px;
  background-image: url('../images/envelope.svg');
  background-size: 15px 15px;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 5px;
}
.form-email button {
  display: block;
  background: transparent;
  color: white;
  padding: 10px 0;
  border-radius: 5px;
  width: 100px;
  margin-top: 10px;
}
.form-email h3 { 
  font-family: 'Source Sans Pro', sans-serif;
}


/* FOOTER */
.footer {
  color: white;
  background-color: #1b2127;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer img {
  vertical-align: middle;
}
.footer a {
  color: white;
}
```



**Meta Viewport**

Para definir de mejor manera el tamaño del contenido utilizamos la siguiente etiqueta `<meta name="viewport" content="width=device-width">`.

Modificamos también la escala inicial en la que se inicia a ver la página para que sea visible únicamente el área definida del tamaño de la pantalla `<meta name="viewport" content="width=device-width, initial-scale=1">`



**Medidas relativas útiles**

* **Porcentaje(%):** se aplica en base a la longitud referente a los elementos padre.
* **em:** unidad relativa al tamaño de fuente del padre.
* **rem:** unidad relativa al tamaño de fuente de root. 
* **View Width-View-Heigh(vw/vh):** unidad relativa porcentual respecto al viewport.

 

### Media Queries

Es un modulo que permite adaptar la representación del contenido de acuerdo al tamaño del contenido.

**Ejemplos**

```css
@media screen and (max-width: 768px){

}
```

> Todas las pantallas con un ancho inferior o igual a 768px cumplen la condición.



```css
@media screen and (max-width: 768px) and (min-width: 480px;){

}
```

> Todas las pantallas con un ancho de 480px hasta 768px cumplen esta condición.



**Mobile First**

```css
@media screen and (min-width: 320px){}
@media screen and (min-width: 480px){}
@media screen and (min-width: 768px){}
@media screen and (min-width: 1024px){}
```



**Desktop First**

```css
@media screen and (max-width: 1024px){}
@media screen and (max-width: 768px){}
@media screen and (max-width: 480px){}
@media screen and (max-width: 320px){}
```



**Incluir Media Queries**

```css
@media screen and (max-width: 1024px){
  body{
    border: 10px solid red;
  }
}

@media screen and (max-width: 768px){
  body{
    border: 10px solid green;
  }
}

@media screen and (max-width: 480px){
  body{
    border: 10px solid blue;
  }
}

@media screen and (max-width: 320px){
  body{
    border: 10px solid yellow;
  }
}
```

> En el archivo CSS del proyecto para un sitio que comenzó siendo para escritorio y ahora será móvil utilizaremos las siguientes media querys. 



**Diseño elástico con max-with y flex-wrap**

Para evitar que los elementos generen un scroll horizontal utilizamos la propiedad `flex-wrap: wrap;` en los elementos que padezcan este problema.

```css
.container{
	max-width: 1000px; /* Modificamos el tamaño fijo a uno maximo */
    padding: 0 1em; /* Añadimos espacio lateral */
}

.header{
	flex-wrap: wrap;
}
.hero{
    flex-wrap: wrap;
}
.project{
    flex-wrap: wrap;
}
.contact{
    flex-wrap: wrap;
}
.footer{
 	flex-wrap: wrap;   
}
```



### Ajustes



**Ajustar Header**

Para trabajar cada elemento por separado, procedemos a comentar el resto del sitio a excepción de la sección que vamos a trabajar.

```css
.container{
	max-width: 1000px;
	/* width: 100%; */
	flex: 1; /* Toma todo el ancho disponible, lo utilizamos para que no se centren los elementos en el header al reducir el tamaño de la pantalla*/
}

@media screen and (max-width: 768px){
    .header{
        display: block; /* Ponemos debajo la lista de elementos */
        height: auto; /* Eliminamos el alto definido */
  }
    .header a{
		justify-content: center; /* Centramos los links */
    }
    .header ol{
        display: initial; /* Ponemos la lista vertical */
    }
    .header ol li{
        height: 50px; /* Definimos el alto de los links */
    }
    .header .logo{
        text-align: center; /* Centramos el logo */
    }
}
```



**Ajustar Projects**

```css
.project-details {
  width: 50%; /* Volvemos relativo el tamaño */
}
.project-imageContainer {
  width: 50%;
}
.project-imageContainer img{
  max-width: 100%; /* Volvemos la imagen responsiva */
}
@media screen and (max-width: 768px){
  .project{
    display: block; /* Ponemos los elementos debajo */
  }
  .project-imageContainer{
    width: auto; /* Utilizamos todo el tamaño disponible */
    text-align: center; /* Centramos la imagen */
  }
  .project-details{
    width: auto; /* Utilizamos todo el tamaño disponible */
    font-size: 16px; /* Definimos fuente del padre */
  }
  .project-course, .project-date, .project-url{
    margin: .3em 0;
  }
  .project-title{
    font-size: 1.5em; /* Definimos fuente de hijos */
    margin-bottom: .3em;
  }
  .project-url{
    font-size: 1em;
  }
  .project-course{
    font-size: 1.2em;
  }
  .project-date{
    font-size: 1em;
  }
  .project-description{
    font-size: .8em;
  }
}
@media screen and (max-width: 480px){
  .project-details{
    font-size: 12px; /* Reducimos los tamaños padre */
  }
}

@media screen and (max-width: 320px){
  .project-details{
    font-size: 10px; /* Reducimos los tamaños padre */
  }
}
```



**Ajustar Eventos**

```css
.event{
  margin: 1%; /* Definimos el espacio para dos cards */
  width: 48%;
}

@media screen and (max-width: 768px){
  .event{
    width: auto; /* Utilizamos todo el espacio */
    flex-shrink: initial; /* eliminamos el scroll horizontal */
  }
  .event img{
    width: 100%; /* Definimos todo el espacio para la imagen */
  }
}

@media screen and (max-width: 480px){
  .event-detail{
    margin: -2em .5em .5em; /* Definimos el margen y el padding */
    padding: 1em;
  }
}
```



**Ajustar contacto y footer**

```css
@media screen and (max-width: 480px){
  .contact{
    height: auto; /* Ajustamos el alto segun el contenido */
    padding: 1em 0; /* Añadimos padding */
    display: block; /* Ponemos los elementos debajo */
    text-align: center; /* Centramos el contenido */
  }
  .form-email button{
    margin: 1em auto; /* Centramos el botón*/
  }
  .form-email h3{
    margin-top: 0; /* Eliminamos el margen superior */
  }


  .footer{
    display: block; /* Ponemos debajo */
    text-align: center; /* Centramos */
    border: 1px solid transparent; /* Solucionamos el colapso */
  }
}
```



**Ajustar sección principal**

```css
@media screen and (max-width: 1024px){
  .hero{
    height: auto;
    position: relative;
    overflow: hidden;
  }
  .hero-image{
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom:0;
    width: 100%;
  }
  h1{
    font-size: 2em;
    z-index: 2;
  }
}

@media screen and (max-width: 320px){
  h1{
    font-size: 1.2em;
    background-color: rgba(0, 0, 0, .5);
  }

  .hero{
    padding: 2em 1em;
  }
}
```



**Video local responsivo**

Añadimos video de la siguiente forma en HTML:

```html
<video class="html-video" src="./media/video.mp4" width="1280" height="720" controls></video>
```

Volver video responsive con CSS:

```css
.html-video{
	width: 100%;
    height: auto;
}
```



**Video insertado responsivo**

```html
<iframe class="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/ti8p-Ec89u4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

Volver video responsive con CSS:

```css
.flex-video{ /* Contenedor del video responsivo */
	widht: 100%;
	height: 0;
	padding-top: 56.25%; /* Video horizontal responsive | Alto * 100 / ancho | 315 * 100 / 560 */
	background: blue;
	position: relative;
}

.youtube-video{
	width: 100%;
	height: auto;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	widht: 100%;
	heiht: 100%;
    z-index: 3;
}
```



**Menú hamburguesa**

Con la página https://icomoon.io/ descargamos un icono de menú, añadimos su selector CSS y guardamos sus archivos de fuente. 

Para utilizar iconos utilizamos la etiqueta `<i>` y le asociamos una clase que será manejada por un paquete de iconos.



```css
.burger-button{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, .8);
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 4;
  left: 5px;
  top: 5px;
  color: white;
}

@media screen and (max-width: 768px){
  .burger-button{
    display: flex;
  }
}
```



```css
@media screen and (max-width: 768px){
    .header a{
        height: 40px;
        font-size: 2em;
        text-decoration: underline;
        margin-bottom: .5em;
    }

    .menu{
        position: fixed;
        background: rgba(5, 111, 255, .9);
        z-index: 3;
        top: 0;
        left: -100vw;
        bottom: 0;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .3s;
    }
    .menu.is-active{
        left: 0;
    }
}
```



### JavaScript



**Activar y desactivar menu**

```js
const menu = document.querySelector('.menu') /* Manipulamos el selector */
const burgerButton = document.querySelector('.burger-button')

function toggleMenu(){ /* función para activar y desactivar acción del menu */
    if(menu.classList.contains('is-active')){
        menu.classList.remove('is-active')
    }
    else{
        menu.classList.add('is-active')
    }
}

burgerButton.addEventListener('click', toggleMenu)/* Al hacer click ejecutamos la función */
```



**Activar el evento solo en pantallas pequeñas**

```javascript
const ipad = window.matchMedia('screen and (max-width: 767px)')
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('.burger-button');
ipad.addListener(validation)

function validation(event) {
if (event.matches) {
    burgerButton.addEventListener('click', hideShow)
} else {
    burgerButton.removeEventListener('click', hideShow)
}
}
validation(ipad);

function hideShow() {
if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
} else {
    menu.classList.add('is-active');
}
}
```



**Servidor de archivos estáticos con NODE**

Depurar en un PC es distinto a hacerlo en un dispositivo móvil, para interactuar de primera mano con el rendimiento del teléfono disponemos del remote debugging.

Para ello debemos tener un servidor de archivos estáticos, existen muchas formas, para ello requerimos un servidor de Backend en este caso node.js



**Instalamos static-server**

* https://www.npmjs.com/package/static-server

```bash
npm -g install static-server # Instalar static server

static-server # Iniciar static server
```

> Para ver el servidor de forma remota utilizamos: IP_SERVIDOR:"9080"



**Hacer debugging en Android**

En el navegador introducimos la ruta:

* chrome://inspect

y con el teléfono conectado y depurado seleccionamos inspeccionar.