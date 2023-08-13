import ArticleCard from "@/components/ArticleCard";
import ArticleForm from "@/components/ArticleForm";
import { getCookie, hasCookie } from "cookies-next";
import { cookies } from "next/headers";

async function getAllArticles() {
  const res = await fetch(`${process.env.BASE_URL}/articles`, {
    method: 'GET',
    headers: {
      Authorization: process.env.TOKEN,
    },
  });

  return res.json();
}

export default async function Home() {
  const articles = await getAllArticles();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-y-3 w-11/12">
          <p className="text-5xl font-bold font-mono">Bloggy 2.0</p>
          <ArticleForm></ArticleForm>
        </div>
        <div className="flex flex-col gap-y-1 mt-5 w-11/12">
          {articles.map((article) => {
            return <ArticleCard key={article.id} article={article}/>
          })}     
        </div>
      </div>
    </main>
  );
}
