const supabase=require('../config/supabase');

exports.createVehicle=async(req,res)=>{
    try{
        const{owner_id,name,registration_number,allowed_passengers,rate_per_km}=req.body;
        const {data:owner}=await supabase
             .from('users')
             .select('role')
             .eq('id',owner_id)
             .single();

             if(!owner || owner.role !=='owner'){
                return res.status(403).json({message:'only owners can create vehicles'});

             }
             const {error}=await supabase.from('vehicles').insert([{
                owner_id,
                name,
                registration_number,
                allowed_passengers,
                rate_per_km
             }]);

             if(error) throw error;

             res.status(201).json({message:'Vehicle created successfully'});
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};
exports.assignDriver=async(req,res)=>{
    try{
        const{vehicleId}=req.params;
        const{driver_id}=req.body;

        const{data:driver}=await supabase
        .from('users')
        .select('role')
        .eq('id',driver_id)
        .single();

        if(!driver || driver.role !=='driver'){
            return res.status(400).json({message:'Invalid driver'});
        }
        const {error}=await supabase
        .from('vehicles')
        .update({driver_id})
        .eq('id',vehicleId);

        if(error)throw error;

        res.status(200).json({message:'Driver assigned successfully'});

    }
    catch(err){
        res.status(500).json({error:err.message});

    }
};

exports.getVehicleById=async(req,res)=>{
    try{
        const{vehicleId}=req.params;
        const {data,error}=await supabase
        .from('vehicles')
        .select('*')
        .eq('id',vehicleId)
        .single();

        if(error || !data){
            res.status(404).json({message:'vehicle not found'});
        }
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }

        };

