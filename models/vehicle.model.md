
create table vehicles(
  id uuid primary key default uuid_generate_v4(),
  registration_number text not null unique,
  allowed_passengers int not null check(allowed_passengers>0),
  is_available boolean default true,
  driver_id uuid,
  rate_per_km numeric not null check (rate_per_km>0),
  owner_id uuid not null,
  created_at timestamp default now(),

  constraint fk_owner
  foreign key(owner_id)
  references users(id)
  on delete cascade,
   constraint fk_driver
   foreign key (driver_id)
   references users(id)
   on delete set null 
);