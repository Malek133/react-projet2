/**
 * 
 * @param {string} txt 
 * @param {number} [max=120] 
 * @returns 
 */

export function textslice(txt:string,max:number=120){
if(txt.length>max)return `${txt.slice(0,max)}...`;
else return txt;
}