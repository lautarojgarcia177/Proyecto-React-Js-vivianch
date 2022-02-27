import { ItemDetail } from "./ItemDetail/ItemDetail";

export const ItemDetailContainer = ({ item }) => (
  <div className="card" style={{ width: "18rem" }}>
    <ItemDetail item={item} />
  </div>
);
