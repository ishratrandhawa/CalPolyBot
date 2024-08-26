import { Layout, Text, Page } from "@vercel/examples-ui";
import { Chat } from "../components/Chat";

function Home() {
  return (
    <Page className="flex flex-col gap-12 bg-green-900 text-white min-h-screen min-w-full px-6 items-center">
      <section className="flex flex-col gap-6 lg:w-1/2 items-center">
        <div className="flex items-center gap-4">
          <img
            src="/img/mustang.png" // Ensure this path points to your image file
            alt="Cal Poly SLO Mustang"
            className="h-16 w-16"
          />
          <Text variant="h1" className="text-white">
            Cal Poly Slo Bot
          </Text>
        </div>
        <Text className="text-green-200">
          This is a Cal Poly Slo ChatBot. It will help you with any questions about Cal Poly Slo.
        </Text>
      </section>

      <section className="flex flex-col lg:w-1/2 gap-3">
        <div className="">
          <Chat />
        </div>
      </section>
    </Page>
  );
}

Home.Layout = Layout;

export default Home;
