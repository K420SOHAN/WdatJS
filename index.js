var xv = 255;

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

module.exports = {Number};