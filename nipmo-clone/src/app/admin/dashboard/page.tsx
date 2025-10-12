'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface BlogPost {
  id: number
  title: string
  category: string
  author: string
  date: string
  featured: boolean
  views: string
}

export default function AdminDashboard() {
  const router = useRouter()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check authentication
    const session = localStorage.getItem('nipmo_admin_session')
    if (!session) {
      router.push('/admin/login')
      return
    }

    // Load posts from localStorage
    const storedPosts = localStorage.getItem('nipmo_blog_posts')
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts))
    }
    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('nipmo_admin_session')
    router.push('/admin/login')
  }

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      const updatedPosts = posts.filter(post => post.id !== id)
      setPosts(updatedPosts)
      localStorage.setItem('nipmo_blog_posts', JSON.stringify(updatedPosts))
    }
  }

  const toggleFeatured = (id: number) => {
    const updatedPosts = posts.map(post =>
      post.id === id ? { ...post, featured: !post.featured } : post
    )
    setPosts(updatedPosts)
    localStorage.setItem('nipmo_blog_posts', JSON.stringify(updatedPosts))
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
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
              <img
                src="https://ext.same-assets.com/4026891959/2039865706.jpeg"
                alt="NIPMO Logo"
                className="h-10 w-auto"
                crossOrigin="anonymous"
              />
              <h1 className="text-xl font-bold text-gray-900">NIPMO CMS Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" target="_blank">
                <Button variant="outline" size="sm">
                  View Website
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-gray-900">{posts.length}</div>
              <div className="text-sm text-gray-600">Total Posts</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-gray-900">
                {posts.filter(p => p.featured).length}
              </div>
              <div className="text-sm text-gray-600">Featured Posts</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-gray-900">
                {posts.filter(p => p.category === 'DSTI/ NIPMO news').length}
              </div>
              <div className="text-sm text-gray-600">DSTI/NIPMO News</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-gray-900">
                {posts.filter(p => p.category === 'OTT Publications & Articles').length}
              </div>
              <div className="text-sm text-gray-600">OTT Publications</div>
            </CardContent>
          </Card>
        </div>

        {/* Action Bar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Blog Posts</h2>
          <Link href="/admin/posts/new">
            <Button className="bg-[#a4ba36] hover:bg-[#94a632] text-white">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Create New Post
            </Button>
          </Link>
        </div>

        {/* Posts Table */}
        {posts.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
              <p className="text-gray-600 mb-4">Get started by creating your first blog post.</p>
              <Link href="/admin/posts/new">
                <Button className="bg-[#a4ba36] hover:bg-[#94a632] text-white">
                  Create New Post
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Author
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Featured
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {posts.map((post) => (
                      <tr key={post.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">{post.title}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-block px-2 py-1 text-xs font-medium text-[#a4ba36] bg-green-50 rounded-full">
                            {post.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{post.author}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{post.date}</td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => toggleFeatured(post.id)}
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                              post.featured
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {post.featured ? (
                              <>
                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                Featured
                              </>
                            ) : (
                              'Not Featured'
                            )}
                          </button>
                        </td>
                        <td className="px-6 py-4 text-right text-sm font-medium space-x-2">
                          <Link href={`/admin/posts/edit/${post.id}`}>
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(post.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
