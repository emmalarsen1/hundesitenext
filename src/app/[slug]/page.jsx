import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs");
  const pages = await res.json();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  const url = `https://nice-dogs.vercel.app/api/dogs?slug=${slug}`;
  const res = await fetch(url);

  if (res.status !== 200) return notFound();
  const data = await res.json();

  return {
    title: data.name,
    description: `Here is ${data.name}`,
  };
}

export default async function DogPage({ params }) {
  const { slug } = params;

  const url = `https://nice-dogs.vercel.app/api/dogs?slug=${slug}`;
  const res = await fetch(url);

  if (res.status !== 200) return notFound();

  const data = await res.json();
  console.log(data);

  return (
    <main className="md:flex max-w-7xl mx-auto">
      <Image
        src={data.image.url}
        alt={data.image.slug}
        width={data.image.width}
        height={data.image.height}
        className="w-full md:w-1/2 xl:w-[600px]"
        priority={true} // disables lazy load
        sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      400px"
      />
      <div>
        <h1>{data.name}</h1>

        {data.favouriteColor && <p>Favourite color: {data.favouriteColor}</p>}
        <p>Age: {data.age}</p>
      </div>
    </main>
  );
}
