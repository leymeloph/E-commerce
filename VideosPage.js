import React from "react";

function VideosPage() {
  return (
    <div className="videos">
      <h2>All Videos</h2>
      <video controls>
        <source src="videos/sample1.mp4" type="video/mp4" />
      </video>
      <video controls>
        <source src="videos/sample2.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideosPage;
