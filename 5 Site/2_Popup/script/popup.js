function Popup(){
    var num = 1
    try {

        var j = document.querySelector('.popup').getAttribute('data-num');

      } catch (err) {
        var j = 0
      }

    if (parseInt(j) != 0){
        num += 1;
    }

    var str = `
    <div class="pop">
        <div class="container">
            Нажми сюда
        </div>
        <div class="popup" data-num="${num}">
            <div class="popup-content">
                Привет
            </div>
        </div>
    </div>`
    
    document.querySelector('body').innerHTML += str;

    popItem = document.querySelector('.popup');

    console.log(popItem)

    document.querySelector('.container').onclick = function(){
        popItem.classList.toggle('on');
    }

    document.querySelector('.popup').onclick = function(){
        popItem.classList.toggle('on');
    }

    document.querySelector('.popup .popup-content').onclick = function(){
        popItem.classList.toggle('on');
    }

    this.open = function(text){
        document.querySelector('.popup .popup-content').innerHTML = text;

        popItem.classList.toggle('on');

        return this;
    }

    this.close = function(){

        popItem.classList.toggle('on');

        return this;
    }
}