import { Chip } from "@mui/material";
import React from "react";

type Props = {
    label: string,
    color: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}   

const Tag: React.FC<Props> = ({ label, color }: Props) =>{
    return <Chip variant="outlined" label={label} color={color || 'default'} size='small' sx={{ fontWeight: 500 }} />
}

export default Tag;