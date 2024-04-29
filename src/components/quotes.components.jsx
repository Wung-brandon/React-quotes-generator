import './quotes.components.css'
import { quotes } from './quotesFile'
import { useState } from 'react'


export default function Quotes(){
    const initialQuotes = {
        quote : quotes[0].quote,
        name : quotes[0].name
    }
    const [anyQuote, setQuote] = useState(initialQuotes)
    const [colors, setColor] = useState("purple")

    function getColors(){
        const list_colors = ["gold", "blue", "red", "slate gray", "peru", "chocolate", "cyan", "violet", "indigo", "orange", "gold", "#76b5c5", 
    "#873e23", "#063970", "#b99e81", "#ffe894", "#82977e", "#777696", "#464547", "#282828", "37006d"]
        // const str = '0123456789abcdef'
        // let coloring = ''
        // for (let i = 0; i < 6; i++){
        //     let index = Math.floor(Math.random() * str.length)
        //     coloring += index
        // }
        // let randomC = "#" + coloring
        // console.log(randomC)

        const randomColors = Math.floor(Math.random() * list_colors.length)
        const changeColor = list_colors[randomColors]
        document.querySelector(".quote").style.color = colors
        document.querySelector(".author").style.color = colors
        document.querySelector(".next").style.backgroundColor = colors
        document.body.style.backgroundColor = colors
        document.body.style.transition = "1s all ease"
        setColor(changeColor)

    }

    // const api_url = "https://zenquotes.io/api/quotes/"
    function getQuote(){
        getColors()

        // async function apiQuote(url){
        //     try{
        //         const response = await fetch(url)
        //         const data = await response.json()
        //         console.log(data)
        //     }
        //     catch (e){
        //         console.log("error", e)
        //     }


        // }
        // apiQuote(api_url)

        // console.log(quotes.length)
        const randomQuote = Math.floor(Math.random() * quotes.length)
        // console.log(randomQuote)
        const numQuote = quotes[randomQuote]
        setQuote(numQuote)
    }



    return(
        
        
        <div>
            <div className='qoute-box'>
                <h3 className='quote'>{anyQuote.quote}</h3>
                <p className='author'>{anyQuote.name}</p>

                <button onClick={getQuote} className='next'>Next Quote</button>

            </div>
        </div>
    )
}