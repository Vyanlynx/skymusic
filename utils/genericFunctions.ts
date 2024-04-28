export const wordSlicer=(word:string,length=12):string=>{
    if (word.length>length && word){
        return `${word.slice(0,length)}...`
    }else{
       return word;    
    }
  };