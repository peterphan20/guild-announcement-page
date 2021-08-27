import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import InputFieldArticleCreation from "../atoms/InputFieldArticleCreation";
import { userDetailsContext } from "../context/UserDetailsProvider";
import { createArticle } from "../helpers/articlesCRUD";

const CreateArticlePage = () => {
	const [articleTitle, setArticleTitle] = useState("");
	const [articleContent, setArticleContent] = useState("");
	const [articleImage, setArticleImage] = useState("");
	const [articleVideo, setArticleVideo] = useState("");
	const [userDetails] = useContext(userDetailsContext);
	const history = useHistory();

	const onHandleArticleSubmit = async () => {
		const token = localStorage.getItem("authToken");
		if (!token) return;

		const articleObj = {
			title: articleTitle,
			content: articleContent,
			imageURL: articleImage,
			videoURL: articleVideo,
			authorID: userDetails,
		};

		const response = await createArticle(articleObj, token);
		if (response.code === 201) {
			history.push("/");
		} else {
			return;
		}
	};

	return (
		<div className="bg-darkBackground pt-20 w-full h-screen lg:h-full">
			<InputFieldArticleCreation
				text="Title"
				value={articleTitle}
				onChange={(e) => setArticleTitle(e.target.value)}
			/>
			<InputFieldArticleCreation
				text="Image URL"
				value={articleImage}
				onChange={(e) => setArticleImage(e.target.value)}
			/>
			<InputFieldArticleCreation
				text="Video URL"
				value={articleVideo}
				onChange={(e) => setArticleVideo(e.target.value)}
			/>
			<textarea
				className="bg-gray-100 text-base text-gray-900 flex-grow-0 flex-shrink-0 border-solid border border-gray-300 p-2 w-full h-96 outline-none resize-none focus:ring-2 focus:ring-blue-500"
				placeholder="Content"
				value={articleContent}
				onChange={(e) => setArticleContent(e.target.value)}
			/>
			<button className="bg-indigo-600 mb-8 w-full h-12 -my-2" onClick={onHandleArticleSubmit}>
				Submit
			</button>
		</div>
	);
};

export default CreateArticlePage;
