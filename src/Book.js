const Book = ({ image, author, title, id }) => {
  return (
    <article className="book">
      <span className="number">{`#${id}`}</span>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h5>{author.toUpperCase()}</h5>
    </article>
  );
};

export default Book;
