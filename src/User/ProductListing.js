import Card from "./Card"

const ProductListing = (props) => {

    const itemList = props.productList;

    return(
        <div className="horizontal-list">
            <div className="container d-flex flex-row pb-4">
                {itemList.map(item => (
                    <Card product={item} key={item._id} />
                ))}
            </div>
        </div>
    );
}

export default ProductListing;

/* 
<!--Card-->
                <div class="card-container m-2" id="<%= newArrivals[i].productId %>" onclick="viewDetail(this)">
                    <div class="card p-2 shadow">
                        <img class="card-img-top" src='data:<%=newArrivals[i].mimeType%>;base64,<%=newArrivals[i].base64%>' alt="ProductIMG" />
                        <div class="card-body">
                            <h5 class="card-title"> <%= newArrivals[i].productPrice %> VND</h5>
                            <p class="card-text"> <%= newArrivals[i].productName %></p>
                        </div>
                        <!--Overlay-->
                        <div class="overlay">
                            <span class="overlay-text">View details</span>
                        </div>
                    </div>
                </div>
*/