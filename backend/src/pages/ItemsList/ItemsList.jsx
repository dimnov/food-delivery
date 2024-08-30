import { useState } from "react";
import Spinner from "../../components/Spinner";
import useItems from "../../hooks/useGetItems";
import useRemoveItem from "../../hooks/useRemoveItem";
import "./ItemsList.css";
import ConfirmModal from "./ConfirmModal";

function ItemsList() {
  const { items, isPending, error, count } = useItems();
  const { removeItem } = useRemoveItem();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(null);

  const removeItemHandler = (itemId) => {
    setCurrentItemId(itemId);
    setIsModalOpen(true);
  };

  const handleConfirmRemove = (itemId) => {
    removeItem(itemId);
    setIsModalOpen(false);
  };

  const handleCancelRemove = () => {
    setIsModalOpen(false);
    setCurrentItemId(null);
  };

  if (isPending) return <Spinner size="big" />;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="section-items-list">
      <h2>All Items List ({count})</h2>

      <table className="list-table">
        <thead>
          <tr className="table-header">
            <th className="image-column">Image</th>
            <th>Name</th>
            <th className="category-column">Category</th>
            <th className="price-column">Price</th>
            <th className="action-column">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="table-row">
              <td className="table-cell image-cell">
                <img src={item.image_url} alt={item.name} className="item-image" />
              </td>
              <td className="table-cell">{item.name}</td>
              <td className="table-cell">{item.category}</td>
              <td className="table-cell price-cell">${item.price}</td>
              <td className="table-cell action-cell">
                <ion-icon
                  onClick={() => removeItemHandler(item.id)}
                  name="close-outline"
                ></ion-icon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ConfirmModal
        isOpen={isModalOpen}
        onConfirm={handleConfirmRemove}
        onCancel={handleCancelRemove}
        itemId={currentItemId}
      />
    </section>
  );
}

export default ItemsList;
