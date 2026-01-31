Table name:users
create table users(
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null unique,
  password text not null,
  role text not null check(role in ('customer','owner','driver')),
  created_at timestamp default now()
);


constraints:
-Email must be unique
-Role must be validated

Relationships:
one user can be owner,customer,or driver