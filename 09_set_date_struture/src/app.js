let color = new Set();
color.add("red").add("green").add("red");

if(color.size === 2 && color.has("red")){
    for(let key of color.values())
        console.log(key);
}