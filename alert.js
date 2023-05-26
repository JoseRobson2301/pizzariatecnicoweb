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