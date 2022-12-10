//get
let level = location.search.substring(1)

 //stop button 
 let stop = document.querySelector('.stop')
 stop.addEventListener("click", (e) => {
  let getScore =  Math.floor((matchCount / 16 * 300) + (200 / flipCount * 300) + ((countUp) / (waktuMain * 60 * 0.65) * 400))
  setTimeout(function(){
              
    window.location.replace(`gameover.html?-|-|-|-|${level}`);
  
  },1000)

 })



//CONSTAN
let flipCount = 0
let matchCount = 0
let waktuSelesai = 0
const flags = [
    "assets/flag_png/argentina.png",
    "assets/flag_png/australia.png",
    "assets/flag_png/brazil.png",
    "assets/flag_png/croatia.png",
    "assets/flag_png/england.png",
    "assets/flag_png/france.png",
    "assets/flag_png/germany.png",
    "assets/flag_png/indonesia.png",
    "assets/flag_png/japan.png",
    "assets/flag_png/morocco.png",
    "assets/flag_png/netherlands.png",
    "assets/flag_png/poland.png",
    "assets/flag_png/portugal.png",
    "assets/flag_png/senegal.png",
    "assets/flag_png/sk.png",
    "assets/flag_png/spain.png",
    "assets/flag_png/swiss.png",
    "assets/flag_png/usa.png",
    "assets/flag_png/argentina.png",
    "assets/flag_png/australia.png",
    "assets/flag_png/brazil.png",
    "assets/flag_png/croatia.png",
    "assets/flag_png/england.png",
    "assets/flag_png/france.png",
    "assets/flag_png/germany.png",
    "assets/flag_png/indonesia.png",
    "assets/flag_png/japan.png",
    "assets/flag_png/morocco.png",
    "assets/flag_png/netherlands.png",
    "assets/flag_png/poland.png",
    "assets/flag_png/portugal.png",
    "assets/flag_png/senegal.png",
    "assets/flag_png/sk.png",
    "assets/flag_png/spain.png",
    "assets/flag_png/swiss.png",
    "assets/flag_png/usa.png"
  ];
  
  function shuffle(array) {
    let i = array.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }
  
  let randomFlags = shuffle(flags);
  
  const boxes = document.querySelectorAll(".box");
  
  for (let i = 0; i < boxes.length; i++) {
    const element = boxes[i];
    let qimg = document.createElement("img"); //quest img
    qimg.className = "quest";
    qimg.src = "assets/flag_png/icon_laeeb.png";
  
    let fimg = document.createElement("img"); // flag img
    fimg.className = "flag";
    fimg.src = randomFlags[i];
    fimg.style.display = "none";
  
    element.appendChild(qimg);
    element.appendChild(fimg);
  }
  
  let terbuka = [];
  for (let i = 0; i < boxes.length; i++) {
    const element = boxes[i];
    element.id = 'box'+i
    
  
    element.addEventListener("click", eventFunction = function() {
      
      if(
        element === document.querySelector(`#${terbuka[0]}`) ||
        element.classList.contains('terbuka')
      ) return
      flipSound.play()
      console.log('terklik')
      //menambah flip 
      flipCount++
      terbuka.push(element.id);
      console.log(level)
      
  
      //variable
      let boxSekarang = document.querySelector('#'+terbuka[1])
      let boxTerakhir = document.querySelector('#'+terbuka[0])
      

      function showQuest(el) {
        el.classList.remove("rotate");
        function hide() {
          el.querySelector(".flag").style.display = "none";
        }
        function show() {
          el.querySelector(".quest").style.display = "block";
        }
  
        setTimeout(show, 250);
        setTimeout(hide, 250);
      }
  
      function showFlag(el) {
        el.classList.add("rotate");
        function show() {
          el.querySelector(".flag").style.display = "block";
        }
        function hide() {
          el.querySelector(".quest").style.display = "none";
        }
        setTimeout(show, 250);
        setTimeout(hide, 250);
      }
      
      showFlag(element)
  
      if (terbuka.length > 1) {
        if(boxSekarang.lastChild.src !== boxTerakhir.lastChild.src){
          setTimeout(function(){
            
            showQuest(boxSekarang)
            showQuest(boxTerakhir)
         }, 600);  
        }else{ // MATCH 
          matchCount++
          matchSound.play()
          boxSekarang.classList.add('terbuka')
          boxTerakhir.classList.add('terbuka')
          if(matchCount === 18) {
            // redirect(baseurl+'selesai.html')
            setTimeout(function(){
              
              window.location.replace(`result.html?${flipCount}|${matchCount}|${countUp}|${Math.floor((matchCount / 16 * 300) + (200 / flipCount * 300) + ((countUp) / (waktuMain * 60 * 0.65) * 400))}|${level}`);
            
            },1000)
          }
        }
        terbuka = []
      }  // return apabila yang terbuka sudah 2
      
    });
  }
  
  
  
  
  //TIMER
// hitung timer 
let detik = -1
let menit = 0
if (detik === 60) {
  menit += 1
  detik = 0
}


//TIMER
var d = new Date();
var millisecondssince1970 = d.getTime();
let waktuMain = level
let milisecond = 60100
var newMillisec = millisecondssince1970 + waktuMain * milisecond;

var countDownDate = new Date(newMillisec);

var x = setInterval(function () {
  // counting score n time
  detik++
  countUp++


  var now = new Date().getTime();

  var distance = countDownDate - now;

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

  if (distance < 0) {
    //DIEKSEKUSI SETELAH WAKTU HABIS
    let getScore =  Math.floor((matchCount / 16 * 300) + (200 / flipCount * 300) + ((countUp) / (waktuMain * 60 * 0.65) * 400))
  setTimeout(function(){
              
    window.location.replace(`gameover.html?${flipCount}|${matchCount}|${countUp}|${getScore===Infinity?0:getScore}|${level}`);
  
  },1000)
  }
  // console.log();

 
}, 1000);


//score counter 
let countUp = 0 // menghitung waktu 


let finalscore = (matchCount / 16 * 30) + (100 / flipCount * 30) + ((countUp) / (waktuMain * 60 * 0.65) * 40)
