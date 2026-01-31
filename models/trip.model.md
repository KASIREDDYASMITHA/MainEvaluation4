
create table trips(
  id uuid primary key default uuid_generate_v4(),
  customer_id uuid not null,
  vehicle_id uuid not null ,
  start_date timestamp,
  location text not null,
  distance_km numeric not null check(distance_km >0),
  passengers int not null check(passengers >0),
  trip_cost numeric,
  is_completed boolean default false,
  created_at timestamp default now(),

  constraint fk_customer
  foreign key(customer_id)
  references users(id)
  on delete cascade,
   constraint fk_vehicle
   foreign key (vehicle_id)
   references vehicles(id)
   on delete cascade
);




select table_name from information_schema.tables where table_schema='public';


