// import { CourseItem } from "../../component";
// import { CourseItem } from "../../component";
import { useEffect, useState } from "react";
import CourseApi from "../../service/course";
import Banner from "./component/Banner";
import CourseList from "./component/CourseList";
import Different from "./component/Different";
import Gallery from "./component/Gallery";
import Testimonial from "./component/Testimonial";
export default function Home() {

    let [list, setList] = useState({
        offline: [],
        online: []
    })
    useEffect(async () => {
        let res = await CourseApi.list()
        setList(res)
    }, [])

    return (<main className="homepage" id="main">
        <Banner />
        <CourseList {...list} />
        <Different />
        <Testimonial />
        <Gallery />

        <section className="section-action">
            <div className="container">
                <h3>Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?</h3>
                <div className="btn main round bg-white">Đăng ký</div>
            </div>
        </section>
    </main>)
}