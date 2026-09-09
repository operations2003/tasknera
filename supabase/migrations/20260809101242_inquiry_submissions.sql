-- Create inquiry_submissions table for storing contact form submissions

CREATE TABLE IF NOT EXISTS public.inquiry_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    enquiry_type TEXT NOT NULL DEFAULT 'hiring',
    message TEXT NOT NULL,
    submitted_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_inquiry_submissions_email ON public.inquiry_submissions(email);
CREATE INDEX IF NOT EXISTS idx_inquiry_submissions_submitted_at ON public.inquiry_submissions(submitted_at DESC);

-- Enable RLS
ALTER TABLE public.inquiry_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anonymous visitors) to insert submissions
DROP POLICY IF EXISTS "public_can_insert_inquiry_submissions" ON public.inquiry_submissions;
CREATE POLICY "public_can_insert_inquiry_submissions"
ON public.inquiry_submissions
FOR INSERT
TO public
WITH CHECK (true);

-- Only authenticated users (admins) can read submissions
DROP POLICY IF EXISTS "authenticated_can_read_inquiry_submissions" ON public.inquiry_submissions;
CREATE POLICY "authenticated_can_read_inquiry_submissions"
ON public.inquiry_submissions
FOR SELECT
TO authenticated
USING (true);
