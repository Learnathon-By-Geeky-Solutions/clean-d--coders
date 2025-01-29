import { Img } from "@/components/common";

const SingleMentorCard = () => {
    return (
        <div className="rounded-xl shadow-lg p-5">
            <div className="flex justify-between">
                <div className="flex flex-col justify-between">
                    <p className="text-2xl">Hanna Lorens</p>
                    <p className="text-green-400 font-medium">50$</p>
                </div>
                <Img 
                    alt="user avatar"
                    src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid"
                    className="rounded-full h-20 aspect-square"
                />
            </div>
            <div className="my-5 flex justify-between items-start gap-5">
                <p className="opacity-60">Tags:</p>
                <p className="w-2/3">React, Next, Express, Cloud, Dotnet, OOP, Front-end</p>
            </div>
            <div className="flex justify-between items-start gap-5">
                <p className="opacity-60">Company:</p>
                <p className="w-2/3">Brain Station 23</p>
            </div>
        </div>
    );
};

export default SingleMentorCard;