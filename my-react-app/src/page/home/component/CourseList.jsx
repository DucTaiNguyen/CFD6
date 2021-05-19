import React from "react";
import { CourseItem } from "../../../component";

import { useState, useEffect } from "react";
import CourseApi from "../../../service/course"
export default function CourseList() {

    let [list, setList] = useState({
        offline: [],
        online: []
    })
    useEffect(async () => {
        let res = await CourseApi.list()
        if (res) {

            setList({
                ...list,
                online: res.online,
                offline: res.offline
            })
        }
    }, [])
    console.log("nguyenan", list)
    return (
        <React.Fragment>
            <section className="section-courseoffline">
                <div className="container">
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
                 </p>
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Offline</h2>
                    </div>
                    <div className="list row">
                        {
                            list.offline?.map((value, i) => <CourseItem
                                key={value.slug}

                                {...value}
                            />)
                        }
                    </div>
                </div>
            </section>
            <section className="section-courseonline section-blue">
                <div className="container">
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Online</h2>
                    </div>
                    <div className="list row">
                        {
                            list.online?.map((value, i) => <CourseItem
                                key={value.slug}

                                {...value}
                            />)

                        }


                    </div>
                    <div className="text-deco">C</div>
                </div>
            </section>
        </React.Fragment>
    )
}