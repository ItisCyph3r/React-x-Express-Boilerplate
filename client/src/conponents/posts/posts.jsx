import React from 'react';
import ProfilePic from '../profilePic/profilePic';

export default function Posts() {
    return (
        <>
            <div className='p-5 flex gap-2'>
                <div>
                    <ProfilePic width={56} height= {56}/>
                    <div className='border-l-[2px] border-gray-700 h-[120px] ml-7 my-2'/>
                    <span className='relative left-2'>
                        <ProfilePic  width={45} height= {45}/>
                    </span> 
                    
                    
                </div>
                
                
                

                <div className='ml-2'>
                    <div>
                        <span>
                            Samuel😊 
                        </span>
                        <span className='opacity-50 text-sm'> 
                            @getsomemaidens . 13h
                        </span> 
                    </div>
                    <div className='mt-1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid.
                    </div>
                </div>
            </div>
            <hr className='w-full border-gray-700' />
        </>
    );
}
