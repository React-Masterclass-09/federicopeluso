import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

export default function Layout(){
    return (
        <>
            <Navbar />
            <div className="container-fluid " >
                <div className="row">
                    <div className="col-12 col-md-2 px-0">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-md-10 py-4 /*py-4 per staccare la colonna padding y */"> 
                        <Outlet />
                    </div>
                </div>
            </div>
            
        </>
    )
} ;