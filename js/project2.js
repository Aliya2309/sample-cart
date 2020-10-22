let products = [
    {
        name: "Apples",
        amount: 200,
        weight: "1 KG",
        image: "https://via.placeholder.com/100"
    },
    {
        name: "Oranges",
        amount: 80,
        weight: "1 KG",
        image: "https://via.placeholder.com/100"
    },
    {
        name: "Pears",
        amount: 240,
        weight: "1 KG",
        image: "https://via.placeholder.com/100"
    },
    {
        name: "Watermelon",
        amount: 50,
        weight: "1.5 KG",
        image: "https://via.placeholder.com/100"
    }
];

let productsDom = document.querySelector(".products"); 
let cartDom=document.querySelector(".cart-body");
let cartfootDom=document.querySelector(".cart-foot");
let totalDom=document.querySelector(".total");
let cartTotal=0;


let cartlist=[
    {
        name: "Apples",
        amount: 200,
        weight: 0,
        total:0
    },
    {
        name: "Oranges",
        amount: 80,
        weight: 0,
        total:0
    },
    {
        name: "Pears",
        amount: 240,
        weight: 0,
        total:0
    },
    {
        name: "Watermelon",
        amount: 50,
        weight: 0,
        total:0
    }
];


productsDom.addEventListener('click',function(e){
    if(e.target.nodeName=='BUTTON'){
        let wght= e.target.previousSibling.previousSibling.textContent;
        wght= wght.substring(11, wght.length-3);
        let amt=e.target.previousSibling.previousSibling.previousSibling.previousSibling.textContent;
        amt= amt.substring(4);
        let fruit =e.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent;
        //console.log(wght, amt, fruit);
        updateCart(wght, amt, fruit);
        
        
        //console.log(productsDom.getElementsByTagName('h3'));
        /*let prname=e.target.parentNode.childNodes;
        for(let i=0; i<prname.length; i++)
        {   console.log(i+"   "+prname[i].nodeType);}*/
    }
});


function updateCart(wght, amt, fruit){
    amt=parseInt(amt, 10);
    wght=parseFloat(wght, 10);
    
    for (var i=0;i<cartlist.length;i++){
        if(cartlist[i].name==fruit){
            cartlist[i].weight+=wght;
            cartlist[i].total+=amt;
            cartTotal+=amt;
           //if fruit comes in list first time
            if(cartlist[i].total==amt){
                cartDom.innerHTML+=`<tr>
                            <td>1</td>
                            <td>${fruit}</td>
                            <td>${amt}</td>
                            <td>${cartlist[i].weight}</td>
                            <td class="tot">${cartlist[i].total}</td>
                         </tr>`;

            }
            //if repeated fruit
            else{
                let fruit_tr=cartDom.getElementsByTagName("tr")[i];
                let updatedQt=fruit_tr.getElementsByTagName("td")[3];
                let updatedTot=fruit_tr.getElementsByTagName("td")[4];
                updatedTot.innerHTML=cartlist[i].total;
                updatedQt.innerHTML=cartlist[i].weight;

            }
            let footer=cartfootDom.getElementsByTagName("th")[1];
            console.log(footer);
            footer.innerHTML=cartTotal;
            let tax=totalDom.querySelector("#tax");
            tax.innerHTML=(cartTotal*0.2);
            let gdtotal=totalDom.querySelector("#grand-total");
            gdtotal.innerHTML=cartTotal+(cartTotal*0.2);
        }
        
    }
    

}


function renderProducts(){
   products.forEach(function(product){
        productsDom.innerHTML += `<div class="pcard">
                                    <img src="${product.image}" alt="">
                                    <h2>${product.name}</h2>
                                    <h3>Rs. ${product.amount}</h3>
                                    <p>Quantity : ${product.weight}</p>
                                    <button>+ Add to Cart</button>
                                </div>`;
   });
}




renderProducts();