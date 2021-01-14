var easyCards = [
  
   'https://i.imgur.com/lp32Qtc.png',
    'https://i.imgur.com/4W9vHQd.png',
'    https://i.imgur.com/kJN8a32.png',
 '   https://i.imgur.com/TsgyhdH.png',
  ' https://i.imgur.com/aiYhRPc.png',
  '  https://i.imgur.com/tPGmRbG.png',
   
'   https://i.imgur.com/6Ph9xcI.png',
'  https://i.imgur.com/WZsH6mp.png',
    
'https://i.imgur.com/ZGmED3Y.png',
    
  ' https://i.imgur.com/GEKmFtc.png',
 
  ' https://i.imgur.com/mvxNAnq.png',
 '   https://i.imgur.com/pOoVuqE.png',
  '  https://i.imgur.com/Xv494aY.png',
    
  '  https://i.imgur.com/ASwA0ER.png',

    
  '  https://i.imgur.com/GPipCkC.png',
  ' https://i.imgur.com/pU72Rhx.png',
   ' https://i.imgur.com/dSo7UWv.png',
  '  https://i.imgur.com/L1qYAVd.png',
  '  https://i.imgur.com/ivGR6DJ.png',
 '   https://i.imgur.com/FLJ31p1.png',
  ' https://i.imgur.com/hnzpwAk.png',
  '  https://i.imgur.com/Hxvzq5X.png',
  '  https://i.imgur.com/QpsVTOt.png',
 

    ]
var mediumCards = [

   ' https://i.imgur.com/nLrrcCQ.png',
    'https://i.imgur.com/GYZ2uiU.png',
'  https://i.imgur.com/YckoZEf.png',
 '  https://i.imgur.com/wJw3K4i.png',
  '  https://i.imgur.com/Lh6Pfu5.png',
  ' https://i.imgur.com/Bripkqj.png',
   
'   https://i.imgur.com/CzgNbXR.png',
'  https://i.imgur.com/HtrlHDL.png',
    
'https://i.imgur.com/giR11ng.png',
    
  ' https://i.imgur.com/hvPrBhK.png',
 
  ' https://i.imgur.com/arW9q3Y.png',


  
    

    ]
var easyMediumCards = easyCards.concat(mediumCards);
var hardCards = [
  ' https://i.imgur.com/bV4Ce4r.png',
    ' https://i.imgur.com/MSa05BC.png',
    'https://i.imgur.com/OWXGFs3.png',
    ' https://i.imgur.com/W3M6rPU.png',
    'https://i.imgur.com/QdgUvb9.png',
  
    ' https://i.imgur.com/5mBMTWM.png',
    'https://i.imgur.com/wkuAJ3o.png',
  
    ' https://i.imgur.com/Va8AuAk.png',
    ' https://i.imgur.com/4rgZknA.png',
    ' https://i.imgur.com/1ifwdH8.png',
      ' https://i.imgur.com/aI6dI26.png',
      ' https://i.imgur.com/Mp8NEyS.png',
      ' https://i.imgur.com/lQAYTDi.png',
      'https://i.imgur.com/VDUceRZ.png',
      ' https://i.imgur.com/TEPsm2c.png',
      ' https://i.imgur.com/YeFMdIb.png',
      ' https://i.imgur.com/Jxpr1kD.png',
      ' https://i.imgur.com/nmpmxCR.png',
      ' https://i.imgur.com/HzRXktm.png',
  'https://i.imgur.com/sUyZuhv.png'
  
    ]
var easyMediumHard = easyMediumCards.concat(hardCards);
var expertCards = [
    
    ]

window.onload = function () {

    function sliderChange() {
        var slider = document.getElementById('difficulty'),
            easy = document.getElementsByClassName('easy'),
            medium = document.getElementsByClassName('medium'),
            easymedium = document.getElementsByClassName('easymedium'),
            hard = document.getElementsByClassName('hard'),
            easymediumhard = document.getElementsByClassName('easymediumhard'),
            expert = document.getElementsByClassName('expert');
        slider.onchange = function() {
            if (slider.value == '0') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'inline-block';
                    medium[i].style.display = 'none';
                    easymedium[i].style.display = 'none';
                    hard[i].style.display = 'none';
                    easymediumhard[i].style.display = 'none';
                    expert[i].style.display = 'none';   
                }
            }
            else if (slider.value == '1') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'inline-block';
                    easymedium[0].style.display = 'none';
                    hard[i].style.display = 'none';
                    easymediumhard[i].style.display = 'none';
                    expert[i].style.display = 'none';
                }
            }
            else if (slider.value == '2') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'none';
                    easymedium[i].style.display = 'inline-block';
                    hard[i].style.display = 'none';
                    easymediumhard[i].style.display = 'none';
                    expert[i].style.display = 'none';
                }
            }
            else if (slider.value == '3') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'none';
                    easymedium[i].style.display = 'none';
                    hard[i].style.display = 'inline-block';
                    easymediumhard[0].style.display = 'none';
                    expert[i].style.display = 'none';
                }
            }
            else if (slider.value == '4') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'none';
                    easymedium[i].style.display = 'none';
                    hard[i].style.display = 'none';
                    easymediumhard[i].style.display = 'inline-block';
                    expert[i].style.display = 'none';
                }
            }
            else if (slider.value == '5') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'none';
                    easymedium[i].style.display = 'none';
                    hard[i].style.display = 'none';
                    easymediumhard[i].style.display = 'none';
                    expert[i].style.display = 'inline-block';
                }
            }
        }
        slider.defaultValue = '1';
    }
    sliderChange();

    function pullCard() {
        var cardContainer = document.getElementById('card_pull'),
            message = document.getElementById('pull_card'),
            slider = document.getElementById('difficulty'),
            cardImage = document.createElement('img');
        cardContainer.onclick = function () {
            message.style.display = 'none';
            if (slider.value == '0') {
                cardContainer.style.background = '#F36024';
                var number = Math.floor(Math.random()*easyCards.length);
                cardImage.src = easyCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '1') {
                cardContainer.style.background = '#42BFAE';
                var number = Math.floor(Math.random()*mediumCards.length);
                cardImage.src = mediumCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '2') {
                cardContainer.style.background = '#42BFAE';
                var number = Math.floor(Math.random()*easyMediumCards.length);
                cardImage.src = easyMediumCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '3') {
                cardContainer.style.background = '#2861AC';
                var number = Math.floor(Math.random()*hardCards.length);
                cardImage.src = hardCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '4') {
                cardContainer.style.background = '#2861AC';
                var number = Math.floor(Math.random()*easyMediumHard.length);
                cardImage.src = easyMediumHard[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '5') {
                cardContainer.style.background = '#ABC54A';
                var number = Math.floor(Math.random()*expertCards.length);
                cardImage.src = expertCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
        }
    }
    pullCard();

}
