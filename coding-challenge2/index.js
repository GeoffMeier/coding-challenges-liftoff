function minMax(arr) {
    let min = Math.min.apply(null,arr)
    let max = Math.max.apply(null,arr)
    arr = [min,max]
    return arr;
    }