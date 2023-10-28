// create your App component here

import { useEffect, useState } from "react";

function App() {
  const [breedsData, setBreedsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((data) => {
        setBreedsData(data);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <img src={breedsData.message} alt="A Random Dog" />
    </div>
  );
}

export default App;
