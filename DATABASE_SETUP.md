# Database Setup Instructions

## Prerequisites
- Supabase project created at: https://ejioalfxvqplmbflwhlo.supabase.co
- Anon key and service role key available

## Migration Order (Execute in Supabase SQL Editor)

Execute these SQL files in the following order:

### 1. First: Create form_submissions table
```sql
-- File: supabase/migrations/20250901_create_form_submissions.sql
-- This creates the main table for storing application submissions
```

### 2. Second: Create email_markers table  
```sql
-- File: supabase/migrations/20240227_create_email_markers.sql
-- This creates the table for tracking read/unread status of submissions
-- Note: This depends on form_submissions table existing first
```

## Step-by-Step Setup

1. **Open Supabase Dashboard**
   - Go to https://supabase.com/dashboard
   - Navigate to your project: https://ejioalfxvqplmbflwhlo.supabase.co

2. **Execute Migrations**
   - Go to SQL Editor in the left sidebar
   - Copy and paste the content of `supabase/migrations/20250901_create_form_submissions.sql`
   - Click "Run" to execute
   - Copy and paste the content of `supabase/migrations/20240227_create_email_markers.sql`
   - Click "Run" to execute

3. **Verify Setup**
   - Go to Table Editor in the left sidebar
   - You should see two tables:
     - `form_submissions` - Main application data
     - `email_markers` - Read/unread tracking

4. **Test the Application**
   - Install dependencies: `npm install`
   - Start development server: `npm run dev`
   - Test form submission on the home page
   - Check admin panel at `/submissions`

## Database Schema

### form_submissions
- `id` (uuid, primary key) - Unique identifier
- `name` (text, not null) - Applicant's full name
- `email` (text, not null) - Applicant's email
- `phone` (text, not null) - Applicant's phone number
- `message` (jsonb, not null) - JSON data with additional details
- `position` (text) - Position applied for
- `replied` (boolean, default false) - Whether admin has replied
- `created_at` (timestamptz) - When application was submitted
- `updated_at` (timestamptz) - When record was last updated

### email_markers
- `email_id` (uuid, primary key, foreign key to form_submissions.id)
- `is_marked` (boolean, default false) - Whether marked as read
- `created_at` (timestamptz) - When marker was created
- `updated_at` (timestamptz) - When marker was last updated

## Features Enabled

### Application Submission
- Both landing page form and job-specific modal now save to Supabase
- Real-time updates for admin panel
- Proper error handling and user feedback

### Admin Panel (/submissions)
- View all submissions with search and filtering
- Mark as read/unread with real-time sync
- Reply via Gmail with templated messages
- WhatsApp integration with phone number formatting
- View multiple applications from same email
- List and card view options

### Security
- Row Level Security (RLS) enabled
- Anonymous access for public forms
- Realtime subscriptions for live updates

## Troubleshooting

### If migrations fail:
1. Check that you're running them in the correct order
2. Ensure no tables with the same names already exist
3. Check the Supabase logs for specific error messages

### If forms don't submit:
1. Verify Supabase credentials in `lib/supabase.ts`
2. Check browser console for JavaScript errors
3. Ensure RLS policies are correctly applied

### If admin panel doesn't work:
1. Verify both tables exist and have data
2. Check that realtime is enabled on both tables
3. Test the Supabase connection in browser dev tools

## Production Considerations

1. **Environment Variables**: Move Supabase credentials to environment variables
2. **Rate Limiting**: Consider adding rate limiting for form submissions
3. **Email Service**: Replace Gmail deep links with proper email service
4. **Authentication**: Add admin authentication for the submissions panel
5. **Backup**: Set up automated database backups
6. **Monitoring**: Add error tracking and performance monitoring
