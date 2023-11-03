import { useState, useEffect } from "react";
import Color from "./Color";

const API = import.meta.env.VITE_API_URL;

function Colors() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API}/colors`)
          .then((response) => response.json())
          .then(response => {
            setColors(response)
          })
      } catch (error) {

        return (error);
      }
    }
    fetchData()
  }, [])



  return (
    <div className="Colors">
      <section>
        <table>
          <thead>
            <tr>
              <th>Favorite</th>
              <th>See this color</th>
              <th>Swatch</th>
            </tr>
          </thead>
          <tbody>
            {colors.map((color, index) => {
              return <Color key={color.id} color={color} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Colors;
