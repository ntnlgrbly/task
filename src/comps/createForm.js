import React, { useRef, useState } from 'react'
import { useForm } from "react-hook-form"


function CreateForm({ addContact }) {
    const { register, formState: { errors } } = useForm();
    let [bg, setbg] = useState()
    let selectRef = useRef();

    const onChange = () => {
        setbg(selectRef.current.value)
    }

    const [contantInfo, setContactInfo] = useState({

        image1: "",
        image2: "",
        select: "",
        categoryName: "",
        title: "",
        SecendTitle: "",
        name: ""
    })
    const onSub = (bodyData) => {
        console.log(bodyData);

    }
    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        addContact(contantInfo);
        console.log(contantInfo);
        setContactInfo({ image1: "", image2: "", categoryName: "", title: "", name: "", select: "" });
    };

    const handleChange = (event) => {
        setContactInfo({ ...contantInfo, [event.target.name]: event.target.value });
    };
    return (
        <div className='container-fluid'>
            <form onSubmit={handleSubmit} className='shadow'>
                <h5>תמונות</h5>
                <div className='image'>
                    <input name='image1' type="text" className='input_btn' value={contantInfo.image1} onChange={handleChange} />
                    <button className='float-start btn_del'>מחק</button>

                </div>
                {/* <br /> */}
                <div className='image'>
                    <input name='image2' type="text" className='input_btn' value={contantInfo.image2} onChange={handleChange} />
                    <button className='float-start btn_del'>מחק</button>

                </div>
                <br />
                <button className='btn_add form-control'>הוסף תמונה</button>
                <h5>צבעי רקע-שם קטגוריה</h5>
                <select ref={selectRef} name='select' className='select' value={contantInfo.select} onChange={handleChange}  >
                    <option value="red">אדום</option>
                    <option value="black">שחור</option>
                    <option value="green">ירוק</option>
                </select>
                <h5>שם קטגוריה</h5>
                <input style={{ color: bg }} name='categoryName' {...register("categoryName", { minLength: 4 })} type="text" value={contantInfo.categoryName} onChange={handleChange} />
                <h5>כותרת</h5>
                <textarea name='title'{...register("title", { required: true, maxLength: 100 })} type="text" value={contantInfo.title} onChange={handleChange} />
                <h5> כותרת משנה</h5>
                <textarea name='SecendTitle' {...register("SecendTitle", { required: true, maxLength: 300 })} type="text" value={contantInfo.SecendTitle} onChange={handleChange} />
                <h5>שם המחבר</h5>
                <input name='name' type="text" value={contantInfo.name} onChange={handleChange} />
                <button onClick={onChange} className='btn btn-info float-start mt-2 ms-2'>Send</button>
            </form>
            {/* <div>
                {onSub.map(item => {
                    return (
                        <div>
                            {item.title}
                            <div>{item.image}</div>
                        </div>
                    )
                })}
            </div> */}
            <div>

            </div>
        </div >
    )
}

export default CreateForm
