import ArticleCard from "@/components/ArticleCard";
import ArticleForm from "@/components/ArticleForm";
import { cookies } from "next/headers";
import Link from "next/link";

async function getAllUserArticles() {
  const res = await fetch(`${process.env.DEV_URL}/articles/user`, {
    method: 'GET',
  });
  return res.json();
}

export default async function Home() {
  const articles = await getAllUserArticles();
  if(!Object.keys(articles).length){
    return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-y-3 w-11/12">
          <div className="flex flex-row justify-between">
            <p className="text-5xl font-bold font-mono">dashboard</p>
            <Link
            href="/"
            className="font-semibold"
          >
            Logout
          </Link>
          </div>
          <ArticleForm></ArticleForm>
        </div>
        <div className="flex flex-col gap-y-1 mt-5 w-11/12">
          <p>You have not write any article</p>   
        </div>
      </div>
    </main>
    )
  }else{
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-y-3 w-11/12">
          <p className="text-5xl font-bold font-mono">Bloggy 2.0</p>
          <ArticleForm></ArticleForm>
        </div>
        <div className="flex flex-col gap-y-1 mt-5 w-11/12">
          {/* {articles.map((article) => {
            return <ArticleCard key={article.id} article={article}/>
          })}      */}
        </div>
      </div>
    </main>
  )
  }
  ;
}
