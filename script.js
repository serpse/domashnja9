




//  1

let str = '';

for (let i = 10; i <= 20; i++) {
	str += i, '';
}

console.log(str);

// 2

let strt = '';

for (let i = 10; i <= 20; i++) {
	strt = 10**2 || strt <= 20**2;
    
}

console.log(strt);


// 3

const mac = 7;

for (let iterator = 1; iterator < 10; iterator++) {
    console.log(`${iterator} * ${mac} = ${iterator * mac}`)
}

//  4



let sum = 0;
for (let i=0; i<=15; i++) {
    sum = sum + i; 
       console.log(sum);
    }



//   5


let mus = 1;
for (let i=15; i<=35; i++) {
    mus = mus * i; 
       
    }
 console.log(mus);

//    6



let n = 500;
let s = 0;
for (let i = 1; i <= n; i++) {
  s = s + i;
}
s = s / n;
console.log('', s);



//   7         

let man = 0;
for (let i = 30; i <= 80; i++) {
        if(i % 2 === 0);
         {
        man += i;
    }

 }

console.log(man);
 


//    8

let i = 100;
const max = 300;


for (let i = 100; i <= 300; i++) {
    if(i % 3 === 0) {
        console.log(i)
    }
}


//   9         


let nut = +prompt ('Введите число');
if(nut <=0 || nut !== null) {


for (let i = 1; i <= nut; i++) {
if (nut % i === 0) {
    alert(`Делители этого числа: ${i}`);
}
}


}

//       10 - 11 

let summ = 0;
let tun = 0;
let nute = +prompt ('Введите число');
    if(nute <=0 || nute !== null) {
 
 
for (let i = 1; i <= nute; i++) {
    if (nute % i === 0) {
        alert (`Делители этого числа: ${i}`);
        
     if (i % 2 === 0) {
    summ++;
    tun += i;
    
}

}

}
}
alert  (`${summ}
          ${tun}`
);



//       12



for (let i=1; i <= 10; i++) {
    for (let j = 1; j <=10; j++){
        console.log(`${i} * ${j}) = ${i + j}`)
    }
}










































/*
let iterator = 20;
let max = 30;

while 


const max =30;
for (let iterator = 30; iterator >= 20; iterator -= 0.5){
    console.log (iterator)
}


//______________________________________________

let mac = 0;
const max = 500;

for (let i = 1; i <= max; i++){
    mac = mac + i
}
console.log(mac);

//____________________

let i = 100;
const max = 300;


for (let i = 100; i <= 300; i++) {
    if(i % 3 === 0) {
        console.log(i)
    }
}


while (iterator <= max){
      if(i % 3 === 0) {
        console.log(iterator)
    }
    iterator++
}

//____________________

for (let i = 10; i <= 20; i++){

if (i*i <= 15) {
      console.log(i)
  }

}

//___________________________



//____________________________

const mac = 7; 
let iterator = 1;

while (iterator <= 10) {
     console.log(`${iterator} * ${mac} = ${iterator * mac}`)
     iterator++
}



const mac = 7; 
let iterator = 1;

do {
     console.log(`${iterator} * ${mac} = ${iterator * mac}`)
     iterator++;
}  while (iterator <= 10)

//_______________

четные числа 

let i = 0;
while (i<10) {
    i++;
    if(i % 2 !== 0)
     
}


//_________________
1)

let i = 100;

for ( i = 100; i >= 0; i++);
  console.log(i + " ");


//_____________

таблица 

for (let i=1; i <= 10; i++) {
    for (let j = 1; j <=10; j++){
        console.log(`${i} * ${j}) = ${i + j}`)
    }
}

//__________________


let sum = 0;
for (let i=0; i<=15; i++) {
    sum = sum + i; 
       console.log(sum);
    }
 




 let mus = 1;
for (let i=15; i<=35; i++) {
    mus = mus * i; 
       
    }
 console.log(mus);



  let n = 500;
      let s = 0;
      for (let i = 1; i <= n; i++) {
        s = s + i;
      }
      s = s / n;
      console.log('', s);


 
let man = 0;
for (let i = 30; i <= 80; i++) {
        if(i % 2 === 0);
         {
        man += i;
    }

 }

console.log(man);


let nut = +prompt('Введите число');






 let nut = +prompt ('Введите число');
    if(nut <=0 || nut !== null) {
 
 
for (let i = 1; i <= nut; i++) {
    if (nut % i === 0) {
        alert(`Делители этого числа: ${i}`);
    }
}


}



// домашка 10



const max = 10;    

 for (let i = 10; i >= 0; i -= 0.5) {
   console.log(i)
 }




 for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log( i );
  }
}

let summ = 0;
let tun = 0;
let nut = +prompt ('Введите число');
    if(nut <=0 || nut !== null) {
 
 
for (let i = 1; i <= nut; i++) {
    if (nut % i === 0) {
        alert (`Делители этого числа: ${i}`);
        
     if (i % 2 === 0) {
    summ++;
    tun += i;
    
}

}

}
}
alert  (`${summ}
          ${tun}`
);

       




let nut = +prompt ('Введите число');
    if(nut <=0 || nut !== null) {
 
 
for (let i = 1; i <= nut; i++) {
    if (nut % i === 0) {
        alert (`Делители этого числа: ${i}`);
        
    } if (i % 2 === 0) 
    alert  ("2 - четное число");
}


}



//___________-

/*
let iterator = 10;
const max = 20;

while (iterator <= max) {
    console.log(iterator);
    iterator = iterator +1;
}
*/