-- Migration: prospect activity timeline, qualification scores, internal notes

-- 1. Activity Timeline table
CREATE TABLE IF NOT EXISTS public.prospect_activities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    submission_id UUID NOT NULL REFERENCES public.inquiry_submissions(id) ON DELETE CASCADE,
    activity_type TEXT NOT NULL, -- 'email', 'call', 'note'
    title TEXT NOT NULL,
    body TEXT,
    created_by TEXT, -- email of admin who created it
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_prospect_activities_submission_id ON public.prospect_activities(submission_id);
CREATE INDEX IF NOT EXISTS idx_prospect_activities_created_at ON public.prospect_activities(created_at DESC);

ALTER TABLE public.prospect_activities ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "authenticated_can_manage_prospect_activities" ON public.prospect_activities;
CREATE POLICY "authenticated_can_manage_prospect_activities"
ON public.prospect_activities
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- 2. Internal Notes / Action Items table
CREATE TABLE IF NOT EXISTS public.prospect_notes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    submission_id UUID NOT NULL REFERENCES public.inquiry_submissions(id) ON DELETE CASCADE,
    note_text TEXT NOT NULL,
    is_action_item BOOLEAN DEFAULT false,
    follow_up_date DATE,
    is_completed BOOLEAN DEFAULT false,
    created_by TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_prospect_notes_submission_id ON public.prospect_notes(submission_id);

ALTER TABLE public.prospect_notes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "authenticated_can_manage_prospect_notes" ON public.prospect_notes;
CREATE POLICY "authenticated_can_manage_prospect_notes"
ON public.prospect_notes
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- 3. Add qualification_score column to inquiry_submissions
ALTER TABLE public.inquiry_submissions
ADD COLUMN IF NOT EXISTS qualification_score INTEGER DEFAULT 0;

CREATE INDEX IF NOT EXISTS idx_inquiry_submissions_qualification_score ON public.inquiry_submissions(qualification_score DESC);
