var easyCards = [
  
   'https://i.imgur.com/07sZRlF.png',
   'https://i.imgur.com/W9WZamn.png',
   '    https://i.imgur.com/rUgdvwe.png',
  '  https://i.imgur.com/pbNa4bZ.png',
   ' https://i.imgur.com/tP6376p.png',
 '  https://i.imgur.com/FaVfFja.png',
  
  
  
'   https://i.imgur.com/ctQqcL5.png',
  
  ' https://i.imgur.com/VpnWgmN.png',
  
  
'https://i.imgur.com/L0XVtai.png',
   'https://i.imgur.com/WycyC4v.png',
  '  https://i.imgur.com/CSo47os.png',
  
  
 '  https://i.imgur.com/yiEAcYI.png',
 
  ' https://i.imgur.com/GGoQPiS.png',
  
'  https://i.imgur.com/WzZ4HNP.png',
  
'  https://i.imgur.com/CTOSkpH.png',
  'https://i.imgur.com/ztZsHan.png',
  
  'https://i.imgur.com/kedUrIX.png',
  
  'https://i.imgur.com/4TReYUU.png',
  'https://i.imgur.com/yXUaWNA.png',
  
  'https://i.imgur.com/TIc3hfe.png',
  'https://i.imgur.com/iWnRzlY.png',
  'https://i.imgur.com/BHSsINI.png',
  'https://i.imgur.com/qWkxxpX.png',
  'https://i.imgur.com/onnWfz8.png',
  'https://i.imgur.com/tNfxjGy.png',
  'https://i.imgur.com/BBnJz34.png',
'  https://i.imgur.com/xJhF8j7.png',
  'https://i.imgur.com/Yu7tDIY.png',
  'https://i.imgur.com/W0YjrG1.png',
  
  'https://i.imgur.com/cJpYXpA.png',
  
  'https://i.imgur.com/hYIQmXs.png',
  
  'https://i.imgur.com/plsFp22.png',
  
  'https://i.imgur.com/hwxKHzs.png',

 

    ]
var mediumCards = [

   ' https://i.imgur.com/yiLjHfO.png',
  
  
  'https://i.imgur.com/vPRHF3t.png',
  
  
 ' https://i.imgur.com/BVtmoZo.png',
  
  
 ' https://i.imgur.com/1d2qAhu.png',
  
 ' https://i.imgur.com/9D8A9bU.png',
  
'  https://i.imgur.com/eZlGHOF.png',
  
 ' https://i.imgur.com/v8md1b7.png',
 ' https://i.imgur.com/jzaeB5J.png',
 ' https://i.imgur.com/tlykFZ2.png',
 ' https://i.imgur.com/XrxzayP.png',
  'https://i.imgur.com/jQq3BgR.png',
 
  'https://i.imgur.com/dj7tjg6.png',
  'https://i.imgur.com/D7rXXe1.png',
  'https://i.imgur.com/reQc6hC.png',
  
  'https://i.imgur.com/fVRFfuu.png',
  
  
  
    ]
var easyMediumCards = easyCards.concat(mediumCards);
var hardCards = [
  ' https://i.imgur.com/1uN6FjH.png',
    ' https://i.imgur.com/Cq2qYvW.png',
    'https://i.imgur.com/8hDfEkS.png',
 ' https://i.imgur.com/jJMGEWk.png',
  
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
