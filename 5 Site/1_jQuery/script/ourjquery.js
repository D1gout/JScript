function $(selector){
    var elements = document.querySelectorAll(selector);
    return new OurJquery(elements);
}

function OurJquery(elements){

    this.elements = elements;

    /**
     * Подвесить любое событие на группу элементов
     * @param {string} eventname Тип события
     * @param {callable} f Функция обработчик
     */
    this.on = function(eventname, f){
        for(var i = 0; i < this.elements.length; i++){
            this.elements[i].addEventListener(eventname, f);
        }

        return this;
    }

    /**
     * Добавить класс группе элементов
     * @param {string} name Имя класса
     */
    this.addClass = function(name){
        for(var i = 0; i < this.elements.length; i++){
            this.elements[i].classList.add(name);
        }

        return this;
    }

    /**
     * Удалить класс группе элементов
     * @param {string} name Имя класса
     */
    this.removeClass = function(name){
        for(var i = 0; i < this.elements.length; i++){
            this.elements[i].classList.remove(name);
        }

        return this;
    }

    this.html = function(html){
        if(typeof(html) === "undefined"){
            return this.elements[0].innerHTML;
        }

        for(var i = 0; i < this.elements.length; i++){
            this.elements[i].innerHTML = html;
        }

        return this;
    }

    this.fade = function(time){
        htmlElem = this;

        var steps = time / 20;
        var op = 1;
        var d0 = op / steps;

        var timer = setInterval(function(){

            op -= d0;
            
            for(var i = 0; i < htmlElem.elements.length; i++){
                htmlElem.elements[i].style.opacity = op;
            }

            steps--;
            
            if (steps <= 0){

                clearInterval(timer)
                
                for(var i = 0; i < htmlElem.elements.length; i++){
                    htmlElem.elements[i].style.display = 'none';
                }
            }
        }, time);

        return this;
    }
}