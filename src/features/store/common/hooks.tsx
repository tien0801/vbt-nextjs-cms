import Tag from "@/src/components/Tags";
import Link from "next/link";
import { useMemo } from "react";
import { FormikDataType } from "./types";

export const initialValues: FormikDataType = {
  name: "",
  lat: 0,
  lng: 0,
  address: "",
  provinceId: 0,
  districtId: 0,
  wardId: 0,
  openTime: "",
  closeTime: "",
  active: true,
};

export const useColumns = () => {
  const columns = useMemo(() => {
    return [
      {
        flex: 1,
        headerName: "Tên cửa hàng",
        field: "name",
        renderCell: ({ row: record }: any) => {
          return (
            <Link href={`/store/${record.id}`} passHref>
              <a className="link-primary" href="">
                {record.name}
              </a>
            </Link>
          );
        },
      },
      {
        flex: 1,
        headerName: "Địa chỉ",
        field: "address",
      },
      {
        flex: 1,
        headerName: "Tình trạng hoạt động",
        field: "active",
        renderCell: ({ row: record }: any) => {
          return (
            <Tag
              label={record.active ? "Đang hoạt động" : "Ngưng hoạt động"}
              color={record.active ? "success" : "error"}
            />
          );
        },
      },
    ];
  }, []);

  return columns;
};
