// Extracted and structured authentic data from e-hisse.az

export interface Category {
  id: number;
  name: string;
  displayOrder: number;
  isActive: boolean;
}

export interface DeviceBrand {
  id: number;
  name: string;
  isActive: boolean;
}

export interface DeviceModel {
  id: number;
  categoryId: number;
  brandId: number;
  name: string;
  modelCode: string;
  releaseYear: number;
  isActive: boolean;
}

export interface SparePartType {
  id: number;
  name: string;
  key: string;
  isPortable: boolean;
  isAccessory: boolean;
}

export interface QualityType {
  id: number;
  name: string;
  code: string;
  description: string;
  displayOrder: number;
  isActive: boolean;
}

export interface User {
  id: number;
  username: string;
  role: number; // 1: Admin, 2: Usta, 3: Anbardar
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  approvalStatus: number; // 1: Pending, 2: Approved, 3: Rejected
  isBlocked: boolean;
  createdDate: string;
}

export interface SellerProfile {
  id: number;
  userId: number;
  companyName: string;
  contactPerson: string;
  phone: string;
  whatsAppNumber: string | null;
  address: string | null;
  rating: number;
  showContactInfoInAds: boolean;
  isPhoneVerified: boolean;
}

export interface SparePartImage {
  id: number;
  imageUrl: string;
  isMain: boolean;
  displayOrder: number;
}

export interface SparePart {
  id: number;
  sellerId: number;
  deviceModelId: number;
  categoryId: number | null;
  brandId: number | null;
  partTypeId: number;
  qualityTypeId: number;
  title: string;
  description: string;
  sku: string;
  price: number;
  discountPrice: number | null;
  currency: string;
  stockQuantity: number;
  minOrderQuantity: number;
  warrantyMonths: number;
  viewCount: number;
  moderationStatus: number; // 1: Pending, 2: Approved, 3: Rejected
  rejectionReason: string | null;
  isActive: boolean;
  isDeleted: boolean;
  createdDate: string;
  images: SparePartImage[];
}

export interface CategoryBrand {
  categoryId: number;
  brandId: number;
}

export interface CategoryPartType {
  categoryId: number;
  partTypeId: number;
}

export interface ActivityLog {
  id: number;
  userId: number;
  action: string;
  entityName: string | null;
  entityId: number | null;
  details: string | null;
  date: string;
}

export interface SaleAudit {
  id: number;
  sparePartId: number;
  sellerId: number;
  quantity: number;
  previousStock: number;
  newStock: number;
  timestamp: string;
}

export const INITIAL_CATEGORIES: Category[] = [
  {
    "id": 1,
    "name": "Telefon",
    "displayOrder": 1,
    "isActive": true
  },
  {
    "id": 2,
    "name": "Planset",
    "displayOrder": 2,
    "isActive": true
  },
  {
    "id": 3,
    "name": "Noutbuk",
    "displayOrder": 3,
    "isActive": true
  },
  {
    "id": 4,
    "name": "Smart Saat ehtiyat hissələri",
    "displayOrder": 4,
    "isActive": true
  },
  {
    "id": 5,
    "name": "Qulaqlıq ehtiyat hissələri",
    "displayOrder": 5,
    "isActive": true
  },
  {
    "id": 6,
    "name": "Kompüter (PC) ehtiyat hissələri",
    "displayOrder": 6,
    "isActive": true
  },
  {
    "id": 7,
    "name": "Televizor ehtiyat hissələri",
    "displayOrder": 7,
    "isActive": true
  },
  {
    "id": 8,
    "name": "Oyun Konsolu ehtiyat hissələri",
    "displayOrder": 8,
    "isActive": true
  },
  {
    "id": 9,
    "name": "Foto/Video Kamera ehtiyat hissələri",
    "displayOrder": 9,
    "isActive": true
  },
  {
    "id": 10,
    "name": "Alətlər və Təmir Avadanlıqları",
    "displayOrder": 10,
    "isActive": true
  },
  {
    "id": 11,
    "name": "Dron ehtiyat hissələri",
    "displayOrder": 11,
    "isActive": true
  },
  {
    "id": 12,
    "name": "Elektrikli Samokat ehtiyat hissələri",
    "displayOrder": 12,
    "isActive": true
  },
  {
    "id": 13,
    "name": "Şəbəkə Avadanlıqları",
    "displayOrder": 13,
    "isActive": true
  },
  {
    "id": 14,
    "name": "Adapterlər və Kabellər",
    "displayOrder": 14,
    "isActive": true
  },
  {
    "id": 15,
    "name": "Ekranlar - 1",
    "displayOrder": 1,
    "isActive": true
  },
  {
    "id": 16,
    "name": "Batareyalar - 2",
    "displayOrder": 2,
    "isActive": true
  },
  {
    "id": 17,
    "name": "Ana platalar - 3",
    "displayOrder": 3,
    "isActive": true
  },
  {
    "id": 18,
    "name": "Klaviaturalar - 4",
    "displayOrder": 4,
    "isActive": true
  },
  {
    "id": 19,
    "name": "Kamera - 5",
    "displayOrder": 5,
    "isActive": true
  },
  {
    "id": 20,
    "name": "Dinamiklər - 6",
    "displayOrder": 6,
    "isActive": true
  },
  {
    "id": 21,
    "name": "Səs düymələri - 7",
    "displayOrder": 7,
    "isActive": true
  },
  {
    "id": 22,
    "name": "Korpuslar - 8",
    "displayOrder": 8,
    "isActive": true
  },
  {
    "id": 23,
    "name": "Adapterlər - 9",
    "displayOrder": 9,
    "isActive": true
  },
  {
    "id": 24,
    "name": "Kabellər - 10",
    "displayOrder": 10,
    "isActive": true
  },
  {
    "id": 25,
    "name": "Yaddaş kartları - 11",
    "displayOrder": 11,
    "isActive": true
  },
  {
    "id": 26,
    "name": "RAM - 12",
    "displayOrder": 12,
    "isActive": true
  },
  {
    "id": 27,
    "name": "Prosessorlar - 13",
    "displayOrder": 13,
    "isActive": true
  },
  {
    "id": 28,
    "name": "Kulerlər - 14",
    "displayOrder": 14,
    "isActive": true
  },
  {
    "id": 29,
    "name": "Soyuducu sistemlər - 15",
    "displayOrder": 15,
    "isActive": true
  },
  {
    "id": 30,
    "name": "Sensörlər - 16",
    "displayOrder": 16,
    "isActive": true
  },
  {
    "id": 31,
    "name": "Mikrofonlar - 17",
    "displayOrder": 17,
    "isActive": true
  },
  {
    "id": 32,
    "name": "Wi-Fi modulları - 18",
    "displayOrder": 18,
    "isActive": true
  },
  {
    "id": 33,
    "name": "Bluetooth modulları - 19",
    "displayOrder": 19,
    "isActive": true
  },
  {
    "id": 34,
    "name": "NFC antennaları - 20",
    "displayOrder": 20,
    "isActive": true
  },
  {
    "id": 35,
    "name": "Şarj yuvaları - 21",
    "displayOrder": 21,
    "isActive": true
  },
  {
    "id": 36,
    "name": "Qulaqlıq ehtiyat hissələri",
    "displayOrder": 22,
    "isActive": true
  },
  {
    "id": 37,
    "name": "Düymələr - 23",
    "displayOrder": 23,
    "isActive": true
  },
  {
    "id": 38,
    "name": "Şüşələr - 24",
    "displayOrder": 24,
    "isActive": true
  },
  {
    "id": 39,
    "name": "Plastik hissələr - 25",
    "displayOrder": 25,
    "isActive": true
  },
  {
    "id": 40,
    "name": "Konnektorlar - 26",
    "displayOrder": 26,
    "isActive": true
  },
  {
    "id": 41,
    "name": "Şleyflər - 27",
    "displayOrder": 27,
    "isActive": true
  },
  {
    "id": 42,
    "name": "Vintlə - 28",
    "displayOrder": 28,
    "isActive": true
  },
  {
    "id": 43,
    "name": "Alətlər və Təmir Avadanlıqları",
    "displayOrder": 29,
    "isActive": true
  },
  {
    "id": 44,
    "name": "Lentalar - 30",
    "displayOrder": 30,
    "isActive": true
  }
];

export const INITIAL_BRANDS: DeviceBrand[] = [
  {
    "id": 1,
    "name": "Apple",
    "isActive": true
  },
  {
    "id": 2,
    "name": "Samsung",
    "isActive": true
  },
  {
    "id": 3,
    "name": "Xiaomi",
    "isActive": true
  },
  {
    "id": 4,
    "name": "Huawei",
    "isActive": true
  },
  {
    "id": 5,
    "name": "Dell",
    "isActive": true
  },
  {
    "id": 6,
    "name": "Lenovo",
    "isActive": true
  },
  {
    "id": 7,
    "name": "Asus",
    "isActive": true
  },
  {
    "id": 8,
    "name": "Digər",
    "isActive": true
  }
];

export const INITIAL_MODELS: DeviceModel[] = [
  {
    "id": 1,
    "categoryId": 1,
    "brandId": 1,
    "name": "iPhone 15 Pro Max",
    "modelCode": "A2849",
    "releaseYear": 2023,
    "isActive": true
  },
  {
    "id": 2,
    "categoryId": 1,
    "brandId": 1,
    "name": "iPhone 15 Pro",
    "modelCode": "A2848",
    "releaseYear": 2023,
    "isActive": true
  },
  {
    "id": 3,
    "categoryId": 1,
    "brandId": 1,
    "name": "iPhone 14 Pro Max",
    "modelCode": "A2651",
    "releaseYear": 2022,
    "isActive": true
  },
  {
    "id": 4,
    "categoryId": 1,
    "brandId": 1,
    "name": "iPhone 13",
    "modelCode": "A2482",
    "releaseYear": 2021,
    "isActive": true
  },
  {
    "id": 5,
    "categoryId": 1,
    "brandId": 2,
    "name": "Galaxy S24 Ultra",
    "modelCode": "SM-S928",
    "releaseYear": 2024,
    "isActive": true
  },
  {
    "id": 6,
    "categoryId": 1,
    "brandId": 2,
    "name": "Galaxy S23",
    "modelCode": "SM-S911",
    "releaseYear": 2023,
    "isActive": true
  },
  {
    "id": 7,
    "categoryId": 1,
    "brandId": 2,
    "name": "Galaxy A54",
    "modelCode": "SM-A546",
    "releaseYear": 2023,
    "isActive": true
  },
  {
    "id": 8,
    "categoryId": 1,
    "brandId": 3,
    "name": "Xiaomi 13 Pro",
    "modelCode": "2210132C",
    "releaseYear": 2023,
    "isActive": true
  },
  {
    "id": 9,
    "categoryId": 1,
    "brandId": 3,
    "name": "Redmi Note 12 Pro",
    "modelCode": "2211133C",
    "releaseYear": 2023,
    "isActive": true
  },
  {
    "id": 10,
    "categoryId": 1,
    "brandId": 4,
    "name": "P60 Pro",
    "modelCode": "ALN-AL00",
    "releaseYear": 2023,
    "isActive": true
  },
  {
    "id": 11,
    "categoryId": 2,
    "brandId": 1,
    "name": "iPad Pro 12.9 (2024)",
    "modelCode": "A2764",
    "releaseYear": 2024,
    "isActive": true
  },
  {
    "id": 12,
    "categoryId": 2,
    "brandId": 1,
    "name": "iPad Air (2024)",
    "modelCode": "A2589",
    "releaseYear": 2024,
    "isActive": true
  },
  {
    "id": 13,
    "categoryId": 2,
    "brandId": 2,
    "name": "Galaxy Tab S9 Ultra",
    "modelCode": "SM-X916",
    "releaseYear": 2023,
    "isActive": true
  },
  {
    "id": 14,
    "categoryId": 3,
    "brandId": 1,
    "name": "MacBook Pro 14 (M3)",
    "modelCode": "MRX33",
    "releaseYear": 2023,
    "isActive": true
  },
  {
    "id": 15,
    "categoryId": 3,
    "brandId": 1,
    "name": "MacBook Air 13 (M2)",
    "modelCode": "MLXY3",
    "releaseYear": 2022,
    "isActive": true
  },
  {
    "id": 16,
    "categoryId": 3,
    "brandId": 5,
    "name": "XPS 13 Plus",
    "modelCode": "9320",
    "releaseYear": 2024,
    "isActive": true
  },
  {
    "id": 17,
    "categoryId": 3,
    "brandId": 5,
    "name": "XPS 15",
    "modelCode": "9530",
    "releaseYear": 2023,
    "isActive": true
  },
  {
    "id": 18,
    "categoryId": 4,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 19,
    "categoryId": 5,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 20,
    "categoryId": 6,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 21,
    "categoryId": 7,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 22,
    "categoryId": 8,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 23,
    "categoryId": 9,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 24,
    "categoryId": 10,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 25,
    "categoryId": 11,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 26,
    "categoryId": 12,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 27,
    "categoryId": 13,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 28,
    "categoryId": 14,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 29,
    "categoryId": 15,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 30,
    "categoryId": 16,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 31,
    "categoryId": 17,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 32,
    "categoryId": 18,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 33,
    "categoryId": 19,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 34,
    "categoryId": 20,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 35,
    "categoryId": 21,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 36,
    "categoryId": 22,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 37,
    "categoryId": 23,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 38,
    "categoryId": 24,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 39,
    "categoryId": 25,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 40,
    "categoryId": 26,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 41,
    "categoryId": 27,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 42,
    "categoryId": 28,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 43,
    "categoryId": 29,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 44,
    "categoryId": 30,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 45,
    "categoryId": 31,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 46,
    "categoryId": 32,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 47,
    "categoryId": 33,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 48,
    "categoryId": 34,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 49,
    "categoryId": 35,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 50,
    "categoryId": 36,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 51,
    "categoryId": 37,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 52,
    "categoryId": 38,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 53,
    "categoryId": 39,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 54,
    "categoryId": 40,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 55,
    "categoryId": 41,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 56,
    "categoryId": 42,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 57,
    "categoryId": 43,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  },
  {
    "id": 58,
    "categoryId": 44,
    "brandId": 8,
    "name": "Digər (Ümumi)",
    "modelCode": "OTHER",
    "releaseYear": 2026,
    "isActive": true
  }
];

export const INITIAL_PART_TYPES: SparePartType[] = [
  {
    "id": 1,
    "name": "Telefon üçün ekranlar",
    "key": "SCREEN",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 2,
    "name": "Telefon üçün batareyalar",
    "key": "BATTERY",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 3,
    "name": "Kameralar",
    "key": "CAM_REAR",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 4,
    "name": "Kamera şüşələri",
    "key": "CAM_FRONT",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 5,
    "name": "Motherboard",
    "key": "MB",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 6,
    "name": "Arxa qapaqlar",
    "key": "BACK_COVER",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 7,
    "name": "Dinamiklər, zənglər və vibromotorlar",
    "key": "SPEAKER",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 8,
    "name": "Charging Port",
    "key": "CHARGING_PORT",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 9,
    "name": "Sim tutucular",
    "key": "SIM_TRAY",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 10,
    "name": "Home düymələri və skanerlər",
    "key": "BUTTONS",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 11,
    "name": "Keyboard",
    "key": "KEYBOARD",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 12,
    "name": "Touchpad",
    "key": "TOUCHPAD",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 13,
    "name": "Ram",
    "key": "RAM",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 14,
    "name": "Storage",
    "key": "STORAGE",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 15,
    "name": "Adapter",
    "key": "ADAPTER",
    "isPortable": false,
    "isAccessory": true
  },
  {
    "id": 16,
    "name": "Telefon üçün sensorlar və ekran şüşələri",
    "key": "SENSOR_GLASS",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 17,
    "name": "Antenlər",
    "key": "ANTENNA",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 18,
    "name": "Dinamik setkaları",
    "key": "SPEAKER_NET",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 19,
    "name": "Korpus hissələri",
    "key": "BODY_PARTS",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 20,
    "name": "Korpuslar",
    "key": "BODY",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 21,
    "name": "Mikrofonlar",
    "key": "MIC",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 22,
    "name": "OCA filmlər, arxa işıqlar və polarizatorlar",
    "key": "OCA_POLARIZER",
    "isPortable": false,
    "isAccessory": false
  },
  {
    "id": 23,
    "name": "Digər",
    "key": "other",
    "isPortable": false,
    "isAccessory": false
  }
];

export const INITIAL_QUALITY_TYPES: QualityType[] = [
  {
    "id": 1,
    "name": "Zavod istehsalı (yeni)",
    "code": "ORIGINAL_NEW",
    "description": "Rəsmi zavod istehsalı, heç işlənməyib",
    "displayOrder": 1,
    "isActive": true
  },
  {
    "id": 2,
    "name": "Zavod istehsalı (işlənmiş)",
    "code": "ORIGINAL_USED",
    "description": "Rəsmi zavod, başqa telefondan çıxarılıb",
    "displayOrder": 2,
    "isActive": true
  },
  {
    "id": 3,
    "name": "A-Class (Premium)",
    "code": "A_CLASS",
    "description": "Yüksək keyfiyyətli alternativ, zavoda yaxın",
    "displayOrder": 3,
    "isActive": true
  },
  {
    "id": 4,
    "name": "B-Class (Standart)",
    "code": "B_CLASS",
    "description": "Orta keyfiyyət, əlverişli qiymət",
    "displayOrder": 4,
    "isActive": true
  },
  {
    "id": 5,
    "name": "C-Class (Ekonom)",
    "code": "C_CLASS",
    "description": "Æsas funksiyalar, ən aşağı qiymət",
    "displayOrder": 5,
    "isActive": true
  }
];

export const INITIAL_USERS: User[] = [
  {
    "id": 1,
    "username": "elcin",
    "role": 2,
    "firstName": "Elçin",
    "lastName": "Məmmədov",
    "phone": "+994501234567",
    "email": "elcin@example.com",
    "approvalStatus": 2,
    "isBlocked": false,
    "createdDate": "2026-10-02 16:57:06.8364687"
  },
  {
    "id": 2,
    "username": "rashad",
    "role": 3,
    "firstName": "Rəşad",
    "lastName": "Æ liyev",
    "phone": "+994551234568",
    "email": "rashad@example.com",
    "approvalStatus": 2,
    "isBlocked": false,
    "createdDate": "2026-10-02 16:57:06.8364697"
  },
  {
    "id": 3,
    "username": "nigar",
    "role": 2,
    "firstName": "Nigar",
    "lastName": "Həsənova",
    "phone": "+994701234569",
    "email": "nigar@example.com",
    "approvalStatus": 2,
    "isBlocked": false,
    "createdDate": "2026-10-02 16:57:06.8364699"
  },
  {
    "id": 4,
    "username": "admin",
    "role": 1,
    "firstName": "Baş",
    "lastName": "Administrator",
    "phone": "+994000000000",
    "email": "admin@example.com",
    "approvalStatus": 2,
    "isBlocked": false,
    "createdDate": "2026-10-02 16:57:06.8364701"
  },
  {
    "id": 5,
    "username": "samir",
    "role": 2,
    "firstName": "Samir",
    "lastName": "Quliyev",
    "phone": "+994501231122",
    "email": "samir@example.com",
    "approvalStatus": 2,
    "isBlocked": false,
    "createdDate": "2026-10-02 16:57:06.8364702"
  },
  {
    "id": 6,
    "username": "vuqar",
    "role": 3,
    "firstName": "Vuqar",
    "lastName": "Hesenov",
    "phone": "+994551233344",
    "email": "vuqar@example.com",
    "approvalStatus": 2,
    "isBlocked": false,
    "createdDate": "2026-10-02 16:57:06.8364704"
  },
  {
    "id": 7,
    "username": "leyla",
    "role": 2,
    "firstName": "Leyla",
    "lastName": "Memmedova",
    "phone": "+994701235566",
    "email": "leyla@example.com",
    "approvalStatus": 2,
    "isBlocked": false,
    "createdDate": "2026-10-02 16:57:06.8364706"
  },
  {
    "id": 8,
    "username": "taleh",
    "role": 3,
    "firstName": "Taleh",
    "lastName": "Qarayev",
    "phone": "+994511237788",
    "email": "taleh@example.com",
    "approvalStatus": 2,
    "isBlocked": false,
    "createdDate": "2026-10-02 16:57:06.8364708"
  },
  {
    "id": 9,
    "username": "rustam",
    "role": 2,
    "firstName": "Rustam",
    "lastName": "Aliyev",
    "phone": "+994501239900",
    "email": "rustam@example.com",
    "approvalStatus": 2,
    "isBlocked": false,
    "createdDate": "2026-10-02 16:57:06.8364709"
  },
  {
    "id": 10,
    "username": "Lamiye1501",
    "role": 2,
    "firstName": "Lamiye",
    "lastName": "Safguluyeva",
    "phone": "+994555521501",
    "email": "",
    "approvalStatus": 2,
    "isBlocked": false,
    "createdDate": "2026-10-01 13:01:16.0505817"
  },
  {
    "id": 11,
    "username": "Cavid_s",
    "role": 2,
    "firstName": "Cavid",
    "lastName": "Sevdimaliyev",
    "phone": "+994556989393",
    "email": "",
    "approvalStatus": 2,
    "isBlocked": false,
    "createdDate": "2026-10-01 21:33:42.0645062"
  },
  {
    "id": 12,
    "username": "safguluyevalamiya15@gmail.com",
    "role": 2,
    "firstName": "Lamiye",
    "lastName": "Safguluyeva",
    "phone": "+994103961501",
    "email": "safguluyevalamiya15@gmail.com",
    "approvalStatus": 2,
    "isBlocked": false,
    "createdDate": "2026-10-01 22:20:01.0261817"
  },
  {
    "id": 13,
    "username": "singroup0211@gmail.com",
    "role": 2,
    "firstName": "Asim",
    "lastName": "Məmmədov",
    "phone": "+994102523226",
    "email": "singroup0211@gmail.com",
    "approvalStatus": 1,
    "isBlocked": false,
    "createdDate": "2026-10-03 13:22:31.2265938"
  }
];

export const INITIAL_SELLERS: SellerProfile[] = [
  {
    "id": 1,
    "userId": 1,
    "companyName": "TechMaster Servis",
    "contactPerson": "Elçin Məmmədov",
    "phone": "+994501234567",
    "whatsAppNumber": null,
    "address": "Bakı, Nəsimi rayonu, 28 May küç. 15",
    "rating": 4.8,
    "showContactInfoInAds": true,
    "isPhoneVerified": true
  },
  {
    "id": 2,
    "userId": 2,
    "companyName": "Mobile Parts Store",
    "contactPerson": "Rəşad Æliyev",
    "phone": "+994551234568",
    "whatsAppNumber": null,
    "address": "Bakı, Yasamal rayonu, Cəfər Cabbarlı küç. 44",
    "rating": 4.5,
    "showContactInfoInAds": true,
    "isPhoneVerified": true
  },
  {
    "id": 3,
    "userId": 3,
    "companyName": "SmartFix Təmir Mərkəzi",
    "contactPerson": "Nigar Həsənova",
    "phone": "+994701234569",
    "whatsAppNumber": null,
    "address": "Bakı, Nərimanov rayonu, Æhmədli küç. 9",
    "rating": 4.9,
    "showContactInfoInAds": true,
    "isPhoneVerified": true
  },
  {
    "id": 4,
    "userId": 8,
    "companyName": "Taleh Qarayev (Anbardar)",
    "contactPerson": "Taleh Qarayev",
    "phone": "+994511237788",
    "whatsAppNumber": "+994511237788",
    "address": null,
    "rating": 5.0,
    "showContactInfoInAds": true,
    "isPhoneVerified": true
  },
  {
    "id": 5,
    "userId": 9,
    "companyName": "Rustam Aliyev (Usta)",
    "contactPerson": "Rustam Aliyev",
    "phone": "+994501239900",
    "whatsAppNumber": "+994501239900",
    "address": null,
    "rating": 5.0,
    "showContactInfoInAds": true,
    "isPhoneVerified": true
  },
  {
    "id": 6,
    "userId": 10,
    "companyName": "Lamiye Safguluyeva (Usta)",
    "contactPerson": "Lamiye Safguluyeva",
    "phone": "+994555521501",
    "whatsAppNumber": "+994555521501",
    "address": null,
    "rating": 5.0,
    "showContactInfoInAds": true,
    "isPhoneVerified": true
  },
  {
    "id": 7,
    "userId": 11,
    "companyName": "Cavid Sevdimaliyev (Usta)",
    "contactPerson": "Cavid Sevdimaliyev",
    "phone": "+994556989393",
    "whatsAppNumber": "+994556989393",
    "address": null,
    "rating": 5.0,
    "showContactInfoInAds": true,
    "isPhoneVerified": true
  },
  {
    "id": 8,
    "userId": 12,
    "companyName": "Lamiye Safguluyeva (Usta)",
    "contactPerson": "Lamiye Safguluyeva",
    "phone": "+994103961501",
    "whatsAppNumber": "+994103961501",
    "address": null,
    "rating": 5.0,
    "showContactInfoInAds": true,
    "isPhoneVerified": true
  }
];

export const INITIAL_SPARE_PARTS: SparePart[] = [
  {
    "id": 1,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "iPhone 15 Pro Max Ekran - Orijinal Zavod",
    "description": "6.7 d?ym OLED ekran, r?smi Apple zavod istehsali. He? isl?nm?yib, tam komplektd?.",
    "sku": "SKU-1",
    "price": 850.0,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 5,
    "minOrderQuantity": 1,
    "warrantyMonths": 6,
    "viewCount": 247,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 1,
        "imageUrl": "/images/images (1).jpg",
        "isMain": true,
        "displayOrder": 1
      },
      {
        "id": 2,
        "imageUrl": "/images/images (2).jpg",
        "isMain": false,
        "displayOrder": 2
      }
    ]
  },
  {
    "id": 2,
    "sellerId": 2,
    "deviceModelId": 5,
    "categoryId": 1,
    "brandId": 2,
    "partTypeId": 2,
    "qualityTypeId": 3,
    "title": "Samsung S24 Ultra Batareya (5000mAh) - A-Class",
    "description": "Y?ks?k keyfiyy?tli A-class batareya, 5000mAh tutum. S?r?tli sarj d?st?yi.",
    "sku": "SKU-2",
    "price": 120.0,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 15,
    "minOrderQuantity": 1,
    "warrantyMonths": 3,
    "viewCount": 189,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": false,
    "isDeleted": false,
    "createdDate": "2026-09-30 08:30:02",
    "images": [
      {
        "id": 4,
        "imageUrl": "/images/images (3).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 3,
    "sellerId": 3,
    "deviceModelId": 4,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 3,
    "qualityTypeId": 2,
    "title": "iPhone 13 Arxa Kamera 12MP - Orijinal (isl?nmis)",
    "description": "R?smi Apple kamera modulu, basqa telefondan ?ixarilib. Test edilib, tam isl?k v?ziyy?td?.",
    "sku": "SKU-3",
    "price": 280.0,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 3,
    "minOrderQuantity": 1,
    "warrantyMonths": 1,
    "viewCount": 156,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": false,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 6,
        "imageUrl": "/images/images (4).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 4,
    "sellerId": 1,
    "deviceModelId": 8,
    "categoryId": 1,
    "brandId": 3,
    "partTypeId": 5,
    "qualityTypeId": 2,
    "title": "Xiaomi 13 Pro Ana Plata - 256GB (isl?nmis)",
    "description": "256GB yaddas il? ana plata. Tam isl?k, IMEI t?miz. Test edilib.",
    "sku": "SKU-4",
    "price": 650.0,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 2,
    "minOrderQuantity": 1,
    "warrantyMonths": 2,
    "viewCount": 92,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": false,
    "isDeleted": false,
    "createdDate": "2026-09-28 06:30:02",
    "images": [
      {
        "id": 7,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 5,
    "sellerId": 2,
    "deviceModelId": 6,
    "categoryId": 1,
    "brandId": 2,
    "partTypeId": 1,
    "qualityTypeId": 4,
    "title": "Samsung Galaxy S23 Ekran - B-Class (?lverisli)",
    "description": "6.1 düym AMOLED ekran, B-class keyfiyyət. Æsas funksiyalar tam işləyir, qiymət əlverişlidir.",
    "sku": "SKU-5",
    "price": 320.0,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 10,
    "minOrderQuantity": 1,
    "warrantyMonths": 2,
    "viewCount": 203,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 9,
        "imageUrl": "/images/images (6).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 6,
    "sellerId": 3,
    "deviceModelId": 14,
    "categoryId": 3,
    "brandId": 1,
    "partTypeId": 2,
    "qualityTypeId": 1,
    "title": "MacBook Pro 14 (M3) Batareya - Orijinal Apple",
    "description": "70Wh litium-polimer batareya, orijinal Apple istehsali. Tam yeni, qutuda.",
    "sku": "SKU-6",
    "price": 450.0,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 4,
    "minOrderQuantity": 1,
    "warrantyMonths": 12,
    "viewCount": 78,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": false,
    "isDeleted": false,
    "createdDate": "2026-09-26 04:30:02",
    "images": [
      {
        "id": 10,
        "imageUrl": "/images/images (7).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 7,
    "sellerId": 1,
    "deviceModelId": 16,
    "categoryId": 3,
    "brandId": 5,
    "partTypeId": 11,
    "qualityTypeId": 3,
    "title": "Dell XPS 13 Plus Klaviatura - US Layout (A-Class)",
    "description": "Arxa isiqlandirmali klaviatura, US layout. Y?ks?k keyfiyy?tli alternativ.",
    "sku": "SKU-7",
    "price": 180.0,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 6,
    "minOrderQuantity": 1,
    "warrantyMonths": 6,
    "viewCount": 45,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": false,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 11,
        "imageUrl": "/images/images.jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 8,
    "sellerId": 2,
    "deviceModelId": 11,
    "categoryId": 2,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "iPad Pro 12.9 (2024) Ekran - Orijinal",
    "description": "12.9 d?ym Liquid Retina XDR ekran. R?smi Apple istehsali.",
    "sku": "SKU-8",
    "price": 1200.0,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 2,
    "minOrderQuantity": 1,
    "warrantyMonths": 12,
    "viewCount": 136,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-09-24 02:30:02",
    "images": [
      {
        "id": 12,
        "imageUrl": "/images/images (1).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 9,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Nümunəvi Ehtiyat Hissəsi 1",
    "description": "Bu sistem tərəfindən avtomatik əlavə edilmiş test məhsuludur 1.",
    "sku": "DUMMY-SKU-1",
    "price": 31.99,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 25,
    "minOrderQuantity": 1,
    "warrantyMonths": 0,
    "viewCount": 0,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 24,
        "imageUrl": "/images/images (6).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 10,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Nümunəvi Ehtiyat Hissəsi 2",
    "description": "Bu sistem tərəfindən avtomatik əlavə edilmiş test məhsuludur 2.",
    "sku": "DUMMY-SKU-2",
    "price": 268.99,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 24,
    "minOrderQuantity": 1,
    "warrantyMonths": 0,
    "viewCount": 0,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-09-22 00:30:02",
    "images": [
      {
        "id": 23,
        "imageUrl": "/images/images (3).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 11,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Nümunəvi Ehtiyat Hissəsi 3",
    "description": "Bu sistem tərəfindən avtomatik əlavə edilmiş test məhsuludur 3.",
    "sku": "DUMMY-SKU-3",
    "price": 102.99,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 1,
    "minOrderQuantity": 1,
    "warrantyMonths": 0,
    "viewCount": 0,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 22,
        "imageUrl": "/images/images (3).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 12,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Nümunəvi Ehtiyat Hissəsi 4",
    "description": "Bu sistem tərəfindən avtomatik əlavə edilmiş test məhsuludur 4.",
    "sku": "DUMMY-SKU-4",
    "price": 274.99,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 34,
    "minOrderQuantity": 1,
    "warrantyMonths": 0,
    "viewCount": 0,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-09-19 22:30:02",
    "images": [
      {
        "id": 21,
        "imageUrl": "/images/images (1).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 13,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Nümunəvi Ehtiyat Hissəsi 5",
    "description": "Bu sistem tərəfindən avtomatik əlavə edilmiş test məhsuludur 5.",
    "sku": "DUMMY-SKU-5",
    "price": 298.99,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 18,
    "minOrderQuantity": 1,
    "warrantyMonths": 0,
    "viewCount": 0,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 20,
        "imageUrl": "/images/images (7).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 14,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Nümunəvi Ehtiyat Hissəsi 6",
    "description": "Bu sistem tərəfindən avtomatik əlavə edilmiş test məhsuludur 6.",
    "sku": "DUMMY-SKU-6",
    "price": 215.99,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 15,
    "minOrderQuantity": 1,
    "warrantyMonths": 0,
    "viewCount": 2,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-09-17 20:30:02",
    "images": [
      {
        "id": 19,
        "imageUrl": "/images/images (3).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 15,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Nümunəvi Ehtiyat Hissəsi 7",
    "description": "Bu sistem tərəfindən avtomatik əlavə edilmiş test məhsuludur 7.",
    "sku": "DUMMY-SKU-7",
    "price": 16.99,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 53,
    "minOrderQuantity": 1,
    "warrantyMonths": 0,
    "viewCount": 0,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 18,
        "imageUrl": "/images/images (7).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 16,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Nümunəvi Ehtiyat Hissəsi 8",
    "description": "Bu sistem tərəfindən avtomatik əlavə edilmiş test məhsuludur 8.",
    "sku": "DUMMY-SKU-8",
    "price": 116.99,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 81,
    "minOrderQuantity": 1,
    "warrantyMonths": 0,
    "viewCount": 1,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-09-15 18:30:02",
    "images": [
      {
        "id": 17,
        "imageUrl": "/images/images.jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 17,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Nümunəvi Ehtiyat Hissəsi 9",
    "description": "Bu sistem tərəfindən avtomatik əlavə edilmiş test məhsuludur 9.",
    "sku": "DUMMY-SKU-9",
    "price": 453.99,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 41,
    "minOrderQuantity": 1,
    "warrantyMonths": 0,
    "viewCount": 0,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 16,
        "imageUrl": "/images/images (6).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 18,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Nümunəvi Ehtiyat Hissəsi 10",
    "description": "Bu sistem tərəfindən avtomatik əlavə edilmiş test məhsuludur 10.",
    "sku": "DUMMY-SKU-10",
    "price": 356.99,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 67,
    "minOrderQuantity": 1,
    "warrantyMonths": 0,
    "viewCount": 1,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-09-13 16:30:02",
    "images": [
      {
        "id": 15,
        "imageUrl": "/images/images (1).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 19,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Nümunəvi Ehtiyat Hissəsi 11",
    "description": "Bu sistem tərəfindən avtomatik əlavə edilmiş test məhsuludur 11.",
    "sku": "DUMMY-SKU-11",
    "price": 153.99,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 10,
    "minOrderQuantity": 1,
    "warrantyMonths": 0,
    "viewCount": 0,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 14,
        "imageUrl": "/images/images (7).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 20,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Nümunəvi Ehtiyat Hissəsi 12",
    "description": "Bu sistem tərəfindən avtomatik əlavə edilmiş test məhsuludur 12.",
    "sku": "DUMMY-SKU-12",
    "price": 28.99,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 43,
    "minOrderQuantity": 1,
    "warrantyMonths": 0,
    "viewCount": 1,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-09-11 14:30:02",
    "images": [
      {
        "id": 25,
        "imageUrl": "/images/images (3).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 21,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Nümunəvi Ehtiyat Hissəsi 13",
    "description": "Bu sistem tərəfindən avtomatik əlavə edilmiş test məhsuludur 13.",
    "sku": "DUMMY-SKU-13",
    "price": 353.99,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 3,
    "minOrderQuantity": 1,
    "warrantyMonths": 0,
    "viewCount": 2,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 26,
        "imageUrl": "/images/images (2).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 22,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Nümunəvi Ehtiyat Hissəsi 14",
    "description": "Bu sistem tərəfindən avtomatik əlavə edilmiş test məhsuludur 14.",
    "sku": "DUMMY-SKU-14",
    "price": 473.99,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 14,
    "minOrderQuantity": 1,
    "warrantyMonths": 0,
    "viewCount": 7,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-09-09 12:30:02",
    "images": [
      {
        "id": 27,
        "imageUrl": "/images/images (2).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 23,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Nümunəvi Ehtiyat Hissəsi 15",
    "description": "Bu sistem tərəfindən avtomatik əlavə edilmiş test məhsuludur 15.",
    "sku": "DUMMY-SKU-15",
    "price": 335.99,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 25,
    "minOrderQuantity": 1,
    "warrantyMonths": 0,
    "viewCount": 14,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 28,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 24,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "A klass Ekran #1",
    "description": "Bu, A klass Ekran #1 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-2145-1",
    "price": 74.36,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 14,
    "minOrderQuantity": 1,
    "warrantyMonths": 12,
    "viewCount": 68,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-09-07 10:30:02",
    "images": [
      {
        "id": 29,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 25,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Orijinal Ana plata #2",
    "description": "Bu, Orijinal Ana plata #2 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-1574-2",
    "price": 94.08,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 33,
    "minOrderQuantity": 1,
    "warrantyMonths": 1,
    "viewCount": 57,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 30,
        "imageUrl": "/images/images (1).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 26,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yeni Korpus #3",
    "description": "Bu, Yeni Korpus #3 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-8012-3",
    "price": 134.26,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 2,
    "minOrderQuantity": 1,
    "warrantyMonths": 2,
    "viewCount": 264,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-09-05 08:30:02",
    "images": [
      {
        "id": 31,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 27,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Zəmanətli Korpus #4",
    "description": "Bu, Zəmanətli Korpus #4 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-1643-4",
    "price": 81.89,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 63,
    "minOrderQuantity": 1,
    "warrantyMonths": 5,
    "viewCount": 347,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 32,
        "imageUrl": "/images/images (6).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 28,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "B klass Düymə #5",
    "description": "Bu, B klass Düymə #5 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-3666-5",
    "price": 116.9,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 7,
    "minOrderQuantity": 1,
    "warrantyMonths": 3,
    "viewCount": 457,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-09-03 06:30:02",
    "images": [
      {
        "id": 33,
        "imageUrl": "/images/images (7).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 29,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yüksək keyfiyyətli Batareya #6",
    "description": "Bu, Yüksək keyfiyyətli Batareya #6 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-8451-6",
    "price": 68.27,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 89,
    "minOrderQuantity": 1,
    "warrantyMonths": 4,
    "viewCount": 117,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 34,
        "imageUrl": "/images/images (3).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 30,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "İşlənmiş Şleyf #7",
    "description": "Bu, İşlənmiş Şleyf #7 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-7409-7",
    "price": 169.75,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 43,
    "minOrderQuantity": 1,
    "warrantyMonths": 7,
    "viewCount": 321,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-09-01 04:30:02",
    "images": [
      {
        "id": 35,
        "imageUrl": "/images/images (1).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 31,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Test edilmiş Korpus #8",
    "description": "Bu, Test edilmiş Korpus #8 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-1032-8",
    "price": 169.47,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 64,
    "minOrderQuantity": 1,
    "warrantyMonths": 3,
    "viewCount": 305,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 36,
        "imageUrl": "/images/images (6).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 32,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "İşlənmiş Düymə #9",
    "description": "Bu, İşlənmiş Düymə #9 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-5482-9",
    "price": 178.41,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 60,
    "minOrderQuantity": 1,
    "warrantyMonths": 8,
    "viewCount": 173,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-08-30 02:30:02",
    "images": [
      {
        "id": 37,
        "imageUrl": "/images/images (2).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 33,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yüksək keyfiyyətli Batareya #10",
    "description": "Bu, Yüksək keyfiyyətli Batareya #10 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-3606-10",
    "price": 115.6,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 31,
    "minOrderQuantity": 1,
    "warrantyMonths": 9,
    "viewCount": 288,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 38,
        "imageUrl": "/images/images (2).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 34,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "A klass Şarj yuvası #11",
    "description": "Bu, A klass Şarj yuvası #11 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-3093-11",
    "price": 195.54,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 41,
    "minOrderQuantity": 1,
    "warrantyMonths": 7,
    "viewCount": 387,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-08-28 00:30:02",
    "images": [
      {
        "id": 39,
        "imageUrl": "/images/images (6).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 35,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Zəmanətli Mikrofon #12",
    "description": "Bu, Zəmanətli Mikrofon #12 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-4786-12",
    "price": 179.65,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 99,
    "minOrderQuantity": 1,
    "warrantyMonths": 5,
    "viewCount": 24,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 40,
        "imageUrl": "/images/images (7).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 36,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Zəmanətli Mikrofon #13",
    "description": "Bu, Zəmanətli Mikrofon #13 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-4530-13",
    "price": 178.32,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 40,
    "minOrderQuantity": 1,
    "warrantyMonths": 3,
    "viewCount": 253,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-08-25 22:30:02",
    "images": [
      {
        "id": 41,
        "imageUrl": "/images/images (3).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 37,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yüksək keyfiyyətli Dinamik #14",
    "description": "Bu, Yüksək keyfiyyətli Dinamik #14 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-5606-14",
    "price": 96.96,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 99,
    "minOrderQuantity": 1,
    "warrantyMonths": 5,
    "viewCount": 409,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 42,
        "imageUrl": "/images/images (4).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 38,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Ucuz Şarj yuvası #15",
    "description": "Bu, Ucuz Şarj yuvası #15 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-4092-15",
    "price": 174.67,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 31,
    "minOrderQuantity": 1,
    "warrantyMonths": 8,
    "viewCount": 358,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-08-23 20:30:02",
    "images": [
      {
        "id": 43,
        "imageUrl": "/images/images (4).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 39,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Test edilmiş Mikrofon #16",
    "description": "Bu, Test edilmiş Mikrofon #16 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-2198-16",
    "price": 174.55,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 70,
    "minOrderQuantity": 1,
    "warrantyMonths": 6,
    "viewCount": 68,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 44,
        "imageUrl": "/images/images (6).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 40,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "B klass Korpus #17",
    "description": "Bu, B klass Korpus #17 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-2298-17",
    "price": 168.59,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 51,
    "minOrderQuantity": 1,
    "warrantyMonths": 6,
    "viewCount": 59,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-08-21 18:30:02",
    "images": [
      {
        "id": 45,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 41,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Premium Şarj yuvası #18",
    "description": "Bu, Premium Şarj yuvası #18 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-6855-18",
    "price": 23.71,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 79,
    "minOrderQuantity": 1,
    "warrantyMonths": 9,
    "viewCount": 55,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 46,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 42,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Zəmanətli Ana plata #19",
    "description": "Bu, Zəmanətli Ana plata #19 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-6455-19",
    "price": 165.28,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 19,
    "minOrderQuantity": 1,
    "warrantyMonths": 2,
    "viewCount": 4,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-08-19 16:30:02",
    "images": [
      {
        "id": 47,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 43,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Ucuz Şarj yuvası #20",
    "description": "Bu, Ucuz Şarj yuvası #20 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-7552-20",
    "price": 71.87,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 9,
    "minOrderQuantity": 1,
    "warrantyMonths": 6,
    "viewCount": 387,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 48,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 44,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "B klass Korpus #21",
    "description": "Bu, B klass Korpus #21 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-3051-21",
    "price": 129.53,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 60,
    "minOrderQuantity": 1,
    "warrantyMonths": 8,
    "viewCount": 472,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-08-17 14:30:02",
    "images": [
      {
        "id": 49,
        "imageUrl": "/images/images (1).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 45,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "İşlənmiş Ekran #22",
    "description": "Bu, İşlənmiş Ekran #22 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-6666-22",
    "price": 125.05,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 13,
    "minOrderQuantity": 1,
    "warrantyMonths": 11,
    "viewCount": 194,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 50,
        "imageUrl": "/images/images.jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 46,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "İşlənmiş Düymə #23",
    "description": "Bu, İşlənmiş Düymə #23 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-2830-23",
    "price": 104.07,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 66,
    "minOrderQuantity": 1,
    "warrantyMonths": 8,
    "viewCount": 238,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-08-15 12:30:02",
    "images": [
      {
        "id": 51,
        "imageUrl": "/images/images (4).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 47,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Test edilmiş Ekran #24",
    "description": "Bu, Test edilmiş Ekran #24 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-9260-24",
    "price": 152.69,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 89,
    "minOrderQuantity": 1,
    "warrantyMonths": 9,
    "viewCount": 486,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 52,
        "imageUrl": "/images/images (2).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 48,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Premium Kamera #25",
    "description": "Bu, Premium Kamera #25 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-6200-25",
    "price": 117.85,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 73,
    "minOrderQuantity": 1,
    "warrantyMonths": 1,
    "viewCount": 268,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-08-13 10:30:02",
    "images": [
      {
        "id": 53,
        "imageUrl": "/images/images (7).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 49,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Ucuz Şarj yuvası #26",
    "description": "Bu, Ucuz Şarj yuvası #26 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-6869-26",
    "price": 61.33,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 6,
    "minOrderQuantity": 1,
    "warrantyMonths": 9,
    "viewCount": 285,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 54,
        "imageUrl": "/images/images (2).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 50,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Orijinal Korpus #27",
    "description": "Bu, Orijinal Korpus #27 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-5893-27",
    "price": 165.58,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 19,
    "minOrderQuantity": 1,
    "warrantyMonths": 6,
    "viewCount": 93,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-08-11 08:30:02",
    "images": [
      {
        "id": 55,
        "imageUrl": "/images/images.jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 51,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "İşlənmiş Batareya #28",
    "description": "Bu, İşlənmiş Batareya #28 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-8365-28",
    "price": 153.3,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 59,
    "minOrderQuantity": 1,
    "warrantyMonths": 2,
    "viewCount": 410,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 56,
        "imageUrl": "/images/images (7).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 52,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "İşlənmiş Batareya #29",
    "description": "Bu, İşlənmiş Batareya #29 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-5137-29",
    "price": 40.52,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 1,
    "minOrderQuantity": 1,
    "warrantyMonths": 8,
    "viewCount": 131,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-08-09 06:30:02",
    "images": [
      {
        "id": 57,
        "imageUrl": "/images/images (6).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 53,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yeni Batareya #30",
    "description": "Bu, Yeni Batareya #30 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-2348-30",
    "price": 50.99,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 7,
    "minOrderQuantity": 1,
    "warrantyMonths": 1,
    "viewCount": 364,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 58,
        "imageUrl": "/images/images (1).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 54,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Ucuz Şarj yuvası #31",
    "description": "Bu, Ucuz Şarj yuvası #31 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-5108-31",
    "price": 198.5,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 53,
    "minOrderQuantity": 1,
    "warrantyMonths": 1,
    "viewCount": 387,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-08-07 04:30:02",
    "images": [
      {
        "id": 59,
        "imageUrl": "/images/images (6).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 55,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "B klass Ekran #32",
    "description": "Bu, B klass Ekran #32 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-8672-32",
    "price": 12.92,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 76,
    "minOrderQuantity": 1,
    "warrantyMonths": 10,
    "viewCount": 1,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 60,
        "imageUrl": "/images/images.jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 56,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Test edilmiş Batareya #33",
    "description": "Bu, Test edilmiş Batareya #33 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-4876-33",
    "price": 50.21,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 90,
    "minOrderQuantity": 1,
    "warrantyMonths": 9,
    "viewCount": 37,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-08-05 02:30:02",
    "images": [
      {
        "id": 61,
        "imageUrl": "/images/images (4).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 57,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yüksək keyfiyyətli Dinamik #34",
    "description": "Bu, Yüksək keyfiyyətli Dinamik #34 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-6364-34",
    "price": 116.3,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 46,
    "minOrderQuantity": 1,
    "warrantyMonths": 6,
    "viewCount": 61,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 62,
        "imageUrl": "/images/images (6).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 58,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Test edilmiş Ekran #35",
    "description": "Bu, Test edilmiş Ekran #35 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-7898-35",
    "price": 64.69,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 29,
    "minOrderQuantity": 1,
    "warrantyMonths": 11,
    "viewCount": 372,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-08-03 00:30:02",
    "images": [
      {
        "id": 63,
        "imageUrl": "/images/images (4).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 59,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "A klass Şleyf #36",
    "description": "Bu, A klass Şleyf #36 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-2260-36",
    "price": 156.24,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 47,
    "minOrderQuantity": 1,
    "warrantyMonths": 11,
    "viewCount": 6,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 64,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 60,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yeni Şleyf #37",
    "description": "Bu, Yeni Şleyf #37 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-6647-37",
    "price": 121.52,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 95,
    "minOrderQuantity": 1,
    "warrantyMonths": 10,
    "viewCount": 42,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-07-31 22:30:02",
    "images": [
      {
        "id": 65,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 61,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "A klass Şarj yuvası #38",
    "description": "Bu, A klass Şarj yuvası #38 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-9779-38",
    "price": 111.23,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 83,
    "minOrderQuantity": 1,
    "warrantyMonths": 2,
    "viewCount": 410,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 66,
        "imageUrl": "/images/images (4).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 62,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "İşlənmiş Korpus #39",
    "description": "Bu, İşlənmiş Korpus #39 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-8572-39",
    "price": 109.01,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 46,
    "minOrderQuantity": 1,
    "warrantyMonths": 4,
    "viewCount": 320,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-07-29 20:30:02",
    "images": [
      {
        "id": 67,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 63,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yeni Mikrofon #40",
    "description": "Bu, Yeni Mikrofon #40 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-1061-40",
    "price": 144.22,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 1,
    "minOrderQuantity": 1,
    "warrantyMonths": 10,
    "viewCount": 346,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 68,
        "imageUrl": "/images/images (7).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 64,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Zəmanətli Şleyf #41",
    "description": "Bu, Zəmanətli Şleyf #41 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-5977-41",
    "price": 110.59,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 88,
    "minOrderQuantity": 1,
    "warrantyMonths": 6,
    "viewCount": 429,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-07-27 18:30:02",
    "images": [
      {
        "id": 69,
        "imageUrl": "/images/images (2).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 65,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yüksək keyfiyyətli Düymə #42",
    "description": "Bu, Yüksək keyfiyyətli Düymə #42 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-2963-42",
    "price": 109.09,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 55,
    "minOrderQuantity": 1,
    "warrantyMonths": 5,
    "viewCount": 292,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 70,
        "imageUrl": "/images/images (6).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 66,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yeni Şleyf #43",
    "description": "Bu, Yeni Şleyf #43 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-3321-43",
    "price": 91.31,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 9,
    "minOrderQuantity": 1,
    "warrantyMonths": 12,
    "viewCount": 409,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-07-25 16:30:02",
    "images": [
      {
        "id": 71,
        "imageUrl": "/images/images (2).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 67,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yüksək keyfiyyətli Şarj yuvası #44",
    "description": "Bu, Yüksək keyfiyyətli Şarj yuvası #44 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-2966-44",
    "price": 183.09,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 85,
    "minOrderQuantity": 1,
    "warrantyMonths": 5,
    "viewCount": 97,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 72,
        "imageUrl": "/images/images.jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 68,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Premium Korpus #45",
    "description": "Bu, Premium Korpus #45 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-3769-45",
    "price": 29.73,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 46,
    "minOrderQuantity": 1,
    "warrantyMonths": 5,
    "viewCount": 133,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-07-23 14:30:02",
    "images": [
      {
        "id": 73,
        "imageUrl": "/images/images (1).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 69,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "A klass Korpus #46",
    "description": "Bu, A klass Korpus #46 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-9084-46",
    "price": 54.43,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 3,
    "minOrderQuantity": 1,
    "warrantyMonths": 11,
    "viewCount": 171,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 74,
        "imageUrl": "/images/images (1).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 70,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Ucuz Düymə #47",
    "description": "Bu, Ucuz Düymə #47 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-5059-47",
    "price": 89.12,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 70,
    "minOrderQuantity": 1,
    "warrantyMonths": 4,
    "viewCount": 163,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-07-21 12:30:02",
    "images": [
      {
        "id": 75,
        "imageUrl": "/images/images (4).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 71,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yüksək keyfiyyətli Mikrofon #48",
    "description": "Bu, Yüksək keyfiyyətli Mikrofon #48 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-7333-48",
    "price": 77.98,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 41,
    "minOrderQuantity": 1,
    "warrantyMonths": 5,
    "viewCount": 194,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 76,
        "imageUrl": "/images/images.jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 72,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Orijinal Kamera #49",
    "description": "Bu, Orijinal Kamera #49 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-2041-49",
    "price": 29.58,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 85,
    "minOrderQuantity": 1,
    "warrantyMonths": 1,
    "viewCount": 405,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-07-19 10:30:02",
    "images": [
      {
        "id": 77,
        "imageUrl": "/images/images (1).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 73,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "A klass Mikrofon #50",
    "description": "Bu, A klass Mikrofon #50 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-7027-50",
    "price": 28.78,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 93,
    "minOrderQuantity": 1,
    "warrantyMonths": 9,
    "viewCount": 475,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 78,
        "imageUrl": "/images/images (2).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 74,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Zəmanətli Şleyf #51",
    "description": "Bu, Zəmanətli Şleyf #51 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-5288-51",
    "price": 65.63,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 26,
    "minOrderQuantity": 1,
    "warrantyMonths": 3,
    "viewCount": 43,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-07-17 08:30:02",
    "images": [
      {
        "id": 79,
        "imageUrl": "/images/images (2).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 75,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "B klass Düymə #52",
    "description": "Bu, B klass Düymə #52 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-9436-52",
    "price": 127.02,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 19,
    "minOrderQuantity": 1,
    "warrantyMonths": 8,
    "viewCount": 200,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 80,
        "imageUrl": "/images/images (1).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 76,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yeni Şleyf #53",
    "description": "Bu, Yeni Şleyf #53 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-3011-53",
    "price": 41.29,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 74,
    "minOrderQuantity": 1,
    "warrantyMonths": 2,
    "viewCount": 370,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-07-15 06:30:02",
    "images": [
      {
        "id": 81,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 77,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "İşlənmiş Kamera #54",
    "description": "Bu, İşlənmiş Kamera #54 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-9833-54",
    "price": 72.56,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 61,
    "minOrderQuantity": 1,
    "warrantyMonths": 12,
    "viewCount": 164,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 82,
        "imageUrl": "/images/images (7).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 78,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "A klass Batareya #55",
    "description": "Bu, A klass Batareya #55 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-7891-55",
    "price": 144.89,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 75,
    "minOrderQuantity": 1,
    "warrantyMonths": 2,
    "viewCount": 196,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-07-13 04:30:02",
    "images": [
      {
        "id": 83,
        "imageUrl": "/images/images (3).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 79,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yeni Mikrofon #56",
    "description": "Bu, Yeni Mikrofon #56 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-5797-56",
    "price": 77.39,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 56,
    "minOrderQuantity": 1,
    "warrantyMonths": 1,
    "viewCount": 310,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 84,
        "imageUrl": "/images/images.jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 80,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "İşlənmiş Ana plata #57",
    "description": "Bu, İşlənmiş Ana plata #57 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-6288-57",
    "price": 142.8,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 92,
    "minOrderQuantity": 1,
    "warrantyMonths": 11,
    "viewCount": 53,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-07-11 02:30:02",
    "images": [
      {
        "id": 85,
        "imageUrl": "/images/images.jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 81,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yüksək keyfiyyətli Ekran #58",
    "description": "Bu, Yüksək keyfiyyətli Ekran #58 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-8841-58",
    "price": 74.24,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 2,
    "minOrderQuantity": 1,
    "warrantyMonths": 2,
    "viewCount": 137,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 86,
        "imageUrl": "/images/images.jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 82,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "A klass Batareya #59",
    "description": "Bu, A klass Batareya #59 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-2639-59",
    "price": 13.47,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 14,
    "minOrderQuantity": 1,
    "warrantyMonths": 4,
    "viewCount": 141,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-07-09 00:30:02",
    "images": [
      {
        "id": 87,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 83,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yeni Dinamik #60",
    "description": "Bu, Yeni Dinamik #60 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-5891-60",
    "price": 27.63,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 32,
    "minOrderQuantity": 1,
    "warrantyMonths": 8,
    "viewCount": 178,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 88,
        "imageUrl": "/images/images (6).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 84,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yeni Kamera #61",
    "description": "Bu, Yeni Kamera #61 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-9378-61",
    "price": 195.94,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 45,
    "minOrderQuantity": 1,
    "warrantyMonths": 6,
    "viewCount": 186,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-07-06 22:30:02",
    "images": [
      {
        "id": 89,
        "imageUrl": "/images/images (6).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 85,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Zəmanətli Dinamik #62",
    "description": "Bu, Zəmanətli Dinamik #62 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-2493-62",
    "price": 158.29,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 10,
    "minOrderQuantity": 1,
    "warrantyMonths": 10,
    "viewCount": 450,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 90,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 86,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Premium Korpus #63",
    "description": "Bu, Premium Korpus #63 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-7487-63",
    "price": 26.47,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 13,
    "minOrderQuantity": 1,
    "warrantyMonths": 1,
    "viewCount": 236,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-07-04 20:30:02",
    "images": [
      {
        "id": 91,
        "imageUrl": "/images/images (2).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 87,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Orijinal Şarj yuvası #64",
    "description": "Bu, Orijinal Şarj yuvası #64 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-1803-64",
    "price": 133.33,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 34,
    "minOrderQuantity": 1,
    "warrantyMonths": 5,
    "viewCount": 285,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 92,
        "imageUrl": "/images/images.jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 88,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Test edilmiş Şleyf #65",
    "description": "Bu, Test edilmiş Şleyf #65 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-6953-65",
    "price": 129.19,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 73,
    "minOrderQuantity": 1,
    "warrantyMonths": 5,
    "viewCount": 68,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-07-02 18:30:02",
    "images": [
      {
        "id": 93,
        "imageUrl": "/images/images (7).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 89,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Ucuz Kamera #66",
    "description": "Bu, Ucuz Kamera #66 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-4097-66",
    "price": 68.07,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 61,
    "minOrderQuantity": 1,
    "warrantyMonths": 3,
    "viewCount": 243,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 94,
        "imageUrl": "/images/images (4).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 90,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Orijinal Batareya #67",
    "description": "Bu, Orijinal Batareya #67 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-5028-67",
    "price": 126.36,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 22,
    "minOrderQuantity": 1,
    "warrantyMonths": 7,
    "viewCount": 261,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-06-30 16:30:02",
    "images": [
      {
        "id": 95,
        "imageUrl": "/images/images (6).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 91,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Test edilmiş Ana plata #68",
    "description": "Bu, Test edilmiş Ana plata #68 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-5669-68",
    "price": 197.09,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 74,
    "minOrderQuantity": 1,
    "warrantyMonths": 1,
    "viewCount": 447,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 96,
        "imageUrl": "/images/images (3).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 92,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Test edilmiş Batareya #69",
    "description": "Bu, Test edilmiş Batareya #69 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-1962-69",
    "price": 103.94,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 4,
    "minOrderQuantity": 1,
    "warrantyMonths": 0,
    "viewCount": 459,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-06-28 14:30:02",
    "images": [
      {
        "id": 97,
        "imageUrl": "/images/images (2).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 93,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Zəmanətli Ana plata #70",
    "description": "Bu, Zəmanətli Ana plata #70 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-9560-70",
    "price": 97.78,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 94,
    "minOrderQuantity": 1,
    "warrantyMonths": 3,
    "viewCount": 351,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 98,
        "imageUrl": "/images/images.jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 94,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yeni Şleyf #71",
    "description": "Bu, Yeni Şleyf #71 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-8280-71",
    "price": 115.67,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 34,
    "minOrderQuantity": 1,
    "warrantyMonths": 9,
    "viewCount": 76,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-06-26 12:30:02",
    "images": [
      {
        "id": 99,
        "imageUrl": "/images/images.jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 95,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yeni Ekran #72",
    "description": "Bu, Yeni Ekran #72 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-9219-72",
    "price": 100.03,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 40,
    "minOrderQuantity": 1,
    "warrantyMonths": 0,
    "viewCount": 88,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 100,
        "imageUrl": "/images/images (7).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 96,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Test edilmiş Kamera #73",
    "description": "Bu, Test edilmiş Kamera #73 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-8153-73",
    "price": 19.14,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 30,
    "minOrderQuantity": 1,
    "warrantyMonths": 8,
    "viewCount": 384,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-06-24 10:30:02",
    "images": [
      {
        "id": 101,
        "imageUrl": "/images/images (1).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 97,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yeni Ekran #74",
    "description": "Bu, Yeni Ekran #74 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-5528-74",
    "price": 82.87,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 85,
    "minOrderQuantity": 1,
    "warrantyMonths": 8,
    "viewCount": 289,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 102,
        "imageUrl": "/images/images (6).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 98,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yeni Şleyf #75",
    "description": "Bu, Yeni Şleyf #75 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-1130-75",
    "price": 27.31,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 37,
    "minOrderQuantity": 1,
    "warrantyMonths": 7,
    "viewCount": 74,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-06-22 08:30:02",
    "images": [
      {
        "id": 103,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 99,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "İşlənmiş Mikrofon #76",
    "description": "Bu, İşlənmiş Mikrofon #76 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-9325-76",
    "price": 123.1,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 46,
    "minOrderQuantity": 1,
    "warrantyMonths": 2,
    "viewCount": 451,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 104,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 100,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "A klass Batareya #77",
    "description": "Bu, A klass Batareya #77 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-9643-77",
    "price": 126.17,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 10,
    "minOrderQuantity": 1,
    "warrantyMonths": 4,
    "viewCount": 302,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-06-20 06:30:02",
    "images": [
      {
        "id": 105,
        "imageUrl": "/images/images (2).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 101,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yüksək keyfiyyətli Korpus #78",
    "description": "Bu, Yüksək keyfiyyətli Korpus #78 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-3367-78",
    "price": 15.16,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 47,
    "minOrderQuantity": 1,
    "warrantyMonths": 8,
    "viewCount": 259,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 106,
        "imageUrl": "/images/images (2).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 102,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Premium Ana plata #79",
    "description": "Bu, Premium Ana plata #79 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-3936-79",
    "price": 98.33,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 7,
    "minOrderQuantity": 1,
    "warrantyMonths": 6,
    "viewCount": 143,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-06-18 04:30:02",
    "images": [
      {
        "id": 107,
        "imageUrl": "/images/images (7).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 103,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Premium Korpus #80",
    "description": "Bu, Premium Korpus #80 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-6176-80",
    "price": 102.54,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 8,
    "minOrderQuantity": 1,
    "warrantyMonths": 6,
    "viewCount": 249,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 108,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 104,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Orijinal Mikrofon #81",
    "description": "Bu, Orijinal Mikrofon #81 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-1629-81",
    "price": 38.13,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 4,
    "minOrderQuantity": 1,
    "warrantyMonths": 12,
    "viewCount": 452,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-06-16 02:30:02",
    "images": [
      {
        "id": 109,
        "imageUrl": "/images/images (4).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 105,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "A klass Ekran #82",
    "description": "Bu, A klass Ekran #82 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-9053-82",
    "price": 19.18,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 92,
    "minOrderQuantity": 1,
    "warrantyMonths": 7,
    "viewCount": 202,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 110,
        "imageUrl": "/images/images.jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 106,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Orijinal Ekran #83",
    "description": "Bu, Orijinal Ekran #83 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-7591-83",
    "price": 132.98,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 43,
    "minOrderQuantity": 1,
    "warrantyMonths": 1,
    "viewCount": 312,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-06-14 00:30:02",
    "images": [
      {
        "id": 111,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 107,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Orijinal Korpus #84",
    "description": "Bu, Orijinal Korpus #84 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-2036-84",
    "price": 128.08,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 8,
    "minOrderQuantity": 1,
    "warrantyMonths": 1,
    "viewCount": 23,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 112,
        "imageUrl": "/images/images (4).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 108,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "A klass Düymə #85",
    "description": "Bu, A klass Düymə #85 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-1390-85",
    "price": 55.98,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 100,
    "minOrderQuantity": 1,
    "warrantyMonths": 12,
    "viewCount": 328,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-06-11 22:30:02",
    "images": [
      {
        "id": 113,
        "imageUrl": "/images/images (6).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 109,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Yeni Şleyf #86",
    "description": "Bu, Yeni Şleyf #86 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-9931-86",
    "price": 197.81,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 44,
    "minOrderQuantity": 1,
    "warrantyMonths": 7,
    "viewCount": 178,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 114,
        "imageUrl": "/images/images.jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 110,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "B klass Şleyf #87",
    "description": "Bu, B klass Şleyf #87 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-1546-87",
    "price": 107.88,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 43,
    "minOrderQuantity": 1,
    "warrantyMonths": 3,
    "viewCount": 74,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-06-09 20:30:02",
    "images": [
      {
        "id": 115,
        "imageUrl": "/images/images (4).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 111,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Ucuz Ekran #88",
    "description": "Bu, Ucuz Ekran #88 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-2539-88",
    "price": 48.25,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 51,
    "minOrderQuantity": 1,
    "warrantyMonths": 0,
    "viewCount": 23,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 116,
        "imageUrl": "/images/images (7).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 112,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Zəmanətli Dinamik #89",
    "description": "Bu, Zəmanətli Dinamik #89 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-2307-89",
    "price": 132.22,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 33,
    "minOrderQuantity": 1,
    "warrantyMonths": 9,
    "viewCount": 234,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-06-07 18:30:02",
    "images": [
      {
        "id": 117,
        "imageUrl": "/images/images (1).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 113,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Orijinal Dinamik #90",
    "description": "Bu, Orijinal Dinamik #90 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-7746-90",
    "price": 94.37,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 24,
    "minOrderQuantity": 1,
    "warrantyMonths": 10,
    "viewCount": 261,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 118,
        "imageUrl": "/images/images (3).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 114,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Premium Mikrofon #91",
    "description": "Bu, Premium Mikrofon #91 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-9457-91",
    "price": 179.3,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 20,
    "minOrderQuantity": 1,
    "warrantyMonths": 7,
    "viewCount": 25,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-06-05 16:30:02",
    "images": [
      {
        "id": 119,
        "imageUrl": "/images/images (2).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 115,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Ucuz Ekran #92",
    "description": "Bu, Ucuz Ekran #92 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-5709-92",
    "price": 17.55,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 31,
    "minOrderQuantity": 1,
    "warrantyMonths": 3,
    "viewCount": 493,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 120,
        "imageUrl": "/images/images (2).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 116,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Ucuz Şleyf #93",
    "description": "Bu, Ucuz Şleyf #93 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-2435-93",
    "price": 120.64,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 20,
    "minOrderQuantity": 1,
    "warrantyMonths": 5,
    "viewCount": 23,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-06-03 14:30:02",
    "images": [
      {
        "id": 121,
        "imageUrl": "/images/images (7).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 117,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Test edilmiş Şleyf #94",
    "description": "Bu, Test edilmiş Şleyf #94 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-2833-94",
    "price": 55.31,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 98,
    "minOrderQuantity": 1,
    "warrantyMonths": 2,
    "viewCount": 280,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 122,
        "imageUrl": "/images/images (1).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 118,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Premium Şleyf #95",
    "description": "Bu, Premium Şleyf #95 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-9014-95",
    "price": 56.39,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 86,
    "minOrderQuantity": 1,
    "warrantyMonths": 6,
    "viewCount": 275,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-06-01 12:30:02",
    "images": [
      {
        "id": 123,
        "imageUrl": "/images/images (1).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 119,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Test edilmiş Dinamik #96",
    "description": "Bu, Test edilmiş Dinamik #96 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-5342-96",
    "price": 43.57,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 52,
    "minOrderQuantity": 1,
    "warrantyMonths": 9,
    "viewCount": 35,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 124,
        "imageUrl": "/images/images.jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 120,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "Test edilmiş Düymə #97",
    "description": "Bu, Test edilmiş Düymə #97 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-6651-97",
    "price": 177.71,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 59,
    "minOrderQuantity": 1,
    "warrantyMonths": 2,
    "viewCount": 123,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-05-30 10:30:02",
    "images": [
      {
        "id": 125,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 121,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "A klass Korpus #98",
    "description": "Bu, A klass Korpus #98 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-7754-98",
    "price": 22.93,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 11,
    "minOrderQuantity": 1,
    "warrantyMonths": 1,
    "viewCount": 465,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 126,
        "imageUrl": "/images/images (7).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 122,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "B klass Batareya #99",
    "description": "Bu, B klass Batareya #99 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-2055-99",
    "price": 32.36,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 6,
    "minOrderQuantity": 1,
    "warrantyMonths": 12,
    "viewCount": 339,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-05-28 08:30:02",
    "images": [
      {
        "id": 127,
        "imageUrl": "/images/images (2).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  },
  {
    "id": 123,
    "sellerId": 1,
    "deviceModelId": 1,
    "categoryId": 1,
    "brandId": 1,
    "partTypeId": 1,
    "qualityTypeId": 1,
    "title": "B klass Korpus #100",
    "description": "Bu, B klass Korpus #100 üçün ətraflı məlumatdır. Çox keyfiyyətli məhsuldur.",
    "sku": "SKU-8897-100",
    "price": 83.65,
    "discountPrice": null,
    "currency": "AZN",
    "stockQuantity": 36,
    "minOrderQuantity": 1,
    "warrantyMonths": 0,
    "viewCount": 35,
    "moderationStatus": 2,
    "rejectionReason": null,
    "isActive": true,
    "isDeleted": false,
    "createdDate": "2026-10-03 09:30:02",
    "images": [
      {
        "id": 128,
        "imageUrl": "/images/images (5).jpg",
        "isMain": true,
        "displayOrder": 1
      }
    ]
  }
];

export const INITIAL_CATEGORY_BRANDS: CategoryBrand[] = [
  {
    "categoryId": 1,
    "brandId": 1
  },
  {
    "categoryId": 1,
    "brandId": 2
  },
  {
    "categoryId": 1,
    "brandId": 3
  },
  {
    "categoryId": 1,
    "brandId": 4
  },
  {
    "categoryId": 2,
    "brandId": 1
  },
  {
    "categoryId": 2,
    "brandId": 2
  },
  {
    "categoryId": 2,
    "brandId": 4
  },
  {
    "categoryId": 3,
    "brandId": 1
  },
  {
    "categoryId": 3,
    "brandId": 5
  },
  {
    "categoryId": 3,
    "brandId": 6
  },
  {
    "categoryId": 3,
    "brandId": 7
  },
  {
    "categoryId": 4,
    "brandId": 8
  },
  {
    "categoryId": 5,
    "brandId": 8
  },
  {
    "categoryId": 6,
    "brandId": 8
  },
  {
    "categoryId": 7,
    "brandId": 8
  },
  {
    "categoryId": 8,
    "brandId": 8
  },
  {
    "categoryId": 9,
    "brandId": 8
  },
  {
    "categoryId": 10,
    "brandId": 8
  },
  {
    "categoryId": 11,
    "brandId": 8
  },
  {
    "categoryId": 12,
    "brandId": 8
  },
  {
    "categoryId": 13,
    "brandId": 8
  },
  {
    "categoryId": 14,
    "brandId": 8
  },
  {
    "categoryId": 15,
    "brandId": 8
  },
  {
    "categoryId": 16,
    "brandId": 8
  },
  {
    "categoryId": 17,
    "brandId": 8
  },
  {
    "categoryId": 18,
    "brandId": 8
  },
  {
    "categoryId": 19,
    "brandId": 8
  },
  {
    "categoryId": 20,
    "brandId": 8
  },
  {
    "categoryId": 21,
    "brandId": 8
  },
  {
    "categoryId": 22,
    "brandId": 8
  },
  {
    "categoryId": 23,
    "brandId": 8
  },
  {
    "categoryId": 24,
    "brandId": 8
  },
  {
    "categoryId": 25,
    "brandId": 8
  },
  {
    "categoryId": 26,
    "brandId": 8
  },
  {
    "categoryId": 27,
    "brandId": 8
  },
  {
    "categoryId": 28,
    "brandId": 8
  },
  {
    "categoryId": 29,
    "brandId": 8
  },
  {
    "categoryId": 30,
    "brandId": 8
  },
  {
    "categoryId": 31,
    "brandId": 8
  },
  {
    "categoryId": 32,
    "brandId": 8
  },
  {
    "categoryId": 33,
    "brandId": 8
  },
  {
    "categoryId": 34,
    "brandId": 8
  },
  {
    "categoryId": 35,
    "brandId": 8
  },
  {
    "categoryId": 36,
    "brandId": 8
  },
  {
    "categoryId": 37,
    "brandId": 8
  },
  {
    "categoryId": 38,
    "brandId": 8
  },
  {
    "categoryId": 39,
    "brandId": 8
  },
  {
    "categoryId": 40,
    "brandId": 8
  },
  {
    "categoryId": 41,
    "brandId": 8
  },
  {
    "categoryId": 42,
    "brandId": 8
  },
  {
    "categoryId": 43,
    "brandId": 8
  },
  {
    "categoryId": 44,
    "brandId": 8
  }
];

export const INITIAL_CATEGORY_PART_TYPES: CategoryPartType[] = [
  {
    "categoryId": 1,
    "partTypeId": 1
  },
  {
    "categoryId": 1,
    "partTypeId": 2
  },
  {
    "categoryId": 1,
    "partTypeId": 3
  },
  {
    "categoryId": 1,
    "partTypeId": 4
  },
  {
    "categoryId": 1,
    "partTypeId": 5
  },
  {
    "categoryId": 1,
    "partTypeId": 6
  },
  {
    "categoryId": 1,
    "partTypeId": 7
  },
  {
    "categoryId": 1,
    "partTypeId": 8
  },
  {
    "categoryId": 1,
    "partTypeId": 9
  },
  {
    "categoryId": 1,
    "partTypeId": 10
  },
  {
    "categoryId": 1,
    "partTypeId": 16
  },
  {
    "categoryId": 1,
    "partTypeId": 17
  },
  {
    "categoryId": 1,
    "partTypeId": 18
  },
  {
    "categoryId": 1,
    "partTypeId": 19
  },
  {
    "categoryId": 1,
    "partTypeId": 20
  },
  {
    "categoryId": 1,
    "partTypeId": 21
  },
  {
    "categoryId": 1,
    "partTypeId": 22
  },
  {
    "categoryId": 2,
    "partTypeId": 1
  },
  {
    "categoryId": 2,
    "partTypeId": 2
  },
  {
    "categoryId": 2,
    "partTypeId": 3
  },
  {
    "categoryId": 2,
    "partTypeId": 4
  },
  {
    "categoryId": 2,
    "partTypeId": 5
  },
  {
    "categoryId": 2,
    "partTypeId": 6
  },
  {
    "categoryId": 2,
    "partTypeId": 8
  },
  {
    "categoryId": 2,
    "partTypeId": 10
  },
  {
    "categoryId": 3,
    "partTypeId": 1
  },
  {
    "categoryId": 3,
    "partTypeId": 2
  },
  {
    "categoryId": 3,
    "partTypeId": 5
  },
  {
    "categoryId": 3,
    "partTypeId": 11
  },
  {
    "categoryId": 3,
    "partTypeId": 12
  },
  {
    "categoryId": 3,
    "partTypeId": 13
  },
  {
    "categoryId": 3,
    "partTypeId": 14
  },
  {
    "categoryId": 3,
    "partTypeId": 15
  },
  {
    "categoryId": 4,
    "partTypeId": 23
  },
  {
    "categoryId": 5,
    "partTypeId": 23
  },
  {
    "categoryId": 6,
    "partTypeId": 23
  },
  {
    "categoryId": 7,
    "partTypeId": 23
  },
  {
    "categoryId": 8,
    "partTypeId": 23
  },
  {
    "categoryId": 9,
    "partTypeId": 23
  },
  {
    "categoryId": 10,
    "partTypeId": 23
  },
  {
    "categoryId": 11,
    "partTypeId": 23
  },
  {
    "categoryId": 12,
    "partTypeId": 23
  },
  {
    "categoryId": 13,
    "partTypeId": 23
  },
  {
    "categoryId": 14,
    "partTypeId": 23
  },
  {
    "categoryId": 15,
    "partTypeId": 23
  },
  {
    "categoryId": 16,
    "partTypeId": 23
  },
  {
    "categoryId": 17,
    "partTypeId": 23
  },
  {
    "categoryId": 18,
    "partTypeId": 23
  },
  {
    "categoryId": 19,
    "partTypeId": 23
  },
  {
    "categoryId": 20,
    "partTypeId": 23
  },
  {
    "categoryId": 21,
    "partTypeId": 23
  },
  {
    "categoryId": 22,
    "partTypeId": 23
  },
  {
    "categoryId": 23,
    "partTypeId": 23
  },
  {
    "categoryId": 24,
    "partTypeId": 23
  },
  {
    "categoryId": 25,
    "partTypeId": 23
  },
  {
    "categoryId": 26,
    "partTypeId": 23
  },
  {
    "categoryId": 27,
    "partTypeId": 23
  },
  {
    "categoryId": 28,
    "partTypeId": 23
  },
  {
    "categoryId": 29,
    "partTypeId": 23
  },
  {
    "categoryId": 30,
    "partTypeId": 23
  },
  {
    "categoryId": 31,
    "partTypeId": 23
  },
  {
    "categoryId": 32,
    "partTypeId": 23
  },
  {
    "categoryId": 33,
    "partTypeId": 23
  },
  {
    "categoryId": 34,
    "partTypeId": 23
  },
  {
    "categoryId": 35,
    "partTypeId": 23
  },
  {
    "categoryId": 36,
    "partTypeId": 23
  },
  {
    "categoryId": 37,
    "partTypeId": 23
  },
  {
    "categoryId": 38,
    "partTypeId": 23
  },
  {
    "categoryId": 39,
    "partTypeId": 23
  },
  {
    "categoryId": 40,
    "partTypeId": 23
  },
  {
    "categoryId": 41,
    "partTypeId": 23
  },
  {
    "categoryId": 42,
    "partTypeId": 23
  },
  {
    "categoryId": 43,
    "partTypeId": 23
  },
  {
    "categoryId": 44,
    "partTypeId": 23
  }
];

export const INITIAL_ACTIVITY_LOGS: ActivityLog[] = [
  {
    id: 1,
    userId: 4,
    action: "Sistem başladıldı",
    entityName: "System",
    entityId: 1,
    details: "e-hisse.az platforması aktivləşdirildi",
    date: "2026-10-01 10:00:00"
  },
  {
    id: 2,
    userId: 1,
    action: "Yeni elan əlavə edildi",
    entityName: "SparePart",
    entityId: 1,
    details: "iPhone 15 Pro Max Ekran - Orijinal Zavod",
    date: "2026-10-02 11:20:00"
  },
  {
    id: 3,
    userId: 4,
    action: "Elan təsdiqləndi",
    entityName: "SparePart",
    entityId: 1,
    details: "Administrator tərəfindən təsdiqləndi",
    date: "2026-10-02 11:30:00"
  }
];
