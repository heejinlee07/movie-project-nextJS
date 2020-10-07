import { useRouter } from "next/router";
import Header from "../../../components/Header";
import TargetMovie from "../../../components/TargetMovie";

export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  console.log("router.", router.query);
  console.log(id);

  return (
    <div>
      <Header />
      <TargetMovie id={id} />
    </div>
  );
}
