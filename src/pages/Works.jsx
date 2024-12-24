import Header from "../components/Header";
// import Footer from "../components/Footer"; 
import Works from "../components/works/works";
import ProjectsImgs from "../components/works/ProjectsImgs";
import "../index.css";

export default function Home() {
    return (
        <>
        <div className="App">
            <Header/>
            <Works/>
            <ProjectsImgs/>
        </div>
            {/* <Footer/> */}
        </>
    );
}