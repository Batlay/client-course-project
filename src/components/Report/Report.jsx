import { useState, useEffect} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import MyButton from '../UI/Button/MyButton';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import "react-pdf/dist/esm/Page/TextLayer.css";

const Report = () => {
	
	const params = useParams()
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	const [pdf, setPdf] = useState('')
	const [pupil, setPupil] = useState({})

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};


	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
		);


	useEffect(() => {
		getPdf()
		getPupil()
	}, [])

	const getPupil = async () => {
        const response = await axios.get(`/api/pupils/${params.id}`)
        setPupil(response.data)
    }

	const getPdf = async () => {
		await axios.get(`/api/pupils/report/${params.id}`, {responseType: 'arraybuffer'})
		.then((response) => {
			setPdf(response.data)
		})    
		.catch(error => {
			if (error.response) {
			  console.log(error.response.data);
			}
		  });
		console.log(pdf)
	}


	const onButtonClick = () => {
		const url = window.URL.createObjectURL(new Blob([new Uint8Array(pdf).buffer])); 
		const link = document.createElement('a'); 
		link.href = url; 
		link.setAttribute('download', pupil.fio+'.pdf'); 
		document.body.appendChild(link); 
		link.click();
    }

	return (
		<div className='report'>
			<div className="pdf">
				<button style={{float:'right'}} onClick={onButtonClick} >
					<span>Скачать</span><span>PDF</span>
                </button>
			</div>	
			<center>
				<nav>
					<p>
						Страница {pageNumber} из {numPages}
					</p>
					<MyButton style={{borderRadius: '5px', width: '8%'}} onClick={goToPrevPage}>Назад</MyButton>
					<MyButton style={{borderRadius: '5px', width: '8%'}} onClick={goToNextPage}>Далее</MyButton>
					<br/>
				</nav>
				<Document style={{border:'10px solid black'}}
					file={pdf}
					onLoadSuccess={onDocumentLoadSuccess}
				>
					<Page style={{border:'10px solid black'}} pageNumber={pageNumber} />
				</Document>
			</center>
		</div>
	);
};

export default Report;