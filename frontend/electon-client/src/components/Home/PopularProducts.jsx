import "../../styles/components/popularProducts.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { PRODUCTS } from "../../data/products";
import { CATEGORIES } from "../../data/categories";
import { RiShoppingCart2Line } from "react-icons/ri";

export const PopularProducts = () => {
  const location = useLocation();
  const [currentCategory, setCurrentCategory] = useState("all");
  const [products, setProducts] = useState(PRODUCTS);
  const [categories, setCategories] = useState(CATEGORIES);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    if (!searchParams.has("category")) setCurrentCategory("all");
    else setCurrentCategory(searchParams.get("category"));
  }, [location]);

  return (
    <div className="popular-products container">
      <div className="popularHead d-flex">
        <h3>Popular Products</h3>
        <div className="categories">
          {categories.map((category, index) => {
            return (
              <CategoryItem
                key={`categoryItem-${index}`}
                category={category}
                currentCategory={currentCategory}
              />
            );
          })}
        </div>
      </div>
      <div className="products">
        {products.map((product, index) => {
          return <ProductItem key={`productItem-${index}`} product={product} />;
        })}
      </div>
    </div>
  );
};

const CategoryItem = ({ category, currentCategory }) => {
  return (
    <Link
      to={category.link}
      className={`categoryItem primary-color ${
        currentCategory === category.title.toLowerCase() ? "active" : ""
      }`}
    >
      {category.title}
    </Link>
  );
};

const ProductItem = ({ product }) => {
  return (
    <div className="productItem">
      <div className="picture">
        <img
          src={`./images/png/products/${product.imageUrl}`}
          alt={product.title}
        />
      </div>
      <div className="info">
        <div className="content">
          <Link to="#" className="primary-color">
            {product.title}
          </Link>
          <p>{product.brand}</p>
          <h4>${product.price}</h4>
        </div>
        <div className="add-cart-btn">
          <RiShoppingCart2Line />
        </div>
      </div>
    </div>
  );
};
