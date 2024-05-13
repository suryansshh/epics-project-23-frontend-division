export const userColumns = [
  { field: "id", headerName: "ID", width: 200 },
  {
    field: "username",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.username}</div>;
    },
  },
  { field: "useremail", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone", width: 150 },
  {
    field: "address",
    headerName: "Address",
    width: 200,
  },
  {
    field: "country",
    headerName: "Country",
    width: 150,
  },
];