-- Create the email_markers table
create table if not exists email_markers (
    email_id uuid primary key references form_submissions(id) on delete cascade,
    is_marked boolean not null default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create function to update updated_at timestamp for email_markers
create or replace function update_email_markers_updated_at()
returns trigger as $$
begin
    new.updated_at = timezone('utc'::text, now());
    return new;
end;
$$ language plpgsql;

-- Create trigger to automatically update updated_at for email_markers
create trigger update_email_markers_updated_at
    before update on email_markers
    for each row
    execute function update_email_markers_updated_at();

-- Enable realtime for this table
alter publication supabase_realtime add table email_markers;

-- Add RLS policies
alter table email_markers enable row level security;

-- Allow anonymous users to read the markers
create policy "Allow anonymous read markers"
on email_markers for select
to anon
using (true);

-- Allow anonymous users to insert markers
create policy "Allow anonymous insert markers"
on email_markers for insert
to anon
with check (true);

-- Allow anonymous users to update markers
create policy "Allow anonymous update markers"
on email_markers for update
to anon
using (true);

-- Allow anonymous users to delete markers (for cleanup)
create policy "Allow anonymous delete markers"
on email_markers for delete
to anon
using (true);
