import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getFeaturedPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, User, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Insurance Wisdom and Community Stories',
  description: 'Learn about insurance, Diné traditions, and protecting what matters most through our community blog.',
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const recentPosts = allPosts.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-white to-turquoise-50">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Insurance Wisdom & Community Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover insights about protecting your family, understanding insurance, 
              and honoring Diné traditions in the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Featured Stories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 3).map((post) => (
                <Card key={post.slug} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
                  {post.image && (
                    <div className="aspect-video bg-gradient-to-br from-red-clay-100 to-turquoise-100 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Featured Image</span>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                      <span className="flex items-center space-x-1">
                        <CalendarDays className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readingTime}</span>
                      </span>
                    </div>
                    <CardTitle className="text-xl font-serif">
                      <Link href={`/blog/${post.slug}`} className="hover:text-red-clay-600 transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-clay-100 text-red-clay-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Recent Posts</h2>
          
          {recentPosts.length > 0 ? (
            <>
              <div className="grid gap-8">
                {recentPosts.map((post) => (
                  <Card key={post.slug} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="aspect-video md:aspect-square bg-gradient-to-br from-sand-100 to-red-clay-100 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">Blog Image</span>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                            <span className="flex items-center space-x-1">
                              <CalendarDays className="w-4 h-4" />
                              <span>{formatDate(post.date)}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readingTime}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </span>
                          </div>
                          <CardTitle className="text-2xl font-serif">
                            <Link href={`/blog/${post.slug}`} className="hover:text-red-clay-600 transition-colors">
                              {post.title}
                            </Link>
                          </CardTitle>
                          <CardDescription className="text-base">
                            {post.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {post.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-turquoise-100 text-turquoise-800"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <Link href={`/blog/${post.slug}`}>
                              <Button variant="outline" size="sm" className="border-red-clay-600 text-red-clay-600 hover:bg-red-clay-50">
                                Read More
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {allPosts.length > 6 && (
                <div className="text-center mt-12">
                  <Button size="lg" variant="outline" className="border-red-clay-600 text-red-clay-600 hover:bg-red-clay-50">
                    Load More Posts
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">No blog posts yet</h3>
              <p className="text-gray-600 mb-8">We're working on creating valuable content for our community. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}