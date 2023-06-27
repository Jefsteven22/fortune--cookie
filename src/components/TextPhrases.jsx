function TextPhrases( { phrases }) {
   
  return (
    <article className="container__phrases">
      <p className="phrase">{phrases.phrase}</p>
      <p className="author">Att: {phrases.author}</p>
    </article>
  )
}

export default TextPhrases