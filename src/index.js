module.exports = function toReadable (number) {
  let arr=String(number).split("");
  let arrN=['zero','one','two','three','four','five','six','seven','eight','nine'],
      arrDec=['','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen', 'eighteen', 'nineteen'],
      arrDecimal =['','ten','twenty', 'thirty','forty','fifty', 'sixty','seventy', 'eighty', 'ninety'],
      result = '';

  if (arr.length == 3){
      result = arrN[arr[0]]+' hundred ';
      arr.shift();
      let arrNew = arr.join('');
      number = parseInt(arrNew);
      if (arr[0]==0){           //300, 400, 500...
        arr.shift();
        if (arr[0]==0){
            return result.slice(0,-1);
          };
      };
      
  };
  if(arr.length == 1){                                              // 1,2 3,4...
    return result+=arrN[arr[0]];
  } else if(arr.length == 2 && number >19 && arr[1] != 0) {         // 21,22,23,31..
   return result += arrDecimal[arr[0]]+ ' '+arrN[arr[1]];
  } else if(arr.length == 2 && number<20 && number!=10){                          // 11,12,13..
      return result += arrDec[arr[1]];
  } else if (arr.length == 2 && number >9 && arr[1] == 0){         // 20,30,40...
        return result += arrDecimal[arr[0]];
  };
};


let number = 917;
let arr=String(number).split("");
let result='';
let arrN=['zero','one','two','three','four','five','six','seven','eight','nine'],
    arrDec=['','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen', 'eighteen', 'nineteen'],
    arrDecimal =['','ten','twenty', 'thirty','fourty','ninety', 'sixty','seventy', 'eighty', 'ninety'];
    console.log(arr);
    if (arr.length == 3){
        result = arrN[arr[0]]+' hundred ';
        arr.shift();
        let arrNew = arr.join('');
        number = parseInt(arrNew);
        if (arr[0]==0){           //300, 400, 500...
          arr.shift();
        };
        if (arr[0]==0){
          console.log(result.slice(0,-1));
        };
    };
    if(arr.length == 1){                                              // 1,2 3,4...
        console.log(result += arrN[arr[0]]) ;
      } else if(arr.length == 2 && number >19 && arr[1] != 0) {         // 21,22,23,31...
       console.log(result += arrDecimal[arr[0]]+ ' '+arrN[arr[1]]) ;
      } else if(arr.length == 2 && number<20){ 
          console.log(result += arrDec[arr[1]]);                         // 11,12,13..;
      } else if (arr.length == 2 && number >9 && arr[1] == 0){         // 20,30,40...
            console.log(result += arrDecimal[arr[0]]);
      };
