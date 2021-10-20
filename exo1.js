function question2(tabs)
{
    const data = {
        basePrice: "John",
        description: "Doe",
        price: 50,
        saving: "blue",
        title: "blue"
    };
    let datas = new array();
    for(let item in tabs){
        if(item['price']){
            data['basePrice'] = item['price'];
            data['description'] = 'You are saving ' + item['savings'] +' € related to the initial price';
            data['price'] = item['savingsType'] === 'total' ? parseInt(item['price']) - parseInt(item['savings']) : (parseInt(item['price']) * parseInt(item['savings'])) / 100;
            data['saving'] = item['savingsType'] === 'total' ? item['savings'] : item['savings'] + '%';
            data['title'] = item['savingsType'] === 'total' ? 'Flat voucher' : 'Sales';
            datas.push(data);
        }
    }
    return datas;
}
module.exports = question2;