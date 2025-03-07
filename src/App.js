import { useState } from "react";
import { sculptureList } from "./data.js";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  function handlePrevious() {
    if (hasPrev) setIndex(index - 1);
  }

  function handleNext() {
    if (hasNext) setIndex(index + 1);
  }

  function handleMore() {
    setShowMore(!showMore);
  }

  return (
    <>
      <button onClick={handlePrevious} disabled={!hasPrev}>
        Previous
      </button>
      <button onClick={handleNext} disabled={!hasNext}>
        Next
      </button>
      <h3>
        <i>{sculptureList[index].name}</i>
        by {sculptureList[index].artist}
      </h3>
      <i>
        ({index + 1}of{sculptureList.length})
      </i>
      <button onClick={handleMore}>{showMore ? "Hide" : "show"} details</button>
      {showMore && <p>{sculptureList[index].description}</p>}
      <img src={sculptureList[index].url} alt={sculptureList[index].alt} />
    </>
  );
}
