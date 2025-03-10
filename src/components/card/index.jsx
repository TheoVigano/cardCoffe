import { ShoppingCart } from "lucide-react";
import { Descricao } from "../descricao";
import { Categoria } from "../tagCategoria";
import { Titulo } from "../tituloProduto";
import { useState } from "react";

export function Card({ coffeImg, category, title, description }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <img src={coffeImg} alt="" />
      <Categoria categoria={category} />
      <Titulo titulo={title} />
      <Descricao descricao={description} />

      <div id="preco">
        <strong> R$ 9,90 </strong>
      </div>

      <div id="button">
        <button onClick={() => setCount(count - 1)}>-</button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <div>
        <button type="button" ><ShoppingCart size={16}/></button>
      </div>
    </div>
  );
}
