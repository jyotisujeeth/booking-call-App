function isdup(){
    let uni=[];
    for(let i=0;i<arr.length;i++) {
        if(!uni.includes(arr[i]))
       uni.push(arr[i]);śś
    }
    return uni;
}

const arr=[12,45,23,45,34,23,12,12,45,34,23,]
res=isdup();
console.log(res);