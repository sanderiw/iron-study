import Card from "./Card";

function StudentFeed({ cards }) {
  return cards.map((card) => {
    return (
      <Card
        key={card._id}
        id={card._id}
        edited={card.edited}
        url={card.url}
        author={card.author}
        text={card.text}
        tag={card.tag}
        createdTime={card.createdTime}
      />
    );
  });
}

export default StudentFeed;
