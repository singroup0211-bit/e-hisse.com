import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { CatalogView } from './components/CatalogView';
import { ProductDetailsModal } from './components/ProductDetailsModal';
import { WarehouseView } from './components/WarehouseView';
import { AdminView } from './components/AdminView';
import { SellersView } from './components/SellersView';
import { CategoriesView } from './components/CategoriesView';
import { HelpAndContactView } from './components/HelpAndContactView';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';
import { CurrentView, SparePart } from './types';

function MainApp() {
  const [currentView, setCurrentView] = useState<CurrentView>('catalog');
  const [selectedPart, setSelectedPart] = useState<SparePart | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [authModal, setAuthModal] = useState<{ open: boolean; mode: 'login' | 'register' }>({
    open: false,
    mode: 'login',
  });

  const handleSelectPart = (part: SparePart) => {
    setSelectedPart(part);
  };

  const handleSelectCategoryFromCategoriesView = (catId: number) => {
    setSelectedCategoryId(catId);
    setCurrentView('catalog');
  };

  const handleSelectSellerFromSellersView = (sellerId: number) => {
    // Navigate to catalog
    setCurrentView('catalog');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-200 selection:bg-[#a3ff12] selection:text-black">
      <Header
        currentView={currentView}
        setCurrentView={view => {
          setCurrentView(view);
          setSelectedPart(null);
        }}
        onSelectPart={handleSelectPart}
        openAuthModal={mode => setAuthModal({ open: true, mode })}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="flex-1">
        {selectedPart ? (
          <ProductDetailsModal
            part={selectedPart}
            onClose={() => setSelectedPart(null)}
            onSelectPart={handleSelectPart}
          />
        ) : (
          <>
            {currentView === 'catalog' && (
              <CatalogView
                onSelectPart={handleSelectPart}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                initialCategoryId={selectedCategoryId}
              />
            )}

            {currentView === 'warehouse' && (
              <WarehouseView onSelectPart={handleSelectPart} />
            )}

            {currentView === 'admin' && (
              <AdminView onSelectPart={handleSelectPart} />
            )}

            {currentView === 'sellers' && (
              <SellersView onSelectSeller={handleSelectSellerFromSellersView} />
            )}

            {currentView === 'categories' && (
              <CategoriesView onSelectCategory={handleSelectCategoryFromCategoriesView} />
            )}

            {currentView === 'help' && (
              <HelpAndContactView initialTab="help" />
            )}

            {currentView === 'contact' && (
              <HelpAndContactView initialTab="contact" />
            )}
          </>
        )}
      </main>

      <Footer setCurrentView={setCurrentView} />

      {authModal.open && (
        <AuthModal
          initialMode={authModal.mode}
          onClose={() => setAuthModal({ open: false, mode: 'login' })}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}
