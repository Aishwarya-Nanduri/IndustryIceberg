import { useParams } from "react-router-dom";

import { products, services } from "../data/cardsData";

import "../styles/CardDetails.scss";

export default function CardDetails() {
  const { slug } = useParams();

  const allCards = [...products, ...services];

  const slugify = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");

  const card = allCards.find(
    (item) => slugify(item.title) === slug
  );

  if (!card) {
    return (
      <div className="card-details-page">
        <h1>Card not found</h1>
        <p>Check your URL or slug matching logic.</p>
      </div>
    );
  }

  return (
    <div className="card-details-page">

      <div className="card-details-container">

        <div className="details-header">

          <span className={`details-pill ${card.side.toLowerCase()}`}>
            {card.side}
          </span>

          <h1 className="details-title">
            {card.title}
          </h1>

          <p className="details-description">
            {card.desc}
          </p>

        </div>

        <div className="details-content">

          {typeof card.content === "string" && card.content && (
            <p>{card.content}</p>
          )}

          {typeof card.content === "object" && card.content && (
            <>
              {card.content.heading && <h2>{card.content.heading}</h2>}
              {card.content.intro && <p>{card.content.intro}</p>}

              {card.content.sections?.map((sec, i) => (
                <div key={i} className="content-section">
                  <h3>{sec.title}</h3>
                  <p>{sec.text}</p>
                </div>
              ))}
            </>
          )}

        </div>

      </div>

    </div>
  );
}