import React, { useRef, useState, useEffect } from 'react';


export default function FiltersDemo() {
  const videoRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);

  // تشغيل/إيقاف الفيديو
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
    // نظهر الكنترولز عند كل ضغطة
    setShowControls(true);
  };

  // تحديث شريط التقدم كلما تغيّر الوقت
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const percent = (video.currentTime / video.duration) * 100;
    setProgress(percent);
  };

  // إخفاء الكنترولز بعد 3 ثواني من عدم تحريك الماوس
  const handleMouseMove = () => {
    setShowControls(true);
    clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  // الانتقال في الفيديو عند الضغط على الشريط
  const handleProgressClick = (e) => {
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * video.duration;
    video.currentTime = newTime;
  };

  // تنظيف التايمر عند تفكيك الكومبوننت
  useEffect(() => {
    return () => clearTimeout(hideTimeoutRef.current);
  }, []);

  return (
    <section className="filters-demo">
      <div
        className={`container-filter ${showControls ? 'show-controls' : ''} ${!isPlaying ? 'paused' : ''}`}
        onMouseMove={handleMouseMove}
      >
        <h2>Product Filters in Action</h2>

        <video
          ref={videoRef}
          src="img/Vite-React-Personnel–Microsoft​-Edge.mp4"
          onTimeUpdate={handleTimeUpdate}
          className="video-filter"
        />

        {showControls && (
          <button
            onClick={togglePlay}
            className="video-btn"
          >
            <i className={isPlaying ? 'bx bx-pause' : 'bx bx-play'}></i>
          </button>
        )}

        <div
          className="progress-bar"
          onClick={handleProgressClick}
        >
          <div
            className="progress"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
}
