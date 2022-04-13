import React from "react";
import Featured from "../components/Featured"
import BestSellers from "../components/BestSellers"
import Navbar  from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/app.css'


export default function Home(){
    // const [itemData, setItemData] = useState(null)

    // useEffect( () =>{
    //     fetch("/featured")
    //     .then(response => response.json())
    //     .then(data => setItemData(data))
    // }, []);

    return (
        <div>
            <Navbar />
            <div className="content">
                <div id="grid-container">
                    <section>
                        
                        <Featured img={'images/limited_time_banner.png'}/>
                    </section>
                    <section>
                        {/* <Featured img={'images/be_like_the_champions_banner.png'}/> */}
                    </section>
                    <section>
                        <BestSellers/>
                    </section>
                </div>
            </div>
            <Footer/>
        </div>
    )
}





