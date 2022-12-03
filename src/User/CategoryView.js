import { useParams } from "react-router-dom";

const CategoryView = () => {

    const { category } = useParams()

    return(
        <div>View all products from: {category}</div>
    );
}

export default CategoryView;