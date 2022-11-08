import  "./classNames.css";

export const classNames = (...args) =>{
  let result = ""
  for(let i=0;i<args.length;i++){
    const a = args[i]
    if(typeof a==='string') result =result+ " "+a
    else if(Array.isArray(a)) classNames(a)
    else {
      Object.entries(a).forEach(({key, value}, index)=> {
        if(value) result +=" "+key
      })
    }
  }
  return result.trim()
}