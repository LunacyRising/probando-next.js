import User from "../user/User";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core/";

const Users = ({ users }) => {

    const useStyles = makeStyles(() => ({
        
        container: {
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "80%",
            margin: "50px auto"
        }
      }));
    
    const classes = useStyles();

    const { container } = classes;

    return(
        <>
            <Box className={container}>
                {users.map(user => (
                    <User key={user.id} id={user.id} name={user.first_name} lastName={user.last_name} email={user.email} avatar={user.avatar}/>
                ))}
            </Box>
        </>
    )
}

export default Users