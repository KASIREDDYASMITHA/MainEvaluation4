const {createclent}= require('@supabase/supabase-js');
require('dotenv').config();

const supabase= createclent(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_APIKEY
);

module.exports= supabase;