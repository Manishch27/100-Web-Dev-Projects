let images = ['resources/T-shirt.jpg', 'resources/Tranya_smart_watches.webp',  'resources/Bag2.jpg', 'resources/Hoodie.jpg', 'resources/Shoes3.jpg', 'resources/Sweater.jpg', 'resources/Bag4.jpg', 'resources/Rado-watch.jpg','resources/T-shirt2.jpg', 'resources/Bag1.jpg' , 'resources/Winter-cap.jpg', 'resources/Shoes1.jpg','resources/Shoes2.jpg'];

const prod = [
    {name: "Tshirt for EveryOne", filePath: images[0]},
    {name: "Tranya Smart Watch", filePath: images[1]},
    {name: "Puma Roma Bag", filePath: images[2]},
    {name: "Hoodie For everybody", filePath: images[3]},
    {name: "Grand Court Sneaker", filePath: images[4]},
    {name: "Fenta Fashion Hoodie", filePath: images[5]},
    {name: "Bag For Roadtrip", filePath: images[6]},
    {name: "Rado Smart Watch", filePath: images[7]},
    {name: "Tranya Tshirt", filePath: images[8]},
    {name: "Fashionable Bags", filePath: images[9]},
    {name: "Hoodie Fashion", filePath: images[10]},
    {name: "Addidas Sports", filePath: images[11]},
    {name: "Kids Zone", filePath: images[12]}
];

let list = Array.from(document.querySelectorAll(".products"));
list.forEach((elem, i)=>{
    elem.querySelectorAll('img')[0].src = prod[i].filePath;
    elem.querySelectorAll('h2')[0].textContent = prod[i].name;
});

let search = document.querySelectorAll("input")[0];

search.addEventListener('input', ()=>{
    
    // let heading = Array.from(document.querySelectorAll("h2"));
    // heading.forEach((e)=>{
    //     if(e.textContent!=innerText){
    //         e.style.display = "none";
    //     }
    // })
    
    const searchValue  = document.getElementById("search-item").value.toUpperCase();
    const storeItems =  document.querySelectorAll(".Product-items")[0];
    const Product = storeItems .querySelectorAll(".products");
    const pName = storeItems.querySelectorAll("h2");
    Array.from(pName);

    pName.forEach((e, i)=>{
        let match = Product[i].getElementsByTagName("h2")[0];

        const textValue = (match.textContent || match.innerHTML);

        if(textValue.toUpperCase().indexOf(searchValue)>-1){
            console.log(textValue.toUpperCase().indexOf(searchValue));
            Product[i].style.display = "";
        }
        
        else{
        Product[i].style.display = "none";       
    } 

    });

}); 


