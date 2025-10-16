-- Create the email_markers table
CREATE TABLE IF NOT EXISTS email_markers (
    email_id TEXT PRIMARY KEY REFERENCES form_submissions(id) ON DELETE CASCADE,
    is_marked BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_email_markers_is_marked ON email_markers(is_marked);
CREATE INDEX IF NOT EXISTS idx_email_markers_updated_at ON email_markers(updated_at DESC);

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_email_markers_updated_at 
    BEFORE UPDATE ON email_markers 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE email_markers ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for anonymous users
-- Allow anyone to read the markers
CREATE POLICY "Allow anonymous select on email_markers"
ON email_markers FOR SELECT
TO anon
USING (true);

-- Allow anyone to insert markers
CREATE POLICY "Allow anonymous insert on email_markers"
ON email_markers FOR INSERT
TO anon
WITH CHECK (true);

-- Allow anyone to update markers
CREATE POLICY "Allow anonymous update on email_markers"
ON email_markers FOR UPDATE
TO anon
USING (true);

-- Allow anyone to delete markers (in case needed)
CREATE POLICY "Allow anonymous delete on email_markers"
ON email_markers FOR DELETE
TO anon
USING (true);

-- Enable realtime for this table
ALTER PUBLICATION supabase_realtime ADD TABLE email_markers;
