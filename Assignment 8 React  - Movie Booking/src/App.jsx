import { useState } from "react";
import MovieList from "./components/MovieList";
import BookingForm from "./components/BookingForm";
import Confirmation from "./components/Confirmation";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  return (
    <div className="p-4">
      {!selectedMovie && (
        <MovieList onMovieClick={(movie) => setSelectedMovie(movie)} />
      )}
      {selectedMovie && !bookingDetails && (
        <BookingForm
          movie={selectedMovie}
          onBook={(details) => setBookingDetails(details)}
        />
      )}
      {bookingDetails && <Confirmation details={bookingDetails} />}
      {selectedMovie && !bookingDetails && (
        <button
          onClick={() => setSelectedMovie(null)}
          className="mt-4 text-blue-500 underline"
        >
          Back to Movies
        </button>
      )}
    </div>
  );
}

export default App;
