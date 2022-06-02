import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { AiOutlineEye } from "react-icons/ai";

import "./widgetLg.css";

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 200 },
	{
		field: "hinhAnhBcts",
		headerName: "Image",
		type: "image",
		width: 200,
		renderCell: (params) => {
			return (
				<img
					className="w-75 h-100"
					src={params.row.hinhAnhBcts}
					alt=""
				/>
			);
		},
	},
	{ field: "tongTien", headerName: "Total", type: "number", width: 150 },
	{ field: "ngayTao", headerName: "Date", width: 200 },
	{ field: "trangThai", headerName: "Status", type: "boolean", width: 150 },
	{ field: "tenCanHo", headerName: "Name Apart", width: 200 },
	{ field: "tenBct", headerName: "Name Lessor", width: 200 },
	{ field: "tenKH", headerName: "Name customer", width: 200 },
	{
		field: "action",
		headerName: "Action",
		width: 200,
		renderCell: (params) => {
			return (
				<>
					<AiOutlineEye size={25} />
				</>
			);
		},
	},
];

const WidgetLg: React.FC<any> = ({ rows }) => {
	return (
		<div className="widgetLg">
			<h3 className="widgetLgTitle">Latest transactions</h3>
			<div style={{ height: 400, width: "100%" }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
					checkboxSelection
				/>
			</div>
		</div>
	);
};

export default WidgetLg;
