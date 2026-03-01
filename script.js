const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const envelopeContainer = document.getElementById("envelopeContainer");
const letterSection = document.getElementById("letterSection");
const writeBtn = document.getElementById("writeBtn");
const continueBtn = document.getElementById("continueBtn");
const textElement = document.getElementById("text");
const paper = document.querySelector(".paper");

let music; // 🎵 variable global

const letter = `A veces pienso en cómo comenzó todo…
y todavía me parece increíble que haya empezado como un simple juego: Mobile Legends: Bang Bang.

Un juego que parecía pasajero y muy cansado…
pero terminó convirtiéndose en la historia más hermosa de mi vida.

Quién diría que entre partidas, risas, derrotas y victorias,
iba a aparecer la persona que cambiaría mi mundo por completo.
Lo que empezó con conversaciones pequeñas,
con mensajes simples,
con momentos que parecían normales…
se fue transformando en algo que jamás imaginé sentir.

Recuerdo nuestra primera salida…
cuando te abracé y sentí que algo dentro de mí encontró su lugar.
Como si mi corazón supiera que ahí era,
que ese era su hogar.

Nuestro primer beso…
ese instante donde el mundo se detuvo por unos segundos.
Y en esos segundos solo sentí que te amaba mucho…
más que ayer y mucho más mañana.
Fue un momento tan pequeño en el tiempo,
pero tan eterno en mi memoria.

Recuerdo también nuestras risas sin razón,
las llamadas largas,
los mensajes que empezaban con un “hola”
y terminaban siendo conversaciones infinitas.
Cada detalle contigo se volvió especial,
cada recuerdo contigo tiene un brillo distinto.

Hemos vivido momentos hermosos,
momentos difíciles,
momentos donde todo parecía perfecto
y otros donde tuvimos que aprender a entendernos mejor.
Pero incluso cuando discutimos,
incluso cuando el orgullo quiere hablar más fuerte,
quiero que sepas que estoy aquí para ti.

Aunque ahorita no me hables,
aunque haya silencio,
quiero que sepas que te amo en verdad.
Mi amor por ti no desaparece por una discusión,
no se apaga por un mal momento.
Al contrario, me recuerda cuánto me importas.

Porque tú fuiste quien llegó a mi vida a cambiarla,
a darle la felicidad y el amor que necesitaba.
Llegaste cuando tal vez no sabía cuánto necesitaba amar así.
Y me enseñaste que el amor no es perfecto,
pero cuando es real, se siente diferente.

Gracias por ser mi luz,
por ser mi paz en días difíciles,
por abrazarme cuando más lo necesitaba,
por creer en mí incluso cuando yo dudaba.

Contigo aprendí que el amor no es solo palabras bonitas,
es elegir quedarse,
es elegir intentarlo,
es elegir a la misma persona una y otra vez.

Hoy cumplimos 1 año y 11 meses.
No es solo tiempo…
es amor real.
Es crecimiento.
Es historia.
Es promesas silenciosas.
Es un “aquí sigo” incluso cuando las cosas no son fáciles.

Y si pudiera volver atrás,
volvería a jugar ese día,
volvería a enviarte ese mensaje,
volvería a elegirte.

Porque mi corazón sigue eligiéndote.
Hoy.
Mañana.
Y siempre.

Siempre contigo,
Kevin ❤️
para mi Marjorie 💫`;

let index = 0;

// 💌 ABRIR SOBRE + INICIAR MÚSICA
openBtn.onclick = () => {

  // 🎵 iniciar música suave
  music = new Audio("music.mp3");
  music.volume = 0;
  music.play();

  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.4) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);

  envelope.classList.add("open");

  setTimeout(()=>{
    envelopeContainer.style.display="none";
    letterSection.style.display="flex";
  },600);
};

function typeWriter(){
  if(index < letter.length){
    textElement.innerHTML += letter.charAt(index);
    index++;
    paper.scrollTop = paper.scrollHeight;
    setTimeout(typeWriter,35);
  }
}

writeBtn.onclick = () => {
  typeWriter();
};

continueBtn.onclick = () => {

  letterSection.style.display = "none";

  const container = document.createElement("div");
  container.id = "heartCanvas";
  document.body.appendChild(container);

  const width = window.innerWidth;
  const height = window.innerHeight;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = Math.min(width, height) / 40;

  // 🌌 Estrellas
  for(let i=0;i<120;i++){
    const star=document.createElement("div");
    star.classList.add("star");
    star.style.left=Math.random()*width+"px";
    star.style.top=Math.random()*height+"px";
    star.style.animationDelay=Math.random()*2+"s";
    container.appendChild(star);
  }

  const totalPixels=1000;
  const pixels=[];

  for(let i=0;i<totalPixels;i++){
    const pixel=document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.left=Math.random()*width+"px";
    pixel.style.top=Math.random()*height+"px";
    container.appendChild(pixel);
    pixels.push(pixel);
  }

  setTimeout(()=>{
    pixels.forEach((pixel,i)=>{
      const t=(i/totalPixels)*Math.PI*2;
      const x=16*Math.pow(Math.sin(t),3);
      const y=-(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t));
      pixel.style.left=centerX+x*scale+"px";
      pixel.style.top=centerY+y*scale+"px";
    });
  },300);

  setTimeout(()=>{
    const names=document.createElement("div");
    names.classList.add("heartNames");
    names.innerText="Kevin ❤️ Marjorie";
    container.appendChild(names);
    setTimeout(()=>{ names.style.opacity="1"; },500);
  },2000);

  // 💕 Corazones flotando
  setInterval(()=>{
    const heart=document.createElement("div");
    heart.classList.add("floatingHeart");
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*width+"px";
    heart.style.fontSize=(Math.random()*20+15)+"px";
    container.appendChild(heart);
    setTimeout(()=>{ heart.remove(); },6000);
  },500);

};