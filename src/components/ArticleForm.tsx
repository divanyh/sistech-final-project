"use client";
import { AxiosError } from "axios";
import {useRouter } from "next/navigation";

export default function ArticleForm() {
  const router = useRouter();
  const handleSubmitArticle = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    const payload = {
      title: event.currentTarget.title.value,
      content: event.currentTarget.content.value,
      tags: [event.currentTarget.tags.value],
    };

    console.log(payload);
    try {
      const res = await fetch(`http://localhost:3001/api/articles/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log(res);

      if(res.status==500){
        router.push('/login');
      }
      // redirect the user to /dashboard
      //   push("/dashboard");
    } catch (e) {
      const error = e as AxiosError;

      alert(error.message);
    }

  
  };
  return (
    <>
      <form onSubmit={handleSubmitArticle}>
        <div className="flex flex-col gap-x-3 justify-between">
          <input
            className="form-text rounded basis-5/6"
            placeholder="What is the title"
            name="title"
            type="text"
            id="title"
          ></input>
          <textarea
            className="form-textarea h-32 rounded basis-5/6"
            placeholder="Write anything you want"
            name="content"
            id="content"
          ></textarea>
          <input
            className="form-text rounded basis-5/6"
            placeholder="tags"
            name="tags"
            type="text"
            id="tags"
          ></input>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline basis-1/6">
            Post
          </button>
        </div>
      </form>
    </>
  );
}