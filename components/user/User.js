import Router  from "next/router";
import { makeStyles } from '@material-ui/core/styles';
import { 
    Card,
    CardHeader,
    CardMedia,
    CardActionArea,
    Avatar,
    } from "@material-ui/core/";


const User = ({ name, lastName, email, avatar, id }) => {

    const useStyles = makeStyles(() => ({

        root: {
            width: "25%",
            margin: 10
        },
        media: {
            height: 0,
            paddingTop: '56.25%'
        },
      }));
    
    const classes = useStyles();

    const { root, media } = classes;

    const push = () => {
        Router.push("/user/[id]", `/user/${id}`)
    }

    return(
        <>
            <Card className={root}>
                <CardActionArea onClick={push}>
                    <CardHeader
                    avatar={
                    <Avatar aria-label="user">
                        <img src={avatar} alt={`${name} ${lastName}`}/>
                    </Avatar>
                    }
                    title={`${name} ${lastName}`}
                    subheader={email}
                    />
                    <CardMedia
                    className={media}
                    image="https://wallpapercave.com/wp/HL2TWVN.jpg"
                    title="purple"
                    />
               </CardActionArea>
            </Card>
        </>
    )
}

export default User