import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../../components/Header";
import TargetMovie from "../../../components/TargetMovie";

export default function Index() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>영화 {id}</title>
      </Head>
      <div>
        <Header />
        <TargetMovie id={id} />
      </div>
    </>
  );
}
