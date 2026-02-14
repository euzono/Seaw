# Seaworks Nigeria Limited - Product Requirements Document

## Original Problem Statement
Build a responsive website for Seaworks Nigeria Limited - a marine and engineering services company serving Nigeria's oil & gas sector. The website should showcase their services (Energy, Marine, Engineering), projects, company information, and provide contact functionality.

## User Personas
1. **Oil & Gas Operations Managers**: Looking for reliable marine/engineering service providers
2. **Procurement Officers**: Seeking quotes for AGO supply, vessel chartering, or engineering support
3. **Industry Partners**: Researching Seaworks' capabilities and track record
4. **Job Seekers**: Exploring career opportunities in marine/engineering sector

## Core Requirements (Static)
- Modern, professional design reflecting oil & gas industry standards
- Dark theme with cyan-green brand colors
- Fully responsive (desktop, tablet, mobile)
- Clear service offerings presentation
- Project portfolio showcase
- Contact form for inquiries
- Company information and credibility indicators

## Architecture & Tech Stack
- **Frontend**: React 19, React Router, shadcn UI components
- **Styling**: Tailwind CSS, custom dark theme
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Hosting**: Preview deployment on Emergent platform

## What's Been Implemented (December 2025)

### Phase 1: Frontend Development ✅
**Date**: December 14, 2025

**Components Built**:
1. **Header** - Fixed navigation with smooth scroll, mobile menu
2. **Hero Section** - Full-screen with offshore rig imagery, dual CTAs
3. **About Section** - Company overview with statistics (20+ years, 500+ projects, 100% safety)
4. **Services Section** - 3 service cards with images:
   - Energy Services (AGO supply)
   - Marine Services (vessel chartering, logistics)
   - Engineering Services (fabrication, installation)
5. **Projects Showcase** - Carousel with 3 project examples
6. **Why Choose Us** - 4 key differentiators
7. **Clients Section** - Industry leader logos (Chevron, Shell, ExxonMobil, Total, Saipem)
8. **News Section** - 3 latest articles/updates
9. **Contact Section** - Information + Contact form (frontend only)
10. **Footer** - Complete with links, social media, contact details

**Design Implementation**:
- Dark theme (#000000 background)
- Cyan-green brand color (#00FFD1) for CTAs and accents
- Sharp-edged buttons (0px border-radius)
- High contrast typography
- Smooth animations and transitions
- Professional marine/offshore imagery

**Mock Data**: All content currently using mock data from `/app/frontend/src/data/mockData.js`

## Prioritized Backlog

### P0 Features (Critical - Next Phase)
1. **Backend API Development**
   - Contact form submission endpoint
   - Store inquiries in MongoDB
   - Email notification system
   
2. **Contact Form Integration**
   - Connect frontend form to backend API
   - Form validation
   - Success/error handling

### P1 Features (High Priority)
1. **Admin Dashboard**
   - View contact form submissions
   - Mark inquiries as read/responded
   - Filter/search functionality

2. **Projects Management**
   - Admin interface to add/edit/delete projects
   - Image upload functionality
   - Project categorization

3. **News/Blog System**
   - CMS for news articles
   - Admin interface for creating posts
   - Categories and tags

### P2 Features (Nice to Have)
1. **Service Request Forms**
   - Specialized forms for each service type
   - Quote request functionality
   - File upload for project specifications

2. **Client Portal**
   - Login system for existing clients
   - View project status
   - Document sharing

3. **Live Chat Integration**
   - WhatsApp integration
   - Real-time chat support
   - Quick quote requests

4. **SEO Optimization**
   - Meta tags optimization
   - Sitemap generation
   - Schema markup for services

5. **Analytics Integration**
   - Google Analytics
   - Conversion tracking
   - User behavior monitoring

## API Contracts (To Be Implemented)

### Contact Form Submission
```
POST /api/contact
Request Body:
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}

Response:
{
  "success": true,
  "message": "Thank you for contacting us. We'll get back to you soon.",
  "inquiry_id": "string"
}
```

### Get Contact Inquiries (Admin)
```
GET /api/admin/inquiries
Authorization: Bearer <token>

Response:
{
  "inquiries": [
    {
      "id": "string",
      "name": "string",
      "email": "string",
      "subject": "string",
      "message": "string",
      "created_at": "datetime",
      "status": "new|read|responded"
    }
  ]
}
```

## Next Tasks
1. Implement backend API for contact form
2. Connect frontend to backend
3. Test form submission end-to-end
4. Build admin dashboard for viewing inquiries
5. Deploy to production

## Notes
- Design follows green-dark-theme playbook
- All sections are responsive and tested
- Images sourced from Unsplash (professional marine/offshore operations)
- Currently frontend-only with mock data
- Contact form shows success toast but doesn't persist data yet
