import { useState, useEffect} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import MyButton from '../UI/Button/MyButton';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';


const Report = () => {
	
	const params = useParams()
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	const [pdf, setPdf] = useState('')
	const [load, setLoad] = useState(false)

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
	}, [])

	const getPdf = async() => {
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

	const downloadPdf = async() => {
		await axios.get(`/api/pupils/report/download/${params.id}`, {responseType: 'arraybuffer'})
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
		downloadPdf()
		const url = window.URL.createObjectURL(new Blob([new Uint8Array(pdf).buffer])); 
		const link = document.createElement('a'); 
		link.href = url; 
		link.setAttribute('download', 'yourcoolpdf.pdf'); 
		document.body.appendChild(link); 
		link.click();
    }

	return (
		<div style={{margin: 'auto', width: '50%'}}>
			<nav>
				<MyButton data-testid='prev' onClick={goToPrevPage}>Назад</MyButton>
				<MyButton data-testid='next' onClick={goToNextPage}>Далее</MyButton>
				<p>
					Page {pageNumber} of {numPages}
				</p>
				<button onClick={onButtonClick} data-testid='pdf_button'>
                    Скачать PDF файл
                </button>
			</nav>
            {/* <MyDocument
				onLoadSuccess={onDocumentLoadSuccess}
			>
				<Page pageNumber={pageNumber} />
			</MyDocument> */}
			
			<Document
				file={pdf}
				onLoadSuccess={onDocumentLoadSuccess}
			>
				<Page pageNumber={pageNumber} />
			</Document>
			
			
            {/* <MyDocument>
				<Page pageNumber={pageNumber} />
                </MyDocument> */}
		</div>
	);
};

export default Report;