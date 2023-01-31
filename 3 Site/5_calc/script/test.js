
describe('Test calculator', () => {
    let btnPlus;
    let btnMinus;
    let btnSep;
    let btnMult;

    let inp1;
    let inp2;
    let span;

    beforeEach(() => {
        btnPlus = document.querySelector('input[name=plus]');
        btnMinus = document.querySelector('input[name=minus]');
        btnSep = document.querySelector('input[name=sep]');
        btnMult = document.querySelector('input[name=mult]');

        inp1 = document.querySelector('input[name=num1]');
        inp2 = document.querySelector('input[name=num2]');
        span = document.querySelector('.res');

        inp1.value = 10;  // задаем исходные значения для теста равными 10 у обоих input'ов 
        inp2.value = 5;   // тоже самое для второго input'a  

    });

    it("should return 15 when plus is clicked", () => {   // тестируем +, проверяя, что span принимает значение 15 (10+5)  
        btnPlus.click();   // нажимаем +    

        expect(span.innerHTML).toBe("15");   // проверяем, что span == 15 (10+5)    

    });

    it("should return 5 when minus is clicked", () => {   // то-же самое, что и выше, только -    
        btnMinus.click();      // -    

        expect(span.innerHTML).toBe("5");      // 10-5 == 5    

    });

    it("should return 2 when sep is clicked", () => {      // /    
        btnSep.click();      // /    

        expect(span.innerHTML).toBe("2");      // 10/5 == 2    

    });

    it("should return 50 when mult is clicked", () => {      // *    
        btnMult.click();      // *    

        expect(span.innerHTML).toBe("50");      // 10*5 == 50    

    });  
});