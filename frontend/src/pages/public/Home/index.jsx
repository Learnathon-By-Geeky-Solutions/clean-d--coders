import { SucessStories } from "@/components/pageComponents/SucessStories";
import { UserGuide } from "@/components/pageComponents/UserGuide";
import { useTitle } from "@/hooks";

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <UserGuide/>
            <SucessStories/>

        </div>
    );
};

export default Home;