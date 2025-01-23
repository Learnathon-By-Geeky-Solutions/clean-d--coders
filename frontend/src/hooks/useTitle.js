import { useEffect } from "react";

const useTitle = (title) => {
	useEffect(() => {
        if(title) document.title = `${title} | Mentor Connect`;
        else document.title = `Mentor Connect`;
    }, [title]);
};

export default useTitle;