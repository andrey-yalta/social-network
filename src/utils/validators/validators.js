export const required = value =>{
    if(value) return undefined;
     return "Field is required"
}

export const maxLength30Creator =(maxLength) => (value) =>{
    debugger;
    if(  value.length >  maxLength  ) return  `Max ${maxLength} symbols`;
     return undefined;
}
