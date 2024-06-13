import { CalendarCheckIcon, HandshakeIcon, NewspaperIcon, RssIcon } from "lucide-react";

export const navbar = [
    { icon: <RssIcon />, name: "Yangiliklar", slug: "/news" },
    { icon: <NewspaperIcon />, name: "Loyihalar", slug: "/projects" },
    { icon: <HandshakeIcon />, name: "Hamkorlar", slug: "/partners" },
    { icon: <CalendarCheckIcon />, name: "Tadbirlar", slug: "/events" },
    { icon: <NewspaperIcon />, name: "Tashabbuskorlar", slug: "/initiators" },
    { icon: <NewspaperIcon />, name: "Xizmatlar", slug: "/services" },
    { icon: <NewspaperIcon />, name: "Aql Markazi", slug: "/center_mind" },
    { icon: <NewspaperIcon />, name: "Ilmiy etika", slug: "/ilmiy_etika" },
];

export const data = {
    labels: [
        "",
        // "",
        "",
        // "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",


    ],
    datasets: [
        // {
        //     data: [9, 7.8, 6, 3, 7, 5, 6, 10, 7, 5, 0, 10, 7, 5, 6, 10, 7, 5, 6, 10, 7, 5, 6],
        //     backgroundColor: "transparent",
        //     borderColor: "#ffc700",
        //     pointBorderColor: "transparent",
        //     pointBorderWidth: 4,
        //     tension: 0.5,
        //     yAxisID: "y",
        // },

        {
            label: "$",
            data: [9, 7.8, 6, 3, 7, 5, 6, 10, 7, 5, 10, 10, 7, 5, 6, 10, 7, 5, 6, 10, 7, 5, 6, 7, 5, 7, 3],
            borderColor: "#169bd4",
            border: 1,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y1',
        },
    ],
};

export const options = {
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis',
        },
    },
    scales: {
        y: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
        },
        y1: {
            type: 'linear' as const,
            display: true,
            position: 'right' as const,
            grid: {
                drawOnChartArea: false,
            },
        },
    },
};


// export const categories = [
//     {
//         category_id: "001",
//         name: "Electronics",
//         subcategories: [
//             {
//                 subcategory_id: "001-01",
//                 name: "Mobile Phones",
//                 products: [
//                     {

//                     },
//                     {

//                     }
//                 ]
//             },
//             {
//                 subcategory_id: "001-02",
//                 name: "Laptops",
//                 products: [
//                     {

//                     },
//                     {

//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         category_id: "002",
//         name: "Accessories",
//         subcategories: [
//             {
//                 "subcategory_id": "002-01",
//                 "name": "Audio",
//                 "products": [
//                     {

//                     },
//                     {

//                     }
//                 ]
//             },
//             {
//                 subcategory_id: "002-02",
//                 name: "Wearables",
//                 products: [
//                     {

//                     },
//                     {

//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         category_id: "003",
//         name: "Home Appliances",
//         subcategories: [
//             {
//                 subcategory_id: "003-01",
//                 name: "Kitchen",
//                 products: [
//                     {

//                     },
//                     {

//                     }
//                 ]
//             },
//             {
//                 subcategory_id: "003-02",
//                 name: "Cleaning",
//                 products: [
//                     {

//                     },
//                     {

//                     }
//                 ]
//             }
//         ]
//     }
// ]


export const categories = [
    {
        "category_id": "001",
        "name": "Electronics",
        "subcategories": [
            {
                "subcategory_id": "001-01",
                "name": "Mobile Phones",
                "products": [
                    {
                        "product_id": "001",
                        "name": "Smartphone X",
                        "price": 799.99,
                        "description": "Latest model with advanced features",
                        "image_url": "http://example.com/images/smartphone-x.jpg",
                        "stock_quantity": 50
                    },
                    {
                        "product_id": "005",
                        "name": "Smartphone Y",
                        "price": 699.99,
                        "description": "Affordable smartphone with good features",
                        "image_url": "http://example.com/images/smartphone-y.jpg",
                        "stock_quantity": 100
                    }
                ]
            },
            {
                "subcategory_id": "001-02",
                "name": "Laptops",
                "products": [
                    {
                        "product_id": "002",
                        "name": "Laptop Pro",
                        "price": 1299.99,
                        "description": "High-performance laptop for professionals",
                        "image_url": "http://example.com/images/laptop-pro.jpg",
                        "stock_quantity": 30
                    },
                    {
                        "product_id": "006",
                        "name": "Laptop Air",
                        "price": 999.99,
                        "description": "Lightweight laptop for everyday use",
                        "image_url": "http://example.com/images/laptop-air.jpg",
                        "stock_quantity": 45
                    }
                ]
            }
        ]
    },
    {
        "category_id": "002",
        "name": "Accessories",
        "subcategories": [
            {
                "subcategory_id": "002-01",
                "name": "Audio",
                "products": [
                    {
                        "product_id": "003",
                        "name": "Wireless Earbuds",
                        "price": 199.99,
                        "description": "Noise-cancelling wireless earbuds",
                        "image_url": "http://example.com/images/wireless-earbuds.jpg",
                        "stock_quantity": 100
                    },
                    {
                        "product_id": "007",
                        "name": "Bluetooth Speaker",
                        "price": 299.99,
                        "description": "Portable Bluetooth speaker with high-quality sound",
                        "image_url": "http://example.com/images/bluetooth-speaker.jpg",
                        "stock_quantity": 60
                    }
                ]
            },
            {
                "subcategory_id": "002-02",
                "name": "Wearables",
                "products": [
                    {
                        "product_id": "004",
                        "name": "Smart Watch",
                        "price": 299.99,
                        "description": "Feature-rich smart watch",
                        "image_url": "http://example.com/images/smart-watch.jpg",
                        "stock_quantity": 75
                    },
                    {
                        "product_id": "008",
                        "name": "Fitness Tracker",
                        "price": 99.99,
                        "description": "Fitness tracker with heart rate monitor",
                        "image_url": "http://example.com/images/fitness-tracker.jpg",
                        "stock_quantity": 120
                    }
                ]
            }
        ]
    },
    {
        "category_id": "003",
        "name": "Home Appliances",
        "subcategories": [
            {
                "subcategory_id": "003-01",
                "name": "Kitchen",
                "products": [
                    {
                        "product_id": "009",
                        "name": "Blender",
                        "price": 49.99,
                        "description": "High-speed blender for smoothies",
                        "image_url": "http://example.com/images/blender.jpg",
                        "stock_quantity": 80
                    },
                    {
                        "product_id": "010",
                        "name": "Microwave Oven",
                        "price": 149.99,
                        "description": "Compact microwave oven with multiple settings",
                        "image_url": "http://example.com/images/microwave-oven.jpg",
                        "stock_quantity": 40
                    }
                ]
            },
            {
                "subcategory_id": "003-02",
                "name": "Cleaning",
                "products": [
                    {
                        "product_id": "011",
                        "name": "Vacuum Cleaner",
                        "price": 199.99,
                        "description": "Powerful vacuum cleaner with HEPA filter",
                        "image_url": "http://example.com/images/vacuum-cleaner.jpg",
                        "stock_quantity": 30
                    },
                    {
                        "product_id": "012",
                        "name": "Steam Mop",
                        "price": 99.99,
                        "description": "Steam mop for efficient floor cleaning",
                        "image_url": "http://example.com/images/steam-mop.jpg",
                        "stock_quantity": 70
                    }
                ]
            }
        ]
    }
]

export const categoriese = [
    {
        "pk": 1,
        "name": "Smartfonlar va telefonlar",
        "children": [
            {
                "pk": 1,
                "name": "Smartfonlar"
            },
            {
                "pk": 2,
                "name": "Aksessuarlar va ehtiyot qismlari"
            },
            {
                "pk": 3,
                "name": "Tugmali telefonlar"
            },
            {
                "pk": 4,
                "name": "Telefonlar uchun gʻiloflar"
            },
            {
                "pk": 5,
                "name": "Telefon ehtiyot qismlari"
            }
        ]
    },
    {
        "pk": 2,
        "name": "Quloqchinlar va audio texnikalar",
        "children": [
            {
                "pk": 6,
                "name": "Quloqchinlar AudiotexnikaProigrivatel uchun aksessuarlar Periferiya va aksessuarlar"
            }
        ]
    },
    {
        "pk": 3,
        "name": "Foto va video texnika",
        "children": [
            {
                "pk": 7,
                "name": "Fotosuratchilar uchun uskunalar"
            },
            {
                "pk": 8,
                "name": "Foto va video kameralar"
            },
            {
                "pk": 9,
                "name": "Foto va video kameralar uchun aksessuarlar"
            }
        ]
    },
    {
        "pk": 4,
        "name": "Budilniklar",
        "children": [
            {
                "pk": 10,
                "name": "Elektron budilniklar"
            },
            {
                "pk": 11,
                "name": "Aromabudilniklar va katrijlar"
            },
            {
                "pk": 12,
                "name": "Radio budilniklar"
            }
        ]
    },
    {
        "pk": 5,
        "name": "Aqlli uy va xavfsizlik",
        "children": [
            {
                "pk": 13,
                "name": "Videokuzatuv"
            },
            {
                "pk": 14,
                "name": "Aqlli uy"
            },
            {
                "pk": 15,
                "name": "Uy xavfsizligi"
            }
        ]
    },
    {
        "pk": 6,
        "name": "Televizorlar va videotexnikalar",
        "children": [
            {
                "pk": 16,
                "name": "Televizorlar uchun uskunalar"
            },
            {
                "pk": 17,
                "name": "Televizorlar"
            },
            {
                "pk": 18,
                "name": "Tomosha aksessuarlari"
            },
            {
                "pk": 19,
                "name": "Pleyerlar va musiqa qoʻyish uchun texnika"
            },
            {
                "pk": 20,
                "name": "Proyektorlar va aksessuarlar"
            }
        ]
    },
    {
        "pk": 7,
        "name": "Oʻyin pristavkalari",
        "children": [
            {
                "pk": 21,
                "name": "O'yin pristavkalari"
            },
            {
                "pk": 22,
                "name": "Portativ o'yin qurilmalari"
            },
            {
                "pk": 23,
                "name": "Geympadlar"
            },
            {
                "pk": 24,
                "name": "Zaryadlash qurilmalari"
            },
            {
                "pk": 25,
                "name": "Sumkalar"
            },
            {
                "pk": 26,
                "name": "Ehtiyot qismlar va aksessuarlar"
            },
            {
                "pk": 27,
                "name": "Stikerlar"
            }
        ]
    },
    {
        "pk": 8,
        "name": "Ofis texnikasi",
        "children": [
            {
                "pk": 28,
                "name": "Ofis jihozla"
            },
            {
                "pk": 29,
                "name": "Aksessuarlar"
            }
        ]
    },
    {
        "pk": 9,
        "name": "Optik anjomlar",
        "children": [
            {
                "pk": 30,
                "name": "Mikroskoplar"
            },
            {
                "pk": 31,
                "name": "Okulyarlar"
            },
            {
                "pk": 32,
                "name": "Teleskoplar"
            },
            {
                "pk": 33,
                "name": "Teatr binokllari"
            },
            {
                "pk": 34,
                "name": "Mikroskoplar uchun aksessuarlar"
            },
            {
                "pk": 35,
                "name": "Teleskop aksessuarlari"
            }
        ]
    },
    {
        "pk": 10,
        "name": "Elektronikalar uchun aksessuarlar",
        "children": [
            {
                "pk": 36,
                "name": "Kabellar"
            },
            {
                "pk": 37,
                "name": "Adapterlar va perexodniklar"
            },
            {
                "pk": 38,
                "name": "Tashqi akkumulyatorlar"
            },
            {
                "pk": 39,
                "name": "USB hablar"
            },
            {
                "pk": 40,
                "name": "Akkumulyatorlar uchun zaryadlovchi qurilmalari"
            },
            {
                "pk": 41,
                "name": "Simsiz zaryadlash qurilmalari"
            },
            {
                "pk": 42,
                "name": "Tarmoq filtrlari"
            },
            {
                "pk": 43,
                "name": "Akkumulyator batareyalar"
            },
            {
                "pk": 44,
                "name": "Uzaytirgichlar"
            },
            {
                "pk": 45,
                "name": "Kabellar uchun tutqichlar"
            },
            {
                "pk": 46,
                "name": "Kuchlanishni oʻzgartirgichlar"
            },
            {
                "pk": 47,
                "name": "Elektr tarmoqlagichlar"
            },
            {
                "pk": 48,
                "name": "Konnektorlar"
            },
            {
                "pk": 49,
                "name": "Quyosh panellari va batareyalari"
            }
        ]
    }
]
