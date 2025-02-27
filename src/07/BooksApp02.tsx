import { useEffect, useState } from "react"


interface Livre {
    title: string
    cover: string
    releaseDate: string
    pages: number
    description: string
}

const livresData:Array<Livre> = [
    {
        title: "Livre 01",
        cover: "https://products-images.di-static.com/image/nasser-balabala-methot-kotagbia-cahier-d-un-etudiant-centrafricain-au-maroc/9782385418717-475x500-1.jpg",
        releaseDate: "01/01/2024",
        pages: 125,
        description: "Description du livre"
    },
]

export default function BooksApp02() {

    const [livresData, setLivresData] = useState<Livre[]>([]);

    useEffect(function() {
        fetch('https://potterapi-fedeperin.vercel.app/fr/books').then(async function(res) {
            const livres = await res.json() 
            setLivresData(livres);
        })
    }, []);


    

    const livres = livresData.map(function(book, index) {
        return (
            <div key={index}>
                <div className="bg-gray-100 p-4">
                    <img src={book.cover} alt={book.title} />
                </div>
                <div className="font-bold text-xl py-2">{book.title}</div>
                <div className="text-gray-500">{book.pages} pages</div>
            </div>
        )
    })


    return(
        <div className=" p-14 h-screen">
             <div>
                <h1 className="py-12 text-7xl font-bold">Livres</h1>
                <button className="bg-green-400 p-2 rounded text-amber-50">Random</button>
                <div className="space-x-2">
                <a href="https://potterapi-fedeperin.vercel.app/fr" >Français</a>
                <a href="">Anglais</a>
                </div>
            </div>
            <div className="grid grid-cols-1">
                {livres}
            </div>
        </div>
    )
}