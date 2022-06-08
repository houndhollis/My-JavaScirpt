



let item = {price : 1};
const price = item?.price;
console.log(price)

let obj = {name : 'dog', owner:{name:'woong'}};
function print (obj){
const ownerName = obj.owner.name
console.log(ownerName)
}
print(obj)