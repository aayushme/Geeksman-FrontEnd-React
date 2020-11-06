import React,{useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';



const Navbar = () => {
    const[login,setlogin]=useState(false);

    return (
        
        <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
                <Link className="navbar-logo navbar-brand" to="/">
                    <img alt="svgImg" width="48px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIKdmlld0JveD0iMCAwIDEwMCAxMDAiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PHBhdGggZmlsbD0iI2UzZTJlMyIgZD0iTTIxLjQ5NSw4MWMtMS4zNjQsMC0yLjczOS0wLjQyOC0zLjkxMi0xLjMxM2MtMi44NjUtMi4xNjMtMy40MzQtNi4yMzktMS4yNzEtOS4xMDRMMzEuOTk5LDUwCUwxNi4zMTMsMjkuNDE3Yy0yLjE2My0yLjg2NS0xLjU5NC02Ljk0MSwxLjI3MS05LjEwNGMyLjg2NC0yLjE2MSw2Ljk0MS0xLjU5NSw5LjEwNCwxLjI3MWwxOS4zMDIsMjUuMzkxCUM0Ni42NjksNDcuODY4LDQ3LDQ4LjkzNCw0Nyw1MGMwLDEuMDY2LTAuMzMxLDIuMTMyLTEuMDEsMy4wMjZMMjYuNjg4LDc4LjQxN0MyNS40MSw4MC4xMDksMjMuNDY0LDgxLDIxLjQ5NSw4MXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMzFjNGYzIiBkPSJNNzguNTA0LDgxYzEuMzY0LDAsMi43MzktMC40MjgsMy45MTItMS4zMTNjMi44NjUtMi4xNjMsMy40MzQtNi4yMzksMS4yNzEtOS4xMDRMNjgsNTAJbDE1LjY4Ny0yMC41ODNjMi4xNjMtMi44NjUsMS41OTQtNi45NDEtMS4yNzEtOS4xMDRjLTIuODY0LTIuMTYxLTYuOTQxLTEuNTk1LTkuMTA0LDEuMjcxTDU0LjAxLDQ2Ljk3NAlDNTMuMzMxLDQ3Ljg2OCw1Myw0OC45MzQsNTMsNTBjMCwxLjA2NiwwLjMzMSwyLjEzMiwxLjAxLDMuMDI2bDE5LjMwMiwyNS4zOTFDNzQuNTksODAuMTA5LDc2LjUzNiw4MSw3OC41MDQsODF6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzFmMjEyYiIgZD0iTTIxLjQ5NSw4MmMtMS42NDEsMC0zLjIwMS0wLjUyMy00LjUxNS0xLjUxNWMtMy4zLTIuNDkyLTMuOTU4LTcuMjA0LTEuNDY2LTEwLjUwNUwzMC43NDIsNTAJTDE1LjUxOCwzMC4wMjNjLTIuNDk1LTMuMzA1LTEuODM3LTguMDE3LDEuNDYzLTEwLjUwOWMzLjI5OC0yLjQ4OSw4LjAxMy0xLjgzNSwxMC41MDUsMS40NjZsMTkuMywyNS4zODkJQzQ3LjU4LDQ3LjQxNCw0OCw0OC42Nyw0OCw1MHMtMC40MiwyLjU4Ni0xLjIxNSwzLjYzMUwyNy40ODMsNzkuMDIyQzI2LjA1Niw4MC45MTQsMjMuODcyLDgyLDIxLjQ5NSw4MnogTTIxLjQ5MiwyMC4wMDMJYy0xLjE1NCwwLTIuMzE2LDAuMzYtMy4zMDcsMS4xMDdjLTIuNDIsMS44MjgtMi45MDIsNS4yODQtMS4wNzUsNy43MDRsMTUuNjg0LDIwLjU3OWMwLjI3MywwLjM1OCwwLjI3MywwLjg1NCwwLDEuMjEzCUwxNy4xMDcsNzEuMTg5Yy0xLjgyNCwyLjQxNi0xLjM0Miw1Ljg3MiwxLjA3OCw3LjdjMC45NjMsMC43MjcsMi4xMDcsMS4xMSwzLjMxLDEuMTFjMS43NDQsMCwzLjM0Ni0wLjc5Nyw0LjM5NS0yLjE4Nkw0NS4xOTMsNTIuNDIJQzQ1LjcyMSw1MS43MjcsNDYsNTAuODksNDYsNTBzLTAuMjc5LTEuNzI3LTAuODA3LTIuNDJMMjUuODkyLDIyLjE4OEMyNC44MTEsMjAuNzU3LDIzLjE2LDIwLjAwMywyMS40OTIsMjAuMDAzeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMxZjIxMmIiIGQ9Ik03OC41MDUsODJjLTIuMzc3LDAtNC41NjEtMS4wODYtNS45OS0yLjk4TDUzLjIxNCw1My42MzFDNTIuNDIsNTIuNTg3LDUyLDUxLjMzMSw1Miw1MAlzMC40Mi0yLjU4NywxLjIxNC0zLjYzMWwxOS4zMDMtMjUuMzkyYzIuNDg5LTMuMjk4LDcuMjAxLTMuOTU1LDEwLjUwMy0xLjQ2M2MzLjMsMi40OTIsMy45NTgsNy4yMDQsMS40NjYsMTAuNTA1TDY5LjI1OCw1MAlsMTUuMjI1LDE5Ljk3N2MyLjQ5NSwzLjMwNSwxLjgzNyw4LjAxNy0xLjQ2MywxMC41MDlDODEuNzA2LDgxLjQ3Nyw4MC4xNDYsODIsNzguNTA1LDgyeiBNNzguNTA2LDIwLjAwMgljLTEuNjY3LDAtMy4zMTUsMC43NTQtNC4zOTYsMi4xODRMNTQuODA2LDQ3LjU4QzU0LjI3OCw0OC4yNzMsNTQsNDkuMTA5LDU0LDUwczAuMjc4LDEuNzI3LDAuODA2LDIuNDJsMTkuMzAzLDI1LjM5MglDNzUuMTU5LDc5LjIwMyw3Ni43NjEsODAsNzguNTA1LDgwYzEuMjAyLDAsMi4zNDctMC4zODQsMy4zMS0xLjExYzIuNDItMS44MjgsMi45MDItNS4yODQsMS4wNzUtNy43MDRMNjcuMjA1LDUwLjYwNgljLTAuMjczLTAuMzU4LTAuMjczLTAuODU0LDAtMS4yMTNsMTUuNjg4LTIwLjU4M2MxLjgyNC0yLjQxNiwxLjM0Mi01Ljg3Mi0xLjA3OC03LjdDODAuODI0LDIwLjM2Myw3OS42NiwyMC4wMDIsNzguNTA2LDIwLjAwMnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMWYyMTJiIiBkPSJNNzguNSwyOS4yOTljLTAuMTA2LDAtMC4yMTMtMC4wMzMtMC4zMDMtMC4xMDNjLTAuMjItMC4xNjctMC4yNjMtMC40ODEtMC4wOTUtMC43bDEtMS4zMTIJYzAuMTY4LTAuMjIyLDAuNDgzLTAuMjYyLDAuNy0wLjA5NWMwLjIyLDAuMTY3LDAuMjYzLDAuNDgxLDAuMDk1LDAuN2wtMSwxLjMxMkM3OC43OTksMjkuMjMxLDc4LjY1LDI5LjI5OSw3OC41LDI5LjI5OXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMWYyMTJiIiBkPSJNNzkuNSw3My4wMTNjLTAuMTUsMC0wLjI5OS0wLjA2Ny0wLjM5Ny0wLjE5N0w2NC4wMjMsNTMuMDNjLTEuMzU5LTEuNzg0LTEuMzU5LTQuMjc2LDAtNi4wNjEJbDYuMDc5LTcuOTc3YzAuMTY5LTAuMjIyLDAuNDgzLTAuMjYyLDAuNy0wLjA5NWMwLjIyLDAuMTY3LDAuMjYzLDAuNDgsMC4wOTUsMC43bC02LjA3OSw3Ljk3N2MtMS4wODcsMS40MjgtMS4wODcsMy40MjIsMCw0Ljg1CUw3OS44OTcsNzIuMjFjMC4xNjgsMC4yMiwwLjEyNSwwLjUzMy0wLjA5NSwwLjdDNzkuNzEzLDcyLjk3OSw3OS42MDYsNzMuMDEzLDc5LjUsNzMuMDEzeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMxZjIxMmIiIGQ9Ik03My41LDM1Ljg1OWMtMC4xMDYsMC0wLjIxMy0wLjAzMy0wLjMwMy0wLjEwM2MtMC4yMi0wLjE2Ny0wLjI2My0wLjQ4MS0wLjA5NS0wLjdsMy0zLjkzNgljMC4xNjktMC4yMjIsMC40ODItMC4yNjIsMC43LTAuMDk1YzAuMjIsMC4xNjcsMC4yNjMsMC40ODEsMC4wOTUsMC43bC0zLDMuOTM2QzczLjc5OSwzNS43OTIsNzMuNjUsMzUuODU5LDczLjUsMzUuODU5eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMxZjIxMmIiIGQ9Ik0yMC41LDczLjAxM2MtMC4xMDYsMC0wLjIxMy0wLjAzMy0wLjMwMy0wLjEwM2MtMC4yMi0wLjE2Ny0wLjI2My0wLjQ4LTAuMDk1LTAuN2wxLTEuMzEzCWMwLjE2Ni0wLjIyMiwwLjQ4My0wLjI2MiwwLjctMC4wOTVjMC4yMiwwLjE2NywwLjI2MywwLjQ4LDAuMDk1LDAuN2wtMSwxLjMxM0MyMC44LDcyLjk0NSwyMC42NSw3My4wMTMsMjAuNSw3My4wMTN6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzFmMjEyYiIgZD0iTTI5LjUsNjEuMjAzYy0wLjEwNiwwLTAuMjEzLTAuMDMzLTAuMzAzLTAuMTAzYy0wLjIyLTAuMTY3LTAuMjYzLTAuNDgtMC4wOTUtMC43bDYuMDc4LTcuOTc2CWMxLjA4OC0xLjQyOCwxLjA4OC0zLjQyMiwwLTQuODVMMjAuMTAzLDI3Ljc5MWMtMC4xNjgtMC4yMi0wLjEyNS0wLjUzMywwLjA5NS0wLjdjMC4yMTctMC4xNjgsMC41MzEtMC4xMjcsMC43LDAuMDk1TDM1Ljk3Niw0Ni45NwljMS4zNiwxLjc4NCwxLjM2LDQuMjc2LDAsNi4wNjFsLTYuMDc4LDcuOTc2QzI5Ljc5OSw2MS4xMzYsMjkuNjUsNjEuMjAzLDI5LjUsNjEuMjAzeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMxZjIxMmIiIGQ9Ik0yMy41LDY5LjA3NmMtMC4xMDYsMC0wLjIxMy0wLjAzMy0wLjMwMy0wLjEwM2MtMC4yMi0wLjE2Ny0wLjI2My0wLjQ4LTAuMDk1LTAuN2wzLTMuOTM3CWMwLjE2OC0wLjIyMywwLjQ4My0wLjI2MiwwLjctMC4wOTVjMC4yMiwwLjE2NywwLjI2MywwLjQ4LDAuMDk1LDAuN2wtMywzLjkzN0MyMy43OTksNjkuMDA5LDIzLjY1LDY5LjA3NiwyMy41LDY5LjA3NnoiPjwvcGF0aD48L3N2Zz4=" />
                    GeeksCode
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active" >
                            <NavLink className="nav-link" to="/practice" >Practice</NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink className="nav-link" to="/contests">Contests</NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink className="nav-link  " to="/about">About</NavLink>
                        </li>
                        

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;