import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YouTubeClipPlayerProps {
  videoId: string;
  startTime?: number;
  endTime?: number;
  className?: string;
}

export const YouTubeClipPlayer: React.FC<YouTubeClipPlayerProps> = ({
  videoId,
  startTime = 0,
  endTime = 30,
  className = '',
}) => {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    let checkInterval: any = null;

    const initPlayer = () => {
      if (window.YT && window.YT.Player && containerRef.current && !playerRef.current) {
        playerRef.current = new window.YT.Player(containerRef.current, {
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            disablekb: 1,
            modestbranding: 1,
            playsinline: 1,
            iv_load_policy: 3,
            rel: 0,
            fs: 0,
          },
          events: {
            onReady: (event: any) => {
              event.target.mute();
              event.target.seekTo(startTime);
              event.target.playVideo();
            },
            onStateChange: (event: any) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                if (checkInterval) clearInterval(checkInterval);
                checkInterval = setInterval(() => {
                  if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
                    const currentTime = playerRef.current.getCurrentTime();
                    if (currentTime >= endTime || currentTime < startTime) {
                      playerRef.current.seekTo(startTime);
                      playerRef.current.playVideo();
                    }
                  }
                }, 250);
              } else if (event.data === window.YT.PlayerState.ENDED) {
                event.target.seekTo(startTime);
                event.target.playVideo();
              }
            },
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
      const interval = setInterval(() => {
        if (window.YT && window.YT.Player) {
          clearInterval(interval);
          initPlayer();
        }
      }, 100);
      return () => {
        clearInterval(interval);
        if (checkInterval) clearInterval(checkInterval);
      };
    }

    return () => {
      if (checkInterval) clearInterval(checkInterval);
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {}
      }
    };
  }, [videoId, startTime, endTime]);

  return (
    <div className={`relative overflow-hidden w-full h-full pointer-events-none select-none ${className}`}>
      <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none" />
    </div>
  );
};
