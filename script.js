const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const envelopeContainer = document.getElementById("envelopeContainer");
const letterSection = document.getElementById("letterSection");
const writeBtn = document.getElementById("writeBtn");
const continueBtn = document.getElementById("continueBtn");
const textElement = document.getElementById("text");
const paper = document.querySelector(".paper");

let music; // 🎵 variable global

const letter = `Marjorie ❤️

A veces pienso en cómo comenzó todo…
y todavía me parece increíble que haya empezado como un simple juego mobile legends.

Un juego que parecía pasajero y muy cansado…
pero terminó convirtiéndose en la historia más hermosa de mi vida.

Recuerdo nuestra primera salida…
cuando te abracé y sentí que algo dentro de mí encontró su lugar.

Nuestro primer beso…
ese instante donde el mundo se detuvo por unos segundos , esos segundos solo senti que te amaba mucho
mas que ayer y mucho mas mañana.

Hemos vivido momentos hermosos,
momentos difíciles,
pero incluso cuando discutimos quiero que sepas que estoy aqui para ti
aunque ahoprita no me hables quiero que sepas que te amo en verdad
por que tu fuiste quien llego a mi vida a cambiarla y darle la felicidad y amor que 
necesitaba, muahhh gracias por ser mi luz y amor puro y sincero,
mi corazón sigue eligiéndote.

Hoy cumplimos 1 año y 11 meses.
No es solo tiempo…
es amor real.

Siempre contigo,
Kevin ❤️ para mi Marjorie`;

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