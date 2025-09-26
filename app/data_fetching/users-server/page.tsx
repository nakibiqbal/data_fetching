type Users = {
  id: number;
  name: string;
  email: string;
  phone: number;
  website: string;
  address: {
    street: string;
  };
};
export default async function User() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: Users[] = await response.json();

  return (
    <>
      <h1>Users List</h1>
      <div className="flex gap-5 flex-wrap justify-start items-center">
        {data.map(({ id, name, email, phone, website, address }) => {
          return (
            <div
              className="userCard bg-teal-600 p-5 text-black font-extrabold"
              key={id}
            >
              <h2>Name : {name}</h2>
              <h4>Phone : {phone}</h4>
              <h4>Email : {email}</h4>
              <h4>Website : {website}</h4>
              <p>Address : {address.street}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
