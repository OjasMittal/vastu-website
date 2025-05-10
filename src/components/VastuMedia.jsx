import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BookConsultationModal from "../components/BookConsultationModal";
import BottomButtons from "./BottomButtons";

const videos = [
	{
		title: "Tips for Kitchen Renovation",
		youtubeUrl: "https://www.youtube.com/embed/A5c85jajblI",
	},

	{
		title: "How to Improve Relationships",
		youtubeUrl: "https://www.youtube.com/embed/jI7w2mrBFcU",
	},
	{
		title: "Magic of your Mobile Phone",
		youtubeUrl: "https://www.youtube.com/embed/JKL3r9ZROok",
	},

	{
		title: "Power of 7 horses Painting",
		youtubeUrl: "https://www.youtube.com/embed/C3Jf-AbeTdA?feature=share",
	},
];

export default function VastuMedia() {
	const [showModal, setShowModal] = useState(false);
	const handleModalToggle = () => setShowModal(!showModal);
	return (
		<section className='min-h-screen py-20 bg-orange-50'>
			<BookConsultationModal
				showModal={showModal}
				setShowModal={setShowModal}
			/>
			<div className='max-w-5xl mx-auto px-4 text-center'>
				<h2 className='text-3xl md:text-4xl font-bold text-orange-800 mb-12'>
					Some Vastu Tips
				</h2>

				<div className='grid md:grid-cols-2 gap-10'>
					{videos.map((video, index) => (
						<div key={index} className='rounded-2xl shadow-xl bg-white p-4'>
							<h3 className='text-lg font-semibold text-gray-700 mb-4'>
								{video.title}
							</h3>
							{video.youtubeUrl && (
								<iframe
									src={video.youtubeUrl}
									title={video.title}
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
									className='w-full h-64 rounded-xl'
								/>
							)}
							{video.instagramUrl && (
								<div className='w-full'>
									<iframe
										src={`${video.instagramUrl}/embed`}
										title={video.title}
										className='w-full h-96 rounded-xl'
										allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
										allowFullScreen
									/>
								</div>
							)}
						</div>
					))}
				</div>
				<BottomButtons onBookClick={handleModalToggle} />
			</div>
		</section>
	);
}
