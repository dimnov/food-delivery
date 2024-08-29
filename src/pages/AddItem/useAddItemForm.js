import { useState } from "react";
import { uploadImage } from "../../services/apiItems";

function useAddItemForm(addItem) {
  const [image, setImage] = useState(false);
  const [itemData, setItemData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setItemData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      let imageUrl = "";

      if (image) {
        imageUrl = await uploadImage(image);
      }

      addItem({ ...itemData, imageUrl });

      setItemData({
        name: "",
        description: "",
        category: "",
        price: "",
      });
      setImage(false);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    image,
    itemData,
    isLoading,
    onChangeHandler,
    onSubmitHandler,
    setImage,
  };
}

export default useAddItemForm;
