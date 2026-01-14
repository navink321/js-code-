const myarray =[0,1,2,3,4];
// single vriable store mutiple value  index strat 0 acees value index 
//mathod 
// declear array 
 const myHero=['alanwarker','nick','jons'];
  console.log(myHero[0]);
  console.log(myHero);
  // push add value add in last
 myarray.push(6);
  console.log(myarray);
  // pop value remove last
  myarray.pop();
   console.log(myarray);
   //unsfit value add start
   myarray.unshift(9);
    console.log(myarray);
    //sfit value remove frist
    myarray.shift();
     console.log(myarray);
     // include  find the value return true ya false 
     console.log(myarray.includes(5));
   //   find the index value 
      console.log(myarray.indexOf(3));
       // slice  splice
                                         

//  slice()   Purpose: Copy part of an array or string  working   on  index found  the  value and   donot  change  orignial  value 

 let sliceArray= [0,1,2,3,4,5,5,6];
  let newArrayMathod= sliceArray.slice(0,4);
   console.log(newArrayMathod);
    console.log(sliceArray);
    //splice() Purpose: Add, remove, or replace elements in an array
    //array.splice(start, deleteCount, item1, item2, ...)

    let arraySplic= [1,2,3,4,5];
    let newarray = arraySplic.splice(1,2);
     console.log(newarray);
      console.log(arraySplic);
      //map()= Creates a new array by modifying each element.
       const item= [1,2,3,4,5];

       let doble = item.map((n) => {
         return  n*2
       } );
        console.log(doble)  ;
        //filter()  Creates a new array with elements that match a condition.
        let filterArray= item.filter((a)=>{
              return a%2===0;
        });
         console.log(filterArray);
         //reduce() Reduces an array to one value (sum, total, object, etc.)
         const reduceAray= item.reduce((total,n )=>{
            return total+n;

         });
         console.log(reduceAray);
         //  this   key  word 
         //commit