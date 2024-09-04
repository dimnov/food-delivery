import Spinner from "../../components/Spinner";
import useAddItemForm from "./useAddItemForm";

function AddItemForm({ categories, addItem }) {
  const { image, itemData, isLoading, onChangeHandler, onSubmitHandler, setImage } =
    useAddItemForm(addItem);

  return (
    <form onSubmit={onSubmitHandler} className="flex-col">
      <div className="add-img-upload flex-col">
        <p>Upload image</p>
        <label htmlFor="image">
          {!image ? (
            <ion-icon name="cloud-upload-outline"></ion-icon>
          ) : (
            <img src={URL.createObjectURL(image)} alt="food image" />
          )}
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          name="image"
          id="image"
          hidden
          required
        />
      </div>
      <div className="add-product-name flex-col">
        <label htmlFor="name">Product name</label>
        <input
          onChange={onChangeHandler}
          value={itemData.name}
          type="text"
          name="name"
          id="name"
          placeholder="Pizza Margherita"
          required
        />
      </div>
      <div className="add-product-description flex-col">
        <label htmlFor="description">Product description</label>
        <textarea
          onChange={onChangeHandler}
          value={itemData.description}
          name="description"
          id="description"
          rows="6"
          placeholder="Fresh mozzarella, ripe tomatoes, basil, and a drizzle of olive oil."
          required
        ></textarea>
      </div>
      <div className="add-category-price">
        <div className="add-category flex-col">
          <label htmlFor="category">Product category</label>
          <select
            onChange={onChangeHandler}
            name="category"
            id="category"
            value={itemData.category}
            required
          >
            <option value="">Category</option>
            {categories.map((category) => (
              <option className="add-category-item" key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="add-price flex-col">
          <label htmlFor="price">Product price</label>
          <input
            onChange={onChangeHandler}
            value={itemData.price}
            type="number"
            name="price"
            id="price"
            placeholder="14.95"
            required
          />
        </div>
      </div>
      <button type="submit" className="add-btn">
        {!isLoading ? "Add Item" : <Spinner size="small" />}
      </button>
    </form>
  );
}

export default AddItemForm;
