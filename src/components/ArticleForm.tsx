export default function ArticleForm(){
    return (
        <>
        <form>
            <div className="flex flex-row gap-x-3 justify-between">
                <input className="form-textarea rounded basis-5/6" placeholder="Write anything you want"></input>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline basis-1/6">Post</button>
            </div>
        </form>
        </>
    )
}