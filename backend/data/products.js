const products = [
  {
    name: 'iPhone 14 Pro Max 128GB Memory',
    image: '/images/1.png',
    description:
      'Dynamic Island, a magical new way to interact with iPhone Brighter 6.1” Super Retina XDR display¹ featuring Always-On, which keeps your info at a glance Emergency SOS via satellite² and Crash Detection — groundbreaking features designed to save lives 48MP Main camera with an advanced quad-pixel sensor for up to 4x the resolution A16 Bionic chip — superfast and superefficient for amazing all-day battery life',
    brand: 'Apple',
    category: 'Electronics',
    price: 999,
    countInStock: 100,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'iPhone 14 128GB Memory        ',
    image: '/images/2.png',
    description:
      '6.1-inch Super Retina XDR display¹ that’s sharp, vibrant, and bright. Awesome all-day battery life with up to 20 hours video playback. Emergency SOS via satellite³ and Crash Detection — groundbreaking features designed to save lives⁴. A15 Bionic, the same superspeedy chip that’s in iPhone 13 Pro',
    brand: 'Apple',
    category: 'Electronics',
    price: 799,
    countInStock: 1000,
    rating: 0,
    numReviews: 0,
  },
    {
    name: 'iPhone 13 128GB Memory        ',
    image: '/images/3.png',
    description:
      '6.1-inch Super Retina XDR display¹ Advanced dual-camera system for incredible low-light photos and videos A15 Bionic with 4-core GPU for lightning-fast performance',
    brand: 'Apple',
    category: 'Electronics',
    price: 699,
    countInStock: 1000,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'iPhone 12 128GB Memory',
    image: '/images/4.png',
    description:
      '6.1-inch Super Retina XDR display¹ Advanced dual-camera system for incredible low-light photos and videos A15 Bionic with 4-core GPU for lightning-fast performance',
    brand: 'Apple',
    category: 'Electronics',
    price: 599,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
    {
    name: 'iPhone SE 128GB Memory',
    image: '/images/5.png',
    description:
      '6.1-inch Super Retina XDR display¹ Advanced dual-camera system for incredible low-light photos and videos A15 Bionic with 4-core GPU for lightning-fast performance',
    brand: 'Apple',
    category: 'Electronics',
    price: 429,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'iPhone Gen 9 128GB Memory',
    image: '/images/10.png',
    description:
      '6.1-inch Super Retina XDR display¹ Advanced dual-camera system for incredible low-light photos and videos A15 Bionic with 4-core GPU for lightning-fast performance',
    brand: 'Apple',
    category: 'Electronics',
    price: 399,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'iPhone Air 5 128GB Memory',
    image: '/images/11.png',
    description:
      '6.1-inch Super Retina XDR display¹ Advanced dual-camera system for incredible low-light photos and videos A15 Bionic with 4-core GPU for lightning-fast performance',
    brand: 'Apple',
    category: 'Electronics',
    price: 799,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
    {
    name: 'iPhone Air Pro11-inch 128GB Memory',
    image: '/images/12.png',
    description:
      '6.1-inch Super Retina XDR display¹ Advanced dual-camera system for incredible low-light photos and videos A15 Bionic with 4-core GPU for lightning-fast performance',
    brand: 'Apple',
    category: 'Electronics',
    price: 999,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/6.png',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 200,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
    {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/7.png',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 49,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
    {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/8.png',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 10,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
    {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/9.png',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 30,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/8.png',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 10,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
    {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/9.png',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 30,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 929.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 399.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 49.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 29.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
]

export default products
