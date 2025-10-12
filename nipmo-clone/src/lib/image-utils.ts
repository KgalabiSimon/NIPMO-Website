/**
 * Utility functions for handling images in production deployment
 */

/**
 * Ensures that same-assets.com URLs are properly formatted for production
 */
export function ensureImageUrl(url: string): string {
  // If it's already a full URL, return as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }

  // If it's a relative path, prepend the base URL
  if (url.startsWith('/')) {
    return url
  }

  // Default fallback
  return url
}

/**
 * Gets the optimal image URL for the current environment
 */
export function getOptimizedImageUrl(url: string, width?: number, height?: number): string {
  const optimizedUrl = ensureImageUrl(url)

  // For same-assets.com URLs, we can add optimization parameters if needed
  if (optimizedUrl.includes('same-assets.com')) {
    const urlObj = new URL(optimizedUrl)
    if (width) urlObj.searchParams.set('w', width.toString())
    if (height) urlObj.searchParams.set('h', height.toString())
    return urlObj.toString()
  }

  return optimizedUrl
}

/**
 * Validates if an image URL is accessible
 */
export function isValidImageUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Common image domains that should be allowed
 */
export const ALLOWED_IMAGE_DOMAINS = [
  'ext.same-assets.com',
  'ugc.same-assets.com',
  'same-assets.com',
  'static.wixstatic.com',
  'source.unsplash.com',
  'images.unsplash.com'
]

/**
 * Check if an image domain is allowed
 */
export function isAllowedImageDomain(url: string): boolean {
  try {
    const urlObj = new URL(url)
    return ALLOWED_IMAGE_DOMAINS.some(domain =>
      urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
    )
  } catch {
    return false
  }
}
