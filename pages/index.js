import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : "default title"}</h1>;
}

export default function HomePage() {
  
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="The Layman" />
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
