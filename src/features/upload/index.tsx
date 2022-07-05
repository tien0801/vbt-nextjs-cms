import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import clsx from 'clsx';
import CloseIcon from '@mui/icons-material/Close';

export type FileUploadProps = {
	name?: string;
	previewImage?: boolean;
	accept: string;
	hoverLabel?: string;
	dropLabel?: string;
	width?: string;
	height?: string;
	backgroundColor?: string;
	image?: {
		url: string;
		imageStyle?: {
			width?: string;
			height?: string;
		};
	};
	onChange: (values: any) => void;
};

const useStyle = makeStyles({
	root: {
		position: 'relative',
		borderRadius: '4px',
		cursor: 'pointer',
		textAlign: 'center',
		border: '1px dashed #DC3A35',
		display: 'inline-block',
		'&:hover p,&:hover svg,& img': {
			opacity: 1,
		},
		'& p, svg': {
			opacity: 0.4,
		},
		'& p': {
			fontSize: '14px',
			transition: 'all .2s ease',
		},
		'& img': {
			maxWidth: '100%',
			overflow: 'hidden',
			display: 'block',
			width: '100%',
			height: '100%',
			position: 'static',
			objectFit: 'contain',
			transition: 'all .2s ease',
		},
		'&:hover img': {
			opacity: 0.3,
		},
	},
	boxImg: {
		display: 'block',
		// alignItems: "center",
		// justifyContent: "center",
		width: '100%',
		height: '100%',
		position: 'static',
		objectFit: 'contain',
		padding: '5px',
	},
	noMouseEvent: {
		pointerEvents: 'none',
		position: 'relative',
	},
	iconText: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		position: 'absolute',
		top: 0,
	},
	hidden: {
		display: 'none',
	},
	onDragOver: {
		'& img': {
			opacity: 0.3,
		},
		'& p, svg': {
			opacity: 1,
		},
	},
	iconClose: {
		position: 'absolute',
		top: '5px',
		right: '5px',
		background: 'white',
		borderRadius: '50%',
		zIndex: 3,
		width: '20px',
		height: '20px',
	},
});

const FileUpload: React.FC<FileUploadProps> = ({
	name,
	accept,
	previewImage = false,
	hoverLabel = 'Chọn hoặc kéo file vào khu vực này',
	dropLabel = 'Thả file vào đây',
	width = '150px',
	height = '150px',
	backgroundColor = '#f5f6f7',
	image: {
		url = '',
		imageStyle = {
			height: 'inherit',
		},
	} = {},
	onChange,
}) => {
	const classes = useStyle();
	const [imageUrl, setImageUrl] = React.useState(url);
	const [labelText, setLabelText] = React.useState<string>(hoverLabel);
	const [isDragOver, setIsDragOver] = React.useState<boolean>(false);
	const [isMouseOver, setIsMouseOver] = React.useState<boolean>(false);
	const [renClass, setRenClass] = React.useState<any>({
		hidden: '',
		root: '',
		onDragOver: '',
		noMouseEvent: '',
		iconText: '',
		boxImg: '',
		iconClose: '',
	});

	const stopDefaults = (e: React.DragEvent) => {
		e.stopPropagation();
		e.preventDefault();
	};
	const dragEvents = {
		onMouseEnter: () => {
			setIsMouseOver(true);
		},
		onMouseLeave: () => {
			setIsMouseOver(false);
		},
		onDragEnter: (e: React.DragEvent) => {
			stopDefaults(e);
			setIsDragOver(true);
			setLabelText(dropLabel);
		},
		onDragLeave: (e: React.DragEvent) => {
			stopDefaults(e);
			setIsDragOver(false);
			setLabelText(hoverLabel);
		},
		onDragOver: stopDefaults,
		onDrop: (e: React.DragEvent<HTMLElement>) => {
			stopDefaults(e);
			setLabelText(hoverLabel);
			setIsDragOver(false);
			if (previewImage && e.dataTransfer.files[0]) {
				setImageUrl(URL.createObjectURL(e.dataTransfer.files[0]));
			}
			onChange({ inputName: name, file: e.dataTransfer.files[0] });
		},
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event?.target?.files || [];
		if (previewImage && files?.length > 0) {
			setImageUrl(URL.createObjectURL(files[0]));
		}

		onChange({ inputName: name, file: files[0] });
	};

	useEffect(() => {
		setRenClass(classes);
	}, [classes]);

	const deleleUpload = (e: any) => {
		e.preventDefault();
		setImageUrl('');
		onChange({ inputName: name, file: undefined });
	};

	return (
		<div>
			<input
				onChange={handleChange}
				accept={accept}
				className={renClass?.hidden}
				id={name}
				type="file"
				name={name}
			/>

			<label
				htmlFor={name}
				{...dragEvents}
				className={clsx(renClass?.root, isDragOver && renClass?.onDragOver)}
			>
				<Box
					width={width}
					height={height}
					bgcolor={backgroundColor}
					className={renClass?.noMouseEvent}
				>
					{previewImage && imageUrl && (
						<Box className={renClass?.boxImg} position="absolute" height={height} width={width}>
							<img alt="file upload" src={imageUrl} style={imageStyle} />
						</Box>
					)}

					{(!previewImage || isDragOver || isMouseOver || !imageUrl) && (
						<>
							<Box height={height} width={width} className={renClass?.iconText}>
								<CloudUploadIcon fontSize="large" />
								<Typography>{labelText}</Typography>
							</Box>
						</>
					)}
				</Box>
				{previewImage && imageUrl && (
					<div className={renClass?.iconClose} onClick={deleleUpload}>
						<CloseIcon fontSize="small" />
					</div>
				)}
			</label>
		</div>
	);
};

export default FileUpload;
