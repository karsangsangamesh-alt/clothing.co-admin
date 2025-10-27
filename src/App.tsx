import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/contexts/AuthContext";
import AdminLayout from "@/admin/layouts/AdminLayout";
import Dashboard from "@/admin/pages/AdminDashboard";
import Products from "@/admin/pages/AdminProducts";
import Orders from "@/admin/pages/AdminOrders";
import Customers from "@/admin/pages/AdminCustomers";
import Categories from "@/admin/pages/AdminCategories";
import Brands from "@/admin/pages/AdminBrands";
import Collections from "@/admin/pages/AdminCollections";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="categories" element={<Categories />} />
            <Route path="brands" element={<Brands />} />
            <Route path="collections" element={<Collections />} />
          </Route>
          <Route path="*" element={<Navigate to="/admin" replace />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
