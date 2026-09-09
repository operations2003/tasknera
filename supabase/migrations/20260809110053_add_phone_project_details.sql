-- Add phone number and project details columns to inquiry_submissions

ALTER TABLE public.inquiry_submissions
ADD COLUMN IF NOT EXISTS phone TEXT,
ADD COLUMN IF NOT EXISTS project_details TEXT;
