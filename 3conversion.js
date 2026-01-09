let score="350abc";
 console.log(typeof score);
  let valueOFNumber=Number(score);
   console.log(typeof valueOFNumber);
    console.log(valueOFNumber); // 
    //NAN  Invalid number in  javascript
     let score2= null;
    let  valueOFNumberScore2= Number(score2);
     console.log(score2);
     let score3= undefined;
     let valueOFNumberundefined =  Number(score3);
       console.log(valueOFNumberundefined);
       // number conver esaly convert  but  string  not  convert out put  is nan 
        let isBoolean =1;
         console.log(typeof isBoolean);
         let value_of_bloean = Boolean(isBoolean);
          console.log(value_of_bloean);

        let string_store=33;
          console.log( typeof  string_store);
        let  convert_string =  String(string_store);
         console.log(typeof convert_string);
         console.log(convert_string);
         // opertion  in  javascript 
         console.log(2+2) // ,- */ /  anser 4 
         // conversion  in  operater
          console.log("1"+2);//anser 12
           console.log(1+1+"3");// anser 23
            console.log(+true);
            // assign opertater   
             let num1 ,num2,num3;
              num1=num2=num3 = 4+2;
                 console.table([num2,num1,num3]);


                 //perfix  value before  incerment
                 // postfixt  value after incerment



                 //  ==  not data type  only  value   match  ==== match  data type 
                

              console.log('2' === 2); // false

        console.log('2' == 2);  //true;
        //

        /*  data type 
           //  this  data not  original value
       primative data - string  number  bolean ,null, undefined ,symbal, big init 
        


        non prinative  refrence type
        array object  function 


    -javascript 
        */

     let id = Symbol('11');
     let anotherid= Symbol('11');
      console.table([id,anotherid]);

      // array 
      const arr =[1,2,2,,2];
        console.log(arr[1]);
          //  object 
       const myobject={
         'name':"navin",
         'job':"developer"
       }
        console.log(myobject.job);
        // type  of   find  the  daata  type 
          console.log(typeof myobject);