"use client"

import Image from "next/image"
import { useState } from "react"

interface RobustImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  fill?: boolean
  priority?: boolean
  fallbackSrc?: string
}

export function RobustImage({
  src,
  alt,
  width,
  height,
  className,
  fill = false,
  priority = false,
  fallbackSrc
}: RobustImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc)
    } else {
      setHasError(true)
    }
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  if (hasError && !fallbackSrc) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <svg
          className="w-6 h-6 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      </div>
    )
  }

  // Use regular img tag for external images to avoid CORS issues
  if (imgSrc.includes('ext.same-assets.com') || imgSrc.includes('same-assets.com')) {
    return (
      <div className="relative">
        {isLoading && (
          <div
            className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
            style={{ width, height }}
          />
        )}
        <img
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          className={className}
          onError={handleError}
          onLoad={handleLoad}
          crossOrigin="anonymous"
          style={{
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
            objectFit: 'cover'
          }}
        />
      </div>
    )
  }

  return (
    <div className="relative">
      {isLoading && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
          style={{ width, height }}
        />
      )}
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        fill={fill}
        priority={priority}
        onError={handleError}
        onLoad={handleLoad}
        unoptimized={true}
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
    </div>
  )
}
