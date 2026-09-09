-- Add status column to inquiry_submissions for pipeline tracking

ALTER TABLE public.inquiry_submissions
ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'new';

-- Add index for status filtering
CREATE INDEX IF NOT EXISTS idx_inquiry_submissions_status ON public.inquiry_submissions(status);

-- Allow authenticated users to update status (for pipeline management)
DROP POLICY IF EXISTS "authenticated_can_update_inquiry_submissions" ON public.inquiry_submissions;
CREATE POLICY "authenticated_can_update_inquiry_submissions"
ON public.inquiry_submissions
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);
