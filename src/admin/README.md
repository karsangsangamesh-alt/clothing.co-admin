# Admin Panel

A beautiful, modern admin panel for managing your e-commerce store.

## Features

### ✅ Completed
- **Dashboard** - Overview with statistics, recent orders, and featured products
- **Products Management** - View, search, edit, and delete products
- **Orders Management** - Track orders, update status, and filter by status
- **Beautiful UI/UX** - Modern design with gradient accents and smooth transitions
- **Responsive** - Works on desktop, tablet, and mobile
- **Real-time Data** - Connected to Supabase for live updates
- **Sidebar Navigation** - Easy access to all admin sections

### 🚧 Coming Soon
- Customers management
- Categories management
- Brands management
- Collections management
- Analytics & reports
- Settings page

## Access

Navigate to `/admin` to access the admin panel.

**Requirements:**
- User must be authenticated
- User role should be 'admin' (future implementation)

## Structure

```
src/admin/
├── layouts/
│   └── AdminLayout.tsx       # Main layout with sidebar
├── pages/
│   ├── AdminDashboard.tsx    # Dashboard with stats
│   ├── AdminProducts.tsx     # Products management
│   └── AdminOrders.tsx       # Orders management
├── components/               # Reusable admin components
└── hooks/                    # Custom hooks for data management
```

## Routes

- `/admin` - Dashboard
- `/admin/products` - Products management
- `/admin/orders` - Orders management
- `/admin/customers` - Customers management (coming soon)
- `/admin/categories` - Categories management (coming soon)
- `/admin/brands` - Brands management (coming soon)
- `/admin/collections` - Collections management (coming soon)
- `/admin/analytics` - Analytics & reports (coming soon)
- `/admin/settings` - Settings (coming soon)

## Supabase Integration

All admin pages directly connect to your Supabase database:
- Real-time data fetching
- CRUD operations
- Row-level security policies
- Automatic type safety with TypeScript

## Design System

- **Colors**: Indigo/Purple gradient theme
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Styling**: Tailwind CSS
- **Transitions**: Smooth hover effects and animations

## Next Steps

To complete additional pages:
1. Create new page files in `src/admin/pages/`
2. Import and add routes in `App.tsx`
3. Follow the existing patterns for consistency
