-- Create the form_submissions table
create table if not exists form_submissions (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    email text not null,
    phone text not null,
    message jsonb not null default '{}'::jsonb,
    position text,
    replied boolean not null default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create indexes for better performance
create index if not exists idx_form_submissions_email on form_submissions(email);
create index if not exists idx_form_submissions_created_at on form_submissions(created_at desc);
create index if not exists idx_form_submissions_replied on form_submissions(replied);
create index if not exists idx_form_submissions_position on form_submissions(position);

-- Create function to update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
    new.updated_at = timezone('utc'::text, now());
    return new;
end;
$$ language plpgsql;

-- Create trigger to automatically update updated_at
create trigger update_form_submissions_updated_at
    before update on form_submissions
    for each row
    execute function update_updated_at_column();

-- Enable Row Level Security
alter table form_submissions enable row level security;

-- Create RLS policies
-- Allow anonymous users to insert new submissions
create policy "Allow anonymous insert"
on form_submissions for insert
to anon
with check (true);

-- Allow anonymous users to read all submissions (for admin functionality)
create policy "Allow anonymous select"
on form_submissions for select
to anon
using (true);

-- Allow anonymous users to update submissions (for admin functionality like marking as replied)
create policy "Allow anonymous update"
on form_submissions for update
to anon
using (true);

-- Enable realtime for this table (for admin live updates)
alter publication supabase_realtime add table form_submissions;
