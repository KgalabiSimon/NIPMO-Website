import React from 'react'

interface VideoPlayerProps {
  videoUrl: string
  title?: string
  className?: string
}

export function VideoPlayer({ videoUrl, title = "Video", className = "" }: VideoPlayerProps) {
  // Extract YouTube video ID from various YouTube URL formats
  const extractYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }

  const videoId = extractYouTubeId(videoUrl)

  if (!videoId) {
    return (
      <div className={`bg-gray-100 rounded-lg p-8 text-center ${className}`}>
        <p className="text-gray-600">Invalid video URL</p>
      </div>
    )
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
        <iframe
          src={embedUrl}
          title={title}
          className="absolute top-0 left-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}
