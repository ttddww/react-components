import { useEffect, useState } from "react";

function AppleYoutube() {
  const [youTubevideos, setyouTubevideos] = useState([]);
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&order=date&key=AIzaSyBATEKwHBBrI4_Qcz9W_DBnofoJc9SsjG8"
    )
      .then((response) => response.json())
      .then((data) => {
        setyouTubevideos(data.items);
      });
  }, []);
  return (
    <section className="youtubeVideosWrapper">
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper">
                <br />
                <h1>Latest Videos</h1>
                <br />
              </div>
            </div>
            {youTubevideos?.map((singleVidoe, i) => {
              let vidId = singleVidoe.id.videoId; // Corrected property name to 'videoId'
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              // Rest of your code...
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-6 col-lg-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_black" rel="noreferrer">
                        <img
                          src={singleVidoe.snippet.thumbnails.high.url}
                          alt="thumbnails"
                        />
                      </a>
                    </div>
                    <div className="videoIfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_black" rel="noreferrer">
                          {singleVidoe.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVidoe.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppleYoutube;

// import React, { Component } from "react";

// // https://www.googleapis.com/youtube/v3/search?key=AIzaSyB4xNW_TeLDTO9tKxmHQAZskoy9Na0sxR0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=1

// class Youtube extends Component {
//   constructor() {
//     super();
//     this.state = {
//       youTubeVideos: [],
//     };
//   }

//   componentDidMount() {
//     fetch(
//       "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBv_MveWxmNKF-fAAEDIy3qAIWtt0-YM1M&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         const youTubeVideos = data.items;
//         this.setState({ youTubeVideos });
//       });
//   }

//   render() {
//     return (
//       <div className="allVideosWrapper">
//         <div className="container">
//           <div className="row h-100 align-items-center justify-content-center text-center">
//             <div className="col-12">
//               <div className="title-wraper bold video-title-wrapper">
//                 Latest Videos
//               </div>
//             </div>
//             {this.state.youTubeVideos.map((singleVideo, i) => {
//               let vidId = singleVideo.id.videoId;
//               let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
//               let videoWrapper = (
//                 <div key={i} className="col-sm-12 col-md-4">
//                   <div className="singleVideoWrapper">
//                     <div className="videoThumbnail">
//                       <a href={vidLink} target="_blank">
//                         <img src={singleVideo.snippet.thumbnails.high.url} />
//                       </a>
//                     </div>
//                     <div className="videoInfoWrapper">
//                       <div className="videoTitle">
//                         <a href={vidLink} target="_blank">
//                           {singleVideo.snippet.title}
//                         </a>
//                       </div>
//                       <div className="videoDesc">
//                         {singleVideo.snippet.description}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//               return videoWrapper;
//             })}

//             {this.videoWrapper}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Youtube;
