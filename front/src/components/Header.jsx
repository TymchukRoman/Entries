import { NavLink } from "react-router-dom"
import "./components.css"
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from "react";

const Header = (props) => {

    const [searchData, setSearchData] = useState("")

    const Search = () => {
        props.startSearch(searchData)
    }

    const setSearchInputData = (event) => {
        setSearchData(event.target.value)
    }

    return (
        <div>
            <div className="header">
                <div className="headerLink" style={{ margin: "5px", width: "90%" }}>
                    <NavLink className="listLink" to="/list"> List </NavLink>
                    <NavLink className="listLink" to="/create"> New entry </NavLink>
                </div>
                <div className="headerSearch">
                    <InputGroup className="mb-3" style={{ margin: "5px", width: "90%" }}>
                        <FormControl
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                            onChange={setSearchInputData}
                            value={searchData}
                        />
                        <InputGroup.Append>
                            <Button
                                variant="outline-secondary"
                                onClick={Search}
                            >
                                Search
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </div>
        </div>
    );
}

export default Header;
