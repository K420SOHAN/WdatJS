const testJS = 'wdatjs';
const wSWordObect = {
    A:['অ','য়'],
    Aa:['আ','য়া',"আঃ","অ্যা","অ্যাঁ"],
    s:['শ','স','ষ','ছ'],
    th:['থ','ত'],
    T:['ট','ত'],
    N:['ণ','ন'],
    J:['জ','য'],
    P:['প','ফ'],
    
    wReplaceCall:(x,i,arr)=>{
        /** Aa Word  */
        if(x[i] == 'অ'){wReplace(wSWordObect.Aa,'অ',x,arr);}
        if(x[i] == 'য়'){wReplace(wSWordObect.Aa,'য়',x,arr);}
        /** Aa Word  */
        /** Aa Word  */
        if(x[i] == 'আ'){wReplace(wSWordObect.A,'আ',x,arr);}
        if(x[i] == 'য়া'){wReplace(wSWordObect.A,'য়া',x,arr);}
        /** Aa Word  */
        /** S Word  */
        if(x[i] == 'স'){wReplace(wSWordObect.s,'স',x,arr);}
        if(x[i] == 'শ'){wReplace(wSWordObect.s,'শ',x,arr);}
        if(x[i] == 'ষ'){wReplace(wSWordObect.s,'ষ',x,arr);}
        if(x[i] == 'ছ'){wReplace(wSWordObect.s,'ছ',x,arr);}
        /** S Word  */
        /** th Word  */
        if(x[i] == 'থ'){wReplace(wSWordObect.th,'থ',x,arr);}
        if(x[i] == 'ত'){wReplace(wSWordObect.th,'ত',x,arr);}
        /** th Word  */
        /** T Word  */
        if(x[i] == 'ট'){wReplace(wSWordObect.T,'ট',x,arr);}
        /** T Word  */
        /** N Word  */
        if(x[i] == 'ন'){wReplace(wSWordObect.N,'ন',x,arr);}
        if(x[i] == 'ণ'){wReplace(wSWordObect.N,'ণ',x,arr);}
        /** N Word  */
        /** J Word  */
        if(x[i] == 'য'){wReplace(wSWordObect.J,'য',x,arr);}
        if(x[i] == 'জ'){wReplace(wSWordObect.J,'জ',x,arr);}
        /** J Word  */
        /** P Word  */
        if(x[i] == 'প'){wReplace(wSWordObect.P,'প',x,arr);}
        if(x[i] == 'ফ'){wReplace(wSWordObect.P,'ফ',x,arr);}
        /** P Word  */
        

    },
 
};
let wReplace = (wordarr,TargetWord,x,arr)=>{
    for(let a=0;a<wordarr.length;a++){
      var data = x.replace(TargetWord,wordarr[a]);
      arr.push(data);
    }
}
const wXtoZbn = (x)=>{
    var data = [];
    for(let i=0;i<x.length;i++){
        data.push(x[i]);}
    var arr =[];
    var result =[];
    
    for(let i=0;i<x.length;i++){
        wSWordObect.wReplaceCall(x,i,arr);
    }
    return arr;
}
const wSWord = (x)=>{

    var data = [];
    for(let i=0;i<x.length;i++){
        data.push(x[i]);}
    var arr =[];
    var result =[];
    
    for(let i=0;i<x.length;i++){
        wSWordObect.wReplaceCall(x,i,arr);
        
    }
    for(let c=0;c<x.length;c++){
        for(let cc=0;cc<arr.length;cc++){
            result.push(wXtoZbn(arr[cc]));
        }
    }
    var emptyarr =[];
    wJoinArrayPush(result,emptyarr)
    return wArrDupRemove(emptyarr);

}
const W = function(id){
    var xx = document.querySelectorAll(id);
    
        
    const event = (eid,elistener,efun)=>{document.querySelector(eid).addEventListener(elistener,efun);}
    this.id = id;
    
    let idval = document.querySelectorAll(id).value;
    let idtext = document.querySelectorAll(id).textContent;
    let idhtml = document.querySelectorAll(id).innerHTML;
    var tagName = document.querySelectorAll(id).tagName;
    if(idval){var Value = idval;}else{var Value = false;}
    if(idtext){var text = idtext;}else{var text = false;}
    if(idhtml){var html = idhtml;}else{var html = false;}
    
    let j = {
        nodeList:document.querySelectorAll(id),
        tagName: tagName,
        id: tagName+this.id,
        text:text,
        value:Value,
        innerHTML:html,
        val: function(xval){if(xval){
            
            for(fo=0;fo<xx.length;fo++){
                let querySelectorAll = xx[fo];
                querySelectorAll.value = xval;
              }
        }else{
            // return document.querySelector(id).value;
            for(fo=0;fo<xx.length;fo++){
                let querySelectorAll = xx[fo];
                return querySelectorAll.value;
              }
        }},
         on: function(LEventListener,Fun){
           
            for(fo=0;fo<xx.length;fo++){
                let querySelectorAll = xx[fo];
                querySelectorAll.addEventListener(LEventListener,Fun);
              }
            ;},
         append:function(element){document.querySelector(id).innerHTML += element;},
         click:function(fun){event(id,"click",fun);},
         change:function(fun){event(id,"change",fun);},
         mouseover:function(fun){event(id,"mouseover",fun);},
         mouseout:function(fun){event(id,"mouseout",fun);},
         keydown:function(fun){event(id,"keydown",fun);},
         load:function(fun){event(id,"load",fun);},
         html:function(xhtml){
            if(xhtml){
                
                for(fo=0;fo<xx.length;fo++){
                    let querySelectorAll = xx[fo];
                    querySelectorAll.innerHTML = xhtml
                  }
            }else{
                return document.querySelector(id).innerHTML;}
            },
         remove:function(){document.querySelector(id).remove();},
         removeAttr:function(Attr){document.querySelector(id).removeAttribute(Attr);},
         removeChild:function(fandL){if(wDataDetect(fandL)=='number'){var condition = document.querySelector(id).children[fandL]}else if(wDataDetect(fandL)=='string'){if(fandL=='first'){var condition = document.querySelector(id).firstElementChild;} else if(fandL=='last'){var condition = document.querySelector(id).lastElementChild;}}document.querySelector(id).removeChild(condition);},
         lang:()=>{return document.querySelector(id).lang;},
        }
    return j;
}

/** w test mode */
/** w test mode */
/** w test mode */
const w = function(id){
    var AllId = document.querySelectorAll(id);
    var AIdLength = AllId.length;
    if(AIdLength == 0){
        var zeroId = {
            length:0,
            tagName:'undefined Class or Id',
            error:'undefined Class or Id',
            html:function(){
                return 'undefined Class or Id'
            },
            val:function(){
                return 'undefined Class or Id'
            },
            on:function(){
                return 'undefined Class or Id'
            },
            css:function(){
                return 'undefined Class or Id'
            },
    };return zeroId;}
    if(AIdLength == 1){
        var tagNamel= document.querySelectorAll(id).length;
        const event = (eid,elistener,efun)=>{document.querySelector(eid).addEventListener(elistener,efun);}
        var tagName = document.querySelector(id).tagName.toLowerCase();
        var className = document.querySelector(id).className;
        var IdName = document.querySelector(id).id;

        var allFunction = {
            length:tagNamel,
            className:className,
            Id:IdName,
            tagName:tagName,
            error:false,
            /** singel select class function */
            /** singel select class function */
            val:function(value){
                if(value){document.querySelector(id).value = value
                }else{
                    return document.querySelector(id).value;}
            },
            on: function(LEventListener,Fun){document.querySelector(id).addEventListener(LEventListener,Fun);},
             append:function(element){document.querySelector(id).innerHTML += element;},
             click:function(fun){event(id,"click",fun);},
             change:function(fun){event(id,"change",fun);},
             mouseover:function(fun){event(id,"mouseover",fun);},
             mouseout:function(fun){event(id,"mouseout",fun);},
             keydown:function(fun){event(id,"keydown",fun);},
             load:function(fun){event(id,"load",fun);},
             html:function(xhtml){
                if(xhtml){document.querySelector(id).innerHTML = xhtml
                }else{
                    return document.querySelector(id).innerHTML;}
                },
             remove:function(){document.querySelector(id).remove();},
             removeAttr:function(Attr){document.querySelector(id).removeAttribute(Attr);},
             removeChild:function(fandL){if(wDataDetect(fandL)=='number'){var condition = document.querySelector(id).children[fandL]}else if(wDataDetect(fandL)=='string'){if(fandL=='first'){var condition = document.querySelector(id).firstElementChild;} else if(fandL=='last'){var condition = document.querySelector(id).lastElementChild;}}document.querySelector(id).removeChild(condition);},
             lang:()=>{return document.querySelector(id).lang;},
             children:function (){
               return document.querySelector(id).children
             },
             css:function(obj){
                

                if(obj.color){
                    document.querySelector(id).style.color = obj.color;
                }
                if(obj.textAlign){
                    document.querySelector(id).style.textAlign = obj.textAlign;
                }
                
             }
            /** singel select class function */
            /** singel select class function */
        }
        return allFunction;
    }
    if(AIdLength > 1){
        var tagNamearr=[];
        for(let i=0;i<AIdLength;i++){
            tagNamearr.push(document.querySelectorAll(id)[i].nodeName)
        }
        
        
        var allobj={
            length:tagNamearr.length,
            tagName:tagNamearr,
            on:function(LEventListener,Fun){
                for(i=0;i<AIdLength;i++){
                    document.querySelectorAll(id)[i].addEventListener(LEventListener,Fun);
                }
                
            },
            val:function(x){
            if(x){for(i=0;i<AIdLength;i++){
                var tagName=document.querySelectorAll(id)[i].tagName.toLowerCase();
                    if(tagName == 'input'){
                        document.querySelectorAll(id)[i].value = x;
                    }else{
                        document.querySelectorAll(id)[i].innerHTML = x;
                    }
                
            }
            }else{var allval =[];
                for(i=0;i<AIdLength;i++){
                    allval.push(document.querySelectorAll(id)[i].value);
                }return allval;}
            },
            html:function(x){
                if(x){for(i=0;i<AIdLength;i++){
                    var tagName=document.querySelectorAll(id)[i].tagName.toLowerCase();
                    if(tagName == 'input'){
                        document.querySelectorAll(id)[i].value = x;
                    }else{
                        document.querySelectorAll(id)[i].innerHTML = x;
                    }
                    
                }
            }else{var allval =[];
                for(i=0;i<AIdLength;i++){
                    allval.push(document.querySelectorAll(id)[i].innerHTML);
                }return allval;}
            }
        };
        var a = Object.create(allobj);
        var arr=[];
        for(i=0;i<AIdLength;i++){
            arr.push(AllId[i]);
        }
        // allobj.val = {val:"hi"};
        return a;
    }
    wcolog(AllId.length)
        
    
    return  allFunction ;
}

/** w test mode */
/** w test mode */




const wArray = (arr)=>{
    let f={
        removeItem:(value)=>{
            var Result = arr.filter(item => item !== value)
            return Result;
        }
    };
    return f;
}
const wObject = (obj)=>{
    let Pr ={
        obj:obj,
        key:(fild)=>{
            
            let result = obj?.[fild];
        return result;
        },
        keys:()=>{
           return Object.keys(obj);
        }
    }
  return Pr; 
}
const wSearch = (data)=>{
    let whereResult = [];
    
    let method ={
        where:(fild,t,v)=>{ 
            if(t=="=="){
                for(let i=0;i<data.length;i++){
                    var d=data[i];
                    let QusArr2 = wObject(data[i]).key(fild);
                    
                    if(QusArr2 == v){
                        whereResult.push(d);
                    }
                }};
            if(t=="array-contains"){
                for (var a = 0; a < data.length; a++) {
                    var d=data[a];
                   const QusArr = wObject(d).key(fild);
                    for(let i=0; i<QusArr.length;i++){
                        if(QusArr[i] == v){
                           whereResult.push(d);
                            
                            
                        };
                    }
                  }
            }
            if(whereResult.length == 0){
                var empty = true;
            }else{
                var empty = false;
            }
            
            let where ={
                
                then:(fun) =>{return fun({
                    
                    forEach:function forEach(call){
                        for(let i=0;i<whereResult.length;i++){
                            if(whereResult[i] == empty){
                                var exist = false;
                            }else{
                                var exist = true;
                            }
                            call({data:function data(){return whereResult[i]},
                            exist:exist
                        });
                        }
                        ;
                    },
                    empty:empty,length:whereResult.length})}
            }
            return where;
        },
        
    }
    if(wDataDetect(data) == 'array'){
        
    }
    return method;
}
function wAction(Id,LEventListener,Fun){document.querySelector(Id).addEventListener(LEventListener,Fun);};
function wAl(x){window.alert(x);};
function wVal(x){return document.querySelector(x).value;};
function wCoLog(x){console.log(x)};
function wcolog(x){console.log(x)};

function wLgetItem(x){return localStorage.getItem(x)};
function wLsetItem(x,y){localStorage.setItem(x,y)};
const wLocalS ={get:(key)=>{return localStorage.getItem(key)},set:(key,val)=>{return localStorage.setItem(key,val)}};
function wOpen(x){window.location.href=x};
function wArrLastD(arr){return arr[arr.length-1];}
function wQWeekN(lang,x){if(lang == 'bn'){var days = ["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"];};
    if(lang == 'en'){var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];};
    var DayName = days[new Date().getDay()];
    var result = x.replace('কি বার',DayName);
    var TextC = wTxtSClear(result,' ');
    var arr=[];
    if(wArrLastD(TextC)==' '){
        for(let i=0;i<TextC.length-1;i++){
            arr.push(TextC[i]);
        }
    }else{
        for(let i=0;i<TextC.length;i++){
            arr.push(TextC[i]);
        }
    }
    return arr.join('');
}
function wRandDataS(x){var AnsNo = Math.floor(Math.random() * x.length);return x[AnsNo];}
function wDownload(x,y){$.ajax({url: y,method: 'GET',xhrFields: {responseType: 'blob'},success: function(data){var a = document.createElement('a');var url = window.URL.createObjectURL(data);a.href = url;a.download = x;document.body.append(a);a.click();a.remove();window.URL.revokeObjectURL(url);}});};
function wDataDetect(x){if(x === undefined){return 'undefined';}
	else {if(x === null){return 'null';}
    else{if(typeof x == 'string'){return 'string';}
    else{if(typeof x == 'number'){return 'number';}
    else{if(x instanceof Array){return 'array';}
    else{if(typeof x == 'object'){return 'object';}
    else{if(typeof x == 'boolean'){return 'boolean';}}}}}}}};
function wOrdConvert(x){
    var makeWord =[];
    var OrginalW =[];
    var CreateW =[];
    var length = x.length;
    for(i=0;i<length;i++){
        OrginalW.push(x[i]);
       var wordArray = wSWord(x[i]);
     }
    
    for(a=0;a<OrginalW.length;a++){
        
        var neMCall = wSWord(OrginalW[a]);
        
        for(b=0;b<neMCall.length;b++){
            OrginalW[a]=neMCall[b];
            CreateW.push(OrginalW.join(''));
        }
        
        
       
       }
       return wArrDupRemove(CreateW);
}

function wHrefData(x){var url_string = window.location.href ;var url = new URL(url_string);let HrefData = url.searchParams.get(x);return HrefData;}
function wArrDupRemove(x){let names = x;let dup = [...new Set(names)];return dup;}
function wJoinArrayPush(x,emptyArray,arrType){
    if(arrType == null){
        for(a=0;a<x.length;a++){
            
            for(aa=0;aa<x[a].length;aa++){
                emptyArray.push(x[a][aa]);
            }
        }
    }else{
        for(let a=0;a<x.length;a++){
            emptyArray.push(x[a]);
        }
    }
}
function wTextEffectPush(x,data){
    x.push(data);
    x.push(' '+data);
    x.push(data+' ');
    x.push(data+' .');
    x.push(data+'.');
    x.push(data+' ?');
    x.push(data+'?');
}
function wChDetect(str){
    if(/[\p{Script=Bengali}]+/gmu.test(str) == true){
        return 'bn';
    }else{
        if(/[a-zA-Z0-9]+/g.test(str) == true){
            return 'en';
        }else{
            return '0';
        };
    };
}
function wXtoZ(w,i,d,length){
    var dd = d;
    var array = [];
    for(a=0;a<length;a++){
        array.push(dd[a]);
    }
    
        if(array[i] == 'ি'){array[i]='ী';}else{
        if(array[i] == 'ী'){array[i]='ি';}else{
        if(array[i] == 'ু'){array[i]='ূ';}else{
        if(array[i] == 'ূ'){array[i]='ু';}else{
        if(array[i] == 'ো'){array[i]='ু';}else{
        if(array[i] == 'ই'){array[i]='ঈ';}else{
        if(array[i] == 'ঈ'){array[i]='ই';}else{
        if(array[i] == 'ঊ'){array[i]='উ';}else{
        if(array[i] == 'উ'){array[i]='ঊ';}else{
        if(array[i] == 'ও'){array[i]='ঔ';}else{
        if(array[i] == 'ঔ'){array[i]='ও';}else{
        if(array[i] == 'অ'){array[i]='য়';}else{
        if(array[i] == 'য়'){array[i]='অ';}else{
        if(array[i] == 'ছ'){array[i]='স';}else{
        if(array[i] == 'স'){array[i]='ছ';}else{
        if(array[i] == 'ন'){array[i]='ণ';}else{
        if(array[i] == 'ণ'){array[i]='ন';}else{
        if(array[i] == 'ক'){array[i]='খ';}else{
        if(array[i] == 'খ'){array[i]='ক';}else{

        };
        };
        };
        };
        };
        };
        };
        };
        };
        };
        };                         
        };                                                          
        };                        
        };                   
        };           
        };        
        };    
        };
    }
   return array.join('');
}
/** wBNRevision function Start */
function wBNRevision(x){
    var xc = x.length;
    var xx= [];
    for(i=0;i<xc;i++){
        xx.push(wXtoZ(x[i],i,x,xc));
    }
    
    return xx;
}
/** wBNRevision function end */
function wTextConvertUL(string,effect){
    if(wChDetect(string) == 'en'){
    var c = string.length;
    var i = 1;
    var Result = [];
    var tLC = string.toLowerCase();
    var ATTVasaEffect = wTBabohar(wChDetect(string),string);
    
    function fullMRun(){
           // ** apni tumi tui start **//
    
    for(i=0;i<ATTVasaEffect.length;i++){
        wTextEffectPush(Result,ATTVasaEffect[i]);
    }
    // ** apni tumi tui end **//
    // var newString = string.substr(0,2).toUpperCase() + string.substr(2);
    var newString = string.toLowerCase();
    
    return Result;
    }
    if(effect==null){
       return fullMRun();
    }else{
        if(effect=='noneEffect'){
            Result.push(ATTVasaEffect);
            return ATTVasaEffect;
        }else{
           return fullMRun();
        }
        
    }
}else{
    if(wChDetect(string) == 'bn'){
        const arr = [];
        const result = [];
       let wTBaboharCall= wTBabohar('bn',string);
       for(let i=0;i<wTBaboharCall.length;i++){
            arr.push(wSWord(wTBaboharCall[i]));
       }
        wJoinArrayPush(arr,result);
        return wArrDupRemove(result).sort();
    }
}

}

function wTBabohar(DLang,s){
    var w = s.toLowerCase();
     
        var strC = w.split(" ").length;
        var str = w.split(" ");
        var Adata =[];
        var Tudata =[];
        var Tuidata =[];
        var Result=[];
        var Result2=[];
        var allarray=[];
        
        if(DLang == 'en'){
            
                for(i=0;i<strC;i++){
                    //**  All Apni Data Start*//
                    if(str[i]== 'tumi' || str[i]== 'tui'){str[i]='apni';}
                    if(str[i]== 'koro' || str[i]== 'koris'){str[i]='koren';}
                    if(str[i]== 'korso' || str[i]== 'korsis'){str[i]='korsen';}
                    if(str[i]== 'bolo' || str[i]== 'bol'){str[i]='bolen';}
                    if(str[i]== 'dao' || str[i]== 'de'){str[i]='den';}
                    if(str[i]== 'tomar' || str[i]== 'tor'){str[i]='apnar';}
                    if(str[i]== 'tomake' || str[i]== 'toke'){str[i]='apnake';}
                    if(str[i]== 'aso' || str[i]== 'asis'){str[i]='asen';}
                    Adata.push(str[i]);
                    //**  All Apni Data End*//
                    //**  All Tumi Data Start*//
                    if(str[i]== 'apni' || str[i]== 'tui'){str[i]='tumi';}
                    if(str[i]== 'korsen' || str[i]== 'korsis'){str[i]='korso';}
                    if(str[i]== 'koren' || str[i]== 'koris'){str[i]='koro';}
                    if(str[i]== 'bolen' || str[i]== 'bol'){str[i]='bolo';}
                    if(str[i]== 'den' || str[i]== 'de'){str[i]='dao';}
                    if(str[i]== 'apnar' || str[i]== 'tor'){str[i]='tomar';}
                    if(str[i]== 'apnake' || str[i]== 'toke'){str[i]='tomake';}
                    if(str[i]== 'asen' || str[i]== 'asis'){str[i]='aso';}
                    Tudata.push(str[i]);
                    //**  All Tumi Data End*//
                    //**  All Tui Data Start*//
                    if(str[i]== 'apni' || str[i]== 'tumi'){str[i]='tui';}
                    if(str[i]== 'koren' || str[i]== 'koro'){str[i]='koris';}
                    if(str[i]== 'korsen' || str[i]== 'korso'){str[i]='korsis';}
                    if(str[i]== 'bolen' || str[i]== 'bolo'){str[i]='bol';}
                    if(str[i]== 'den' || str[i]== 'dao'){str[i]='de';}
                    if(str[i]== 'apnar' || str[i]== 'tomar'){str[i]='tor';}
                    if(str[i]== 'apnake' || str[i]== 'tomake'){str[i]='toke';}
                    if(str[i]== 'asen' || str[i]== 'aso'){str[i]='asis';}
                    Tuidata.push(str[i]);
                    //**  All Tui Data End*//
                }
                if(Adata.join(' ')==Tudata.join(' ')){
                    if(Adata.join(' ')==Tuidata.join(' ')){
                        Result.push(Adata.join(' '));
                    }
                }else{
                    Result.push(Adata.join(' '));
                    Result.push(Tudata.join(' '));
                    Result.push(Tuidata.join(' '));
                }
                
                return Result;      
    }
    if(DLang == 'bn'){
        for(i=0;i<strC;i++){
            //**  All Apni Data Start*//
            if(str[i]== 'তুমি' || str[i]== 'তুই'){str[i]='আপনি';}
            if(str[i]== 'করো' || str[i]== 'করিছ'){str[i]='করেন';}
            if(str[i]== 'করছো' || str[i]== 'করছিস'){str[i]='করছেন';}
            if(str[i]== 'বলো' || str[i]== 'বোল'){str[i]='বোলেন';}
            if(str[i]== 'দাও' || str[i]== 'দে'){str[i]='দেন';}
            if(str[i]== 'তোমার' || str[i]== 'তোর'){str[i]='আপনার';}
            if(str[i]== 'তোমাকে' || str[i]== 'তোকে'){str[i]='আপনাকে';}
            if(str[i]== 'আছো' || str[i]== 'আছিস'){str[i]='আছেন';}
            if(str[i]== 'তোমাকেই' || str[i]== 'তোকেই'){str[i]='আপনাকেই';}
            
            Adata.push(str[i]);
            //**  All Apni Data End*//
            //**  All Tumi Data Start*//
            if(str[i]== 'আপনি' || str[i]== 'তুই'){str[i]='তুমি';}
            if(str[i]== 'করেন' || str[i]== 'করিছ'){str[i]='করো';}
            if(str[i]== 'করছেন' || str[i]== 'করছিস'){str[i]='করছো';}
            if(str[i]== 'বোলেন' || str[i]== 'বোল'){str[i]='বলো';}
            if(str[i]== 'দেন' || str[i]== 'দে'){str[i]='দাও';}
            if(str[i]== 'আপনার' || str[i]== 'তোর'){str[i]='তোমার';}
            if(str[i]== 'আপনাকে' || str[i]== 'তোকে'){str[i]='তোমাকে';}
            if(str[i]== 'আছেন' || str[i]== 'আছিস'){str[i]='আছো';}
            if(str[i]== 'আপনাকেই' || str[i]== 'তোকেই'){str[i]='তোমাকেই';}
            Tudata.push(str[i]);
            //**  All Tumi Data End*//
            //**  All Tui Data Start*//
            if(str[i]== 'আপনি' || str[i]== 'তুমি'){str[i]='তুই';}
            if(str[i]== 'করেন' || str[i]== 'করো'){str[i]='করিছ';}
            if(str[i]== 'করছেন' || str[i]== 'করছো'){str[i]='করছিস';}
            if(str[i]== 'বোলেন' || str[i]== 'বলো'){str[i]='বোল';}
            if(str[i]== 'দেন' || str[i]== 'দাও'){str[i]='দে';}
            if(str[i]== 'আপনার' || str[i]== 'তোমার'){str[i]='তোর';}
            if(str[i]== 'আপনাকে' || str[i]== 'তোমাকে'){str[i]='তোকে';}
            if(str[i]== 'আছেন' || str[i]== 'আছো'){str[i]='আছিস';}
            if(str[i]== 'আপনাকেই' || str[i]== 'তোমাকেই'){str[i]='তোকেই';}
            Tuidata.push(str[i]);
            //**  All Tui Data End*//
        }
        if(Adata.join(' ')==Tudata.join(' ')){
            if(Adata.join(' ')==Tuidata.join(' ')){
                Result.push(Adata.join(' '));
            }
        }else{
            Result.push(Adata.join(' '));
            Result.push(Tudata.join(' '));
            Result.push(Tuidata.join(' '));
        }
       
        for(var i=0;i<Result.length;i++){
            var aa = wBNRevision(Result[i])
            Result2.push(aa);
        }
       
        wJoinArrayPush(Result2,allarray);
       
        return  allarray;
    }
   
}


  function wStart(){
   
    var obj={wTest:"Test",
             
             document:window.document,
             location:window.location,
             host:window.location.host,
             hostname:window.location.hostname,
             href:window.location.href,
             origin:window.location.origin,
             pathname:window.location.pathname,
             port:window.location.port,
             protocol:window.location.protocol,
            
};
    let f={
        run:(fun)=>{
            document.addEventListener("DOMContentLoaded", () => {
                fun(obj);
                })
        
        },
        
        
    };return f;};

    
    /** Lang Data Object start */
    var lanStringObg = {"wOil":{"bn":"তেল","en":"Oil"},"wMusic":{"bn":"সঙ্গীত","en":"Music"},"wSaturday":{"en":"Saturday","bn":"শনিবার"},"wHome":{"bn":"হোম","en":"Home"},"wMarch":{"bn":"মার্চ","en":"March"},"wSignUp":{"bn":"নিবন্ধন করুন","en":"SignUp"},"wTuesday":{"en":"Tuesday","bn":"মঙ্গলবার"},"wMay":{"en":"May","bn":"মে"},"wWednesday":{"bn":"বুধবার","en":"Wednesday"},"wLogin":{"bn":"প্রবেশ","en":"Login"},"wForm":{"bn":"ফর্ম","en":"Form"},"wTest":{"bn":"Test","en":"Test"},"wLetter":{"en":"Letter","bn":"পত্র"},"wUpdate":{"en":"Update","bn":"আপডেট"},"wSpoon":{"bn":"চামচ","en":"Spoon"},"wApril":{"bn":"এপ্রিল","en":"April"},"wSubmit":{"bn":"জমা","en":"Submit"},"wData":{"bn":"ডেটা","en":"Data"},"wYoutube":{"bn":"ইউটিউব","en":"Youtube"},"wWarning":{"bn":"সতর্কতা","en":"Warning"},"wSignup":{"en":"Signup","bn":"নিবন্ধন"},"wGoogle":{"bn":"গুগল","en":"Google"},"wChat":{"bn":"চ্যাট","en":"Chat"},"wBlood":{"en":"Blood","bn":"রক্ত"},"wLibrary":{"bn":"লাইব্রেরি","en":"Library"},"wCountry":{"bn":"দেশ","en":"Country"},"wDislike":{"bn":"অপছন্দ","en":"Dislike"},"wJanuary":{"bn":"জানুয়ারি","en":"January"},"wWelcome":{"bn":"স্বাগতম","en":"Welcome"},"wOrange":{"en":"Orange","bn":"কমলা"},"wRoom":{"bn":"রুম","en":"Room"},"wSearch":{"bn":"অনুসন্ধান","en":"Search"},"wLaboratory":{"en":"Laboratory","bn":"ল্যাবরেটরি"},"wSend":{"en":"Send","bn":"পাঠান"},"wLogOut":{"bn":"প্রস্থান","en":"LogOut"},"wCalculator":{"bn":"ক্যালকুলেটর","en":"Calculator"},"wVideos":{"en":"Videos","bn":"ভিডিও"},"wFebruary":{"en":"February","bn":"ফেব্রুয়ারি"},"wShorts":{"en":"Shorts","bn":"শর্টস"},"wShop":{"bn":"শপ","en":"Shop"},"wReport":{"en":"Report","bn":"অভিযোগ"},"wOctober":{"en":"October","bn":"অক্টোবর"},"wNagad":{"bn":"নগদ","en":"Nagad"},"wSettings":{"bn":"সেটিংস","en":"Settings"},"wImage":{"bn":"ছবি","en":"Image"},"wThursday":{"bn":"বৃহস্পতিবার","en":"Thursday"},"wDecember":{"en":"December","bn":"ডিসেম্বর"},"wFood":{"en":"Food","bn":"খাবার"},"wTechnician":{"en":"Technician","bn":"টেকনিশয়ান"},"wBlog":{"bn":"ব্লগ","en":"Blog"},"wPassword":{"en":"Password","bn":"পাসওয়ার্ড"},"wDelete":{"bn":"মুছে ফেলুন","en":"Delete"},"wEmail":{"en":"Email","bn":"ইমেইল"},"wComputer":{"en":"Computer","bn":"কম্পিউটার"},"wClothing":{"bn":"পোশাক","en":"Clothing"},"wFacebook":{"bn":"ফেসবুক","en":"Facebook"},"wPassport":{"bn":"পাসপোর্ট","en":"Passport"},"wChair":{"bn":"চেয়ার","en":"Chair"},"wSuccess":{"bn":"সফল","en":"Success"},"wInternet":{"bn":"ইন্টারনেট","en":"Internet"},"wSunday":{"en":"Sunday","bn":"রবিবার"},"wBkash":{"bn":"বিকাশ","en":"Bkash"},"wUpload":{"bn":"আপলোড","en":"Upload"},"wLogout":{"en":"Logout","bn":"প্রস্থান"},"wText":{"en":"Text","bn":"টেক্সট"},"wLive":{"bn":"লাইভ","en":"Live"},"wMilk":{"en":"Milk","bn":"দুধ"},"wContact":{"bn":"কন্টাক্ট","en":"Contact"},"wLike":{"bn":"পছন্দ","en":"Like"},"wGame":{"en":"Game","bn":"গেম"},"wE-mail":{"bn":"ই-মেইল","en":"E-mail"},"wClick":{"bn":"ক্লিক","en":"Click"},"wPlaylists":{"en":"Playlists","bn":"প্লেলিস্ট"},"wStatus":{"bn":"স্ট্যাটাস","en":"Status"},"wHistory":{"en":"History","bn":"ইতিহাস"},"wBread":{"en":"Bread","bn":"রুটি"},"wNurse":{"en":"Nurse","bn":"সেবিকা"},"wAbout":{"en":"About","bn":"সম্পর্কে"},"wJuly":{"en":"July","bn":"জুলাই"},"wAddress":{"bn":"ঠিকানা","en":"Address"},"wNewspaper":{"bn":"সংবাদপত্র","en":"Newspaper"},"wOffice":{"bn":"অফিস","en":"Office"},"wTraining":{"en":"Training","bn":"প্রশিক্ষণ"},"wLanguage":{"en":"Language","bn":"ভাষা"},"wPost":{"bn":"পোস্ট","en":"Post"},"wMonday":{"en":"Monday","bn":"সোমবার"},"wFriday":{"bn":"শুক্রবার","en":"Friday"},"wSeptember":{"bn":"সেপ্টেম্বর","en":"September"},"wGo":{"bn":"যাও","en":"Go"},"wLogIn":{"bn":"প্রবেশ করুন","en":"LogIn"},"wSave":{"en":"Save","bn":"সংরক্ষণ"},"wNovember":{"en":"November","bn":"নভেম্বর"},"wknife":{"en":"knife","bn":"ছুরি"},"wAudio":{"bn":"অডিও","en":"Audio"},"wJune":{"en":"June","bn":"জুন"},"wDoctor":{"bn":"ডাক্তার","en":"Doctor"},"wEnglish":{"bn":"ইংরেজি","en":"English"},"wDownload":{"bn":"ডাউনলোড","en":"Download"},"wMenu":{"en":"Menu","bn":"মেনু"},"wLocation":{"en":"Location","bn":"অবস্থান"},"wAugust":{"en":"August","bn":"আগস্ট"},"wSubscribe":{"bn":"সাবস্ক্রাইব","en":"Subscribe"},"wClinic":{"en":"Clinic","bn":"ক্লিনিক"},"wHelp":{"en":"Help","bn":"সাহায্য"}};
    
    /** Lang Data Object End */
    
    const webLang =(Lang,textType)=>{
        if(Lang == null){
            var lang ='en';
        }else{
            var lang = Lang.toLowerCase();
        }
        
        var keyArr= wObject(lanStringObg).keys();
        let langObj=lanStringObg;
        const setLang = (key)=>{
            
            let mekeClass = '.'+key;
            let selectClass = document.querySelectorAll(mekeClass);
            
            for(let c=0;c<selectClass.length;c++){
                let nodeName = selectClass[c].nodeName;
                if(lang == 'en'){
                    if(nodeName=='INPUT'){
                        selectClass[c].value = wObject(langObj).key(key)?.en;
                    }else{
                        selectClass[c].innerHTML = wObject(langObj).key(key)?.en;
                    }
                }
                if(lang == 'bn'){
                    if(nodeName=='INPUT'){
                        selectClass[c].value = wObject(langObj).key(key)?.bn;
                    }else{
                        selectClass[c].innerHTML = wObject(langObj).key(key)?.bn;
                    }
                }
                
            }
            
}
        const f ={
            add:(Newkey,keyObj)=>{
                lanStringObg[Newkey] =keyObj;
            },
            update:(Newkey,keyObj)=>{
                lanStringObg[Newkey] =keyObj;
            },
            useKey:()=>{
                function insert(data){
            
                    
                    if(lang == 'en'){
                        if(textType =="A"){
                            var h = document.body.innerHTML.replaceAll(data,wObject(langObj).key(data).en.toUpperCase());
                        }else if(textType == "a"){
                            var h = document.body.innerHTML.replaceAll(data,wObject(langObj).key(data).en.toLowerCase());
                        }else{
                            var h = document.body.innerHTML.replaceAll(data,wObject(langObj).key(data).en);
                        }
                        document.body.innerHTML =h;
                    }
                    if(lang == 'bn'){
                        wcolog('bn run');
                        var h = document.body.innerHTML.replaceAll(data,wObject(langObj).key(data).bn);
                    document.body.innerHTML =h;
                    }
                    
                    
                }
                   for(i=0;i<keyArr.length;i++){
                    insert(keyArr[i]);
                   }
                    // insert('wAbout');
                    // insert('wBlog');
                    // insert('wContact');
                    // insert('wEnglish');
                    // insert('wHome');
                    // insert('wMenu','Menu');
                    // insert('wShop','Shop');
                    // insert('wStatus','Status');
                    
                
                // if(lang =='bn'){
                //     insert('wAbout','সম্পর্কে');
                //     insert('wBlog','ব্লগ');
                //     insert('wContact','কন্টাক্ট');
                //     insert('wEnglish','ইংরেজি');
                //     insert('wHome','হোম');
                //     // insert('wMenu','মেনু');
                //     // insert('wShop','শপ');
                //     // insert('wStatus','স্ট্যাটাস');
                // }
                // if(lang =='purebn' || lang =='pbn'){
                //     insert('wAbout','সম্পর্কে');
                //     insert('wBlog','ব্লগ');
                //     insert('wContact','যোগাযোগ');
                //     insert('wEnglish','ইংরেজি');
                //     insert('wHome','বাড়ি');
                //     insert('wMenu','তালিকা');
                //     insert('wShop','দোকান');
                //     insert('wStatus','স্ট্যাটাস');
                // }

            },
            useClass:()=>{
                
                for(i=0;i<keyArr.length;i++){
                    setLang(keyArr[i]);
                    
                   }
                    
              
                
            },
        }
        return f;
        
      }
    wStart('body');

    w('.wTcenter').css({textAlign:'center'});
    


    