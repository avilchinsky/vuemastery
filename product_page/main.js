var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/product_red.jpg',
        inStock: true,
        details: [
            "80% cotton",
            "20% polyester",
            "Gender-neutral"
        ],
        variants: [
            {
                id: 123,
                color: "red"
            },
            {
                id: 1234,
                color: "blue"
            }
        ]
    }
})