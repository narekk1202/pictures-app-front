import { useEffect, useState } from 'react';
import { getPictures } from '../api/getPictures';
import PictureCards from './PictureCard';

function Body({ loading, setLoading, keyy }) {
	const [data, setData] = useState([]);

	async function fetchPictures() {
		setLoading(true);
		const pictures = await getPictures();
		setData(pictures);
		setLoading(false);
	}

	useEffect(() => {
		fetchPictures();
	}, [keyy]);

	return (
		<>
			{loading ? (
				<div className='mt-10'>
					<img
						className='w-20 h-20 animate-spin'
						src='https://www.svgrepo.com/show/199956/loading-loader.svg'
						alt='Loading icon'
					/>
				</div>
			) : (
				<div className='w-full h-auto flex flex-col items-center mt-[50px]'>
					{data?.pictures?.length !== 0 ? (
						<>
							<p className='text-xl text-center'>Pictures from our friends🖼️</p>
							<div className='w-full h-auto flex flex-wrap items-center justify-center'>
								{data?.pictures?.map(picture => (
									<PictureCards
										key={picture.ID}
										imageUrl={picture.picture_url}
										uploaderName={picture.uploader_name}
									/>
								))}
							</div>
						</>
					) : (
						<p className='text-xl'>There are no pictures yet 😭</p>
					)}
				</div>
			)}
		</>
	);
}

export default Body;
