import Card from "../Card/Card"
import List from "../List/List"

export default function Header({title, subtitle, games}){
    
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="display-2">
                        {title}
                        <h1 className="lead /* la dimensione del testo */>">{subtitle}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}