import { Suspense } from "react";
import { api } from "../adapters/api";
import { Message } from "./_components/message";

const Page = async () => {
  const res = await api.test.$get();
  const { message } = await res.json();

  return (
    <section>
      <h1>Hello World</h1>
      <Suspense>
        <Message message={message} />
      </Suspense>
    </section>
  );
};

export default Page;
