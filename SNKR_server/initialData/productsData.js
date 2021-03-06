const products = [
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 77.8,
    quantity: 1,
    stock: 4,
    brand: 'nike',
    src: [
      'assets/img/product_1_1.png',
      'assets/img/product_1_2.png',
      'assets/img/product_1_3.png',
      'assets/img/product_1_4.png'
    ],
    title: 'free mecton 7',
    colors: ['#fff', '#F59E0B'],
    availableSizes: [6.5, 8, 9, 10, 10.5],
    size: undefined,
    typeOfShoes: ['walking', 'running'],
    sex: 'all'
  },
  {
    discount: 10,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 143.57,
    quantity: 1,
    stock: 6,
    brand: 'adidas',
    src: [
      'assets/img/product_2_1.png',
      'assets/img/product_2_2.png',
      'assets/img/product_2_3.png',
      'assets/img/product_2_4.png'
    ],
    title: 'nike Quest 3 Shield',
    colors: ['#3B82F6', '#EC4899'],
    availableSizes: [7, 8.5, 9, 9.5],
    size: undefined,
    typeOfShoes: ['running', 'walking'],
    sex: 'all'
  },
  {
    discount: 50,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 149.56,
    quantity: 1,
    stock: 10,
    brand: 'fils',
    src: [
      'assets/img/product_3_1.png',
      'assets/img/product_3_2.png',
      'assets/img/product_3_3.png',
      'assets/img/product_3_4.png'
    ],
    title: 'disruptor II ',
    colors: ['#fff'],
    availableSizes: [6.5, 7, 7.5, 8, 8.5, 11, 12, 12.5],
    size: undefined,
    typeOfShoes: ['walking'],
    sex: 'all'
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 182.99,
    quantity: 1,
    stock: 2,
    brand: 'vans',
    src: [
      'assets/img/product_4_1.png',
      'assets/img/product_4_2.png',
      'assets/img/product_4_3.png',
      'assets/img/product_4_4.png'
    ],
    title: 'true power',
    colors: ['#EF4444'],
    availableSizes: [6.5, 7, 8.5, 9, 9.5],
    size: undefined,
    sex: 'men',
    typeOfShoes: ['walking']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 117.44,
    quantity: 1,
    stock: 1,
    brand: 'nike',
    src: [
      'assets/img/product_5_1.png',
      'assets/img/product_5_2.png',
      'assets/img/product_5_3.png',
      'assets/img/product_5_4.png'
    ],
    title: 'nike air zoom pegasus',
    colors: ['#3B82F6'],
    availableSizes: [6.5, 8.5, 9, 9.5, 10, 12, 13],
    size: undefined,
    sex: 'men',
    typeOfShoes: ['walking', 'running']
  },
  {
    discount: 10,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 169.99,
    quantity: 1,
    stock: 4,
    brand: 'nike',
    src: [
      'assets/img/product_6_1.png',
      'assets/img/product_6_2.png',
      'assets/img/product_6_3.png',
      'assets/img/product_6_4.png'
    ],
    title: 'nike metcon 6 amp',
    colors: ['#fff'],
    availableSizes: [6.5, 7, 8.5, 9, 9.5, 13],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['walking', 'running']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 148.88,
    quantity: 1,
    stock: 24,
    brand: 'nike',
    src: [
      'assets/img/product_7_1.png',
      'assets/img/product_7_2.png',
      'assets/img/product_7_3.png',
      'assets/img/product_7_4.png'
    ],
    title: 'revolution 4',
    colors: ['#B86300', '#000'],
    availableSizes: [6, 6.5, 9, 9.5, 10],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['walking', 'running']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 205.98,
    quantity: 1,
    stock: 3,
    brand: 'nike',
    src: [
      'assets/img/product_8_1.png',
      'assets/img/product_8_2.png',
      'assets/img/product_8_3.png',
      'assets/img/product_8_4.png'
    ],
    title: 'aire max 200',
    colors: ['#6B7280'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 10],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['walking', 'running']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 89.45,
    quantity: 1,
    stock: 9,
    brand: 'nike',
    src: [
      'assets/img/product_9_1.png',
      'assets/img/product_9_2.png',
      'assets/img/product_9_3.png',
      'assets/img/product_9_4.png'
    ],
    title: 'air force one',
    colors: ['#fff', '#6B7280'],
    availableSizes: [6, 6.5, 7, 8.5, 10, 11, 12, 12.5, 13],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['walking']
  },
  {
    discount: 50,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 175.48,
    quantity: 1,
    stock: 9,
    brand: 'other',
    src: [
      'assets/img/product_10_1.png',
      'assets/img/product_10_2.png',
      'assets/img/product_10_3.png',
      'assets/img/product_10_4.png'
    ],
    title: 'militery rn2',
    colors: ['#3B82F6'],
    availableSizes: [6, 6.5, 7, 9, 9.5, 10, 10.5],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['running']
  },
  {
    discount: 80,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 127.69,
    quantity: 1,
    stock: 7,
    brand: 'new balance',
    src: [
      'assets/img/product_11_1.png',
      'assets/img/product_11_2.png',
      'assets/img/product_11_3.png',
      'assets/img/product_11_4.png'
    ],
    title: 'nart n14',
    colors: ['#fff', '#F59E0B'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 10],
    size: undefined,
    sex: 'women',
    typeOfShoes: ['walking', 'running']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 189.32,
    quantity: 1,
    stock: 16,
    brand: 'other',
    src: [
      'assets/img/product_12_1.png',
      'assets/img/product_12_2.png',
      'assets/img/product_12_3.png',
      'assets/img/product_12_4.png'
    ],
    title: 'react escape run',
    colors: ['#10B981'],
    availableSizes: [6, 6.5, 9.5, 10, 10.5, 11, 13],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['walking', 'running']
  },
  {
    discount: 10,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 215.99,
    quantity: 1,
    stock: 24,
    brand: 'other',
    src: [
      'assets/img/product_13_1.png',
      'assets/img/product_13_2.png',
      'assets/img/product_13_3.png',
      'assets/img/product_13_4.png'
    ],
    title: 'long str 14',
    colors: ['#EF4444'],
    availableSizes: [6, 6.5, 7.5, 9, 10, 11.5, 12, 12.5],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['walking']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 198.99,
    quantity: 1,
    stock: 45,
    brand: 'other',
    src: [
      'assets/img/product_14_1.png',
      'assets/img/product_14_2.png',
      'assets/img/product_14_3.png',
      'assets/img/product_14_4.png'
    ],
    title: 'rn fast night 1',
    colors: ['#fff', '#000'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 12],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['walking', 'running']
  },
  {
    discount: 19,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 98.99,
    quantity: 1,
    stock: 35,
    brand: 'nike',
    src: [
      'assets/img/product_15_1.png',
      'assets/img/product_15_2.png',
      'assets/img/product_15_3.png',
      'assets/img/product_15_4.png'
    ],
    title: 'aire force one 2009',
    colors: ['#000', '#fff'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 10],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['walking']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 158.0,
    quantity: 1,
    stock: 9,
    brand: 'adidas',
    src: [
      'assets/img/product_16_1.png',
      'assets/img/product_16_2.png',
      'assets/img/product_16_3.png',
      'assets/img/product_16_4.png'
    ],
    title: 'd4 fusid',
    colors: ['#000', '#EF4444'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 10],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['walking', 'running']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 158.0,
    quantity: 1,
    stock: 37,
    brand: 'other',
    src: [
      'assets/img/product_17_1.png',
      'assets/img/product_17_2.png',
      'assets/img/product_17_3.png',
      'assets/img/product_17_4.png'
    ],
    title: 'gntl snow 2',
    colors: ['#fff', '#B86300'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 10],
    size: undefined,
    sex: 'women',
    typeOfShoes: ['walking']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 78.0,
    quantity: 1,
    stock: 8,
    brand: 'other',
    src: [
      'assets/img/product_18_1.png',
      'assets/img/product_18_2.png',
      'assets/img/product_18_3.png',
      'assets/img/product_18_4.png'
    ],
    title: 'quest forest 4',
    colors: ['#10B981'],
    availableSizes: [6, 6.5, 8.5, 9, 9.5, 10.5, 13],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['walking']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 78.0,
    quantity: 1,
    stock: 25,
    brand: 'nike',
    src: [
      'assets/img/product_19_1.png',
      'assets/img/product_19_2.png',
      'assets/img/product_19_3.png',
      'assets/img/product_19_4.png'
    ],
    title: 'moon rise sliver',
    colors: ['#6B7280'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 11, 12, 13],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['walking']
  },
  {
    discount: 20,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 78.0,
    quantity: 1,
    stock: 14,
    brand: 'nike',
    src: [
      'assets/img/product_20_1.png',
      'assets/img/product_20_2.png',
      'assets/img/product_20_3.png',
      'assets/img/product_20_4.png'
    ],
    title: 'zoomx vaporfly',
    colors: ['#EF4444'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 10],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['runnig']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 120.0,
    quantity: 1,
    stock: 15,
    brand: 'other',
    src: [
      'assets/img/product_21_1.png',
      'assets/img/product_21_2.png',
      'assets/img/product_21_3.png',
      'assets/img/product_21_4.png'
    ],
    title: 'croll 4',
    colors: ['#3B82F6'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 10],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['walking', 'running']
  },
  {
    discount: 40,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 131.0,
    quantity: 1,
    stock: 11,
    brand: 'nike',
    src: [
      'assets/img/product_22_1.png',
      'assets/img/product_22_2.png',
      'assets/img/product_22_3.png',
      'assets/img/product_22_4.png'
    ],
    title: 'jordan 41',
    colors: [6, 6.5, 7, 8.5, 9, 9.5, 10],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 10.5, 12],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['walking']
  },
  {
    discount: 10,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 141.99,
    quantity: 1,
    stock: 2,
    brand: 'new balance',
    src: [
      'assets/img/product_23_1.png',
      'assets/img/product_23_2.png',
      'assets/img/product_23_3.png',
      'assets/img/product_23_4.png'
    ],
    title: 'r2d2',
    colors: ['#EC4899'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 10],
    size: undefined,
    sex: 'women',
    typeOfShoes: ['walking', 'running']
  },
  {
    discount: 10,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 91.99,
    quantity: 1,
    stock: 19,
    brand: 'other',
    src: [
      'assets/img/product_24_1.png',
      'assets/img/product_24_2.png',
      'assets/img/product_24_3.png',
      'assets/img/product_24_4.png'
    ],
    title: 'future qu2',
    colors: ['#10B981'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 10],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['walking', 'running']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 111.98,
    quantity: 1,
    stock: 27,
    brand: 'nike',
    src: [
      'assets/img/product_25_1.png',
      'assets/img/product_25_2.png',
      'assets/img/product_25_3.png',
      'assets/img/product_25_4.png'
    ],
    title: 'phantom gt fit',
    colors: ['#10B981'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 10],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['running', 'walking']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 171.88,
    quantity: 1,
    stock: 63,
    brand: 'all stars',
    src: [
      'assets/img/product_26_1.png',
      'assets/img/product_26_2.png',
      'assets/img/product_26_3.png',
      'assets/img/product_26_4.png'
    ],
    title: 'style 14i',
    colors: ['#EF4444'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 10],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['walking']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 171.88,
    quantity: 1,
    stock: 45,
    brand: 'nike',
    src: [
      'assets/img/product_27_1.png',
      'assets/img/product_27_2.png',
      'assets/img/product_27_3.png',
      'assets/img/product_27_4.png'
    ],
    title: 'air max 96 iii',
    colors: ['#000', '#6B7280'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 10],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['walking']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 321.88,
    quantity: 1,
    stock: 4,
    brand: 'other',
    src: [
      'assets/img/product_28_1.png',
      'assets/img/product_28_2.png',
      'assets/img/product_28_3.png',
      'assets/img/product_28_4.png'
    ],
    title: 'zura uui',
    colors: ['#fff'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 10],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['walking', 'running']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 86.88,
    quantity: 1,
    stock: 41,
    brand: 'other',
    src: [
      'assets/img/product_29_1.png',
      'assets/img/product_29_2.png',
      'assets/img/product_29_3.png',
      'assets/img/product_29_4.png'
    ],
    title: 'full trig 8',
    colors: ['#fff', '#6366F1', '#3B82F6'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 10],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['walking', 'running']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 132.65,
    quantity: 1,
    stock: 12,
    brand: 'nike',
    src: [
      'assets/img/product_30_1.png',
      'assets/img/product_30_2.png',
      'assets/img/product_30_3.png',
      'assets/img/product_30_4.png'
    ],
    title: 'lebron 19 hight',
    colors: ['#B86300'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 11.5, 13],
    sex: 'all',
    size: undefined,
    typeOfShoes: ['walking']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 112.65,
    quantity: 1,
    stock: 23,
    brand: 'adidas',
    src: [
      'assets/img/product_31_1.png',
      'assets/img/product_31_2.png',
      'assets/img/product_31_3.png',
      'assets/img/product_31_4.png'
    ],
    title: 'x9000l1',
    colors: ['#fff', '#000', '#6B7280'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 10],
    size: undefined,
    sex: 'all',
    typeOfShoes: ['walking', 'running']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 210.3,
    quantity: 1,
    stock: 22,
    brand: 'other',
    src: [
      'assets/img/product_32_1.png',
      'assets/img/product_32_2.png',
      'assets/img/product_32_3.png',
      'assets/img/product_32_4.png'
    ],
    title: 'black panther',
    colors: ['#000'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 10],
    size: undefined,
    sex: 'men',
    typeOfShoes: ['walking', 'running']
  },
  {
    discount: undefined,
    description:
      "le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    price: 210.3,
    quantity: 1,
    stock: 36,
    brand: 'other',
    src: [
      'assets/img/product_33_1.png',
      'assets/img/product_33_2.png',
      'assets/img/product_33_3.png',
      'assets/img/product_33_4.png'
    ],
    title: 'pink panther',
    colors: ['#EC4899'],
    availableSizes: [6, 6.5, 7, 8.5, 9, 9.5, 10],
    size: undefined,
    sex: 'women',
    typeOfShoes: ['walking', 'running']
  }
]

module.exports = products
