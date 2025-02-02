const alldata =[
    {
        "name": "Model S",
        "brand": "Tesla",
        "engine": "Electric",
        "cylinder": 0,
        "top_speed": 200,
        "0_to_60": 2.4,
        "category": "EV",
        "image": "https://hips.hearstapps.com/hmg-prod/images/2024-tesla-model-s-107-6572200e43fa1.jpg?crop=0.473xw:0.355xh;0.254xw,0.341xh&resize=1200:*",
        "price": 79999,
        "discount_price": null
    },
    {
        "name": "Mustang Mach-E",
        "brand": "Ford",
        "engine": "Electric",
        "cylinder": 0,
        "top_speed": 180,
        "0_to_60": 3.5,
        "category": "EV",
        "image": "https://hips.hearstapps.com/hmg-prod/images/2024-ford-mustang-mach-e-rally-1-64f87f1882d10.jpg?crop=0.639xw:0.480xh;0.205xw,0.376xh&resize=1200:*",
        "price": 43995,
        "discount_price": 41995
    },
    {
        "name": "Prius",
        "brand": "Toyota",
        "engine": "Hybrid",
        "cylinder": 4,
        "top_speed": 112,
        "0_to_60": 9.8,
        "category": "Hybrid",
        "image": "https://global.toyota/pages/prius20th/evolution/history/images/evolution_top_003.jpg",
        "price": 24325,
        "discount_price": 23325
    },
    {
        "name": "Civic",
        "brand": "Honda",
        "engine": "Gasoline",
        "cylinder": 4,
        "top_speed": 130,
        "0_to_60": 7.5,
        "category": "Gas",
        "image": "https://cdn.motor1.com/images/mgl/mMEQ8j/s3/2024-honda-civic-rs-jdm.jpg",
        "price": 22550,
        "discount_price": null
    },
    {
        "name": "Leaf",
        "brand": "Nissan",
        "engine": "Electric",
        "cylinder": 0,
        "top_speed": 144,
        "0_to_60": 7.4,
        "category": "EV",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtulWA1WutIqcw_HqbGlB8kzDt3VhKVaMOw&s",
        "price": 31900,
        "discount_price": 29900
    },
    {
        "name": "Ioniq",
        "brand": "Hyundai",
        "engine": "Hybrid",
        "cylinder": 4,
        "top_speed": 115,
        "0_to_60": 8.9,
        "category": "Hybrid",
        "image": "https://s7d1.scene7.com/is/image/hyundai/2024-ioniq-5-0219-notalent-gallery:16-9?wid=1440&hei=810&qlt=85,0&fmt=webp",
        "price": 23400,
        "discount_price": 22400
    },
    {
        "name": "Camaro",
        "brand": "Chevrolet",
        "engine": "Gasoline",
        "cylinder": 8,
        "top_speed": 198,
        "0_to_60": 4.0,
        "category": "Gas",
        "image": "https://hips.hearstapps.com/hmg-prod/images/2025-chevrolet-camaro-z28-6452f1ee4d5ee.jpg?crop=0.7691851851851852xw:1xh;center,top&resize=1200:*",
        "price": 25000,
        "discount_price": 24000
    },
    {
        "name": "Taycan",
        "brand": "Porsche",
        "engine": "Electric",
        "cylinder": 0,
        "top_speed": 161,
        "0_to_60": 2.6,
        "category": "EV",
        "image": "https://cdn.motor1.com/images/mgl/QEmQB/s1/2020-porsche-taycan.webp",
        "price": 103800,
        "discount_price": 99800
    },
    {
        "name": "Accord",
        "brand": "Honda",
        "engine": "Hybrid",
        "cylinder": 4,
        "top_speed": 115,
        "0_to_60": 6.7,
        "category": "Hybrid",
        "image": "https://di-honda-enrollment.s3.amazonaws.com/2021/model-pages/accord/trims/honda_accord_touring_2.0t.jpg",
        "price": 26720,
        "discount_price": 25720
    },
    {
        "name": "Challenger",
        "brand": "Dodge",
        "engine": "Gasoline",
        "cylinder": 8,
        "top_speed": 203,
        "0_to_60": 3.5,
        "category": "Gas",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqabeSedoGHRy25q5bzxd-49QayyhYEN15Ag&s",
        "price": 28895,
        "discount_price": 27895
    },
    {
        "name": "Bolt",
        "brand": "Chevrolet",
        "engine": "Electric",
        "cylinder": 0,
        "top_speed": 93,
        "0_to_60": 6.5,
        "category": "EV",
        "image": "https://cdn.motor1.com/images/mgl/vL6GY/s1/2022-nissan-bolt-ev-review-exterior.jpg",
        "price": 36620,
        "discount_price": 34620
    },
    {
        "name": "Insight",
        "brand": "Honda",
        "engine": "Hybrid",
        "cylinder": 4,
        "top_speed": 115,
        "0_to_60": 7.7,
        "category": "Hybrid",
        "image": "https://hips.hearstapps.com/hmg-prod/images/2021-honda-insight-02-1634321384.jpg?crop=0.878xw:0.659xh;0.0497xw,0.315xh&resize=1200:*",
        "price": 25010,
        "discount_price": 24010
    },
    {
        "name": "Model 3",
        "brand": "Tesla",
        "engine": "Electric",
        "cylinder": 0,
        "top_speed": 162,
        "0_to_60": 3.1,
        "category": "EV",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg",
        "price": 39999,
        "discount_price": 37999
    },
    {
        "name": "Fusion",
        "brand": "Ford",
        "engine": "Hybrid",
        "cylinder": 4,
        "top_speed": 110,
        "0_to_60": 8.0,
        "category": "Hybrid",
        "image": "https://www.jonathanmotorcars.com/imagetag/1680/main/l/Used-2017-Ford-Fusion-V6-Sport-1693599293.jpg",
        "price": 28000,
        "discount_price": 27000
    },
    {
        "name": "Corolla",
        "brand": "Toyota",
        "engine": "Gasoline",
        "cylinder": 4,
        "top_speed": 112,
        "0_to_60": 8.5,
        "category": "Gas",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaXk0rI2HlnDSIj1yrS0pp15gbeH_ew-62-Q&s",
        "price": 20425,
        "discount_price": null
    },
    {
        "name": "i3",
        "brand": "BMW",
        "engine": "Electric",
        "cylinder": 0,
        "top_speed": 99,
        "0_to_60": 6.8,
        "category": "EV",
        "image": "https://ev-database.org/img/auto/BMW_i3_94Ah/BMW_i3_94Ah-01@2x.jpg",
        "price": 44450,
        "discount_price": 42450
    },
    {
        "name": "Clarity",
        "brand": "Honda",
        "engine": "Hybrid",
        "cylinder": 4,
        "top_speed": 110,
        "0_to_60": 7.5,
        "category": "Hybrid",
        "image": "https://www.freep.com/gcdn/-mm-/333c1271c2393e4d5375c5f38ce5fedd5ad275a2/c=0-122-2400-1478/local/-/media/2017/11/30/DetroitFreeP/DetroitFreePress/636476324771230954-IMG-2017-Honda-Clarity-0-1-.JPG",
        "price": 34000,
        "discount_price": 33000
    },
    {
        "name": "Mustang",
        "brand": "Ford",
        "engine": "Gasoline",
        "cylinder": 8,
        "top_speed": 155,
        "0_to_60": 4.2,
        "category": "Gas",
        "image": "https://www.topgear.com/sites/default/files/2023/07/24Mustang_Media_drive%20LA_23.jpg",
        "price": 27000,
        "discount_price": null
    },
    {
        "name": "Model X",
        "brand": "Tesla",
        "engine": "Electric",
        "cylinder": 0,
        "top_speed": 155,
        "0_to_60": 2.6,
        "category": "EV",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTViFvjYuLQHpjr5f24_axqRUao_oaHEuG4Hg&s",
        "price": 89999,
        "discount_price": 84999
    },
    {
        "name": "RX",
        "brand": "Lexus",
        "engine": "Hybrid",
        "cylinder": 6,
        "top_speed": 112,
        "0_to_60": 7.9,
        "category": "Hybrid",
        "image": "https://www.motortrend.com/uploads/2023/10/001-2023-Lexus-RX-350-front-three-quarters-in-action.jpg",
        "price": 46000,
        "discount_price": 45000
    }
]


export default alldata