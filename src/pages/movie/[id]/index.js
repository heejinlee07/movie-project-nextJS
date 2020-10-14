/* eslint-disable jsx-a11y/accessible-emoji */
import { useRouter } from "next/router";
import Button from "../../../components/common/Button";
import styled from "styled-components";
import Head from "next/head";
import Header from "../../../components/Header";
import TargetMovieContainer from "../../../containers/TargetMovieContainer";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

const Index = ({ isSsr, targetSsrData }) => {
    const router = useRouter();

    const { id } = router.query;

    return (
        <>
            <Head>
                {isSsr && (
                    <title> 🎬 영화 {targetSsrData.data.movie.title}</title>
                )}
                <meta name="description" content="특정 영화 페이지입니다." />
            </Head>
            <Header />
            <Button fontSize={20} padding={10} bgColor={"green"}>
                {isSsr === true ? "server-side" : "client-side"}
            </Button>
            {isSsr && (
                <Wrapper>
                    <div>{targetSsrData.data.movie.id}</div>
                    <div>{targetSsrData.data.movie.title}</div>
                </Wrapper>
            )}
            {!isSsr && (
                <Wrapper>
                    <TargetMovieContainer id={id} type="page" />
                </Wrapper>
            )}
        </>
    );
};

Index.getInitialProps = async (context) => {
    const { req, query } = context;

    if (req) {
        const isSsr = true;
        const response = await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${query.id}`
        );
        const targetSsrData = await response.json();

        return { isSsr, targetSsrData };
    } else {
        const isSsr = false;
        return { isSsr };
    }
};

export default Index;
