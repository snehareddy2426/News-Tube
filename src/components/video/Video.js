import React ,{useState,useEffect} from "react";
//import videoData from '../../models/videos.json';

function Video() {

  const[videos , setVideos]=useState([])
  useEffect(()=>{
  fetch("videos.json")
  .then(response=>response.json())
  .then(data=>setVideos(data))
  .catch(error=>console.error("problem with fetching data!!",error))
  },[])
  return (
    <div>
        <div className='container'>
            <div className='row'>
                {
                    videos.map((video,key) => (
                      
                        <div key={key} className='col-md-4 mb-2'>
                          <a href={`https://youtube.com/watch?v=${video.img_id}/0.jp`}>
                            <div className="card">
                                <img
                                 src={`https://img.youtube.com/vi/${video.img_id}/0.jpg`} 
                                classname="img_thumbnail"
                                alt={video.title}
                                 />
                                <div className='card-body'>
                                    <h4 className='card-title'>{video.title}</h4>
                                    <p className='card-text'>{video.channelName}</p>
                                    <p className='card-text'>{video.viewsCount} views - {video.duration}</p>
                                </div>
                            
                        </div>
                        </a>
                    </div>
                   
                 ))
            }
        </div>
     </div>
     </div>
  );
  
}
export default Video;