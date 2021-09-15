import Card from "../Card/Card";

function StudentFeed({ cards }) {
  return cards.map((card) => {
    return (
      <Card
        card={card}
        key={card._id}
      />
    );
  });
}

export default StudentFeed;
