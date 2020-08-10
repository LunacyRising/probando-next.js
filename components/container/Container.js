import NavBar from "../navBar/NavBar";

const Container = (props) => {
    return(
        <>
            <NavBar/>
            {props.children}
        </>
    )
}

export default Container