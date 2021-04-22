# Daisy Candles 

## Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/3496e57b-d045-4c2e-94d0-76557c496e99/deploy-status)](https://app.netlify.com/sites/daisy-candles/deploys)

### Lighthouse
![Lighthouse Accessibility](badges/lighthouse_accessibility.svg)
![Lighthouse Best Practices](badges/lighthouse_best-practices.svg)
![Lighthouse Performance](badges/lighthouse_performance.svg)
![Lighthouse SEO](badges/lighthouse_seo.svg)

![Lighthouse Scores](badges/lighthouse.png)

##  Introduction

Daisy Candles is a single-page web app created using React. It is mostly focused on products page in which user is able to view all the products from firebase database. The products can be filtered as well. User is also able to naviagte to different pages in the app.


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

## Live Website

https://daisy-candles.netlify.app