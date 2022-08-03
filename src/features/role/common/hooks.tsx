import { Button } from "@mui/material";
import { useMemo } from "react";
import { FormikDataType } from "./types";
import Tag from "@/src/components/Tags";
export const initialValues: FormikDataType = {
  name: "",
  isDefault: false,
};

type Props = {
  onSelect: (id: number) => void;
};

export const useColumns = (props: Props) => {
  const { onSelect } = props;

  const columns = useMemo(
    () => [
      {
        headerName: "Mã",
        field: "id",
        width: 100,
      },
      {
        flex: 1,
        headerName: "Tên quyền hạn",
        field: "name",
        renderCell: ({ row: record }: any) => (
          <Button onClick={() => onSelect(record.id)}>{record.name}</Button>
        ),
      },
      {
        flex: 1,
        headerName: "Mặc định",
        field: "isDefault",
        renderCell: ({ row: record }: any) => (
          <Tag
            color="default"
            label={record?.isDefault ? "Mặc định" : "-"}
          ></Tag>
        ),
      },
    ],
    [onSelect]
  );

  return columns;
};
