-- Projects table
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  tags text[] default '{}',
  github text,
  demo text,
  stars integer default 0,
  featured boolean default false,
  created_at timestamptz default now()
);

-- Contact messages table
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  message text not null,
  created_at timestamptz default now()
);

-- Enable RLS
alter table public.projects enable row level security;
alter table public.contact_messages enable row level security;

-- Policies: anyone can read projects
create policy "Anyone can read projects"
  on public.projects for select
  using (true);

-- Policies: anyone can insert contact messages
create policy "Anyone can insert contact messages"
  on public.contact_messages for insert
  with check (true);

-- Policies: public can read contact messages
create policy "Public can read contact messages"
  on public.contact_messages for select
  using (true);

-- Policies: only admins can update contact messages
create policy "Admins can update contact messages"
  on public.contact_messages for update
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Policies: only admins can delete contact messages
create policy "Admins can delete contact messages"
  on public.contact_messages for delete
  using (auth.role() = 'authenticated');

-- Indexes for faster queries on projects table
create index if not exists idx_projects_featured on public.projects (featured);
create index if not exists idx_projects_created_at on public.projects (created_at);
