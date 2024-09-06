window.onload = () => {

    ele = document.getElementById('navbarBrand');
    if (ele) { ele.innerHTML = 'Essense Frontier'; }
    isLoading = false;
    animatedBackgroundElements = document.getElementsByClassName('c-animated-background');
    mainClassElements = document.getElementsByClassName('main');

    // Apply styles to each element
    for (let i = 0; i < animatedBackgroundElements.length; i++) {
        if (isLoading) { animatedBackgroundElements[i].style.zIndex = '2'; mainClassElements[i].style.display = 'none'; } else {
            animatedBackgroundElements[i].style.display = 'none'; animatedBackgroundElements[i].style.zIndex = '0';
        }
    }

    console.log("isLoading:", isLoading);

    // Data for the products
    products = [
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" },
        { image: "/assets/products/Capture-removebg-preview.png", title: "Bleu Chanel", subTitle: "100 ml", price: "Rs. 3000 PKR" }
    ];

    // Function to generate list view

    function generateListView(products) {
        productList = document.getElementById("product-container");
        productList.innerHTML = null;
        products.forEach((product, index) => {
            console.log("index", index)
            productList.innerHTML += `
            <div style="width: 20rem !important;height: 31rem;!important" class="card d-flex flex-column align-items-center justify-content-center">
                <span style="position: absolute;width: 20rem;height: 24.5rem;border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-left-radius: 0;border-bottom-right-radius: 0;z-index: 1;top: 0;left: 0;right: 0;bottom: 0;opacity: 0.25;border-radius: 5px 5px;" class="backgroundColor"></span>
                <img style="object-fit: contain;max-height: 19rem;max-width: 19rem;aspect-ratio: 1 / 1;position: absolute;top: 2.5rem;z-index: 2;mix-blend-mode: normal;"src="${product.image}" alt="${product.title}" class="img-fluid" style="max-width: 150px;">
                <div style="    gap: 1.5rem;padding-bottom: .5rem;position: absolute;bottom: 0;display: flex;flex-direction: column;align-items: center;background-color: black;color: gray;width:100%">
                <span style="font-size:x-large; z-index: 1;font-weight: bold;letter-spacing: 0.5rem;"class="title">${product.title}</span>
                <span style="font-style: italic;z-index-1"class="sub-title">Size: ${product.subTitle}</span>
                <span style="z-index: 1;font-weight: bold;text-transform: uppercase;" class="price">${product.price}</span>
                </div>
            </div>
        `;

            // Append list item to the list
            // productList.appendChild(listItem);
        });
    }

    // Call the function to generate the list view
    generateListView(products);
}