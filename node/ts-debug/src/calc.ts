const add = (a: number, b:number) => {
    if(a === 1) {
        throw new Error('xxx');
    }
    return a + b;
}

export {
    add
}