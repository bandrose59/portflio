import React, { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { MovingBorder } from "../ui/moving-border";
import { FaExternalLinkAlt, FaMedium } from "react-icons/fa";
import { GetInTouch } from "./GetInTouch";

const MEDIUM_USERNAME = "anujagarwal";
const MEDIUM_RSS_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
const RSS2JSON_API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
  MEDIUM_RSS_URL
)}`;
const POSTS_TO_SHOW_INITIALLY = 4;

export const BlogPage = () => {
  const [mediumPosts, setMediumPosts] = useState([]);
  const [postsToShow, setPostsToShow] = useState(POSTS_TO_SHOW_INITIALLY);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMedium() {
      try {
        const res = await fetch(RSS2JSON_API);
        const data = await res.json();
        if (data.status === "ok") {
          const posts = data.items.map((item) => ({
            title: item.title,
            link: item.link,
            pubDate: new Date(item.pubDate),
            source: "Medium",
            thumbnail: item.thumbnail || null,
            description: item.description.replace(/<[^>]+>/g, ""),
          }));
          setMediumPosts(posts);
        }
      } catch (err) {
        console.error("Error fetching Medium posts:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMedium();
  }, []);

  function loadMore() {
    setPostsToShow((prev) => prev + 4);
  }

  return (
    <>
      <section
        id="blogs"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="max-w-5xl mx-auto px-4 w-full">
          <RevealOnScroll>
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                <span className="text-yellow-300 text-3xl font-bold mr-2 align-middle">
                  ✍️
                </span>
                My Latest Blogs
              </h2>
              <p className="text-gray-400 mb-6 text-center max-w-2xl">
                Thoughts, tutorials, and insights on web development, AI, and
                more.
              </p>
            </div>
          </RevealOnScroll>

          {loading && (
            <div className="text-center text-gray-400">Loading posts...</div>
          )}

          {!loading && mediumPosts.length === 0 && (
            <div className="text-center text-gray-400">No posts found.</div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediumPosts.slice(0, postsToShow).map((post, idx) => (
              <RevealOnScroll key={`medium-${idx}`}>
                <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all h-full flex flex-col">
                  <div className="flex gap-4 h-full">
                    {post.thumbnail && (
                      <img
                        src={post.thumbnail}
                        alt="thumbnail"
                        className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                      />
                    )}
                    <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold mb-2 hover:text-blue-400 transition-colors line-clamp-2 break-all"
                      >
                        {post.title}
                      </a>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-3 break-words flex-grow overflow-hidden">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-auto">
                        <span>{post.pubDate.toLocaleDateString()}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 whitespace-nowrap">
                          <FaMedium className="text-gray-400" />
                          {post.source}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-6">
            {postsToShow < mediumPosts.length && (
              <RevealOnScroll>
                <MovingBorder
                  borderRadius="1.75rem"
                  className="p-3 bg-gradient-to-b from-blue-500/10 to-cyan-500/10 border-blue-500/20"
                >
                  <button
                    onClick={loadMore}
                    className="flex items-center gap-2 px-6 py-2 text-white font-medium transition-all hover:gap-3"
                  >
                    Load More Articles
                  </button>
                </MovingBorder>
              </RevealOnScroll>
            )}

            {postsToShow >= mediumPosts.length && mediumPosts.length > 0 && (
              <RevealOnScroll>
                <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50">
                  <a
                    href="https://github.com/yourusername?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-white/20 px-6 py-2 rounded-full text-white font-medium transition-all duration-300 hover:gap-3 hover:border-blue-400 hover:shadow-lg bg-black/20 backdrop-blur-sm"
                  >
                    View More on Medium
                    <FaMedium className="text-lg" />
                  </a>
                </div>
              </RevealOnScroll>
            )}
          </div>
        </div>
      </section>
      <GetInTouch />
    </>
  );
};
