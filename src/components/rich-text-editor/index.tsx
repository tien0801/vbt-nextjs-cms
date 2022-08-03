import dynamic from 'next/dynamic';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
	ssr: false,
	loading: () => <p>Đang tải ...</p>,
});

const modules = {
	toolbar: [
		[{ header: '1' }, { header: '2' }, { font: [] }],
		[{ size: [] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
		['link', 'image', 'video'],
		['clean'],
	],
	clipboard: {
		matchVisual: false,
	},
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
	'header',
	'font',
	'size',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'indent',
	'link',
	'image',
	'video',
];

type Props = {
	onChange: (content: any) => void;
	value: any;
};
const BlogEditor = ({ onChange, value }: Props) => {
	return (
		<QuillNoSSRWrapper
			value={value}
			modules={modules}
			formats={formats}
			theme="snow"
			onChange={onChange}
		/>
	);
};

export default BlogEditor;
