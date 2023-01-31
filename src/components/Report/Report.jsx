import { useState, useEffect} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import ReactDOM from 'react-dom';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MyDocument';
import Pdf from './inv.pdf'
import MyButton from '../UI/Button/MyButton';
import PDFFile from './PDFFile'
import axios from 'axios';
import { useParams } from 'react-router-dom'


const Report = () => {
//     <PDFViewer>
//     <MyDocument/>
//   </PDFViewer>
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
		const response = await axios.get(`/api/pupils/report/${params.id}`, {responseType: 'arraybuffer'})
		.then((response) => {
			setPdf(response.data)
		})    
		console.log(pdf)
	}

	const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch({pdf}).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }

	return (
		<div style={{margin: 'auto', width: '50%'}}>
			<nav>
				<MyButton onClick={goToPrevPage}>Назад</MyButton>
				<MyButton onClick={goToNextPage}>Далее</MyButton>
				<p>
					Page {pageNumber} of {numPages}
				</p>
				<button onClick={onButtonClick}>
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