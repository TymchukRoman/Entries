import { useEffect, useState } from "react";
import { ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';
import { getCategories } from "../api/api";
import "./components.css"

const Categories = (props) => {
    const [categories, setCategories] = useState([])
    const [forSearch, setForsearch] = useState([])

    useEffect(() => {
        getCategories().then((res) => {
            setCategories(res.data.data.map((tag) => { return tag.title }))
        })
    }, [])
    const search = () => {
        props.categorySearch(forSearch)
    }

    const handleChange = (val) => {
        setForsearch(val);
    }

    return (<div>
        <div className="categories">
            {categories.map((cate) => {
                return <ToggleButtonGroup key={cate} type="checkbox" value={forSearch} onChange={handleChange}>
                    <ToggleButton value={cate}>
                        {cate}
                    </ToggleButton>
                </ToggleButtonGroup>
            })}
        </div>
        <div className="cateSearchButton">
            <Button variant="dark" onClick={search}>Search</Button>
        </div>
    </div>
    );
}

export default Categories;
