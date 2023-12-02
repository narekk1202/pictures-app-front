function PictureCard({ imageUrl, uploaderName }) {
	return (
		<div className='w-[250px] h-[350px] flex flex-col items-center border-2 border-blue-500 rounded-[8px] mt-5 mx-2'>
			<div className='w-full h-[280px]'>
				<img className='w-full h-full rounded-t-[7px]' src={imageUrl} alt='user image' />
			</div>
			<span className='text-lg mt-5'>Uploader: {uploaderName}</span>
		</div>
	);
}

export default PictureCard;
