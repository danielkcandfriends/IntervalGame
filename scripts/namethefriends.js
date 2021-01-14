var easyCards = [
  
   'https://i.imgur.com/9jpYDwf.png',
   'https://i.imgur.com/uFVMVYV.png',
  '    https://i.imgur.com/7nYiraY.png',
  '  https://i.imgur.com/0pgE9Lr.png',
   ' https://i.imgur.com/E8fynDA.png',
  '  https://i.imgur.com/SlBAOey.png',
'   https://i.imgur.com/9YOGLvZ.png',
  ' https://i.imgur.com/TmpDjZU.png',
' https://i.imgur.com/FQdNUDS.png',
 'https://i.imgur.com/w62v9w5.png',
'  https://i.imgur.com/1HcZTNO.png',
 '  https://i.imgur.com/cCHgtmp.png',
  '  https://i.imgur.com/r1lohfw.png',
  
  

    
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

   ' https://i.imgur.com/gdJWYOm.png',
  'https://i.imgur.com/6eddGUm.png',
 '  https://i.imgur.com/8V0Kilb.png',
 ' https://i.imgur.com/NwzfL34.png',
  
  
  
  '  https://i.imgur.com/T4AGclt.png',
  
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
