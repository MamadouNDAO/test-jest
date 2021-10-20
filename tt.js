const input = [
    ["key1", 1, 2, 3,4],
    ["key2", 4, 5, 6,7]
]

function question1 (input){
    let datas = new array();
    let res = input.map((val) => {
        const lot = val[0];
        const key = val.splice(0,1);
        obj = Object.assign({key}, lot);
        datas.push(obj);
    });
    return $datas;
}
module.exports = question1;