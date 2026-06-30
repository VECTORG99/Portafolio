-- Projects table
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  tags text[] default '{}',
  github_url text,
  demo_url text,
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
