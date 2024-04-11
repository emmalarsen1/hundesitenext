import Link from "next/link";

export const metadata = {
  title: "Frontpage",
  description: "Description",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>And so it begins</h1>
      <Link href="./henry" prefetch={false}>
        Henry
      </Link>
    </main>
  );
}
