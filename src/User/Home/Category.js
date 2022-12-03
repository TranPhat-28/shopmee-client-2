import { Link } from "react-router-dom";

const Category = () => {

    const categoryList = [
        { name: "electronics", icon: "fas fa-tv" },
        { name: "healthcares", icon: "fas fa-heartbeat" },
        { name: "lifestyles", icon: "fas fa-couch" },
        { name: "clothings", icon: "fas fa-tshirt" },
        { name: "tools", icon: "fas fa-tools" },
        { name: "accessories", icon: "fas fa-ring" },
        { name: "shoes", icon: "fas fa-shoe-prints" },
        { name: "cosmetics", icon: "fas fa-hand-sparkles" },
    ];

    return(
        <div className="container mt-4" id="category-container">

            <h3 className="text-center" id="title">Category</h3>

            <div className="row d-flex justify-content-center">
            {categoryList.map(item => (
                <Link className="col-2 d-flex justify-content-center align-items-center flex-column category-item m-1 p-2" to={"/category/" + item.name} key={item.name}>
                    <i className={"responsive-icon " + item.icon}></i>
                    <span className="responsive-text">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
                </Link>
            ))}
            </div>
        </div>
    )

    /*
    return (
        <div className="container" id="category-container">
            <div className="row d-flex justify-content-center">
                <div id="Electronics" className="col-2 d-flex justify-content-center align-items-center flex-column category-item m-1 p-2" onclick="filterCategory(this.id)">
                    <i className="fas fa-tv responsive-icon"></i>
                    <span className="responsive-text">Electronics</span>
                </div>
                <div id="Healthcares" className="col-2 d-flex justify-content-center align-items-center flex-column category-item m-1 p-2" onclick="filterCategory(this.id)">
                    <i className="fas fa-heartbeat responsive-icon"></i>
                    <span className="responsive-text">Healthcares</span>
                </div>
                <div id="Lifestyles" className="col-2 d-flex justify-content-center align-items-center flex-column category-item m-1 p-2" onclick="filterCategory(this.id)">
                    <i className="fas fa-couch responsive-icon"></i>
                    <span className="responsive-text">Lifestyles</span>
                </div>
                <div id="Clothings" className="col-2 d-flex justify-content-center align-items-center flex-column category-item m-1 p-2" onclick="filterCategory(this.id)">
                    <i className="fas fa-tshirt responsive-icon"></i>
                    <span className="responsive-text">Clothings</span>
                </div>
                <div id="Cosmetics" className="col-2 d-flex justify-content-center align-items-center flex-column category-item m-1 p-2" onclick="filterCategory(this.id)">
                    <i className="fas fa-hand-sparkles responsive-icon"></i>
                    <span className="responsive-text">Cosmetics</span>
                </div>
            </div>
        </div>
    );
    */
}

export default Category;