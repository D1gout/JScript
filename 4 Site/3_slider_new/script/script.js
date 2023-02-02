window.onload = function(e){

    new Slider({
        images: '.gallery-1 .photos img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: false
    });

    new Slider({
        images: '.gallery-2 .photos img',
        btnPrev: '.gallery-2 .buttons .prev',
        btnNext: '.gallery-2 .buttons .next',
        auto: true,
        rate: 300
    });
}

function Slider(param){
    this.images = document.querySelectorAll(param.images);
    this.auto = param.auto;
    var slider = this;

    this.rate = param.rate || 1000;

    this.btnNext = param.btnNext;
    this.btnPrev = param.btnPrev;

    var i = 0;

    this.prev = function(){
        slider.images[i].classList.remove('showed');
        i--;

        if (i < 0) {
            i = slider.images.length - 1;
        }

        slider.images[i].classList.add('showed');
    }

    this.next = function(){
        slider.images[i].classList.remove('showed');
        i++;

        if (i >= slider.images.length) {
            i = 0;
        }

        slider.images[i].classList.add('showed');
    }

    document.querySelector(slider.btnNext).onclick = slider.prev;
    
    document.querySelector(slider.btnPrev).onclick = slider.next;

    if (slider.auto){
        setInterval(slider.next, slider.rate);
    }
}