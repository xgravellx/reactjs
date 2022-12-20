import { useEffect, useState } from "react";
import { Styled } from "./Main.styled";
import Loader from "../Loader/Loader";
import axios from "axios";
import SearchArea from "../SearchArea/SearchArea";
import Emoji from "../Emoji/Emoji";

const Main = () => {
  const [emoji, setEmoji] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios("https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28")
      .then((res) => setEmoji(res.data))
      .finally(setLoading(false));
  }, []);

  const handleSearchEmojis = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Styled>
      {loading && <Loader />}

      <SearchArea 
        onChange={handleSearchEmojis} 
        value={search} 
      />

      {emoji.length > 0 && <Emoji emojisData={emoji} searchText={search} />}

    </Styled>
  );
};

export default Main;
