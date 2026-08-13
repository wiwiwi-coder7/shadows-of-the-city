-- The trigger function only uses built-in operations; it requires no schema lookup.
alter function public.sotc_set_updated_at() set search_path = '';
