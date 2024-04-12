import Link from "next/link";

export default async function Menu() {
  const url = "https://nice-dogs.vercel.app/api/dogs";
  const res = await fetch(url);
  const dogs = await res.json();
  console.log(dogs);

  return (
    <nav className="bg-black text-white">
      <ul>
        <li>
          <Link href={"./"} prefetch={false}>
            - Hjem
          </Link>
        </li>

        {dogs.map((dog) => {
          const { name, slug } = dog;
          return (
            <li key={slug}>
              <Link href={`/${slug}`} prefetch={false}>
                {" "}
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
