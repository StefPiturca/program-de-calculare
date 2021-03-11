    var a = parseInt(prompt('please enter first number:'));
        var b = prompt('please enter a operator (+-*/%)');
        var c = parseInt(prompt('please enter a second number'));
    
    switch(b) {
        case('+'):
        b=a+c;
        console.log(b);
        break;
        case('-'):
        b=a-c;
        console.log(b);
        break;
        case('*'):
        b=a*c;
        console.log(b);
        break;
        case('/'):
        b=a/c;
   console.log(b);
        break;
        
        
        default:
        console.log("You entered the wrong operator");
    }
    

