import { Suspense } from "react";
import Author from "./author";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostsSequential() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Posts[] = await response.json();
  const filteredData = posts.filter((post) => post.id % 10 === 1);
  return (
    <>
      <h1>Users List</h1>
      <div className="flex gap-5 flex-wrap justify-start items-center">
        {filteredData.map(({ id, title, body, userId }) => {
          return (
            <div
              className="userCard bg-teal-600 p-5 text-black font-extrabold"
              key={id}
            >
              <h2 className="text-4xl">{title}</h2>
              <p>{body}</p>
              <Suspense fallback={<p>LOADING AUTHOR ....</p>}>
                <Author userId={userId} />
              </Suspense>
            </div>
          );
        })}
      </div>
    </>
  );
}
