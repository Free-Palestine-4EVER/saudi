import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "10 Hidden Gems in Saudi Arabia You Must Visit",
    excerpt: "Discover the lesser-known treasures of the Kingdom, from ancient ruins to pristine beaches.",
    image: "/saudi-arabia-hidden-gems.png",
    author: "Sarah Al-Rashid",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Travel Tips",
    featured: true,
  },
  {
    id: 2,
    title: "A Complete Guide to AlUla: History, Culture, and Adventure",
    excerpt: "Everything you need to know about visiting this UNESCO World Heritage site.",
    image: "/alula-heritage-site.png",
    author: "Ahmed Hassan",
    date: "March 10, 2024",
    readTime: "12 min read",
    category: "Destinations",
  },
  {
    id: 3,
    title: "Best Time to Visit Saudi Arabia: A Seasonal Guide",
    excerpt: "Plan your perfect trip with our comprehensive weather and seasonal activity guide.",
    image: "/saudi-arabia-seasons.png",
    author: "Fatima Al-Zahra",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Travel Tips",
  },
  {
    id: 4,
    title: "Traditional Saudi Cuisine: A Culinary Journey",
    excerpt: "Explore the rich flavors and cultural significance of authentic Saudi dishes.",
    image: "/saudi-traditional-food.png",
    author: "Omar Al-Mansouri",
    date: "February 28, 2024",
    readTime: "10 min read",
    category: "Culture",
  },
  {
    id: 5,
    title: "Red Sea Diving: Underwater Paradise Awaits",
    excerpt: "Discover pristine coral reefs and marine life in the crystal-clear waters.",
    image: "/red-sea-diving-coral.png",
    author: "Marina Petrova",
    date: "February 20, 2024",
    readTime: "7 min read",
    category: "Adventure",
  },
  {
    id: 6,
    title: "Sustainable Tourism in Saudi Arabia",
    excerpt: "How the Kingdom is leading the way in eco-friendly travel experiences.",
    image: "/sustainable-tourism-saudi.png",
    author: "Dr. Khalid Al-Otaibi",
    date: "February 15, 2024",
    readTime: "9 min read",
    category: "Sustainability",
  },
]

const categories = ["All", "Travel Tips", "Destinations", "Culture", "Adventure", "Sustainability"]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/saudi-arabia-travel-blog.png" alt="Saudi Arabia Travel Blog" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Travel Blog</h1>
            <p className="text-xl max-w-2xl mx-auto">Stories, tips, and insights from the heart of Saudi Arabia</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-orange-500">Featured</Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <Button className="w-fit">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <Button key={category} variant={category === "All" ? "default" : "outline"} className="rounded-full">
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <Badge className="absolute top-4 left-4 bg-orange-500">{post.category}</Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mt-16 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest travel tips, destination guides, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Button className="bg-orange-500 hover:bg-orange-600">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
