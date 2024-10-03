import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
            <Link className="text-white font-bold" href={'/'}>BETA Report</Link>
            <Link className='bg-white p-3 text-black text-sm	 font-bold' href={'/addTopic'}>Add Issue</Link>
        </nav>
    );
    
}