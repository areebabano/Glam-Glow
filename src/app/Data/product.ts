import { Category } from "../types/types";
import Image from "next/image";

export const categories: Category[] = [
  {
    name: "Men's",
    image: "/men.jpg",
    count: 21,
    products: [
      {
        id: 1,
        img: "/shirt.jpg",
        title: "Solid Color Short Sleeve Shirt",
        description:
          "A classic and versatile short-sleeve shirt in a solid army green color. The shirt features a button-down collar and a relaxed fit, making it perfect for both casual and semi-formal occasions. The simple design allows for easy pairing with various bottoms and accessories.",
        rating: 3,
        price: 40.99,
      },
      {
        id: 2,
        img: "/track.jpg",
        title: "Two-Piece Button-Down Shirt and Drawstring Pants Set",
        description:
          "A stylish and comfortable two-piece set featuring a button-down shirt in a muted brown color. The shirt has a relaxed fit and is paired with matching drawstring pants for a coordinated look. The set is perfect for casual outings or lounging around the house.",
        rating: 5,
        price: 199.99,
      },
      {
        id: 3,
        img: "/jeans.jpg",
        title: "Men's Slim-Fit Chino Pants (Multiple Colors)",
        description:
          "Upgrade your wardrobe with these versatile men's slim-fit chino pants, perfect for both casual and formal occasions. available in Black, Beige, Maroon, Gray, and Dark Green color.",
        rating: 3,
        price: 40.99,
      },
      {
        id: 4,
        img: "/jiyunl.jpg",
        title: "Jiyunl Men's Casual Sneakers",
        description:
          "Elevate your casual wardrobe with these Jiyunl men's sneakers. Featuring a sleek design and comfortable fit, these shoes are perfect for everyday wear. The durable construction and stylish details make them a versatile addition to any outfit.",
        rating: 4,
        price: 80,
      },
      {
        id: 5,
        img: "/deershirt.jpg",
        title: "Deer Antler Colorblock Sweatshirt",
        description:
          "This stylish sweatshirt features a bold color block design and a striking deer antler graphic. Crafted from soft, comfortable fabric, it's perfect for casual outings or everyday wear. The inspirational quote adds a touch of motivation to your look.",
        rating: 5,
        price: 49,
      },
      {
        id: 6,
        img: "/twopiece.jpg",
        title: "Casual Two-Piece Set: T-Shirt and Cargo Pants",
        description:
          "This stylish two-piece set offers a comfortable and trendy outfit option. The black t-shirt features a contrasting pocket for a modern touch, while the olive green cargo pants provide ample storage with their multiple pockets. Perfect for casual outings or everyday wear.",
        rating: 3,
        price: 150,
      },
      {
        id: 7,
        img: "/colorblockshirt.jpg",
        title: "Colorblock Button-Up Shirt with Dual Pockets",
        description:
          "This stylish button-up shirt features a bold color block design that adds a modern touch. The contrasting colors and dual pockets create a unique and eye-catching look. Perfect for casual outings or dressier occasions.",
        rating: 4.5,
        price: 99.99,
      },
      {
        id: 8,
        img: "/shorts.jpg",
        title: "Abstract Print Set",
        description:
          "This stylish two-piece set features a comfortable short-sleeve camp collar shirt with an eye-catching abstract print. The matching drawstring shorts complete the look with a casual and relaxed vibe. Perfect for summer days or a laid-back outing.",
        rating: 3,
        price: 90,
      },
      {
        id: 8,
        img: "/cargo.jpg",
        title: "Cargo Pants: Versatile and Stylish",
        description:
          "Elevate your casual wardrobe with these versatile cargo pants. Featuring multiple pockets for added functionality and a comfortable drawstring closure, these pants are perfect for everyday wear or outdoor adventures. The relaxed fit and elastic cuffs ensure a comfortable and stylish look.",
        rating: 2,
        price: 30,
      },
      {
        id: 9,
        img: "/hoodie.jpg",
        title: "Tropical Vibes Hoodie",
        description:
          "Embrace the tropical vibes with this stylish two-tone hoodie. Featuring a contrasting color design and a palm tree graphic, this hoodie is both trendy and comfortable. The zip-up closure adds versatility, making it perfect for layering or wearing on its own.",
        rating: 4,
        price: 75,
      },
      {
        id: 10,
        img: "/tshirt.jpg",
        title: "Essential T-Shirt Pack",
        description:
          "A versatile pack of 6 men's crew neck t-shirts in a variety of colors. Made from soft, breathable cotton for all-day comfort.",
        rating: 3,
        price: 150,
      },
      {
        id: 11,
        img: "/cargoshirt.jpg",
        title: "Military-Style Cargo Shirt",
        description:
          "A versatile military-style shirt with multiple pockets and a comfortable fit.",
        rating: 3,
        price: 150,
      },
      {
        id: 12,
        img: "/sneakers.jpg",
        title: "Chunky High-Top Sneakers",
        description:
          "Elevate your streetwear style with these bold and comfortable high-top sneakers. Featuring a striking black and white color scheme and a chunky, textured design, these shoes are perfect for adding a touch of edge to any outfit. The lace-up closure ensures a secure fit, while the thick sole provides excellent support and cushioning for all-day wear.",
        rating: 5,
        price: 250,
      },
      {
        id: 13,
        img: "/blockshirt.jpg",
        title: "Two-Tone Color Block Shirt",
        description:
          "A trendy short-sleeve shirt featuring a striking beige and white color block design. Perfect for casual outings and comfortable wear.",
        rating: 3,
        price: 120,
      },
      {
        id: 14,
        img: "/cargopants.jpg",
        title: "Chain Detail Cargo Pants",
        description:
          "Stylish cargo pants featuring a drawstring waist, multiple pockets, and eye-catching chain accents. Perfect for a trendy streetwear look.",
        rating: 2,
        price: 64.99,
      },
      {
        id: 15,
        img: "/printshirt.jpg",
        title: "Geometric Print T-Shirt",
        description:
          "A stylish geometric print t-shirt featuring contrasting white and brown colors. Comfortable and perfect for casual wear.",
        rating: 4,
        price: 95,
      },
      {
        id: 16,
        img: "/shirt2.jpg",
        title: "Tropical Bird Print Shirt",
        description:
          "A stylish half-sleeve shirt featuring a vibrant tropical print of a bird perched on a branch amidst lush leaves. The contrasting white and blue fabric adds a modern touch to this classic summer shirt. Perfect for casual outings and warm weather.",
        rating: 4,
        price: 75,
      },
      {
        id: 17,
        img: "/bomberjacket.jpg",
        title: "Burgundy Bomber Jacket",
        description:
          "A classic burgundy bomber jacket with ribbed cuffs and a zip-up closure. Perfect for adding a touch of style to any outfit.",
        rating: 4,
        price: 85,
      },
      {
        id: 18,
        img: "/twopieceset.jpg",
        title: "Brooklyn Two-Piece Set",
        description:
          "A trendy two-piece set featuring a beige and black color block design with Brooklyn print. Perfect for a casual and stylish look.",
        rating: 3,
        price: 99.99,
      },
      {
        id: 19,
        img: "/blacktwopiece.jpg",
        title: "Graphic Tee and Jogger Set",
        description:
          "A stylish two-piece set featuring a graphic t-shirt and jogger pants. Perfect for a casual and comfortable look",
        rating: 4,
        price: 130,
      },
      {
        id: 20,
        img: "/jacket2.jpg",
        title: "Two-Tone Varsity Jacket",
        description:
          "A stylish varsity jacket featuring a two-tone design and embroidered patches. Perfect for adding a touch of personality to your casual wardrobe.",
        rating: 4,
        price: 130,
      },
      {
        id: 21,
        img: "/shoes.jpg",
        title: "Casual Canvas Sneakers with Sport Detail",
        description: "These comfortable and stylish canvas sneakers feature a classic lace-up design in a brown and white color combination. The SPORT text printed on the side adds a touch of athletic flair. The sneakers have a breathable fabric lining and a durable rubber sole, making them perfect for everyday wear.",
        rating: 3,
        price: 70.85,
      },
    ],
  },
  {
    name: "Women's",
    image: "/womens.jpg",
    count: 20,
    products: [
      {
        id: 22,
        img: "/outfit1.jpg",
        title: "Turtleneck Two-Piece: Perfect for Fall",
        description:
          "Perfect for a casual day out or a night in, these cozy knit sets are a must-have for your fall wardrobe. The turtleneck tops and matching pants offer a stylish and comfortable look.",
        rating: 5,
        price: 79.99,
      },
      {
        id: 23,
        img: "/shoe.jpg",
        title: "Daisy Delight: Cute White Sneakers",
        description:
          "Step into spring with these adorable white sneakers featuring delicate daisy embroidery. The soft pink accents and comfortable design make them perfect for any casual occasion.",
        rating: 4,
        price: 60.85,
      },
      {
        id: 24,
        img: "/hoodie4.jpg",
        title: "Cherry Blossom Dream Hoodie",
        description:
          "Embrace the beauty of spring with this stunning cherry blossom hoodie. Featuring a delicate floral design and soft fabric, this cozy piece is perfect for staying warm and stylish.",
        rating: 5,
        price: 59.99,
      },
      {
        id: 25,
        img: "/hoodie3.jpg",
        title: "Floral Print Hoodie",
        description:
          "A trendy black hoodie featuring a beautiful floral print with sunflowers, wildflowers, and butterflies. Perfect for adding a touch of nature to your casual wardrobe.",
        rating: 5,
        price: 44.99,
      },
      {
        id: 26,
        img: "/cargo1.jpg",
        title: "Wide Leg Cargo Jeans",
        description:
          "Stylish wide leg cargo jeans with multiple pockets. Perfect for a casual and trendy look.",
        rating: 2,
        price: 30,
      },
      {
        id: 27,
        img: "/jacket.jpg",
        title: "Vegan Suede Moto Jacket",
        description: "A stylish and edgy moto jacket made from vegan suede in a classic camel brown color. The jacket features a classic biker silhouette with asymmetrical zippers, a belted waist, and shoulder epaulets. Perfect for adding a touch of rock and roll to any outfit.",
        rating: 5,
        price: 79.99,
      },
      {
        id: 28,
        img: "/floral.jpg",
        title: "Floral Top and Pants Set",
        description:
          "Embrace Eastern elegance with this beautiful two-piece outfit. The white embroidered top adds a touch of sophistication, while the flowing pink palazzo pants provide comfort and style. Perfect for special occasions or everyday wear.",
        rating: 5,
        price: 74.99,
      },
      {
        id: 29,
        img: "/3pieceset.jpg",
        title: "Embroidered Elegance Three-Piece Set",
        description:
          "Elevate your wardrobe with this sophisticated three-piece set. Featuring a delicate embroidered white blouse, a stylish brown vest with a belted closure, and wide-leg brown pants, this outfit offers both comfort and style. Perfect for a variety of occasions, from casual outings to formal events. Pair with your favorite sneakers or heels to complete the look.",
        rating: 5,
        price: 99.99,
      },
      {
        id: 30,
        img: "/sweatshirt.jpg",
        title: "Cat Ear Sweatshirt with Detachable Collar",
        description:
          "This playful and trendy sweatshirt features adorable cat ears embroidered on the front and a detachable collar for a versatile look. The soft, comfortable fabric makes it perfect for everyday wear. Choose from three colors: light blue, white, and black.",
        rating: 5,
        price: 159,
      },
      {
        id: 31,
        img: "/sandal.jpg",
        title: "Pearl Embellished Platform Sandals",
        description:
          "Elevate your summer style with these elegant platform sandals. The delicate pearl embellishments and ruffled detailing add a touch of femininity, while the chunky heel provides both comfort and style. These sandals are perfect for a variety of occasions, from casual outings to special events.",
        rating: 5,
        price: 77,
      },
      {
        id: 32,
        img: "/outfit3.jpg",
        title: "Knitted Sweater and Skirt Set",
        description:
          "Embrace the spirit of love with this adorable knitted set. The sweater features a charming heart design with pearl embellishments, while the matching skirt adds a touch of elegance.",
        rating: 4,
        price: 69.99,
      },
      {
        id: 33,
        img: "/sweatshirt2.jpg",
        title: "Floral Print Sweatshirt",
        description:
          "This stylish sweatshirt features a beautiful floral print on both the front and back. The soft, comfortable fabric and classic crew neckline make it perfect for everyday wear. The intricate floral design adds a touch of elegance and personality.",
        rating: 4,
        price: 34.99,
      },
      {
        id: 34,
        img: "/outfit2.jpg",
        title: "Modern Classic: Knitted Set with Contrast Stripes",
        description:
          "Elevate your casual wardrobe with this modern classic knit set. The comfortable fabric and stylish design make it perfect for both everyday wear and special occasions.",
        rating: 5,
        price: 89.99,
      },
      {
        id: 35,
        img: "/sandals.jpg",
        title: "Buckle Detail Platform Sandals",
        description:
          "These stylish platform sandals feature a chunky heel and a buckle closure for a trendy and edgy look. The soft, comfortable material and adjustable strap make them perfect for all-day wear. The contrasting colors add a playful touch.",
        rating: 4,
        price: 55,
      },
      {
        id: 36,
        img: "/top.jpg",
        title: "Bow Tie Neck Dip Hem Frill Blouse",
        description:
          "This stylish mustard yellow blouse features a charming bow tie at the neck, a ruffled hem, and long sleeves with frilled cuffs. The relaxed fit and flowy fabric make it a comfortable and versatile piece for your wardrobe. Perfect for pairing with jeans, skirts, or trousers.",
        rating: 3,
        price: 39,
      },
      {
        id: 37,
        img: "/trenchcoat.jpg",
        title: "Modern Classic: Updated Trench Coat",
        description:
          "Add a touch of luxury to your look with this elegant trench coat. The high-quality fabric and sophisticated details make it a statement piece.",
        rating: 5,
        price: 80,
      },
      {
        id: 38,
        img: "/sandal4.jpg",
        title: "Cute and Comfy: Bow Detail Mary Janes",
        description:
          "Looking for a comfortable and stylish shoe? These Mary Jane shoes are the perfect option. The chunky heels and cushioned soles provide all-day comfort.",
        rating: 5,
        price: 75,
      },
      {
        id: 39,
        img: "/jeans2.jpg",
        title: "Boho Chic: Floral Denim Pants",
        description:
          "Stay ahead of the trend with these embroidered denim jeans. The wide-leg silhouette and floral details make them a must-have item.",
        rating: 4,
        price: 55,
      },
      {
        id: 40,
        img: "/hoodie2.jpg",
        title: "Cozy and Chic: Hooded Dress with Floral Embroidery",
        description:
          "Stay warm and stylish in this cozy hooded dress. The soft fabric and plush lining provide ultimate comfort, while the beautiful embroidery adds a touch of sophistication.",
        rating: 5,
        price: 49.99,
      },
      {
        id: 41,
        img: "/outfit.jpg",
        title: "Comfortable and Chic: Two-Piece Outfit",
        description:
          "Stay comfortable and chic in this two-piece outfit. The soft fabric and flattering silhouette make it a versatile addition to your wardrobe.",
        rating: 5,
        price: 49.99,
      },
    ],
  },
  {
    name: "Accessories",
    image: "/accessories.jpg",
    count: 20,
    products: [
      {
        id: 42,
        img: "/handbag.jpg",
        title: "Pearl-Adorned Shell Bag: A Seaside Chic",
        description: "Embrace the beauty of the ocean with this pearl-adorned shell bag. The intricate details and elegant design make it a must-have accessory for any fashion-conscious individual.",
        rating: 5,
        price: 89.99,
      },
      {
        id: 43,
        img: "/butterfly.jpg",
        title: "Winging It: Colorful Butterfly Pendants",
        description: "Flutter into fashion with these adorable butterfly pendants. The perfect accessory to add a touch of whimsy to any outfit.",
        rating: 3,
        price: 15,
      },
      {
        id: 44,
        img: "/jewelryset.jpg",
        title: "Elegant Gift Set: Watch, Bracelet, Necklace, and Earrings",
        description: "Embrace classic charm with this timeless jewelry collection. The elegant design and high-quality materials make it a perfect gift for any occasion.",
        rating: 4,
        price: 74,
      },
      {
        id: 45,
        img: "/hairclaw.jpg",
        title: "Butterfly Hair Claw: A Charming Accessory",
        description: "Add a touch of whimsy to your hairstyle with this adorable butterfly hair claw. Perfect for securing hair up or adding a decorative touch, this accessory is a must-have for any fashion-conscious individual.",
        rating: 3,
        price: 33.99,
      },
      {
        id: 46,
        img: "/clip.jpg",
        title: "Rhinestone Hair Clips: Elevate Your Style",
        description: "Add a touch of glamour to your look with these stunning rhinestone hair clips. Perfect for weddings, parties, or everyday wear, these clips feature a sleek design adorned with sparkling rhinestones. They're easy to use and can be styled in various ways.",
        rating: 3,
        price: 25,
      },
      {
        id: 47,
        img: "/bracelet.jpg",
        title: "Starry Night Bracelet: A Celestial Charm",
        description: "Embrace the beauty of the cosmos with this enchanting bracelet. Featuring a captivating blend of blue gemstones and pearls, the Starry Night Bracelet is a true masterpiece. The shimmering star pendant adds a touch of celestial magic, making it the perfect accessory for any occasion.",
        rating: 5,
        price: 44,
      },
      {
        id: 48,
        img: "/earing.jpg",
        title: "Floral Diamond Earrings",
        description: "These exquisite floral diamond earrings are a perfect blend of elegance and sparkle. The delicate flower design, adorned with shimmering diamonds, creates a timeless and sophisticated look. The earrings are perfect for any occasion, from casual outings to special events.",
        rating: 5,
        price: 99,
      },
      {
        id: 49,
        img: "/bag.jpg",
        title: "Geometric Shoulder Bag: A Stylish Statement",
        description: "Elevate your outfit with this trendy shoulder bag. Featuring a chic geometric pattern and a vibrant blue color, this bag is both stylish and functional. The chunky chain strap adds a touch of edginess, while the spacious interior provides ample room for your essentials.",
        rating: 4,
        price: 69,
      },
      {
        id: 50,
        img: "/tops.jpg",
        title: "Daisy Flower Earrings: A Collection of Sunny Charm",
        description: "Add a touch of spring to your outfit with these adorable daisy flower earrings. Available in a variety of styles, from delicate studs to playful drop earrings, these earrings feature vibrant yellow and white colors. They're perfect for casual outings, spring or summer events, or simply adding a touch of cheer to your look.",
        rating: 4,
        price: 99,
      },
      {
        id: 51,
        img: "/pendant.jpg",
        title: "Celestial Planet Necklaces",
        description: "These enchanting celestial planet necklaces are a perfect way to add a touch of cosmic beauty to your outfit. The necklaces feature delicate gold chains adorned with charming planet pendants, complete with rings and sparkling stars. They are perfect for both casual and formal occasions.",
        rating: 5,
        price: 77,
      },
      {
        id: 52,
        img: "/watch1.jpg",
        title: "Minimalist Square Watches",
        description: "These stylish minimalist square watches are perfect for adding a touch of modern elegance to your outfit. The watches feature a sleek square design with a variety of strap colors and finishes. The simple yet sophisticated look makes them suitable for both casual and formal occasions.",
        rating: 3,
        price: 45,
      },
      {
        id: 53,
        img: "/bag2.jpg",
        title: "Embossed Satchel Bag with Scarf",
        description: "This stylish satchel bag features a quilted design and a chic scarf accent. The structured shape and double handles make it perfect for carrying your essentials in style. The removable scarf adds a touch of personality and can be styled in various ways.",
        rating: 5,
        price: 89,
      },
      {
        id: 54,
        img: "/bow.jpg",
        title: "Floral Fantasy Hair Bow",
        description: "A beautiful, handcrafted hair bow featuring a delicate white fabric base adorned with embroidered flowers in vibrant pink, yellow, and green. The bow is embellished with sparkling pearls for a touch of elegance. Perfect for adding a touch of whimsy to any outfit.",
        rating: 4,
        price: 33,
      },
      {
        id: 55,
        img: "/bracelet2.jpg",
        title: "Rose Petal Charm Bracelet Set",
        description: "A delicate and feminine bracelet set featuring a rose-gold bangle adorned with charming pink roses and green leaves. The set also includes a matching ring with a similar design, creating a coordinated and elegant look. Perfect for adding a touch of romance to any outfit.",
        rating: 3,
        price: 45,
      },
      {
        id: 56,
        img: "/clipset.jpg",
        title: "Versatile Hair Clip Set",
        description: "A stylish and versatile set of hair clips featuring a variety of designs, including delicate daisies, sparkling rhinestones, elegant feathers, and classic pearls. These clips are perfect for adding a touch of glamour to any hairstyle, whether you're going for a casual or formal look.",
        rating: 4,
        price: 65,
      },
      {
        id: 57,
        img: "/scrunchie.jpg",
        title: "Daisy Delight Hair Scrunchies",
        description: "A charming set of oversized organza hair scrunchies adorned with delicate embroidered daisies. These scrunchies come in a variety of soft pastel colors and are perfect for adding a touch of floral flair to any hairstyle. They are both comfortable and stylish, making them a must-have accessory for any fashion-conscious individual.",
        rating: 3,
        price: 34.99,
      },
      {
        id: 58,
        img: "/minibackpack.jpg",
        title: "Mini Pastel Backpack",
        description: "A cute and compact pastel-pink backpack, perfect for carrying essentials on the go. The bag features a stylish design with a front pocket and adjustable straps. It's made from a durable faux leather material and is ideal for casual outings or everyday use.",
        rating: 4,
        price: 60,
      },
      {
        id: 59,
        img: "/ring.jpg",
        title: "Vintage-Inspired Emerald Cut Diamond Ring",
        description: "A timeless and elegant ring featuring a classic emerald cut diamond set in a vintage-inspired setting. The diamond is surrounded by smaller diamonds, creating a dazzling and luxurious look. The ring is crafted from platinum for durability and a timeless appeal.",
        rating: 5,
        price: 280.99,
      },
      {
        id: 60,
        img: "/bracelet3.jpg",
        title: "Gucci Double G Flower Bracelet",
        description: "A luxurious and stylish gold-tone bracelet featuring the iconic Gucci Double G logo and delicate pink flower accents. The bracelet is adorned with sparkling crystals, adding a touch of glamour and sophistication. Perfect for elevating any outfit with a touch of designer flair.",
        rating: 5,
        price: 380,
      },
      {
        id: 61,
        img: "/ring2.jpg",
        title: "Butterfly Band Ring",
        description: "A delicate and feminine ring featuring a series of interconnected butterfly motifs adorned with sparkling cubic zirconia stones. The ring is made from rose gold-plated metal, adding a touch of elegance and sophistication. Perfect for adding a touch of whimsy to your outfit.",
        rating: 5,
        price: 169.99,
      },
    ],
  },
];

