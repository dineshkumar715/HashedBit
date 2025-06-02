const Confirmation = ({ details }) => {
  return (
    <div className="mt-4 border p-4 rounded bg-green-100 max-w-sm">
      <h2 className="text-lg font-semibold mb-2">Booking Confirmed!</h2>
      <p>
        <strong>Booking ID:</strong> {details.bookingId}
      </p>
      <p>
        <strong>Movie:</strong> {details.movie}
      </p>
      <p>
        <strong>Name:</strong> {details.name}
      </p>
      <p>
        <strong>Email:</strong> {details.email}
      </p>
      <p>
        <strong>Mobile:</strong> {details.mobile}
      </p>
    </div>
  );
};

export default Confirmation;
