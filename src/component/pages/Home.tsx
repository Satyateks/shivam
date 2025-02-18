import React from "react";
import { useGetPostsQuery } from "../../services/apiSlice";

const Home: React.FC = () => {
  // Use RTK Query hook to fetch posts data
  const { data, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <div className="container mt-5">
      <h1 className="display-4">Posts</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
