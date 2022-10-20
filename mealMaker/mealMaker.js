const menu = {
    _meal : " ",
    _price : 0,
    set meal(mealToCheck){
        if(typeof mealToCheck === 'string'){
            return this._meal = mealToCheck;
        }
    },
    set price(priceToCheck){
        if(typeof priceToCheck === 'number'){
            return this._price = priceToCheck;
        }
    },
    get todaySpecial(){
        if(this._meal && this._price){
            return  `Today's special is ${this._meal} for ${this._price} CZK`;
        }
        return `set correct meal and price`
    }
}

menu.meal = "dumplings";
menu.price = 40;
console.log(menu.todaySpecial);