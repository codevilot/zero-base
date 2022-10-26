export const addClass = (element, ...classNames) =>{
    classNames.length >0 && element.classList.add(...classNames);
}
export const removeClass = (element, ...className) =>{
    classNames.length>0?element.clasList.remove(...classNames):(element.className='')
}