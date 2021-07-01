import { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { useFormik } from 'formik';
import { newEntry } from '../api/api';
import { Button } from 'react-bootstrap';


const Create = () => {
    const [exist, setExist] = useState(true);

    const formik = useFormik({
        initialValues: {
            title: "",
            data: "",
            tags: ""
        },
        onSubmit: (values) => {
            newEntry(values);
            setExist(false)
        },
    });

    return (
        <div style={{ marginLeft: "10px", width: "50%" }}>
            {exist
                ? <form onSubmit={formik.handleSubmit}>
                    <div style={{ margin: "10px", width: "100%" }}>
                        <input
                            id="title"
                            onChange={formik.handleChange}
                            type="text"
                            value={formik.values.title}
                            name="title"
                            placeholder="Title" />
                    </div>
                    <div style={{ margin: "10px", width: "100%" }}>
                        <input
                            id="tags"
                            onChange={formik.handleChange}
                            type="text"
                            value={formik.values.tags}
                            name="tags"
                            placeholder="Tags" />
                    </div>
                    <div style={{ margin: "10px", width: "100%" }}>
                        <textarea
                            style={{ width: "100%", height:"20rem" }}
                            id="data"
                            onChange={formik.handleChange}
                            type="text"
                            value={formik.values.data}
                            name="data"
                            placeholder="Data" />
                    </div>
                    <div style={{ margin: "10px", width: "100%" }}>
                        <Button type="Submit" variant="success">Create entry</Button>
                    </div>
                </form>
                : <Redirect to="/list" />
            }

        </div >
    );
}

export default Create;
