import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"w-full"}>
        <h1 className="text-center bg-green-200 text-base text-gray-800 font-bold">
          About page
        </h1>
        <Link href={"/"}>Go to home page</Link>
      </main>
    </>
  );
}
