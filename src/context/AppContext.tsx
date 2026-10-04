import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Category,
  DeviceBrand,
  DeviceModel,
  SparePartType,
  QualityType,
  User,
  SellerProfile,
  SparePart,
  ActivityLog,
  SaleAudit,
  INITIAL_CATEGORIES,
  INITIAL_BRANDS,
  INITIAL_MODELS,
  INITIAL_PART_TYPES,
  INITIAL_QUALITY_TYPES,
  INITIAL_USERS,
  INITIAL_SELLERS,
  INITIAL_SPARE_PARTS,
  INITIAL_ACTIVITY_LOGS,
} from '../data/mockData';

interface AppContextType {
  currentUser: User | null;
  currentSeller: SellerProfile | null;
  users: User[];
  sellers: SellerProfile[];
  parts: SparePart[];
  categories: Category[];
  brands: DeviceBrand[];
  models: DeviceModel[];
  partTypes: SparePartType[];
  qualityTypes: QualityType[];
  activityLogs: ActivityLog[];
  saleAudits: SaleAudit[];
  favorites: number[];
  theme: 'dark' | 'light';
  
  // Actions
  toggleTheme: () => void;
  switchUser: (userId: number | null) => void;
  login: (identifier: string) => boolean;
  logout: () => void;
  register: (userData: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    role: number;
    companyName?: string;
  }) => boolean;
  toggleFavorite: (partId: number) => void;
  incrementViewCount: (partId: number) => void;
  
  // Warehouse / Seller Actions
  addPart: (part: Omit<SparePart, 'id' | 'viewCount' | 'createdDate' | 'moderationStatus' | 'rejectionReason' | 'isActive' | 'isDeleted'>) => SparePart;
  updatePart: (id: number, data: Partial<SparePart>) => void;
  deletePart: (id: number) => void;
  adjustStock: (id: number, delta: number) => void;
  recordSale: (partId: number, quantity: number) => void;
  updateSellerProfile: (sellerId: number, data: Partial<SellerProfile>) => void;
  
  // Admin Actions
  approvePart: (partId: number) => void;
  rejectPart: (partId: number, reason: string) => void;
  approveUser: (userId: number) => void;
  toggleBlockUser: (userId: number) => void;
  updateUserRole: (userId: number, role: number) => void;
  addCategory: (name: string) => void;
  addBrand: (name: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Stored state with local storage fallback
  const [users, setUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem('ehisse_users');
    return saved ? JSON.parse(saved) : INITIAL_USERS;
  });

  const [sellers, setSellers] = useState<SellerProfile[]>(() => {
    const saved = localStorage.getItem('ehisse_sellers');
    return saved ? JSON.parse(saved) : INITIAL_SELLERS;
  });

  const [parts, setParts] = useState<SparePart[]>(() => {
    const saved = localStorage.getItem('ehisse_parts');
    return saved ? JSON.parse(saved) : INITIAL_SPARE_PARTS;
  });

  const [categories, setCategories] = useState<Category[]>(() => {
    const saved = localStorage.getItem('ehisse_categories');
    return saved ? JSON.parse(saved) : INITIAL_CATEGORIES;
  });

  const [brands, setBrands] = useState<DeviceBrand[]>(() => {
    const saved = localStorage.getItem('ehisse_brands');
    return saved ? JSON.parse(saved) : INITIAL_BRANDS;
  });

  const [models] = useState<DeviceModel[]>(INITIAL_MODELS);
  const [partTypes] = useState<SparePartType[]>(INITIAL_PART_TYPES);
  const [qualityTypes] = useState<QualityType[]>(INITIAL_QUALITY_TYPES);

  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>(() => {
    const saved = localStorage.getItem('ehisse_logs');
    return saved ? JSON.parse(saved) : INITIAL_ACTIVITY_LOGS;
  });

  const [saleAudits, setSaleAudits] = useState<SaleAudit[]>(() => {
    const saved = localStorage.getItem('ehisse_sales');
    return saved ? JSON.parse(saved) : [];
  });

  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem('ehisse_favorites');
    return saved ? JSON.parse(saved) : [1, 5, 12];
  });

  // Current active user: Default to user 1 (Elçin Məmmədov - TechMaster Servis) or user 13
  const [currentUserId, setCurrentUserId] = useState<number | null>(() => {
    const saved = localStorage.getItem('ehisse_current_user_id');
    return saved !== null ? (saved === '' ? null : Number(saved)) : 1;
  });

  const currentUser = users.find(u => u.id === currentUserId) || null;
  const currentSeller = currentUser ? sellers.find(s => s.userId === currentUser.id) || null : null;

  useEffect(() => {
    localStorage.setItem('ehisse_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('ehisse_sellers', JSON.stringify(sellers));
  }, [sellers]);

  useEffect(() => {
    localStorage.setItem('ehisse_parts', JSON.stringify(parts));
  }, [parts]);

  useEffect(() => {
    localStorage.setItem('ehisse_categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('ehisse_brands', JSON.stringify(brands));
  }, [brands]);

  useEffect(() => {
    localStorage.setItem('ehisse_logs', JSON.stringify(activityLogs));
  }, [activityLogs]);

  useEffect(() => {
    localStorage.setItem('ehisse_sales', JSON.stringify(saleAudits));
  }, [saleAudits]);

  useEffect(() => {
    localStorage.setItem('ehisse_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (currentUserId !== null) {
      localStorage.setItem('ehisse_current_user_id', String(currentUserId));
    } else {
      localStorage.setItem('ehisse_current_user_id', '');
    }
  }, [currentUserId]);

  const switchUser = (userId: number | null) => {
    setCurrentUserId(userId);
  };

  const login = (identifier: string): boolean => {
    const user = users.find(
      u => u.username.toLowerCase() === identifier.toLowerCase() ||
           u.email.toLowerCase() === identifier.toLowerCase() ||
           u.phone === identifier
    );
    if (user && !user.isBlocked) {
      setCurrentUserId(user.id);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUserId(null);
  };

  const register = (userData: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    role: number;
    companyName?: string;
  }): boolean => {
    const newId = Math.max(0, ...users.map(u => u.id)) + 1;
    const username = userData.email ? userData.email.split('@')[0] : `user_${newId}`;
    
    const newUser: User = {
      id: newId,
      username,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
      email: userData.email,
      role: userData.role,
      approvalStatus: 2, // Approved for smooth testing
      isBlocked: false,
      createdDate: new Date().toISOString().replace('T', ' ').substring(0, 19)
    };

    setUsers(prev => [...prev, newUser]);

    if (userData.companyName) {
      const newSellerId = Math.max(0, ...sellers.map(s => s.id)) + 1;
      const newSeller: SellerProfile = {
        id: newSellerId,
        userId: newId,
        companyName: userData.companyName,
        contactPerson: `${userData.firstName} ${userData.lastName}`,
        phone: userData.phone,
        whatsAppNumber: userData.phone,
        address: 'Bakı şəhəri',
        rating: 5.0,
        showContactInfoInAds: true,
        isPhoneVerified: true
      };
      setSellers(prev => [...prev, newSeller]);
    }

    setCurrentUserId(newId);

    // Add activity log
    setActivityLogs(prev => [
      {
        id: Date.now(),
        userId: newId,
        action: 'Qeydiyyatdan keçdi',
        entityName: 'User',
        entityId: newId,
        details: `${userData.firstName} ${userData.lastName} (${userData.role === 2 ? 'Usta' : 'Anbardar'}) qeydiyyatdan keçdi`,
        date: new Date().toISOString().replace('T', ' ').substring(0, 19)
      },
      ...prev
    ]);

    return true;
  };

  const toggleFavorite = (partId: number) => {
    setFavorites(prev => 
      prev.includes(partId) ? prev.filter(id => id !== partId) : [...prev, partId]
    );
  };

  const incrementViewCount = (partId: number) => {
    setParts(prev =>
      prev.map(p => (p.id === partId ? { ...p, viewCount: p.viewCount + 1 } : p))
    );
  };

  const addPart = (partData: Omit<SparePart, 'id' | 'viewCount' | 'createdDate' | 'moderationStatus' | 'rejectionReason' | 'isActive' | 'isDeleted'>): SparePart => {
    const newId = Math.max(0, ...parts.map(p => p.id)) + 1;
    const newPart: SparePart = {
      ...partData,
      id: newId,
      viewCount: 1,
      moderationStatus: 2, // Auto-approve or pending; set to 2 for instant visibility
      rejectionReason: null,
      isActive: true,
      isDeleted: false,
      createdDate: new Date().toISOString().replace('T', ' ').substring(0, 19),
    };

    setParts(prev => [newPart, ...prev]);

    setActivityLogs(prev => [
      {
        id: Date.now(),
        userId: currentUser?.id || 1,
        action: 'Yeni elan əlavə edildi',
        entityName: 'SparePart',
        entityId: newId,
        details: `${newPart.title} (SKU: ${newPart.sku})`,
        date: new Date().toISOString().replace('T', ' ').substring(0, 19)
      },
      ...prev
    ]);

    return newPart;
  };

  const updatePart = (id: number, data: Partial<SparePart>) => {
    setParts(prev =>
      prev.map(p => (p.id === id ? { ...p, ...data } : p))
    );
  };

  const deletePart = (id: number) => {
    setParts(prev => prev.filter(p => p.id !== id));
  };

  const adjustStock = (id: number, delta: number) => {
    setParts(prev =>
      prev.map(p => {
        if (p.id === id) {
          const newQty = Math.max(0, p.stockQuantity + delta);
          return { ...p, stockQuantity: newQty };
        }
        return p;
      })
    );
  };

  const recordSale = (partId: number, quantity: number) => {
    const targetPart = parts.find(p => p.id === partId);
    if (!targetPart || targetPart.stockQuantity < quantity) return;

    const previousStock = targetPart.stockQuantity;
    const newStock = previousStock - quantity;

    setParts(prev =>
      prev.map(p => (p.id === partId ? { ...p, stockQuantity: newStock } : p))
    );

    const newSaleAudit: SaleAudit = {
      id: Date.now(),
      sparePartId: partId,
      sellerId: targetPart.sellerId,
      quantity,
      previousStock,
      newStock,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19)
    };

    setSaleAudits(prev => [newSaleAudit, ...prev]);

    setActivityLogs(prev => [
      {
        id: Date.now(),
        userId: currentUser?.id || targetPart.sellerId,
        action: 'Satış qeydə alındı',
        entityName: 'SparePart',
        entityId: partId,
        details: `${targetPart.title} - ${quantity} ədəd satıldı. Yeni stok: ${newStock}`,
        date: new Date().toISOString().replace('T', ' ').substring(0, 19)
      },
      ...prev
    ]);
  };

  const updateSellerProfile = (sellerId: number, data: Partial<SellerProfile>) => {
    setSellers(prev =>
      prev.map(s => (s.id === sellerId ? { ...s, ...data } : s))
    );
  };

  const approvePart = (partId: number) => {
    setParts(prev =>
      prev.map(p => (p.id === partId ? { ...p, moderationStatus: 2, rejectionReason: null } : p))
    );
    setActivityLogs(prev => [
      {
        id: Date.now(),
        userId: currentUser?.id || 4,
        action: 'Elan təsdiqləndi',
        entityName: 'SparePart',
        entityId: partId,
        details: `Elan #${partId} admin tərəfindən təsdiqləndi`,
        date: new Date().toISOString().replace('T', ' ').substring(0, 19)
      },
      ...prev
    ]);
  };

  const rejectPart = (partId: number, reason: string) => {
    setParts(prev =>
      prev.map(p => (p.id === partId ? { ...p, moderationStatus: 3, rejectionReason: reason } : p))
    );
    setActivityLogs(prev => [
      {
        id: Date.now(),
        userId: currentUser?.id || 4,
        action: 'Elan imtina edildi',
        entityName: 'SparePart',
        entityId: partId,
        details: `Elan #${partId} imtina səbəbi: ${reason}`,
        date: new Date().toISOString().replace('T', ' ').substring(0, 19)
      },
      ...prev
    ]);
  };

  const approveUser = (userId: number) => {
    setUsers(prev =>
      prev.map(u => (u.id === userId ? { ...u, approvalStatus: 2 } : u))
    );
  };

  const toggleBlockUser = (userId: number) => {
    setUsers(prev =>
      prev.map(u => (u.id === userId ? { ...u, isBlocked: !u.isBlocked } : u))
    );
  };

  const updateUserRole = (userId: number, role: number) => {
    setUsers(prev =>
      prev.map(u => (u.id === userId ? { ...u, role } : u))
    );
  };

  const addCategory = (name: string) => {
    const newId = Math.max(0, ...categories.map(c => c.id)) + 1;
    setCategories(prev => [
      ...prev,
      { id: newId, name, displayOrder: prev.length + 1, isActive: true }
    ]);
  };

  const addBrand = (name: string) => {
    const newId = Math.max(0, ...brands.map(b => b.id)) + 1;
    setBrands(prev => [...prev, { id: newId, name, isActive: true }]);
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        currentSeller,
        users,
        sellers,
        parts,
        categories,
        brands,
        models,
        partTypes,
        qualityTypes,
        activityLogs,
        saleAudits,
        favorites,
        theme,
        toggleTheme,
        switchUser,
        login,
        logout,
        register,
        toggleFavorite,
        incrementViewCount,
        addPart,
        updatePart,
        deletePart,
        adjustStock,
        recordSale,
        updateSellerProfile,
        approvePart,
        rejectPart,
        approveUser,
        toggleBlockUser,
        updateUserRole,
        addCategory,
        addBrand
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
