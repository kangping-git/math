function deployment(a,b){
    let c = new Array(Number(a.length)+Number(b.length)-1)
    if (a.length >= b.length){
        while (a.length != b.length){
            b.unshift(1)
        }
    }else{
        while (a.length != b.length){
            a.unshift(1)
        }
    }
    for (let i in a){
        for (let x in b){
            if (c[Number(i)+Number(x)] == undefined){
                c[Number(i)+Number(x)] = 0
            }
            c[Number(i)+Number(x)] = c[Number(i)+Number(x)]+a[i]*b[x]
        }
    }
}
function distance(...value){
    let memory = 0
    for (let i in value){
        memory += value[i] **2
    }
    return Math.sqrt(memory)
}