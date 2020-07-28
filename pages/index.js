import Head from 'next/head';
import Test from "../components/Test";
import Container from "../components/container/Container"; 
import Users from "../components/users/Users";
import fetch from "isomorphic-unfetch";

const Home = ({ users }) => {
  console.log(users)
  return (
    <>
      <Container>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Users users={users}/>
      </Container>
    </>
  )
}

export async function getServerSideProps(ctx){
  const response = await fetch("https://reqres.in/api/users");
  const json = await response.json();
  console.log(json)
  return {
    props: {users: json.data}
  }
}


export default Home
