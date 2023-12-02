import { Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { getPictures } from './api/getPictures';
import { postPicture } from './api/postPicture';
import Body from './components/Body';
import FileUpload from './components/FileUpload';

function App() {
	const [key, setKey] = useState(0);
	const [name, setName] = useState('');
	const [base64Image, setBase64Image] = useState(null);
	const [fetchLoading, setFetchLoading] = useState(false);

	function uploadImage(image) {
		if (image) {
			const reader = new FileReader();

			reader.onloadend = () => {
				const base64String = reader.result.split(',')[1];
				setBase64Image(base64String);
			};

			reader.readAsDataURL(image);
		}
	}

	async function addPicture() {
		const postData = {
			uploader_name: name,
			picture_url: `data:image/png;base64,${base64Image}`,
		};

		if (postData) {
			setFetchLoading(true);
			setBase64Image(null);
      setName("")
			await postPicture(postData);
			await getPictures();
      setKey(prevKey => prevKey + 1)
			setFetchLoading(false);
		}
	}

	return (
		<div className='w-full h-auto flex flex-col items-center p-10'>
			<p className='text-2xl mb-[50px] text-center'>
				This is the site, where you can upload images
				<br /> for your friends💕
			</p>
			<div className='max-w-[280px]'>
				<Input
					placeholder='Write your name'
					mb={5}
					onChange={e => setName(e.target.value)}
				/>
			</div>
			{name && (
				<>
					<FileUpload func={uploadImage} base64Image={base64Image} keyy={key} />
					{base64Image && (
						<div className='w-[250px] flex items-center justify-between mt-5'>
							<Button
								colorScheme='red'
								onClick={() => {
									setBase64Image(null), setKey(prevKey => prevKey + 1);
								}}
							>
								Delete image
							</Button>
							<Button colorScheme='blue' onClick={() => addPicture()}>
								Add image
							</Button>
						</div>
					)}
				</>
			)}
			<Body loading={fetchLoading} setLoading={setFetchLoading} keyy={key} />
		</div>
	);
}

export default App;
