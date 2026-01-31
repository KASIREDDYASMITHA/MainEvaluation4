const supabase=require('../config/supabse');

exports.signup=async(requestAnimationFrame,res)=>{
    try{
        const {name,email,password,role}=req.body;

        if(!name || !email|| !password|| !role){
            return res.status(400).json({message:'All fields are required'});
        }

        if(!['customer','owner','driver'].includes(role)){
            return res.status(400).json({message:'Invalid role'});
        }

            const {data:existingUser }=await supabase
                .from('users')
                .select('*')
                .eq('email', email)
                .single();  
        

        if(existingUser){
            return res.status(409).json({message:'email already exists'});
        }

        const {data,error}=await supabase
            .from('users')
            .insert([
                {
                    name,
                    email,
                    password,
                    role
                }
            ]);
        
        if(error) throw error;{
       
        res.status(201).json({message:'User created successfully'});
        }
    }
        catch(error)
          {
    res.status(500).json({error:error.message});
} 
    };
        