window.onload = function (e){

    var inp1 = document.querySelector('input[name=num1]');
    var inp2 = document.querySelector('input[name=num2]');
    var span = document.querySelector('.res');

    var buttons = document.querySelectorAll('input[type=button]');

    for(var i  = 0; i < buttons.length; i++){
        buttons[i].onclick = function(){
            var op = this.getAttribute('data-op');
            calcForm(op);
        }
    }

    function calcForm(op) {
        var a = parseInt(inp1.value);
        var b = parseInt(inp2.value);
        var res;

        switch(op){
            case '+':
                res = a + b;
                break;
            case '-':
                res = a - b;
                break;
            case '*':
                res = a * b;
                break;
            case '/':
                if (b != 0){
                    res = a / b;
                } else {
                    res = 'На ноль делить нельзя'
                }
                break; 
            default:
                break;
        }

        span.innerHTML = res;
    } 
}
 