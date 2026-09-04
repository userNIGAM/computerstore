import { Product } from "../../types/products/types";

export const products: Product[] = [
  // ============================================================
  // 1. CPU
  // ============================================================
  {
    id: "cpu-001",
    name: "AMD Ryzen 7 7800X3D",
    slug: "amd-ryzen-7-7800x3d",

    brand: "AMD",
    category: "CPU",

    description:
      "The AMD Ryzen 7 7800X3D is a high-performance gaming processor featuring AMD 3D V-Cache technology. With 8 cores and 16 threads, it delivers excellent gaming performance and multitasking capabilities.",

    shortDescription: "8-core gaming CPU with AMD 3D V-Cache technology.",

    images: [
      "/products/ryzen-7800x3d-1.jpg",
      "/products/ryzen-7800x3d-2.jpg",
      "/products/ryzen-7800x3d-3.jpg",
    ],

    thumbnail: "/products/ryzen-7800x3d-1.jpg",

    price: 449,
    originalPrice: 499,
    discountPercentage: 10,

    rating: 4.9,
    reviewCount: 328,

    reviews: [
      {
        id: "review-001",
        userName: "Alex Morgan",
        rating: 5,
        comment: "Excellent gaming CPU. Runs my games extremely smoothly.",
        date: "2026-08-20",
        verifiedPurchase: true,
        helpful: 42,
      },
      {
        id: "review-002",
        userName: "Daniel K",
        rating: 5,
        comment: "One of the best gaming processors available.",
        date: "2026-08-12",
        verifiedPurchase: true,
        helpful: 31,
      },
    ],

    inStock: true,
    stockQuantity: 18,

    specifications: {
      cores: 8,
      threads: 16,
      baseClock: "4.2 GHz",
      boostClock: "5.0 GHz",
      socket: "AM5",
      cache: "104 MB",
      architecture: "Zen 4",
      integratedGraphics: "AMD Radeon Graphics",
      tdp: "120W",
    },

    tags: ["gaming", "high-performance", "AM5", "3D V-Cache"],

    featured: true,
    bestseller: true,
    newArrival: false,

    warranty: "3 Years",

    createdAt: "2026-01-15",
  },

  // ============================================================
  // 2. GPU
  // ============================================================
  {
    id: "gpu-001",
    name: "NVIDIA GeForce RTX 4070 SUPER",
    slug: "nvidia-geforce-rtx-4070-super",

    brand: "NVIDIA",
    category: "GPU",

    description:
      "A powerful graphics card designed for high-refresh-rate gaming, content creation, and ray tracing. NVIDIA DLSS technology provides enhanced performance while maintaining excellent image quality.",

    shortDescription:
      "High-performance GPU for 1440p gaming and content creation.",

    images: [
      "/products/rtx-4070-super-1.jpg",
      "/products/rtx-4070-super-2.jpg",
      "/products/rtx-4070-super-3.jpg",
    ],

    thumbnail: "/products/rtx-4070-super-1.jpg",

    price: 599,
    originalPrice: 649,
    discountPercentage: 8,

    rating: 4.8,
    reviewCount: 215,

    reviews: [
      {
        id: "review-003",
        userName: "James Wilson",
        rating: 5,
        comment:
          "Fantastic 1440p performance. Temperatures are also very good.",
        date: "2026-08-18",
        verifiedPurchase: true,
        helpful: 28,
      },
      {
        id: "review-004",
        userName: "Chris P",
        rating: 4,
        comment: "Great card overall. Perfect for my gaming setup.",
        date: "2026-07-29",
        verifiedPurchase: true,
        helpful: 19,
      },
    ],

    inStock: true,
    stockQuantity: 9,

    specifications: {
      memory: "12 GB GDDR6X",
      memoryInterface: "192-bit",
      boostClock: "2.48 GHz",
      cudaCores: 7168,
      architecture: "Ada Lovelace",
      rayTracing: true,
      dlss: "DLSS 3",
      powerConsumption: "220W",
      recommendedPSU: "650W",
    },

    tags: ["gaming", "ray-tracing", "DLSS", "1440p"],

    featured: true,
    bestseller: true,
    newArrival: false,

    warranty: "3 Years",

    createdAt: "2026-02-01",
  },

  // ============================================================
  // 3. MOTHERBOARD
  // ============================================================
  {
    id: "motherboard-001",
    name: "ASUS ROG STRIX B650-A Gaming WiFi",
    slug: "asus-rog-strix-b650-a-gaming-wifi",

    brand: "ASUS",
    category: "Motherboard",

    description:
      "A feature-rich AM5 motherboard designed for modern gaming PCs. It includes DDR5 memory support, PCIe 5.0, WiFi connectivity, and advanced cooling features.",

    shortDescription: "AM5 DDR5 gaming motherboard with WiFi and PCIe 5.0.",

    images: ["/products/asus-b650-a-1.jpg", "/products/asus-b650-a-2.jpg"],

    thumbnail: "/products/asus-b650-a-1.jpg",

    price: 219,
    originalPrice: 249,
    discountPercentage: 12,

    rating: 4.7,
    reviewCount: 167,

    reviews: [
      {
        id: "review-005",
        userName: "Ryan Lee",
        rating: 5,
        comment: "Excellent motherboard with plenty of features.",
        date: "2026-08-10",
        verifiedPurchase: true,
        helpful: 22,
      },
    ],

    inStock: true,
    stockQuantity: 14,

    specifications: {
      socket: "AM5",
      chipset: "B650",
      memoryType: "DDR5",
      maxMemory: "128 GB",
      memorySlots: 4,
      pciExpress: "PCIe 5.0",
      wifi: "WiFi 6E",
      bluetooth: "Bluetooth 5.3",
      formFactor: "ATX",
    },

    tags: ["AM5", "DDR5", "WiFi", "Gaming"],

    featured: true,
    bestseller: false,
    newArrival: true,

    warranty: "3 Years",

    createdAt: "2026-03-10",
  },

  // ============================================================
  // 4. RAM
  // ============================================================
  {
    id: "ram-001",
    name: "Corsair Vengeance RGB 32GB DDR5",
    slug: "corsair-vengeance-rgb-32gb-ddr5",

    brand: "Corsair",
    category: "RAM",

    description:
      "High-performance DDR5 memory kit with customizable RGB lighting. Designed for gaming systems and demanding workloads.",

    shortDescription: "32GB DDR5 RGB memory kit for gaming PCs.",

    images: [
      "/products/corsair-vengeance-1.jpg",
      "/products/corsair-vengeance-2.jpg",
    ],

    thumbnail: "/products/corsair-vengeance-1.jpg",

    price: 99,
    originalPrice: 119,
    discountPercentage: 17,

    rating: 4.8,
    reviewCount: 284,

    reviews: [
      {
        id: "review-006",
        userName: "Michael T",
        rating: 5,
        comment: "Looks amazing and performs perfectly.",
        date: "2026-08-21",
        verifiedPurchase: true,
        helpful: 34,
      },
    ],

    inStock: true,
    stockQuantity: 35,

    specifications: {
      capacity: "32 GB",
      modules: "2 x 16 GB",
      memoryType: "DDR5",
      speed: "6000 MHz",
      latency: "CL36",
      voltage: "1.35V",
      rgb: true,
      compatibility: "AMD EXPO / Intel XMP",
    },

    tags: ["DDR5", "RGB", "Gaming", "32GB"],

    featured: false,
    bestseller: true,
    newArrival: false,

    warranty: "Lifetime",

    createdAt: "2026-01-20",
  },

  // ============================================================
  // 5. SSD
  // ============================================================
  {
    id: "ssd-001",
    name: "Samsung 990 PRO 2TB NVMe SSD",
    slug: "samsung-990-pro-2tb",

    brand: "Samsung",
    category: "Storage",

    description:
      "High-speed PCIe 4.0 NVMe SSD designed for gaming, professional workloads, and fast system boot times.",

    shortDescription: "2TB PCIe 4.0 NVMe SSD with extreme read speeds.",

    images: [
      "/products/samsung-990-pro-1.jpg",
      "/products/samsung-990-pro-2.jpg",
    ],

    thumbnail: "/products/samsung-990-pro-1.jpg",

    price: 149,
    originalPrice: 179,
    discountPercentage: 17,

    rating: 4.9,
    reviewCount: 412,

    reviews: [
      {
        id: "review-007",
        userName: "Tom Harris",
        rating: 5,
        comment: "Super fast SSD. Windows boots incredibly quickly.",
        date: "2026-08-15",
        verifiedPurchase: true,
        helpful: 51,
      },
    ],

    inStock: true,
    stockQuantity: 27,

    specifications: {
      capacity: "2 TB",
      interface: "PCIe 4.0 x4",
      formFactor: "M.2 2280",
      readSpeed: "7450 MB/s",
      writeSpeed: "6900 MB/s",
      nand: "V-NAND",
      cache: "2 GB DDR4",
    },

    tags: ["NVMe", "SSD", "PCIe 4.0", "2TB"],

    featured: true,
    bestseller: true,
    newArrival: false,

    warranty: "5 Years",

    createdAt: "2026-02-12",
  },

  // ============================================================
  // 6. POWER SUPPLY
  // ============================================================
  {
    id: "psu-001",
    name: "Corsair RM850x 850W 80+ Gold",
    slug: "corsair-rm850x-850w",

    brand: "Corsair",
    category: "PSU",

    description:
      "Fully modular 850W power supply designed for high-performance gaming PCs. It features 80 PLUS Gold efficiency and a quiet fan profile.",

    shortDescription: "850W fully modular 80+ Gold gaming power supply.",

    images: [
      "/products/corsair-rm850x-1.jpg",
      "/products/corsair-rm850x-2.jpg",
    ],

    thumbnail: "/products/corsair-rm850x-1.jpg",

    price: 129,
    originalPrice: 149,
    discountPercentage: 13,

    rating: 4.8,
    reviewCount: 198,

    reviews: [
      {
        id: "review-008",
        userName: "Mark Stevens",
        rating: 5,
        comment: "Very quiet and the modular cables make building easy.",
        date: "2026-08-05",
        verifiedPurchase: true,
        helpful: 27,
      },
    ],

    inStock: true,
    stockQuantity: 20,

    specifications: {
      wattage: "850W",
      efficiency: "80 PLUS Gold",
      modular: "Fully Modular",
      fanSize: "135mm",
      certification: "80 PLUS Gold",
      protection: "OVP / OPP / SCP / OTP",
      formFactor: "ATX",
    },

    tags: ["850W", "Gold", "Modular", "Gaming"],

    featured: false,
    bestseller: false,
    newArrival: false,

    warranty: "10 Years",

    createdAt: "2026-01-10",
  },

  // ============================================================
  // 7. PC CASE
  // ============================================================
  {
    id: "case-001",
    name: "NZXT H7 Flow RGB",
    slug: "nzxt-h7-flow-rgb",

    brand: "NZXT",
    category: "Case",

    description:
      "Modern ATX mid-tower case featuring a high-airflow front panel, spacious interior, RGB fans, and excellent cable management.",

    shortDescription: "High-airflow ATX mid-tower case with RGB lighting.",

    images: [
      "/products/nzxt-h7-flow-1.jpg",
      "/products/nzxt-h7-flow-2.jpg",
      "/products/nzxt-h7-flow-3.jpg",
    ],

    thumbnail: "/products/nzxt-h7-flow-1.jpg",

    price: 139,
    originalPrice: 159,
    discountPercentage: 13,

    rating: 4.7,
    reviewCount: 143,

    reviews: [
      {
        id: "review-009",
        userName: "Kevin B",
        rating: 5,
        comment: "Beautiful case with excellent airflow.",
        date: "2026-07-20",
        verifiedPurchase: true,
        helpful: 18,
      },
    ],

    inStock: true,
    stockQuantity: 11,

    specifications: {
      formFactor: "Mid Tower",
      motherboardSupport: "ATX / Micro ATX / Mini ITX",
      gpuLength: "400mm",
      cpuCoolerHeight: "185mm",
      radiatorSupport: "360mm",
      includedFans: 4,
      rgb: true,
      sidePanel: "Tempered Glass",
    },

    tags: ["ATX", "RGB", "Airflow", "Tempered Glass"],

    featured: true,
    bestseller: false,
    newArrival: true,

    warranty: "2 Years",

    createdAt: "2026-04-02",
  },

  // ============================================================
  // 8. CPU COOLER
  // ============================================================
  {
    id: "cooler-001",
    name: "Cooler Master Hyper 212 Halo",
    slug: "cooler-master-hyper-212-halo",

    brand: "Cooler Master",
    category: "Cooling",

    description:
      "Popular tower CPU cooler featuring a 120mm ARGB fan and improved cooling performance for modern processors.",

    shortDescription: "Affordable tower CPU cooler with ARGB lighting.",

    images: [
      "/products/hyper-212-halo-1.jpg",
      "/products/hyper-212-halo-2.jpg",
    ],

    thumbnail: "/products/hyper-212-halo-1.jpg",

    price: 49,
    originalPrice: 59,
    discountPercentage: 17,

    rating: 4.6,
    reviewCount: 176,

    reviews: [
      {
        id: "review-010",
        userName: "Sam Carter",
        rating: 5,
        comment: "Excellent cooler for the price.",
        date: "2026-08-01",
        verifiedPurchase: true,
        helpful: 23,
      },
    ],

    inStock: true,
    stockQuantity: 31,

    specifications: {
      fanSize: "120mm",
      fanSpeed: "650-1800 RPM",
      heatPipes: 4,
      lighting: "ARGB",
      compatibility: "AM5 / AM4 / LGA1700",
      noiseLevel: "30 dBA",
    },

    tags: ["CPU Cooler", "ARGB", "Air Cooling"],

    featured: false,
    bestseller: true,
    newArrival: false,

    warranty: "2 Years",

    createdAt: "2026-02-25",
  },

  // ============================================================
  // 9. MONITOR
  // ============================================================
  {
    id: "monitor-001",
    name: "ASUS TUF Gaming 27-inch 1440p 165Hz",
    slug: "asus-tuf-gaming-27-1440p-165hz",

    brand: "ASUS",
    category: "Monitor",

    description:
      "27-inch gaming monitor featuring a sharp 1440p resolution, 165Hz refresh rate, Adaptive Sync, and fast response time.",

    shortDescription: "27-inch 1440p gaming monitor with 165Hz refresh rate.",

    images: ["/products/asus-monitor-1.jpg", "/products/asus-monitor-2.jpg"],

    thumbnail: "/products/asus-monitor-1.jpg",

    price: 299,
    originalPrice: 349,
    discountPercentage: 14,

    rating: 4.8,
    reviewCount: 256,

    reviews: [
      {
        id: "review-011",
        userName: "Jason R",
        rating: 5,
        comment: "Great colors and very smooth at 165Hz.",
        date: "2026-08-16",
        verifiedPurchase: true,
        helpful: 37,
      },
    ],

    inStock: true,
    stockQuantity: 8,

    specifications: {
      screenSize: "27 inch",
      resolution: "2560 x 1440",
      refreshRate: "165 Hz",
      responseTime: "1 ms",
      panel: "IPS",
      adaptiveSync: "FreeSync / G-Sync Compatible",
      hdr: true,
      ports: "DisplayPort / HDMI",
    },

    tags: ["1440p", "165Hz", "Gaming", "IPS"],

    featured: true,
    bestseller: true,
    newArrival: false,

    warranty: "3 Years",

    createdAt: "2026-03-05",
  },

  // ============================================================
  // 10. KEYBOARD
  // ============================================================
  {
    id: "keyboard-001",
    name: "Razer BlackWidow V4 Mechanical Keyboard",
    slug: "razer-blackwidow-v4",

    brand: "Razer",
    category: "Keyboard",

    description:
      "Premium mechanical gaming keyboard with customizable RGB lighting, programmable keys, and tactile mechanical switches.",

    shortDescription: "Premium mechanical RGB gaming keyboard.",

    images: [
      "/products/razer-blackwidow-1.jpg",
      "/products/razer-blackwidow-2.jpg",
    ],

    thumbnail: "/products/razer-blackwidow-1.jpg",

    price: 129,
    originalPrice: 149,
    discountPercentage: 13,

    rating: 4.7,
    reviewCount: 321,

    reviews: [
      {
        id: "review-012",
        userName: "David M",
        rating: 5,
        comment: "The switches feel amazing and the RGB is beautiful.",
        date: "2026-08-19",
        verifiedPurchase: true,
        helpful: 44,
      },
    ],

    inStock: true,
    stockQuantity: 24,

    specifications: {
      switchType: "Mechanical",
      connection: "USB",
      lighting: "RGB",
      programmableKeys: true,
      wristRest: true,
      pollingRate: "8000 Hz",
      layout: "US QWERTY",
    },

    tags: ["Mechanical", "RGB", "Gaming", "Keyboard"],

    featured: false,
    bestseller: true,
    newArrival: false,

    warranty: "2 Years",

    createdAt: "2026-01-28",
  },

  // ============================================================
  // 11. MOUSE
  // ============================================================
  {
    id: "mouse-001",
    name: "Logitech G Pro X Superlight 2",
    slug: "logitech-g-pro-x-superlight-2",

    brand: "Logitech",
    category: "Mouse",

    description:
      "Ultra-lightweight wireless gaming mouse designed for competitive gaming with a high-precision sensor and long battery life.",

    shortDescription:
      "Lightweight wireless gaming mouse for competitive players.",

    images: [
      "/products/logitech-superlight-1.jpg",
      "/products/logitech-superlight-2.jpg",
    ],

    thumbnail: "/products/logitech-superlight-1.jpg",

    price: 149,
    originalPrice: 169,
    discountPercentage: 12,

    rating: 4.9,
    reviewCount: 487,

    reviews: [
      {
        id: "review-013",
        userName: "Ethan P",
        rating: 5,
        comment: "Incredibly lightweight and accurate.",
        date: "2026-08-22",
        verifiedPurchase: true,
        helpful: 63,
      },
    ],

    inStock: true,
    stockQuantity: 42,

    specifications: {
      connection: "Wireless",
      sensor: "HERO 2",
      dpi: "32000 DPI",
      weight: "60g",
      batteryLife: "95 Hours",
      buttons: 5,
      pollingRate: "4000 Hz",
    },

    tags: ["Wireless", "Gaming", "Lightweight", "FPS"],

    featured: true,
    bestseller: true,
    newArrival: false,

    warranty: "2 Years",

    createdAt: "2026-02-18",
  },

  // ============================================================
  // 12. HEADSET
  // ============================================================
  {
    id: "headset-001",
    name: "Razer BlackShark V2 Pro Wireless",
    slug: "razer-blackshark-v2-pro",

    brand: "Razer",
    category: "Headset",

    description:
      "Wireless gaming headset with immersive surround sound, a high-quality microphone, and long-lasting battery life.",

    shortDescription: "Wireless gaming headset with immersive surround sound.",

    images: [
      "/products/razer-blackshark-1.jpg",
      "/products/razer-blackshark-2.jpg",
    ],

    thumbnail: "/products/razer-blackshark-1.jpg",

    price: 159,
    originalPrice: 179,
    discountPercentage: 11,

    rating: 4.7,
    reviewCount: 219,

    reviews: [
      {
        id: "review-014",
        userName: "Noah Williams",
        rating: 5,
        comment: "Very comfortable for long gaming sessions.",
        date: "2026-08-08",
        verifiedPurchase: true,
        helpful: 29,
      },
    ],

    inStock: true,
    stockQuantity: 17,

    specifications: {
      connection: "2.4GHz Wireless",
      driverSize: "50mm",
      batteryLife: "70 Hours",
      microphone: "Detachable",
      surroundSound: "7.1",
      compatibility: "PC / PlayStation",
    },

    tags: ["Wireless", "Gaming", "7.1", "Headset"],

    featured: false,
    bestseller: false,
    newArrival: true,

    warranty: "2 Years",

    createdAt: "2026-04-15",
  },

  // ============================================================
  // 13. CPU - INTEL
  // ============================================================
  {
    id: "cpu-002",
    name: "Intel Core i7-14700K",
    slug: "intel-core-i7-14700k",

    brand: "Intel",
    category: "CPU",

    description:
      "High-performance Intel desktop processor designed for gaming, streaming, and demanding productivity workloads.",

    shortDescription:
      "High-performance Intel processor for gaming and productivity.",

    images: [
      "/products/intel-i7-14700k-1.jpg",
      "/products/intel-i7-14700k-2.jpg",
    ],

    thumbnail: "/products/intel-i7-14700k-1.jpg",

    price: 379,
    originalPrice: 419,
    discountPercentage: 10,

    rating: 4.8,
    reviewCount: 241,

    reviews: [
      {
        id: "review-015",
        userName: "Oliver Smith",
        rating: 5,
        comment: "Excellent all-round processor.",
        date: "2026-07-30",
        verifiedPurchase: true,
        helpful: 32,
      },
    ],

    inStock: true,
    stockQuantity: 13,

    specifications: {
      cores: 20,
      threads: 28,
      performanceCores: 8,
      efficiencyCores: 12,
      boostClock: "5.6 GHz",
      socket: "LGA1700",
      cache: "33 MB",
      integratedGraphics: "Intel UHD Graphics 770",
      tdp: "125W",
    },

    tags: ["Intel", "Gaming", "Productivity", "LGA1700"],

    featured: true,
    bestseller: false,
    newArrival: false,

    warranty: "3 Years",

    createdAt: "2026-01-05",
  },

  // ============================================================
  // 14. HDD
  // ============================================================
  {
    id: "hdd-001",
    name: "Western Digital Blue 4TB HDD",
    slug: "wd-blue-4tb-hdd",

    brand: "WD",
    category: "Storage",

    description:
      "Reliable 4TB desktop hard drive suitable for storing games, media, backups, and large files.",

    shortDescription: "Reliable 4TB desktop storage drive.",

    images: ["/products/wd-blue-4tb-1.jpg"],

    thumbnail: "/products/wd-blue-4tb-1.jpg",

    price: 89,
    originalPrice: 99,
    discountPercentage: 10,

    rating: 4.5,
    reviewCount: 176,

    reviews: [
      {
        id: "review-016",
        userName: "Lucas",
        rating: 5,
        comment: "Great storage for backups and media.",
        date: "2026-07-15",
        verifiedPurchase: true,
        helpful: 16,
      },
    ],

    inStock: true,
    stockQuantity: 29,

    specifications: {
      capacity: "4 TB",
      interface: "SATA III",
      rotationSpeed: "5400 RPM",
      cache: "256 MB",
      formFactor: "3.5 inch",
    },

    tags: ["HDD", "4TB", "Storage", "Backup"],

    featured: false,
    bestseller: false,
    newArrival: false,

    warranty: "2 Years",

    createdAt: "2026-02-05",
  },

  // ============================================================
  // 15. GAMING CONTROLLER
  // ============================================================
  {
    id: "controller-001",
    name: "Xbox Wireless Controller",
    slug: "xbox-wireless-controller",

    brand: "Other",
    category: "Accessories",

    description:
      "Comfortable wireless controller suitable for PC gaming and console-style games.",

    shortDescription: "Wireless controller for PC gaming.",

    images: [
      "/products/xbox-controller-1.jpg",
      "/products/xbox-controller-2.jpg",
    ],

    thumbnail: "/products/xbox-controller-1.jpg",

    price: 59,
    originalPrice: 69,
    discountPercentage: 14,

    rating: 4.7,
    reviewCount: 384,

    reviews: [
      {
        id: "review-017",
        userName: "Henry",
        rating: 5,
        comment: "Very comfortable and works perfectly on Windows.",
        date: "2026-08-02",
        verifiedPurchase: true,
        helpful: 41,
      },
    ],

    inStock: true,
    stockQuantity: 33,

    specifications: {
      connection: "Bluetooth / Wireless",
      compatibility: "Windows / Xbox",
      battery: "AA Batteries",
      vibration: true,
      audioJack: "3.5mm",
    },

    tags: ["Controller", "Wireless", "Gaming"],

    featured: false,
    bestseller: true,
    newArrival: false,

    warranty: "1 Year",

    createdAt: "2026-03-01",
  },

  // ============================================================
  // 16. WEBCAM
  // ============================================================
  {
    id: "webcam-001",
    name: "Logitech C920 HD Pro Webcam",
    slug: "logitech-c920-hd-pro",

    brand: "Logitech",
    category: "Accessories",

    description:
      "Full HD webcam designed for streaming, video calls, online classes, and content creation.",

    shortDescription: "Full HD webcam for streaming and video calls.",

    images: ["/products/logitech-c920-1.jpg", "/products/logitech-c920-2.jpg"],

    thumbnail: "/products/logitech-c920-1.jpg",

    price: 69,
    originalPrice: 79,
    discountPercentage: 13,

    rating: 4.6,
    reviewCount: 302,

    reviews: [
      {
        id: "review-018",
        userName: "Emma",
        rating: 5,
        comment: "Great webcam for Zoom and streaming.",
        date: "2026-07-22",
        verifiedPurchase: true,
        helpful: 25,
      },
    ],

    inStock: true,
    stockQuantity: 21,

    specifications: {
      resolution: "1080p",
      frameRate: "30 FPS",
      microphone: "Stereo",
      autofocus: true,
      connection: "USB",
      lens: "Glass",
    },

    tags: ["Webcam", "1080p", "Streaming"],

    featured: false,
    bestseller: false,
    newArrival: false,

    warranty: "2 Years",

    createdAt: "2026-01-18",
  },

  // ============================================================
  // 17. WIFI ADAPTER
  // ============================================================
  {
    id: "wifi-001",
    name: "ASUS WiFi 6E PCIe Adapter",
    slug: "asus-wifi-6e-pcie-adapter",

    brand: "ASUS",
    category: "Accessories",

    description:
      "High-speed PCIe wireless adapter supporting WiFi 6E for fast and reliable desktop connectivity.",

    shortDescription: "High-speed WiFi 6E PCIe adapter for desktops.",

    images: ["/products/asus-wifi-6e-1.jpg", "/products/asus-wifi-6e-2.jpg"],

    thumbnail: "/products/asus-wifi-6e-1.jpg",

    price: 79,
    originalPrice: 89,
    discountPercentage: 11,

    rating: 4.5,
    reviewCount: 98,

    reviews: [
      {
        id: "review-019",
        userName: "Ben",
        rating: 5,
        comment: "Easy installation and excellent wireless speeds.",
        date: "2026-06-30",
        verifiedPurchase: true,
        helpful: 12,
      },
    ],

    inStock: true,
    stockQuantity: 16,

    specifications: {
      wifi: "WiFi 6E",
      bluetooth: "Bluetooth 5.3",
      interface: "PCIe",
      bands: "2.4GHz / 5GHz / 6GHz",
      maxSpeed: "5400 Mbps",
      antennas: 2,
    },

    tags: ["WiFi 6E", "Wireless", "PCIe"],

    featured: false,
    bestseller: false,
    newArrival: true,

    warranty: "3 Years",

    createdAt: "2026-05-01",
  },

  // ============================================================
  // 18. THERMAL PASTE
  // ============================================================
  {
    id: "thermal-paste-001",
    name: "Arctic MX-6 Thermal Paste",
    slug: "arctic-mx-6-thermal-paste",

    brand: "Other",
    category: "Cooling",

    description:
      "High-performance thermal compound designed to improve heat transfer between the CPU and cooler.",

    shortDescription: "High-performance thermal paste for CPUs and GPUs.",

    images: ["/products/arctic-mx6-1.jpg"],

    thumbnail: "/products/arctic-mx6-1.jpg",

    price: 9,
    originalPrice: 12,
    discountPercentage: 25,

    rating: 4.9,
    reviewCount: 621,

    reviews: [
      {
        id: "review-020",
        userName: "Adam",
        rating: 5,
        comment: "Easy to apply and temperatures improved noticeably.",
        date: "2026-08-14",
        verifiedPurchase: true,
        helpful: 72,
      },
    ],

    inStock: true,
    stockQuantity: 76,

    specifications: {
      quantity: "4g",
      thermalConductivity: "High Performance",
      electricallyConductive: false,
      application: "CPU / GPU",
      durability: "Long Term",
    },

    tags: ["Thermal Paste", "CPU", "GPU", "Cooling"],

    featured: false,
    bestseller: true,
    newArrival: false,

    warranty: "5 Years",

    createdAt: "2026-02-20",
  },

  // ============================================================
  // 19. CASE FAN
  // ============================================================
  {
    id: "fan-001",
    name: "Corsair AF120 RGB Elite 120mm Fan",
    slug: "corsair-af120-rgb-elite",

    brand: "Corsair",
    category: "Cooling",

    description:
      "High-airflow 120mm RGB case fan designed to improve system cooling while adding customizable lighting.",

    shortDescription: "High-airflow 120mm RGB case fan.",

    images: ["/products/corsair-af120-1.jpg", "/products/corsair-af120-2.jpg"],

    thumbnail: "/products/corsair-af120-1.jpg",

    price: 29,
    originalPrice: 35,
    discountPercentage: 17,

    rating: 4.6,
    reviewCount: 134,

    reviews: [
      {
        id: "review-021",
        userName: "Josh",
        rating: 5,
        comment: "Good airflow and the RGB looks great.",
        date: "2026-07-12",
        verifiedPurchase: true,
        helpful: 15,
      },
    ],

    inStock: true,
    stockQuantity: 48,

    specifications: {
      size: "120mm",
      speed: "400-1850 RPM",
      airflow: "65.57 CFM",
      noise: "34.1 dBA",
      bearing: "Fluid Dynamic Bearing",
      lighting: "RGB",
    },

    tags: ["RGB", "120mm", "Cooling", "Case Fan"],

    featured: false,
    bestseller: false,
    newArrival: true,

    warranty: "5 Years",

    createdAt: "2026-05-15",
  },

  // ============================================================
  // 20. USB HUB
  // ============================================================
  {
    id: "hub-001",
    name: "Anker 7-Port USB 3.0 Hub",
    slug: "anker-7-port-usb-3-hub",

    brand: "Other",
    category: "Accessories",

    description:
      "Convenient powered USB hub providing multiple high-speed USB ports for peripherals, storage devices, and accessories.",

    shortDescription: "7-port USB 3.0 hub for desktop connectivity.",

    images: ["/products/anker-usb-hub-1.jpg", "/products/anker-usb-hub-2.jpg"],

    thumbnail: "/products/anker-usb-hub-1.jpg",

    price: 39,
    originalPrice: 49,
    discountPercentage: 20,

    rating: 4.6,
    reviewCount: 187,

    reviews: [
      {
        id: "review-022",
        userName: "Peter",
        rating: 5,
        comment: "Very useful for connecting all my peripherals.",
        date: "2026-08-06",
        verifiedPurchase: true,
        helpful: 21,
      },
    ],

    inStock: true,
    stockQuantity: 37,

    specifications: {
      ports: 7,
      interface: "USB 3.0",
      transferSpeed: "5 Gbps",
      powered: true,
      compatibility: "Windows / macOS / Linux",
      cableLength: "1m",
    },

    tags: ["USB", "Hub", "Accessories", "USB 3.0"],

    featured: false,
    bestseller: false,
    newArrival: false,

    warranty: "18 Months",

    createdAt: "2026-03-18",
  },
];

export default products;
