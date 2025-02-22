import { Hero } from "@/components/pageComponents/Hero";
import { SucessStories } from "@/components/pageComponents/SucessStories";
import { useTitle } from "@/hooks";

const Home = () => {
    useTitle("Home");
    return (
        <div>
             <Hero/>
            <SucessStories/>
        </div>
    );
};

export default Home;