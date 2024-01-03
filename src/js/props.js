export function orderByProps(obj, sort) {
    // console.log(obj, sort);

    const sort2 = [];
    for (const key in obj) {
        //console.log(key);
        if (!sort.includes(key)) {
            sort2.push(key);
        }
    }
    sort2.sort();
    console.log(222222, sort2);
    const res = [];
    for (const i in sort) {
        const key = sort[i];
        res.push({key, value: obj[key]})
    }
    for (const i in sort2) {
        const key = sort2[i];
        res.push({key, value: obj[key]})
    }
    return res;
}