/* eslint-disable no-undef */
import { Typography } from '@mui/material';
import { ErrorMessage } from 'formik';
import React, { useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;

type Props = {
	value: string;
	name: string;
	formIk: any;
};

export const MODULES = {
	toolbar: [
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

		['clean'], // remove formatting button
	],
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

const Editor: React.FC<Props> = ({ value, name, formIk }) => {
	useEffect(() => {
		if (ReactQuill) {
			const container = document.getElementById(name);
			if (container && container.children) {
				const toolbar = container.children[0];
				const content = container.children[1] as any;
				content.style.height = `${container.clientHeight - toolbar.clientHeight}px`;
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ReactQuill]);

	return (
		<div style={{ marginBottom: 20 }}>
			<ReactQuill
				id={name}
				name={name}
				required={true}
				style={{ width: '100%', height: 300 }}
				modules={MODULES}
				formats={FORMATS}
				value={value}
				onChange={(value: string) => formIk.setFieldValue(name, value)}
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
