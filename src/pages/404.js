import styled from "styled-components";
import { useRouter } from "next/router";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import Button from "../components/common/Button";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    & > * {
        text-transform: uppercase;
    }
`;

const InnerWrapper = styled.div`
    & > h1 {
        font-size: 40px;
    }

    & > h2 {
        font-size: 30px;
        margin-bottom: 20px;
    }
`;

const Custom404 = () => {
    const router = useRouter();

    return (
        <Wrapper>
            <InnerWrapper>
                <MoodBadIcon style={{ fontSize: "200px", color: "grey" }} />
                <h1>oops!</h1>
                <h2>that Page doesn't exist or is unavailable</h2>
                <Button
                    bgColor={"lightgrey"}
                    color={"black"}
                    hoverBgColor={"black"}
                    hoverColor={"white"}
                    padding={12}
                    onClick={() => router.push("/")}
                >
                    GO BACK TO HOME
                </Button>
            </InnerWrapper>
        </Wrapper>
    );
};

export default Custom404;
