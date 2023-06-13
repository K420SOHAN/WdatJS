var Obdata = require('./Obdata');
var xv = 255;
const Array = (arr)=>{
  let length =arr.length;
  let f={
    length,
    len:length,
      removeItem:(value)=>{
          var Result = arr.filter(item => item !== value)
          return Result;
      },
      fast:()=>{
        return arr[0];
      },
      last:()=>{
        return arr[arr.length-1];
      },
      remove:()=>{
        return arr=[];
      },
      removeDup:()=>{
        let names = arr;let dup = [...new Set(names)];return dup;
      },
      index:(id)=>{
        return arr[id];
      }
  };
  return f;
}
//  Array Function End
const Object = (obj)=>{
  let Pr ={
      obj:obj,
      key:(fild)=>{
          
          return obj?.[fild];
         
      }
  }
return Pr; 
}
//  Object Function End

const Number =(x)=>{
  let f={
      rand:()=>{
        var AnsNo = Math.floor(Math.random() * x);return AnsNo;
      },
      limit:(limit,lim2)=>{
        let arr =[];
        if(lim2){

          if(x<lim2){
            for(let i=limit; i<x+1;i++){arr.push(i);}
          }else{for(let i=limit; i<lim2+1;i++){arr.push(i);}}
        }else{if(limit){
          for(let i=0; i<limit+1;i++){arr.push(i);}
        }else{
  
        for(let i=0; i<x;i++){arr.push(i);}
        }}
        return arr;
      }
  };
  
  return f;

}
// Number Function End
const AppLang =(Lang)=>{
  let lang= Lang.toLowerCase();
  let langObj=Obdata.langobj;
  
    let f ={
      key:(key)=>{
        let result = langObj?.[key];
        return result?.[lang];
      }
    };
    return f;
}

module.exports = {Array,AppLang,Number,Object};