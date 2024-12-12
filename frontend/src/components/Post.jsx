import React from 'react';
import { Heart, MessageCircleMore, Plus, X } from 'lucide-react';

const Post = ({ post, onDelete }) => {
  return (
    <div className='flex justify-center flex-col items-center'>
      <div className='w-full md:w-[60%] 2xl:w-[40%] border rounded-lg p-2 space-y-2'>
        {/* Delete Icon */}
        <div className='flex justify-end cursor-pointer'>
          <X className='size-5' onClick={() => onDelete(post.id)} />
        </div>

        {/* Post Header */}
        <div className='flex justify-between'>
          <div className='flex'>
            <img src="\profile.png" alt="" className='size-16' />
            <div className='text-xs flex flex-col justify-end'>
              <p className='font-semibold'>{post.author}</p>
              <p className='text-gray-500'>{post.bio}</p>
              <p className='text-[#1988ab]'>{post.time}</p>
            </div>
          </div>
          <div className='flex items-center mr-4 text-[#1988ab] cursor-pointer'>
            <Plus className='size-5' />
            <p className=''>Follow</p>
          </div>
        </div>

        {/* Post Content */}
        <div>
          <p className='text-sm ml-3'>{post.content}</p>
          {post.image && <img src={post.image} alt="" className='h-64 m-2' />}
          <div className='bg-gray-200 h-[0.1rem] mb-2 mt-4'></div>
          <div className='flex justify-evenly text-gray-600 cursor-pointer'>
            <Heart />
            <MessageCircleMore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
