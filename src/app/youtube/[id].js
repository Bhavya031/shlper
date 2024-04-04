import { useRouter } from "next/router";

export default function Youtube() {

const router = useRouter();
  const { id } = router.query;

  return <h1>Youtube video ID: {id}</h1>;
}