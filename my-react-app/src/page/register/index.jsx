import useFormValidate from '../../hook/useFormValidate'

export default function Register() {


    let { form, error, inputChange, check } = useFormValidate({
        name: '',
        phone: '',
        email: '',
        fb: '',
        title: '',
        content: ''
    }, {
        rule: {
            name: {
                required: true
            },
            phone: {
                required: true,
                pattern: 'phone'
            },
            email: {
                required: true,
                pattern: 'email'
            },
            fb: {

                pattern: /^https?:\/\/www\.facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/i
            },
            title: {
                required: true,

            },
            content: {
                required: true,
                // pattern: 'content'
            }

        },
        message: {
            name: {
                required: "Họ và tên không được để trống"
            },
            phone: {
                required: 'Số điện thoại không được để trống',
                pattern: 'Phải là số điện thoại Việt Nam'

            },
            fb: {
                pattern: "Phải là link facebook"
            }
        }
    })


    function onSubmit() {
        let errorObj = check();
        if (Object.keys(errorObj).length === 0) {
            console.log(form)
        }

    }

    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">Thực chiến front-end căn bản </h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                        </div>
                        <div className="form">
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <input value={form.name} name='name' onChange={inputChange} type="text" placeholder="Họ và tên bạn" />
                                {
                                    error.name && <p className="error-text">{error.name} </p>
                                }
                            </label>
                            <label>
                                <p>Số điện thoại<span>*</span></p>
                                <input value={form.phone} name='phone' onChange={inputChange} type="text" placeholder="Số điện thoại" />
                                {
                                    error.phone && <p className="error-text">{error.phone} </p>
                                }
                            </label>
                            <label>
                                <p>Email<span>*</span></p>
                                <input value={form.email} name='email' onChange={inputChange} type="text" placeholder="Email của bạn" />
                                {
                                    error.email && <p className="error-text">{error.email} </p>
                                }
                            </label>
                            <label>
                                <p>URL Facebook<span>*</span></p>
                                <input value={form.fb} name='fb' onChange={inputChange} type="text" placeholder="https://facebook.com" />
                                {
                                    error.fb && <p className="error-text">{error.fb} </p>
                                }
                            </label>
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#">Chuyển khoản</a>
                                        <a href="#">Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            <label>
                                <p>Ý kiến cá nhân</p>
                                <input value={form.content} name='content' onChange={inputChange} type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                                {
                                    error.content && <p className="error-text">{error.content} </p>
                                }
                            </label>
                            <div className="btn main rect" onClick={onSubmit}>đăng ký</div>
                        </div>
                    </div>
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