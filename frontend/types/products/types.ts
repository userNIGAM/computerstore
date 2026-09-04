export type ProductCategory =
  | "CPU"
  | "GPU"
  | "Motherboard"
  | "RAM"
  | "Storage"
  | "PSU"
  | "Case"
  | "Cooling"
  | "Monitor"
  | "Keyboard"
  | "Mouse"
  | "Headset"
  | "Accessories";

export type ProductBrand =
  | "Intel"
  | "AMD"
  | "NVIDIA"
  | "ASUS"
  | "MSI"
  | "Gigabyte"
  | "Corsair"
  | "Kingston"
  | "Samsung"
  | "WD"
  | "Cooler Master"
  | "Logitech"
  | "Razer"
  | "NZXT"
  | "Other";

export interface ProductReview {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verifiedPurchase: boolean;
  helpful: number;
}

export interface ProductSpecifications {
  [key: string]: string | number | boolean;
}

export interface Product {
  id: string;

  name: string;
  slug: string;

  brand: ProductBrand;
  category: ProductCategory;

  description: string;
  shortDescription: string;

  images: string[];
  thumbnail: string;

  price: number;
  originalPrice: number;
  discountPercentage: number;

  rating: number;
  reviewCount: number;
  reviews: ProductReview[];

  inStock: boolean;
  stockQuantity: number;

  specifications: ProductSpecifications;

  tags: string[];

  featured: boolean;
  bestseller: boolean;
  newArrival: boolean;

  warranty: string;

  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WishlistItem {
  productId: string;
  addedAt: string;
}
