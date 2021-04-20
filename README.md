# Daisy Candles

## Getting Started

1. Install the project dependencies
```shell
npm install
```

2. Run the application
```shell
npm run start
```

## Component Map

- App
    - HomePage
    - AboutUs
    - Contact
    - ShopProducts
        - ProductFilter
        - ProductList
            - [Product]
            - Pagination

## Paths

- `/`: `HomePage`
- `/products`: `ShopProducts`
    - `/products/filter`
- `/product/product-name`: `ProductPage`
- `/about`: `AboutUs`

<!--
- Pages: Home, About Us, Contact, Products
    - Products: categories? items? search results? -->