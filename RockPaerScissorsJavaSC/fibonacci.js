function fibo(num){
let numRecived = num;
let a =0;
let b=1;
let c =0;
let arrayFibo = [];
let verificador=0;
for(let i = 0;i<=15;i++){

    c = a+b;
    a=b;
    b=c;

    arrayFibo[i]= c; 

    console.log(arrayFibo[i]);
}
    for(let i =0;i<=arrayFibo.length;i++){
        verificador = arrayFibo[i];

        if(verificador == numRecived){
            return 'yes';
    }
    
}
return 'no';
}
answer = fibo(54);
console.log(answer);