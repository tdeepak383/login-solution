import React, { useState } from 'react'
import { IconButton, Stack, Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { MdDateRange } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

function BlogDetailsPage({ title, content, image, created_at, tags }) {


    const [likes, setLikes] = useState(() => {
      return Math.floor(Math.random() * 100);
    });
    const [dislikes, setDislikes] = useState(() => {
      return Math.floor(Math.random() * 100);
    });
    const [reaction, setReaction] = useState(null);

      const handleLike = () => {
    if (reaction === true) {
      setLikes(likes - 1);
      setReaction(null);
    } else {
      setLikes(likes + 1);
 
     if (reaction === false) setDislikes(dislikes - 1);
      setReaction(true);
    }
  };

  const handleDislike = () => {
    if (reaction === false) {
      setDislikes(dislikes - 1);
      setReaction(null);
    } else {
      setDislikes(dislikes + 1);
      if (reaction === true) setLikes(likes - 1);
      setReaction(false);
    }
  };
  


  return (
    <>
        <div>
        <h3 className='text-2xl md:text-4xl font-bold'>{title}</h3>
        <div className='flex items-center gap-6 font-semibold py-4'>
          <p className='text-[var(--purple)] text-sm flex items-center gap-3'><FaRegUserCircle /> Atul Gupta,</p>
          <p className='text-[var(--purple)] text-sm flex items-center gap-3'><MdDateRange /> {new Date(created_at).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}</p>
        
        </div>
        <Stack direction="row" spacing={1} alignItems="center" className='mb-5'>
        <IconButton onClick={handleLike} color={reaction === true ? "primary" : "default"}>
            <ThumbUpIcon />
        </IconButton>
        <Typography>{likes}</Typography>

        <IconButton onClick={handleDislike} color={reaction === false ? "error" : "default"}>
            <ThumbDownIcon />
        </IconButton>
        <Typography>{dislikes}</Typography>
        </Stack>
        <img src={image} alt={title} className='rounded-xl'/>

        <div 
        dangerouslySetInnerHTML={{ __html: content }} 
        className="prose prose-lg max-w-none mt-10"
        />
        <p className='text-sm text-gray-600 mt-5'><span className='font-semibold'>Tags:</span> {tags}</p>
        </div>
        
    </>
  )
}

export default BlogDetailsPage