//Sum of 5 numbers given by user
function fnSum(){
    let a,b,c,d,e;
    let input1 = document.getElementById("input1").value;
    if(!isNaN(input1) && input1 != ''){
         a = Number(input1);
       }else{
        a = 0;
    }
    
    let input2 = document.getElementById("input2").value;
    if(!isNaN(input2) && input2 != ''){
        b = Number(input2);
      }else{
       b = 0;
   }
    let input3 = document.getElementById("input3").value;
    if(!isNaN(input3) && input3 != ''){
        c = Number(input3);
       }else{
       c = 0;
   }
    let input4 = document.getElementById("input4").value;
    if(!isNaN(input4) && input4 != ''){
        d = Number(input4);
     }else{
       d = 0;
   }
    let input5 = document.getElementById("input5").value;
    if(!isNaN(input5) && input5 != ''){
        e = Number(input5);
       }else{
        e = 0;
    }

    let result = a + b + c + d+ e;
    document.getElementById("ans").value = result;
}

function printStar(){
    const range = prompt("Please enter the pattern Range", "3");
    let n;
    if(!isNaN(range) && range != ''){
        n = Number(range);
        let pat = "";
        for (let i = 1; i <= range; i++) {
            for (let j = 0; j < i; j++) {
                 pat += "*";
            }
          pat += "\n";
        }   
        document.getElementById("pattern").innerText = pat;
     }else{
        document.getElementById("pattern").innerText = "Please enter a nunmber to get the pattern";
     }
}

function largestOne(){
    let a,b,c,ans = 0;
    let largest1 = document.getElementById("largest1").value;
    let largest2 = document.getElementById("largest2").value;
    let largest3 = document.getElementById("largest3").value;
    if(!isNaN(largest1) && !isNaN(largest2) && !isNaN(largest3) && largest1 != '' && largest2 != '' && largest3 != ''){
         a = Number(largest1);
         b = Number(largest2);
         c = Number(largest3);
         if(a >= b && a >= c) {
            ans = a;
        }
        else if (b >= a && b >= c) {
            ans = b;
        }
        else {
            ans = c;
        }
        
    }else{
        a = b = c = 0;
    }
    document.getElementById("largest").value = ans;
}

function printCapital(){
    let name = prompt("Please enter your Name", "ex. Krish");
    if(name != ''){
         name = name.toUpperCase();
         document.getElementById("printCap").innerText = name;
    }else{
        document.getElementById("printCap").innerText = "Please enter your name";
    }
}