import React from "react";
const NavBar =() =>{

const links= [
    {
id:1,
src:'home',
    },
     {
id:2,
src:'features',
    },
     {
id:3,
src:'features',
    },
]; 

    return (  
    <div className="w-screen h-20 border border-x-amber-50">
       <div className=" h-[100%] flex items-center pl-4">
<Link className="text-lg text-black">InfinityBeat</Link>
            </div>
           <div className="flex items-center w-[80%]">  
        {links.map((l) => (
           <Link key={l.id} to={l.src}>
            {l.src}
           </Link>
        ))}
        
         </div>
    </div>
);
};

export default NavBar;