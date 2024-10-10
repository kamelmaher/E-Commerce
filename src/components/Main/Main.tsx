/** @format */

import maiImage from "../../img/mainImg.jpg";
function Main() {
    return (
        <div className="main">
            <div className="container">
                <div className="row ">
                    <div className="col-md-6 pt-5 mt-5">
                        <h1>
                            Feel Free To Shop <br /> From
                            <p className="d-inline text-primary fw-bold"> Our Store</p>
                        </h1>
                        <p className="lh-sm mt-3 mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
                            accusamus expedita. Repellendus enim cumque nostrum beatae animi.
                            Dolor hic excepturi, vero optio et similique officiis quasi
                            distinctio facilis repellendus enim.
                        </p>
                        <button className="btn btn-primary me-3">Shop Now</button>
                        <button className="btn btn-primary">Our Products</button>
                    </div>
                    <div className="col-md-6 mt-5">
                        <img src={maiImage} alt=""className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
