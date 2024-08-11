import { useEffect } from "react";
import { useState } from "react";

export const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = async (getUrl) => {
    try {
      setIsLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      console.log(data);
      if (data) {
        setData(data.products);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  console.log(data, isLoading);

  return (
    <div className="scroll-indicator-container">
      <h1>Custom Scroll Indicator</h1>
      <div className="data-container">
        {data &&
          data.length > 0 &&
          data.map((dataItem) => <p>{dataItem.title}</p>)}
      </div>
    </div>
  );
};
