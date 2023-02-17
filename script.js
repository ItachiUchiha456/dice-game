let images = ["https://as2.ftcdn.net/v2/jpg/05/49/93/19/1000_F_549931998_NwlraPxBiJzQccREbKeWp0MMcga3vbok.jpg",
"https://as2.ftcdn.net/v2/jpg/05/49/93/19/1000_F_549931983_1bhYxLy7LMWVDFbL1NhGXgajTi4BdqeQ.jpg",
"https://as1.ftcdn.net/v2/jpg/05/49/93/20/1000_F_549932000_4Wx9x4zs9ab1c2fG2J3OYvKfBuQTtABu.jpg" ,
"https://as2.ftcdn.net/v2/jpg/05/49/93/19/1000_F_549931982_e2ezYXxf2NQweB3Ihjm3IXjnUcNYuWtw.jpg" ,
"https://as2.ftcdn.net/v2/jpg/05/49/93/19/1000_F_549931967_k017I1eKECEsTKQVuueirccg8bwd0UFi.jpg" ,
"https://as2.ftcdn.net/v2/jpg/05/49/93/19/1000_F_549931966_uVEbM3HZwjXNokSCN197FnywEcRsMvrL.jpg" 
]
let dice = document.querySelectorAll("img");
let dice_1 = Math.floor(Math.random()*6)
let dice_2 = Math.floor(Math.random()*6)
let c = 2+(dice_1+dice_2)
console.log(dice_1,dice_2);
document.querySelector("#h1").setAttribute("src",images[dice_1])
document.querySelector("#h2").setAttribute("src",images[dice_2])
document.querySelector("#total").innerHTML = "you got "+c+" points."