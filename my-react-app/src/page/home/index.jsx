// import { CourseItem } from "../../component";
// import { CourseItem } from "../../component";
import Banner from "./component/Banner";
import CourseList from "./component/CourseList";
import Different from "./component/Different";
import Gallery from "./component/Gallery";
import Testimonial from "./component/Testimonial";
export default function Home() {
    return (<main className="homepage" id="main">
        <Banner></Banner>
        <CourseList></CourseList>
        <Different></Different>
        <Testimonial></Testimonial>
        <Gallery></Gallery>

        <section className="section-action">
            <div className="container">
                <h3>Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?</h3>
                <div className="btn main round bg-white">Đăng ký</div>
            </div>
        </section>
    </main>)
}