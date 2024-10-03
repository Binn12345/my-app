import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import TopicsList from "./components/TopicsList";

export default function Home() {
  return (
    <>
      <TopicsList/>
      <TopicsList/>
      <TopicsList/>
    </>
  );
  // return <TopicsList />;
  // return (
  //   <main>
  //     <h1>Home</h1>
  //     <Link href='/users'>Users</Link>
  //     <ProductCard />
  //   </main>
  // );
}
