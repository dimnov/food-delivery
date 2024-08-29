import "./AddItem.css";
import Spinner from "../../components/Spinner";
import useAddItem from "../../hooks/useAddItem";
import AddItemForm from "./AddItemForm";
import useGetCategories from "../../hooks/useGetCategories";

function AddItem() {
  const { addItem } = useAddItem();
  const { isPending, categories } = useGetCategories();

  return (
    <section className="section-add-item">
      {isPending ? (
        <Spinner size="large" />
      ) : (
        <AddItemForm categories={categories} addItem={addItem} />
      )}
    </section>
  );
}

export default AddItem;
