const users = {id:1, name: 'apple', job:'actor'};
const stringified = JSON.stringify(users);
// console.log(users);
// console.log(stringified);

const shop = {
    owner: 'samin',
    address: {
        street: 'khilkhet nikunju',
        city: 'Dhaka',
        country: 'Bd'
    } ,
    products:['laptop', 'mic', 'monitor','keyboard'],
    revenue: 45000,
    isopen: 'true',
    isnew: 'false'
}
console.log(shop);
const shopjson = JSON.stringify(shop);
console.log(shopjson)
