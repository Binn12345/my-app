export default function AddTopic() {

    return (
        <form className="flex flex-col gap-3">
            <input className='text-black border border-slate-500 px-8 py-2' type="text" placeholder="Issue Title" />
            <input  className='text-black border border-slate-500 px-8 py-2' type="text" placeholder="Topic Description" />
            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit" type="submit">Add Topic</button>
        </form>
    );

}