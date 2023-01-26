window.onload = function (e){

    var a = ['a', 'b', 'c'];

    for(var i = 0; i < a.length; i++){
        console.log(a[i])
    }

    var b = {
        russia: 'Moscow',
        usa: 'Vashington',
        knr: 'Beijing'
    };

    for(var key in b){
        console.log(b[key])
    }

}
 