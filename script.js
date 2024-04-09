var arr = [
    {name: "Mobile", image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"},
    {name: "Furniture", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Health", image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Beauty", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Pets", image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Cloth", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Style", image: "https://images.unsplash.com/photo-1508852951744-beab078a4b2b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Fashion", image: "https://images.unsplash.com/photo-1557777586-f6682739fcf3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

let cart = [];

function showImage(){
    let clutter = "";
    arr.forEach( (obj , index)=>{
        clutter += `<div class="box1 box">
        <div class="img-content">
            <h2>${obj.name}</h2>
        <div class="box-img" style="background-image: url('${obj.image}');"></div>
        <p><a data-index=${index} class="add" href="#">See More</a></p>
        </div>
</div>`;
    })
     document.querySelector(".shop-section").innerHTML = clutter;
}

function showOverlay(){
    let input = document.querySelector(".search-input");
    input.addEventListener("focus",function(){
        document.querySelector(".overlay").style.display = "block"
        
    })
    input.addEventListener("blur",function(){
        document.querySelector(".overlay").style.display = "none"
         document.querySelector(".search").style.display = "none";
    })
    
    input.addEventListener("input",function(){
        let filterarr = arr.filter(obj =>obj.name.toLowerCase().startsWith(input.value));
        let clutter = "";
        filterarr.forEach((obj)=>{
            clutter += `<h3>${obj.name}</h3>`
            console.log(obj.name);
        })
        document.querySelector(".search").style.display = "block";
        document.querySelector(".search").innerHTML = clutter;
    })
}

function addtocart(){
    document.querySelector(".shop-section").addEventListener("click",function(e){
        if(e.target.classList.contains("add")){
            cart.push(arr[e.target.dataset.index])
        }
    })
}

function showCart(){
    document.querySelector(".nav-cart").addEventListener("click",function(){
        document.querySelector(".cart-add").style.display = "block";
        let clutter = "";
        cart.forEach((pro)=>{
            clutter += `<div  class="cart">
            <img src="${pro.image}"/>
            <h2>${pro.name}</h2>
            <i  class="remove fa-solid fa-xmark"></i>
        </div>`
        })
        document.querySelector(".cart-add").innerHTML = clutter;
        document.querySelector(".remove").addEventListener("click",function(){
            document.querySelector(".cart-add").remove();
        })
    })
}

showImage()
showOverlay()
addtocart()
showCart()
