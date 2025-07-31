# Cellar - Solana Wallet Application

## Overview

Cellar is a modern Solana wallet application that focuses on user-friendly authentication and social-fi features. The application eliminates the complexity of seed phrases by using email-based authentication through Privy, while providing real-time market insights and social features for the crypto community.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system using shadcn/ui components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Animation**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Development**: TSX for TypeScript execution in development
- **Build**: ESBuild for production bundling

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM
- **Connection**: Neon Database serverless PostgreSQL
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing

### Authentication and Authorization
- **Primary Auth**: Privy for email-based authentication (eliminates seed phrases)
- **Session Management**: Express sessions with PostgreSQL storage via connect-pg-simple
- **User Model**: Simple username/password schema for basic user management

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling to sections
- **Hero Section**: Landing page with animated elements and call-to-action
- **Features Section**: Showcases key wallet features with icons and descriptions
- **Social Section**: Highlights social-fi integration and trending tokens
- **Download Section**: App download buttons for mobile platforms
- **Newsletter**: Email subscription for updates
- **UI Library**: Complete shadcn/ui component library with dark theme

### Backend Components
- **Route System**: Modular route registration with prefix support (/api)
- **Storage Interface**: Abstract storage layer with memory and database implementations
- **Development Server**: Vite integration for hot module replacement
- **Error Handling**: Centralized error handling middleware

### Database Schema
- **Users Table**: Basic user entity with id, username, and password fields
- **UUID Generation**: PostgreSQL native UUID generation for primary keys
- **Validation**: Drizzle-Zod integration for schema validation

## Data Flow

1. **Client Requests**: Frontend makes API calls to Express backend
2. **Authentication**: Privy handles user authentication without seed phrases
3. **Data Persistence**: Drizzle ORM manages PostgreSQL operations
4. **Real-time Updates**: TanStack Query provides optimistic updates and caching
5. **Session Management**: Express sessions stored in PostgreSQL
6. **Development**: Hot reload via Vite with proxy to backend API

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **Privy**: Email-based authentication for Web3 (referenced in docs but not yet implemented)
- **Drizzle ORM**: Type-safe database operations
- **Radix UI**: Accessible component primitives
- **TanStack Query**: Server state management
- **Framer Motion**: Animation library

### Development Tools
- **Vite**: Frontend build tool and dev server
- **ESBuild**: Backend bundling for production
- **TSX**: TypeScript execution for development
- **Tailwind CSS**: Utility-first CSS framework

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Setup
- **Development**: TSX runs server with Vite middleware for HMR
- **Production**: Node.js serves bundled application with static file serving
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Key Scripts
- `dev`: Development server with hot reload
- `build`: Production build for both frontend and backend
- `start`: Production server
- `db:push`: Apply database schema changes

### Deployment Considerations
- **Static Assets**: Frontend builds to `dist/public` for static serving
- **API Routes**: All backend routes prefixed with `/api`
- **Database Migrations**: Manual migration management via Drizzle Kit
- **Environment Variables**: Database URL required for production deployment