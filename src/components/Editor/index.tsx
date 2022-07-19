/* eslint-disable no-undef */
import { getPathFileFromServer } from '@/src/helpers/media';
import { Typography } from '@mui/material';
import { ErrorMessage } from 'formik';
import React, { useCallback, useRef } from 'react';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;

type Props = React.ComponentProps<typeof ReactQuill> & {
	value: string;
	name: string;
	formik: any;
};

export const MODULES = {
	toolbar: {
		container: [
			['bold', 'italic', 'underline', 'strike'], // toggled buttons
			['blockquote', 'code-block'],

			[{ header: 1 }, { header: 2 }], // custom button values
			[{ list: 'ordered' }, { list: 'bullet' }],
			[{ script: 'sub' }, { script: 'super' }], // superscript/subscript
			[{ indent: '-1' }, { indent: '+1' }], // outdent/indent
			[{ direction: 'rtl' }], // text direction

			[{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
			[{ header: [1, 2, 3, 4, 5, 6, false] }],

			[{ color: [] }, { background: [] }], // dropdown with defaults from theme
			[{ font: [] }],
			[{ align: [] }],
			['link', 'image', 'video'],

			['clean'], // remove formatting button
		],
	},
};

export const FORMATS = [
	'script',
	'header',
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
	'color',
	'background',
	'font',
	'align',
	'size',
	'direction',
];

const Editor: React.FC<Props> = ({ value, name, formik, ...otherProps }) => {
	const quillObj = useRef<any>(null);

	const imageHandler = useCallback(() => {
		const input = document.createElement('input');

		input.setAttribute('type', 'file');
		input.setAttribute('accept', 'image/*');
		input.click();

		input.onchange = async () => {
			const file: any = input?.files?.[0];

			const rangeIndex = quillObj.current.getEditor().getSelection().index;
			const [res] = await getPathFileFromServer([file]);
			quillObj.current.getEditor().insertEmbed(rangeIndex, 'image', res);
		};
	}, [quillObj]);

	return (
		<div style={{ marginBottom: 20 }}>
			<ReactQuill
				ref={quillObj}
				id={name}
				name={name}
				required={true}
				className="mh-editor-300"
				placeholder="Nhập nội dung..."
				modules={{
					...MODULES,
					toolbar: {
						...MODULES.toolbar,
						handlers: { image: imageHandler },
					},
				}}
				formats={FORMATS}
				value={value}
				onChange={(value: string) => formik.setFieldValue(name, value)}
				{...otherProps}
			/>
			<ErrorMessage name={name}>
				{(msg) => (
					<Typography variant="caption" color={'error'}>
						{msg}
					</Typography>
				)}
			</ErrorMessage>
		</div>
	);
};

export default React.memo(Editor);
