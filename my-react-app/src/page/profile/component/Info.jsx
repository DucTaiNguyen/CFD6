import React from 'react'
import useFormValidate from '../../../hook/useFormValidate';

export default function Info() {
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
                required: true,

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
        <div className="tab1" style={{ display: 'block' }}>
            <label>
                <p>Họ và tên<span>*</span></p>
                {/* <input type="text" placeholder="Nguyễn Văn A" /> */}
                <input value={form.name} name='name' onChange={inputChange} type="text" placeholder="Họ và tên bạn" />
                {
                    error.name && <p className="error-text">{error.name} </p>
                }
            </label>
            <label>
                <p>Số điện thoại<span>*</span></p>
                {/* <input type="text" placeholder="0949******" /> */}
                <input value={form.phone} name='phone' onChange={inputChange} type="text" placeholder="Số điện thoại" />
                {
                    error.phone && <p className="error-text">{error.phone} </p>
                }
            </label>
            <label>
                <p>Email<span>*</span></p>
                {/* <input defaultValue="vuong.dang@dna.vn" disabled type="text" /> */}
                <input value={form.email} name='email' onChange={inputChange} type="text" placeholder="Email của bạn" />
                {
                    error.email && <p className="error-text">{error.email} </p>
                }
            </label>
            <label>
                <p>Facebook<span>*</span></p>
                {/* <input type="text" placeholder="Facebook url" /> */}
                <input value={form.fb} name='email' onChange={inputChange} type="text" placeholder="Facebook của bạn" />
                {
                    error.fb && <p className="error-text">{error.fb} </p>
                }
            </label>
            <label>
                <p>Skype<span>*</span></p>
                <input type="text" placeholder="Skype url" />
            </label>
            <div className="btn main rect" onClick={onSubmit}>LƯU LẠI</div>
        </div>
    )
}