import { categories } from "../data";
import "../styles/Categories.scss"
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <h1 style={{letterSpacing: "3px" , marginTop: "-120px" , marginBottom: "-100px" , color: "rgb(248, 105, 53)"}}>Our Top Property List</h1>
      <p style={{letterSpacing: "2px" , lineHeight: "35px" , fontSize: "16px"}}>
      Welcome to your one-stop destination for home bookings. Explore luxurious villas, cozy cottages, and everything in between. Plan your next escape with ease – our user-friendly platform makes finding and booking your dream home a breeze.
      </p>

      <div className="categories_list">
        {categories?.slice(1, 7).map((category, index) => (
          <Link to={`/properties/category/${category.label}`}>
            <div className="category" key={index}>
              <img src={category.img} alt={category.label} />
              <div className="overlay"></div>
              <div className="category_text">
                <div className="category_text_icon" style={{color: "orange"}}>{category.icon}</div>
                <p style={{letterSpacing: "2px" , color: "orange"}}>{category.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
