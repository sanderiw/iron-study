import Card from "../Card/Card";

function StudentFeed({ cards }) {
  return cards.map((card) => {
    return (
      <div className="container mt-2 mb-2 d-flex flex-column justify-content-center align-items-center">
      <Card
        card={card}
        key={card._id}
      />
      </div>
    );
  });
}

export default StudentFeed;
