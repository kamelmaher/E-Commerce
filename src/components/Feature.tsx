import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
type FeatureProps = {
    text: string,
    desc: string
}
function Feature({text , desc}:FeatureProps) {
    return (
        <div className="col-md-3">
            <div className="feature text-center text-success mb-4">
                <FontAwesomeIcon className="fs-3 mb-3" icon={faTruckFast} />
                <h3>{text}</h3>
                <p className="lh-lg">{desc}</p>
            </div>
        </div>
    )
}

export default Feature
