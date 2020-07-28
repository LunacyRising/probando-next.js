import Head from 'next/head';
import Container from "../../components/container/Container";
import fetch from "isomorphic-unfetch";
import { makeStyles } from '@material-ui/core/styles';
import { 
    Card,
    CardHeader,
    CardMedia,
    Avatar,
    IconButton,
    } from "@material-ui/core/";
import MoreVertIcon from '@material-ui/icons/MoreVert';    

const userProfile = ({ user }) => {

    const { first_name, last_name, email, avatar } = user;

    const useStyles = makeStyles(() => ({
        root: {
            width: "50%",
            margin: "50px auto"
        },
        media: {
            height: 0,
            paddingTop: '56.25%'
        },
      }));
    
    const classes = useStyles();

    const { root, media } = classes;

    return(
        <>
            <Container>
                <Head>
                    <title>{`${first_name} ${last_name}`}</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Card className={root}>
                <CardHeader
                avatar={
                <Avatar aria-label="user">
                    <img src={avatar} alt={`${first_name} ${last_name}`}/>
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={`${first_name} ${last_name}`}
                subheader={email}
                />
                <CardMedia
                className={media}
                image="https://wallpapercave.com/wp/HL2TWVN.jpg"
                title="purple"
                />
            </Card>
            </Container>
        </>
    )
}

export async function getServerSideProps(ctx){
    console.log(ctx.query)
    const response = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
    const json = await response.json();
    return {
      props: {user: json.data}
    }
  }

export default userProfile