import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onHandleDelete }) {
  const renderListings = listings.map(listing => {
    return <ListingCard key={listing.id} listing={listing} onHandleDelete={onHandleDelete}/>
  })
  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
