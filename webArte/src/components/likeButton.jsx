import React, {useState, useEffect} from "react";
import LikeButtonSvg from './svgImage/like';
import DisLikeButtonSvg from './svgImage/disLike'

export default function LikeButton() {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const handleLikeClick = () =>{
      if (liked){
        setLikeCount(likeCount-1);
        setLiked(false)
      }else{
        setLikeCount(likeCount+1);
        setLiked(true)
      }
    }
    
    
  return (
    <div className="flex flex-row items-center justify-estart p-1 ">
      <button onClick={handleLikeClick} >
        {liked ? <LikeButtonSvg/> : <DisLikeButtonSvg/>}
      </button>
      <p className=" text-sky-400 ml-2 mt-3">{likeCount}</p>
    </div>

  );
}
