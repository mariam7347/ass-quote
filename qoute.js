var quotes=[
  `  “Be yourself; everyone else is already taken.”
― Oscar Wilde`,
`“So many books, so little time.”
― Frank Zappa`,
`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`,
`“A room without books is like a body without a soul.”
― Marcus Tullius Cicero`,
`
“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
― Bernard M. Baruch`,

]

function getQuote(){
    var random= Math.floor(Math.random() * quotes.length)
    document.getElementById('paraQuote').innerHTML= quotes[random]
}
