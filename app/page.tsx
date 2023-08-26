import Text from "@/app/components/Text.tsx";
import Title from "@/app/components/Title.tsx";
import Logo from "@/app/components/Logo.tsx";
import Card from "./components/Card";
import Accordion from "./components/Accordion/Accordion";
import Avatar from "./components/Avatar/Avatar";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";


export default function Home() {
  return (
    <>
      <Accordion title="title" content="contents"/>
      <Avatar size={64}  src="https://img.freepik.com/free-photo/close-up-portrait-on-beautiful-cat_23-2149214373.jpg"/>
      <Breadcrumb menu={["교육과정", "교육"]} />
    </>
  );
}
