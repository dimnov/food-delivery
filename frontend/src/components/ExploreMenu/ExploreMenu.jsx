import useGetCategories from "../../hooks/useGetCategories";
import "./ExploreMenu.css";

function ExploreMenu({ category, setCategory }) {
  const { categories } = useGetCategories();

  const setCategoryHandler = (itemMenuName) => {
    setCategory((prev) => (prev === itemMenuName ? "all" : itemMenuName));
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore out menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy
        your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {categories.map((cat, index) => {
          return (
            <div
              key={index}
              className="explore-menu-list-item"
              onClick={() => setCategoryHandler(cat.name)}
            >
              <img
                className={category === cat.name ? "active" : ""}
                src={cat.image_url}
                alt="food menu image"
              />
              <p>{cat.name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
