import Navigation from '@/components/Navigation'
import { FadeInUp, FadeInUpImmediate } from '@/components/AnimatedSection'
import { motion } from 'framer-motion'

export default function Blog() {
  const blogPosts = [
    { id: 1, title: 'First Blog Post', date: 'Coming Soon', excerpt: 'This will be our first blog post...' },
    { id: 2, title: 'Second Blog Post', date: 'Coming Soon', excerpt: 'Another interesting article...' },
    { id: 3, title: 'Third Blog Post', date: 'Coming Soon', excerpt: 'More content will be added here...' },
    { id: 4, title: 'Fourth Blog Post', date: 'Coming Soon', excerpt: 'Stay tuned for more updates...' },
    { id: 5, title: 'Fifth Blog Post', date: 'Coming Soon', excerpt: 'Exciting content on the way...' },
    { id: 6, title: 'Sixth Blog Post', date: 'Coming Soon', excerpt: 'More articles coming soon...' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUpImmediate>
              <h1 className="text-5xl md:text-6xl font-title text-dark mb-8">
                Blog
              </h1>
            </FadeInUpImmediate>
            
            <FadeInUpImmediate delay={0.2}>
              <p className="text-xl text-text max-w-2xl mx-auto">
                Stay updated with our latest thoughts, insights, and news. 
                Articles and updates will be published here regularly.
              </p>
            </FadeInUpImmediate>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <FadeInUp key={post.id} delay={index * 0.1}>
                <motion.article
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                >
                  <div className="h-48 bg-yellow/20 flex items-center justify-center">
                    <span className="text-dark font-title">Image Placeholder</span>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-text mb-2">{post.date}</div>
                    <h2 className="text-xl font-title text-dark mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-text text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-dark-yellow font-medium text-sm hover:text-dark transition-colors"
                    >
                      Read More →
                    </motion.button>
                  </div>
                </motion.article>
              </FadeInUp>
            ))}
          </div>

          {/* Newsletter Signup */}
          <FadeInUp delay={0.5}>
            <div className="mt-20 bg-white rounded-2xl p-8 text-center shadow-lg">
              <h2 className="text-3xl font-title text-dark mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-text mb-6">
                Get notified when we publish new articles and updates.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full border-2 border-background focus:border-yellow outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow hover:bg-dark-yellow text-dark px-6 py-3 rounded-full font-medium transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </FadeInUp>
        </div>
      </main>
    </div>
  )
}