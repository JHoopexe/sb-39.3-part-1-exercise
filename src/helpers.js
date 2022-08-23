
function choice(items){
    let rand = Math.floor(Math.random() * items.length);
    return items[rand];
}

function remove(items, item){
    let i = items.indexOf(item);
    items.splice(i,1);
    return items;
}

export {choice, remove}