import React from 'react'
import swal from '@sweetalert/with-react'
 
const onPick = value => {
  swal("Thanks for your rating!", `You rated us ${value}/3`, "success")
}
 
const MoodButton = ({ rating, onClick }) => (
  <button 
    data-rating={rating}
    className="mood-btn" 
    onClick={() => onClick(rating)}
  />
)
 
swal({
  text: "Qual foi a sua experiencia do site",
  buttons: {
    cancel: "Cancelar",
  },
  content: (
    <div>
      <MoodButton 
        rating={1} 
        onClick={onPick}
      />
      <MoodButton 
        rating={2} 
        onClick={onPick}
      />
      <MoodButton 
        rating={3} 
        onClick={onPick}
      />
    </div>
  )
})


// esse site abaixo é de pesquisa //

swal({
    text: 'O que você gostaria de pesquisar"bee movie".',
    content: "input",
    button: {
      text: "Search!",
      closeModal: false,
    },
  })
  .then(name => {
    if (!name) throw null;
   
    return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
  })
  .then(results => {
    return results.json();
  })
  .then(json => {
    const movie = json.results[0];
   
    if (!movie) {
      return swal("Infelizmente não encontramos no nosso banco de dados(SQL)!");
    }
   
    const name = movie.trackName;
    const imageURL = movie.artworkUrl100;
   
    swal({
      title: "Resultado:",
      text: name,
      icon: imageURL,
    });
  })
  .catch(err => {
    if (err) {
      swal("Oh noes!", "The AJAX request failed!", "error");
    } else {
      swal.stopLoading();
      swal.close();
    }
  });