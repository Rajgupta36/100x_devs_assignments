import React, { useState, useEffect } from 'react';
import Card from './components/card';
import './App.css';

async function fetchData() {
  const response = await fetch("https://api.github.com/users/Rajgupta36");
  return response.json();
}

function App() {
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchDatavalue = async () => {
      const result = await fetchData();
      setData(result);
    }
    fetchDatavalue();
  }, []);
  console.log(data);
  if (!data) {
    return <div>Loading...</div>;
  }

  const obj1 = {
    img: data.avatar_url,
    name: data.name,
    id: data.id,
    bio: data.bio,
    repos: data.public_repos,
    gists: data.public_gists,
    following: data.following,
  };

  return (
    <>
      <Card props={obj1} />
    </>
  );
}

export default App;
