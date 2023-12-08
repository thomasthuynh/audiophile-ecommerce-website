import { Product } from "../types";

export const headphones: Product[] = [
  {
    id: 1,
    slug: "xx99-mark-two-headphones",
    name: "XX99 Mark II Headphones",
    image: {
      mobile: new URL(
        "./product-xx99-mark-two-headphones/mobile/image-product.jpg",
        import.meta.url,
      ).href,
      tablet: new URL(
        "./product-xx99-mark-two-headphones/tablet/image-product.jpg",
        import.meta.url,
      ).href,
      desktop: new URL(
        "./product-xx99-mark-two-headphones/desktop/image-product.jpg",
        import.meta.url,
      ).href,
    },
    category: "headphones",
    categoryImage: {
      mobile: new URL(
        "./product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg",
        import.meta.url,
      ).href,
      tablet: new URL(
        "./product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg",
        import.meta.url,
      ).href,
      desktop: new URL(
        "./product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
        import.meta.url,
      ).href,
    },
    new: true,
    price: 2999,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    includes: [
      {
        quantity: 1,
        item: "Headphone unit",
      },
      {
        quantity: 2,
        item: "Replacement earcups",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 5m audio cable",
      },
      {
        quantity: 1,
        item: "Travel bag",
      },
    ],
    gallery: {
      first: {
        mobile: new URL(
          "./product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg",
          import.meta.url,
        ).href,
        tablet: new URL(
          "./product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg",
          import.meta.url,
        ).href,
        desktop: new URL(
          "./product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg",
          import.meta.url,
        ).href,
      },
      second: {
        mobile: new URL(
          "./product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg",
          import.meta.url,
        ).href,
        tablet: new URL(
          "./product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg",
          import.meta.url,
        ).href,
        desktop: new URL(
          "./product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg",
          import.meta.url,
        ).href,
      },
      third: {
        mobile: new URL(
          "./product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg",
          import.meta.url,
        ).href,
        tablet: new URL(
          "./product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg",
          import.meta.url,
        ).href,
        desktop: new URL(
          ".product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg",
          import.meta.url,
        ).href,
      },
    },
    others: [
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: new URL(
            "./shared/mobile/image-xx99-mark-one-headphones.jpg",
            import.meta.url,
          ).href,
          tablet: new URL(
            "./shared/tablet/image-xx99-mark-one-headphones.jpg",
            import.meta.url,
          ).href,
          desktop: new URL(
            "./shared/desktop/image-xx99-mark-one-headphones.jpg",
            import.meta.url,
          ).href,
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: new URL(
            "./shared/mobile/image-xx59-headphones.jpg",
            import.meta.url,
          ).href,
          tablet: new URL(
            "./shared/tablet/image-xx59-headphones.jpg",
            import.meta.url,
          ).href,
          desktop: new URL(
            "./shared/desktop/image-xx59-headphones.jpg",
            import.meta.url,
          ).href,
        },
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: new URL(
            "./shared/mobile/image-zx9-speaker.jpg",
            import.meta.url,
          ).href,
          tablet: new URL(
            "./shared/tablet/image-zx9-speaker.jpg",
            import.meta.url,
          ).href,
          desktop: new URL(
            "./shared/desktop/image-zx9-speaker.jpg",
            import.meta.url,
          ).href,
        },
      },
    ],
  },
  {
    id: 2,
    slug: "xx99-mark-one-headphones",
    name: "XX99 Mark I Headphones",
    image: {
      mobile:
        new URL("./product-xx99-mark-one-headphones/mobile/image-product.jpg", import.meta.url).href,
      tablet:
        new URL("./product-xx99-mark-one-headphones/tablet/image-product.jpg", import.meta.url).href,
      desktop:
        new URL("./product-xx99-mark-one-headphones/desktop/image-product.jpg", import.meta.url).href,
    },
    category: "headphones",
    categoryImage: {
      mobile:
        new URL("./product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg", import.meta.url).href,
      tablet:
        new URL("./product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg", import.meta.url).href,
      desktop:
        new URL("./product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg", import.meta.url).href,
    },
    new: false,
    price: 1750,
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    features:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.",
    includes: [
      {
        quantity: 1,
        item: "Headphone unit",
      },
      {
        quantity: 2,
        item: "Replacement earcups",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 5m audio cable",
      },
    ],
    gallery: {
      first: {
        mobile:
          new URL("./product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg", import.meta.url).href,
        tablet:
          new URL("./product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg", import.meta.url).href,
        desktop:
          new URL("./product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg", import.meta.url).href,
      },
      second: {
        mobile:
          new URL("./product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg", import.meta.url).href,
        tablet:
          new URL("./product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg", import.meta.url).href,
        desktop:
          new URL("./product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg", import.meta.url).href,
      },
      third: {
        mobile:
          new URL("./product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg", import.meta.url).href,
        tablet:
          new URL("./product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg", import.meta.url).href,
        desktop:
          new URL("./product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg", import.meta.url).href,
      },
    },
    others: [
      {
        slug: "xx99-mark-two-headphones",
        name: "XX99 Mark II",
        image: {
          mobile: new URL("./shared/mobile/image-xx99-mark-two-headphones.jpg", import.meta.url).href,
          tablet: new URL("./shared/tablet/image-xx99-mark-two-headphones.jpg", import.meta.url).href,
          desktop: new URL("./shared/desktop/image-xx99-mark-two-headphones.jpg", import.meta.url).href,
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: new URL("./shared/mobile/image-xx59-headphones.jpg", import.meta.url).href,
          tablet: new URL("./shared/tablet/image-xx59-headphones.jpg", import.meta.url).href,
          desktop: new URL("./shared/desktop/image-xx59-headphones.jpg", import.meta.url).href,
        },
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: new URL("./shared/mobile/image-zx9-speaker.jpg", import.meta.url).href,
          tablet: new URL("./shared/tablet/image-zx9-speaker.jpg", import.meta.url).href,
          desktop: new URL("./shared/desktop/image-zx9-speaker.jpg", import.meta.url).href,
        },
      },
    ],
  },
  {
    id: 3,
    slug: "xx59-headphones",
    name: "XX59 Headphones",
    image: {
      mobile: new URL("./product-xx59-headphones/mobile/image-product.jpg", import.meta.url).href,
      tablet: new URL("./product-xx59-headphones/tablet/image-product.jpg", import.meta.url).href,
      desktop: new URL("./product-xx59-headphones/desktop/image-product.jpg", import.meta.url).href,
    },
    category: "headphones",
    categoryImage: {
      mobile:
        new URL("./product-xx59-headphones/mobile/image-category-page-preview.jpg", import.meta.url).href,
      tablet:
        new URL("./product-xx59-headphones/tablet/image-category-page-preview.jpg", import.meta.url).href,
      desktop:
        new URL("./product-xx59-headphones/desktop/image-category-page-preview.jpg", import.meta.url).href,
    },
    new: false,
    price: 899,
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    features:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    includes: [
      {
        quantity: 1,
        item: "Headphone unit",
      },
      {
        quantity: 2,
        item: "Replacement earcups",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 5m audio cable",
      },
    ],
    gallery: {
      first: {
        mobile: new URL("./product-xx59-headphones/mobile/image-gallery-1.jpg", import.meta.url).href,
        tablet: new URL("./product-xx59-headphones/tablet/image-gallery-1.jpg", import.meta.url).href,
        desktop: new URL("./product-xx59-headphones/desktop/image-gallery-1.jpg", import.meta.url).href,
      },
      second: {
        mobile: new URL("./product-xx59-headphones/mobile/image-gallery-2.jpg", import.meta.url).href,
        tablet: new URL("./product-xx59-headphones/tablet/image-gallery-2.jpg", import.meta.url).href,
        desktop: new URL("./product-xx59-headphones/desktop/image-gallery-2.jpg", import.meta.url).href,
      },
      third: {
        mobile: new URL("./product-xx59-headphones/mobile/image-gallery-3.jpg", import.meta.url).href,
        tablet: new URL("./product-xx59-headphones/tablet/image-gallery-3.jpg", import.meta.url).href,
        desktop: new URL("./product-xx59-headphones/desktop/image-gallery-3.jpg", import.meta.url).href,
      },
    },
    others: [
      {
        slug: "xx99-mark-two-headphones",
        name: "XX99 Mark II",
        image: {
          mobile: new URL("./shared/mobile/image-xx99-mark-two-headphones.jpg", import.meta.url).href,
          tablet: new URL("./shared/tablet/image-xx99-mark-two-headphones.jpg", import.meta.url).href,
          desktop: new URL("./shared/desktop/image-xx99-mark-two-headphones.jpg", import.meta.url).href,
        },
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: new URL("./shared/mobile/image-xx99-mark-one-headphones.jpg", import.meta.url).href,
          tablet: new URL("./shared/tablet/image-xx99-mark-one-headphones.jpg", import.meta.url).href,
          desktop: new URL("./shared/desktop/image-xx99-mark-one-headphones.jpg", import.meta.url).href,
        },
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: new URL("./shared/mobile/image-zx9-speaker.jpg", import.meta.url).href,
          tablet: new URL("./shared/tablet/image-zx9-speaker.jpg", import.meta.url).href,
          desktop: new URL("./shared/desktop/image-zx9-speaker.jpg", import.meta.url).href,
        },
      },
    ],
  },
];

export default headphones;