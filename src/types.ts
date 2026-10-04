export type {
  Category,
  DeviceBrand,
  DeviceModel,
  SparePartType,
  QualityType,
  User,
  SellerProfile,
  SparePartImage,
  SparePart,
  CategoryBrand,
  CategoryPartType,
  ActivityLog,
  SaleAudit
} from './data/mockData';

export type CurrentView = 
  | 'catalog'
  | 'details'
  | 'warehouse'
  | 'admin'
  | 'sellers'
  | 'categories'
  | 'help'
  | 'contact';
