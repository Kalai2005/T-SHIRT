import "./NewArrivals.css";
import tshirt1 from "../../assets/images/tshirt1.png";
import hoodie1 from "../../assets/images/hoddie1.jpg";
import tshirt2 from "../../assets/images/tshirt2.jpg";

const newArrivals = [
  {
    id: 1,
    title: "New Arrival",
    subtitle: "Street Style T-Shirt",
    image: tshirt1,
    btn: "Just Dropped",
  },
  {
    id: 2,
    title: "New Arrival",
    subtitle: "Classic Hoodie",
    image: hoodie1,
    btn: "Just Dropped",
  },
  {
    id: 3,
    title: "New Arrival",
    subtitle: "Classic Cotton T-Shirt",
    image: tshirt2,
    btn: "Just Dropped",
  },
];

const NewArrivals = () => {
  return (
    <section className="new-arrivals">
      <div className="container">
        <h2>New Arrivals</h2>

        <div className="arrival-cards">
          {newArrivals.map((item) => (
            <div className="new-arrival-box" key={item.id}>
              <div className="badge">NEW</div>

              <img src={item.image} alt={item.subtitle} />

              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>

              <button className="arrival-btn">Just Dropped</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
