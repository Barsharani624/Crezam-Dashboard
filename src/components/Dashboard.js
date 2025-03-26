import React, { useRef, useState, useEffect } from "react";
import "../styles/styles.css";

export default function Dashboard() {
    const videoRef = useRef(null);
    const [cameraAccess , setCameraAccess] = useState(false);
  
    const getCameraAccess = async () => {
      try {
        console.log("Requesting camera access...");
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        console.log("Stream:", stream);
  
        if (videoRef.current) {
          console.log("Assigning video stream to videoRef");
          videoRef.current.srcObject = stream;
  
          // Ensure the video is playing
          setTimeout(() => {
            videoRef.current.play().catch((e) => console.error("Playback error:", e));
          }, 500);
  
          setCameraAccess(true);
        } else {
          console.error("videoRef is NULL");
        }
      } catch (error) {
        console.error("Camera access error:", error);
      }
    };
  
    useEffect(() => {
      console.log("useEffect triggered");
      getCameraAccess();
    }, []);
  
    return (
      <div className="dashboard-container">
        <h2>Camera Capture Dashboard</h2>
  
        {/* This is where you add the video preview */}
        <video
          ref={videoRef}
          className="camera-preview"
          autoPlay
          playsInline
          muted
        />
  
        <button onClick={() => {
          if (videoRef.current) {
            const canvas = document.createElement("canvas");
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;
            canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
            const imgData = canvas.toDataURL("image/png");
            console.log("Captured image data:", imgData);
            alert("Photo captured!");
          }
        }}>
          Capture Photo
        </button>
      </div>
    );
  }
