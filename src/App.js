import React,{useState, useEffect} from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
let quoteDBurl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() { 
  const [quote, setQuote] = useState("Random Quote Machine")
  const [author, setAuthor] = useState("Nat")
  const [, setRandomNumber] = useState(0)
  const [quotesArray, setQuotesArray] = useState(null)
  const [accentColor, setaccentColor] = useState('#16a085')
  const [opacity, setOpacity] = useState(false);
  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
  }

  useEffect(() => {
    fetchQuotes(quoteDBurl)
  })

  const getRandomQuote = () => {
    let randomInteger = Math.floor(quotesArray.length*Math.random())
    let randomInteger2 = Math.floor(colors.length*Math.random())
    setRandomNumber(randomInteger);
    setOpacity(false);
    setaccentColor(colors[randomInteger2]);
    setTimeout(() => {
      setOpacity(true);
      setQuote(quotesArray[randomInteger].quote);
      setAuthor(quotesArray[randomInteger].author);
    }, 500);
  }
  
  
  var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor:accentColor}}>
        <div id="quote-box" style={{color:accentColor}}>        
        <p id="text" className={opacity ? "show" : "hide"}>
        <FontAwesomeIcon icon={ faQuoteLeft } /> {quote}
        </p>
        <p id="author" className={opacity ? "show" : "hide"}>- {author}</p>
        <div className='button'>
        <a id="tweet-quote" style={{backgroundColor:accentColor}} href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -${author}`)}><FontAwesomeIcon icon={faTwitter}/></a>
        <button id="new-quote" style={{backgroundColor: accentColor, color:'white'}} onClick={() => getRandomQuote()}>New quote</button>        
        </div>
        </div>
      </header>
    </div>
  );
} 

export default App;