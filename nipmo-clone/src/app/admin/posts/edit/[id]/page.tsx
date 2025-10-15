'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  author: string
  date: string
  readTime: string
  views: string
  slug: string
  videoUrl?: string
  featured?: boolean
}

const categories = [
  'DSTI/ NIPMO news',
  'OTT Publications & Articles',
  'In the media'
]

interface EditPostPageProps {
  params: Promise<{ id: string }>
}

export default function EditPost({ params }: EditPostPageProps) {
  const router = useRouter()
  const [postId, setPostId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'DSTI/ NIPMO news',
    author: 'NIPMO',
    imageUrl: '',
    videoUrl: '',
    featured: false
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const loadPost = async () => {
      // Check authentication
      const session = localStorage.getItem('nipmo_admin_session')
      if (!session) {
        router.push('/admin/login')
        return
      }

      // Get post ID
      const resolvedParams = await params
      const id = parseInt(resolvedParams.id)
      setPostId(id)

      // Load post data
      const storedPosts = localStorage.getItem('nipmo_blog_posts')
      if (storedPosts) {
        const posts = JSON.parse(storedPosts) as BlogPost[]
        const post = posts.find((p: BlogPost) => p.id === id)

        if (post) {
          setFormData({
            title: post.title,
            excerpt: post.excerpt,
            content: post.content,
            category: post.category,
            author: post.author,
            imageUrl: post.image,
            videoUrl: post.videoUrl || '',
            featured: post.featured || false
          })
        }
      }
      setLoading(false)
    }

    loadPost()
  }, [params, router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!postId) return

    setSaving(true)

    // Get existing posts
    const storedPosts = localStorage.getItem('nipmo_blog_posts')
    const posts = storedPosts ? JSON.parse(storedPosts) as BlogPost[] : []

    // Update post
    const updatedPosts = posts.map((post: BlogPost) => {
      if (post.id === postId) {
        return {
          ...post,
          title: formData.title,
          excerpt: formData.excerpt,
          content: formData.content,
          image: formData.imageUrl,
          videoUrl: formData.videoUrl || undefined,
          category: formData.category,
          author: formData.author,
          featured: formData.featured,
          readTime: `${Math.ceil(formData.content.split(' ').length / 200)} min read`
        }
      }
      return post
    })

    // Save to localStorage
    localStorage.setItem('nipmo_blog_posts', JSON.stringify(updatedPosts))

    // Redirect to dashboard
    setTimeout(() => {
      router.push('/admin/dashboard')
    }, 500)
  }

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
      ['link', 'image', 'video'],
      ['blockquote', 'code-block'],
      [{ color: [] }, { background: [] }],
      ['clean']
    ]
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading post...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/admin/dashboard">
                <Button variant="ghost" size="sm">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Dashboard
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-gray-900">Edit Post</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Post Title *
                </label>
                <Input
                  id="title"
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter post title"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt *
                </label>
                <textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Brief description of the post"
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#a4ba36] focus:border-[#a4ba36]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#a4ba36] focus:border-[#a4ba36]"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                    Author *
                  </label>
                  <Input
                    id="author"
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    placeholder="Author name"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="featured"
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="h-4 w-4 text-[#a4ba36] focus:ring-[#a4ba36] border-gray-300 rounded"
                />
                <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
                  Mark as Featured Post
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Content Editor */}
          <Card>
            <CardHeader>
              <CardTitle>Post Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-md">
                <ReactQuill
                  theme="snow"
                  value={formData.content}
                  onChange={(content) => setFormData({ ...formData, content })}
                  modules={quillModules}
                  placeholder="Write your post content here..."
                  className="h-96 mb-12"
                />
              </div>
            </CardContent>
          </Card>

          {/* Media */}
          <Card>
            <CardHeader>
              <CardTitle>Media</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  Thumbnail Image URL *
                </label>
                <Input
                  id="imageUrl"
                  type="url"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  placeholder="Enter image URL"
                  required
                />
                {formData.imageUrl && (
                  <div className="mt-4">
                    <img
                      src={formData.imageUrl}
                      alt="Thumbnail preview"
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  Video URL (Optional)
                </label>
                <Input
                  id="videoUrl"
                  type="url"
                  value={formData.videoUrl}
                  onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                  placeholder="https://www.youtube.com/watch?v=..."
                />
                <p className="text-xs text-gray-500 mt-1">
                  Add a YouTube video URL to embed it in the post
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex items-center justify-end space-x-4">
            <Link href="/admin/dashboard">
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Link>
            <Button
              type="submit"
              className="bg-[#a4ba36] hover:bg-[#94a632] text-white"
              disabled={saving}
            >
              {saving ? 'Saving...' : 'Update Post'}
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}
