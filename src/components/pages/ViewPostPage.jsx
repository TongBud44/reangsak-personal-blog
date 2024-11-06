import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../Nav-bar";
import { Footer } from "../Footer";
import ReactMarkdown from "react-markdown";

function ViewPostPage() {
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const param = useParams();

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const results = await axios.get(
        `https://blog-post-project-api.vercel.app/posts/${param.postId}}`
      );
      setImage(results.data.image);
      setCategory(results.data.category);
      setDate(results.data.date);
      setTitle(results.data.title);
      setDescription(results.data.description);
      setContent(results.data.content);
    } catch {
      console.log(error);
    }
  };

  return (
    <>
      <div className="Navigation-bar">
        <NavBar />
      </div>
      <div className="max-w-7xl mx-auto space-y-8 container md:px-8 pb-20 md:pb-28 md:pt-8 lg:pt-16">
        <div className="space-y-4 md:px-4">
          <img
            src={image}
            alt={title}
            className="lg:rounded-3xl object-cover w-full h-[260px] sm:h-[340px] md:h-[587px]"
          />
        </div>
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="xl:w-3/4 space-y-8">
            <article className="px-4">
              <div className="flex">
                <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
                  {category}
                </span>
                <span className="px-3 py-1 text-sm font-normal text-muted-foreground">
                  {new Date(date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="mt-4 mb-10">{description}</p>
              <div className="markdown">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}
export default ViewPostPage;
