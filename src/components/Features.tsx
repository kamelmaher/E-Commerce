import Feature from "./Feature"

function Features() {
    return (
        <div className="mt-5 pt-5 mb-5">
            <div className="container">
                <h2 className="title text-primary">
                    Features
                </h2>
                <div className="row justify-content-between mt-5 pt-5 pb-5">
                    <Feature text="Free Shipping" desc="FREE SHIPPING onorders over $45"/>
                    <Feature text="Easy Returns" desc="Return the product anytimewithin 30 days"/>
                    <Feature text="B-Corp Certified" desc="Supporting the communitieswhere we live, work and play."/>
                </div>
            </div>
        </div>
    )
}

export default Features
