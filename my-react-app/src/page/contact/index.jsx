import PopupLogin from '../../component/PopupLogin'
import React, { useState } from 'react'
export default function Contact() {


    // let [name, setName] = useState('')
    // let [phone, setPhone] = useState('')
    // let [email, setEmail] = useState('')
    // let [name, setName] = useState('')
    let [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        website: '',
        title: '',
        content: ''
    })

    let [error, setError] = useState({
        name: '',
        phone: '',
        email: '',
        website: '',
        title: '',
        content: ''
    })
    function onSubmit() {
        // form.name.trim().replace(/ +/g, ' ')
        let objTemp = {}
        let errorObj = {}
        if (!form.name.trim()) {
            errorObj.name = "Name bắt buộc"

        }

        if (!form.phone.trim()) {
            errorObj.phone = "Phone bắt buộc"

        }
        if (!/(\+84|0)+(3[2-9]|5[6|8|9]|9\d(?!5)|8[1-9]|7[0|6-9])+([0-9]{7})\b/.test(form.phone)) {
            errorObj.phone = "Phone không đúng định dạng"


        }
        if (!form.email.trim()) {
            errorObj.email = "Email bắt buộc"

        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
            errorObj.email = "Email không đúng định dạng"


        }


        if (form.website.trim() && !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(form.website.trim())) {
            errorObj.website = "Website không đúng định dạng"


        }

        if (!form.title.trim()) {
            errorObj.title = "Title bắt buộc"

        }
        if (!form.content.trim()) {
            errorObj.content = "Content bắt buộc"

        }
        if (Object.keys(errorObj).length === 0) {
            console.log(form)
        } else {
            setError(errorObj)
        }

    }

    function inputOnChange(e) {
        let name = e.target.name
        let value = e.target.value

        setForm({
            ...form,
            [name]: value
        })

    }

    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">
                {/* <div class="main-sub-title">liên hệ</div> */}
                <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
                <p className="top-des">
                    Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
            việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
          </p>
                <div className="form">
                    <label>
                        <p>Họ và tên<span>*</span></p>
                        <input value={form.name} name='name' onChange={inputOnChange} type="text" placeholder="Họ và tên bạn" />
                        {
                            error.name && <p className="error-text">{error.name} </p>
                        }
                    </label>
                    <label>
                        <p>Số điện thoại</p>
                        <input value={form.phone} name='phone' onChange={inputOnChange} type="text" placeholder="Số điện thoại" />
                        {
                            error.phone && <p className="error-text">{error.phone} </p>
                        }
                    </label>
                    <label>
                        <p>Email<span>*</span></p>
                        <input value={form.email} name='email' onChange={inputOnChange} type="text" placeholder="Email của bạn" />
                        {
                            error.email && <p className="error-text">{error.email} </p>
                        }
                    </label>
                    <label>
                        <p>Website</p>
                        <input value={form.website} name='website' onChange={inputOnChange} type="text" placeholder="Đường dẫn website http://" />
                        {
                            error.website && <p className="error-text">{error.website} </p>
                        }
                    </label>
                    <label>
                        <p>Tiêu đề<span>*</span></p>
                        <input value={form.title} name='title' onChange={inputOnChange} type="text" placeholder="Tiêu đề liên hệ" />
                        {
                            error.title && <p className="error-text">{error.title} </p>
                        }
                    </label>
                    <label>
                        <p>Nội dung<span>*</span></p>
                        <textarea value={form.content} name='content' onChange={inputOnChange} id cols={30} rows={10} defaultValue={""} />
                        {
                            error.content && <p className="error-text">{error.content} </p>
                        }
                    </label>
                    <div className="btn main rect" onClick={onSubmit} >đăng ký</div>
                </div>
            </section>
            {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
        </main>
    )
}