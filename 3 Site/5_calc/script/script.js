window.onload = function (e){

    var btnPlus = document.querySelector('input[name=plus]');
    var btnMinus = document.querySelector('input[name=minus]');
    var btnSep = document.querySelector('input[name=sep]');
    var btnMult = document.querySelector('input[name=mult]');

    var inp1 = document.querySelector('input[name=num1]');
    var inp2 = document.querySelector('input[name=num2]');
    var span = document.querySelector('.res');
    
    btnPlus.onclick = function(){

        var res = parseInt(inp1.value) + parseInt(inp2.value)

        span.innerHTML = res
    }

    btnMinus.onclick = function(){

        var res = parseInt(inp1.value) - parseInt(inp2.value)

        span.innerHTML = res
    }

    btnSep.onclick = function(){

        var res = parseInt(inp1.value) / parseInt(inp2.value)

        span.innerHTML = res
    }

    btnMult.onclick = function(){

        var res = parseInt(inp1.value) * parseInt(inp2.value)

        span.innerHTML = res
    }
}
 