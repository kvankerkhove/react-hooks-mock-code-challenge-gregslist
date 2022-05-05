import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [filteredListings, setFilteredListings] = useState(listings)

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(listings => setListings(listings))
  }, [])

  const onHandleDelete = (id) => {
    const updatedListings = listings.filter(listing => listing.id !== id)
    setListings(updatedListings)
  }

  const handleSearchSubmit = (searchInfo) => {
    const filteredListings = listings.filter(listing => listing.description.toLowerCase().includes(searchInfo.toLowerCase()))
    setFilteredListings(filteredListings)
  }


  return (
    <div className="app">
      <Header handleSearchSubmit={handleSearchSubmit}/>
      <ListingsContainer listings={filteredListings} onHandleDelete={onHandleDelete} />
    </div>
  );
}

export default App;

