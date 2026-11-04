-- Paste into the Supabase SQL editor and run once.
-- Visitors can read and add comments. Editing and deleting is dashboard-only.

create table public.comments (
	id bigint generated always as identity primary key,
	post_slug text not null check (char_length(post_slug) between 1 and 200),
	name text not null check (char_length(trim(name)) between 1 and 50),
	body text not null check (char_length(trim(body)) between 1 and 2000),
	created_at timestamptz not null default now()
);

create index comments_post_slug_created_at_idx on public.comments (post_slug, created_at);

alter table public.comments enable row level security;

-- Supabase grants broad table access by default, so narrow it to what the site needs.
-- Limiting the insert columns stops visitors from backdating a comment.
revoke all on public.comments from anon, authenticated;
grant select on public.comments to anon;
grant insert (post_slug, name, body) on public.comments to anon;

create policy "anyone can read comments"
	on public.comments for select to anon
	using (true);

create policy "anyone can add comments"
	on public.comments for insert to anon
	with check (true);
