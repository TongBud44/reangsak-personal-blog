import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BlogCard } from "./BlogCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [category, setCategory] = useState("Highlight");
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getPosts = async () => {
      try {
        const response = await axios.get(
          `https://blog-post-project-api.vercel.app/posts?page=${page}&limit=6`
        );
        setPost((prevPosts) => [...prevPosts, ...response.data.posts]);
        console.log(response);
        setIsLoading(false);
        if (response.data.currentPage >= response.data.totalPages) {
          setHasMore(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    getPosts();
  }, [page, category]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (category === "Highlight") {
      setFilteredPosts(post);
    } else {
      setFilteredPosts(post.filter((blog) => blog.category === category));
    }
  }, [post, category]);

  return (
    <>
      <div className="bg-[#F9F8F6] w-full mx-auto md:px-6 lg:px-[120px] mb-10">
        <h2 className="text-xl font-bold mb-4 px-4 lg:px-0">Latest articles</h2>
        <div className="bg-[#EFEEEB] px-4 py-4 md:py-3 md:rounded-sm flex flex-col space-y-4 md:flex-row-reverse md:items-center md:space-y-0 md:justify-between lg:rounded-lg">
          <div className="w-full md:max-w-sm ">
            <div className="relative ">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 lg:text-[#75716B] text-[#75716B]" />
              <Input
                type="text"
                placeholder="Search"
                className="py-3 lg:rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground lg:placeholder-[#75716B]"
              />
            </div>
          </div>
          <div className="md:hidden w-full">
            <Select
              value={category}
              onValueChange={(value) => {
                setCategory(value);
                setPost([]);
                setPage(1);
                setHasMore(true);
              }}
            >
              <SelectTrigger className="w-full py-3 rounded-sm text-muted-foreground">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              {/* แสดงหมวดหมู่ในขนาด mobile */}
              <SelectContent>
                {categories.map((cat) => {
                  return (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          {/* แสดงหมวดหมู่ในขนาด Desktop */}
          <div className="hidden md:flex space-x-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setPost([]);
                  setPage(1);
                  setHasMore(true);
                }}
                className={`px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium ${
                  category === cat ? "bg-[#DAD6D1]" : "hover:bg-[#F9F8F6]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
      <article className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-[120px] pb-20 lg:pb-[120px]">
        {filteredPosts.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              id={blog.id}
              image={blog.image}
              category={blog.category}
              title={blog.title}
              description={blog.description}
              author={blog.author}
              date={new Date(blog.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            />
          );
        })}
      </article>
      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="hover:text-muted-foreground font-medium underline"
          >
            {isLoading ? "Loading..." : "View more"}
          </button>
        </div>
      )}
    </>
  );
}
