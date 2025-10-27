# Clothing Co - Admin Panel

Admin panel for managing the Clothing Co e-commerce platform.

## Features

- 📊 Dashboard with sales analytics and statistics
- 📦 Product management (CRUD operations)
- 🛒 Order management and tracking
- 👥 Customer management
- 🏷️ Category and brand management
- 📑 Collections management
- 🔐 Secure authentication with Supabase

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Shadcn/ui** for UI components
- **React Router DOM** for routing
- **Supabase** for backend
- **React Query** for data fetching
- **Recharts** for analytics charts

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd clothingco-admin
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Add your Supabase credentials to `.env`:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

Run the development server:
```bash
npm run dev
```

The admin panel will be available at `http://localhost:5173/admin`

### Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── admin/
│   ├── layouts/        # Admin layout components
│   ├── pages/          # Admin pages (Dashboard, Products, etc.)
│   └── README.md       # Admin features documentation
├── components/
│   └── ui/             # Reusable UI components
├── integrations/
│   └── supabase/       # Supabase client and types
├── lib/                # Utility functions
├── App.tsx             # Main app component with routes
└── main.tsx            # App entry point
```

## Admin Routes

- `/admin/dashboard` - Analytics and overview
- `/admin/products` - Product management
- `/admin/orders` - Order management
- `/admin/customers` - Customer management
- `/admin/categories` - Category management
- `/admin/brands` - Brand management
- `/admin/collections` - Collection management

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## License

MIT
