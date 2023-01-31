window.onload = function(e){

    var slider = new Slider({
        images: '.gallery-1 .photos img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: false
    });

    var slider2 = new Slider({
        images: '.gallery-2 .photos img',
        auto: true
    });
}

function Slider(param){
    this.images = document.querySelectorAll(param.images);
    this.auto = param.auto;
    var slider = this;

    i = 0;

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

    if (param.btnNext != null){
        document.querySelector(param.btnNext).onclick = this.prev;
    }
    else if (param.btnPrev != null){
        document.querySelector(param.btnPrev).onclick = this.next;
    }

    if (this.auto){
        setInterval(this.next, 1000);
    }
}