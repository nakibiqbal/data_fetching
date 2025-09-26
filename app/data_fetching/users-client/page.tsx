"use client";

import { useEffect, useState } from "react";

type Users = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
  };
};

export default function User() {
  const [data, setData] = useState<Users[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>Users List</h1>
      <div className="flex gap-5 flex-wrap justify-start items-center">
        {data.map(({ id, name, email, phone, website, address }) => {
          return (
            <>
              <div className="userCard bg-amber-950 p-5" key={id}>
                <h2>Name : {name}</h2>
                <h4>Phone : {phone}</h4>
                <h4>Email : {email}</h4>
                <h4>Website : {website}</h4>
                <p>Address : {address.street}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
