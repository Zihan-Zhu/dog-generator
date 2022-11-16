import { useEffect, useState } from "react";
import axios from "axios";

function Media() {
  const url = "https://random.dog/woof.json";
  const [dog, setDog] = useState(null);

  // fetch data from the url
  useEffect(() => {
    axios.get(url).then((response) => {
      setDog(response.data);
    });
  }, [url]);

  // check whether the url includes an image or not
  function isImgUrl(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif)$/.test(url);
  }

  // check there is a value in dog
  if (dog) {
    if (isImgUrl(dog.url)) {
      return <img src={dog.url} width="300" height="300" />;
    }
    return <video src={dog.url} width="300" height="300" autoPlay loop />;
  }
  return <div></div>
}
export default Media;
