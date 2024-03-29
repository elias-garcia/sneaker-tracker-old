import { Gender, NodeProperty, Pagination, ShopScrapingData } from "../interfaces/shop-scraping-data.interface";

export const footshop: ShopScrapingData = {
  name: "Footshop",
  logo: "",
  urls: [
    {
      gender: Gender.Man,
      url: "https://www.footshop.eu/en/5-mens-shoes/location-available_online",
    },
    {
      gender: Gender.Woman,
      url: "https://www.footshop.eu/en/6-womens-shoes/location-available_online",
    },
  ],
  paginationData: {
    type: Pagination.LoadMore,
    data: {
      nextPageSelector: 'button[class*="LoadMoreProducts_button"]',
      loaderSelector: 'div[class*="LoadMoreProducts_loader"]',
    },
  },
  productSelector: 'a[class*="Product_link"]',
  productDataSelectors: {
    name: {
      selector: 'meta[property="og:title"]',
      property: NodeProperty.Content,
    },
    description: {
      selector: "div.product__description",
      property: NodeProperty.InnerText,
      textProcessingData: {
        textReplaceData: {
          regExpData: {
            regExp: "\\n",
            mode: "g",
          },
          replaceWith: "",
        },
      },
    },
    image: {
      selector: 'meta[property="og:image"]',
      property: NodeProperty.Content,
    },
    price: {
      selector: 'meta[property="product:price:amount"]',
      property: NodeProperty.Content,
    },
    currency: {
      selector: 'meta[itemprop="priceCurrency"]',
      property: NodeProperty.Content,
    },
    ref: {
      selector: 'div#about-product strong[itemprop="sku"]',
      property: NodeProperty.Content,
    },
  },
};
