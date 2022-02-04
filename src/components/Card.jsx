import React, { useEffect, useRef, useState } from "react";

import  getPost  from "../heppers/getPost";

const Card = () => {


	const [post, setPost] = useState({ title: "post 1" });
	const [loading, setLoading] = useState(true);
    const montadoRef = useRef(true);




	const updatePost = () => {
        setTimeout(() => {
            getPost().then((newPost) => {

                if (montadoRef.current) {
                    setPost(newPost);
                    setLoading(false);
                }
               
            });
        }, 2000);
		
	};


	useEffect(() => {
		updatePost();

		return () => {

            montadoRef.current = false;
        };
	}, []);







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (loading) {
    return <h1>Loding...</h1>
}
return (
		<div>
			<h1>{post.title}</h1>
		</div>
	);
};

export default Card;
