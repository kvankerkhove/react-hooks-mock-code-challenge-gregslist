import React, { useState } from "react";

function ListingCard({listing, onHandleDelete }) {
  const [isFavorited, setIsFavorited] = useState(true)
  const {id, description, image, location} = listing

  const handleClick = (e) => {
    setIsFavorited(!isFavorited)
  }

  const handleDelete = (e) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => onHandleDelete(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
