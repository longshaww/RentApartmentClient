import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./widgetLg.css";

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 200 },
	{
		field: "tenBct",
		headerName: "Name Lessor",
		width: 300,
		renderCell: (params) => {
			return (
				<>
					<Link
						to={`/${params.row.maBct}`}
						className="d-flex text-decoration-none text-dark"
					>
						<img
							src={params.row.hinhAnhBcts}
							className="img-fluid rounded-circle me-2"
							style={{
								width: "50px",
								height: "50px",
							}}
						/>
						<div>{params.row.tenBct}</div>
					</Link>
				</>
			);
		},
	},
	{ field: "tenKH", headerName: "Name customer", width: 200 },
	{ field: "tenCanHo", headerName: "Name Apart", width: 200 },
	{ field: "ngayTao", headerName: "Date", width: 200 },
	{ field: "trangThai", headerName: "Status", type: "boolean", width: 150 },
	{ field: "thue", headerName: "Tax", type: "number", width: 150 },
	{
		field: "tongTienCanHo",
		headerName: "Sub Total",
		type: "number",
		width: 150,
	},
	{ field: "tongTien", headerName: "Total", type: "number", width: 150 },

	{
		field: "action",
		headerName: "Action",
		width: 200,
		renderCell: (params) => {
			return (
				<>
					<Link to={`/admin/bill/${params.row.id}`}>
						<AiOutlineEye size={25} />
					</Link>
				</>
			);
		},
	},
];

const WidgetLg: React.FC<any> = ({ rows }) => {
	return (
		<>
			{rows && (
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
			)}
		</>
	);
};

export default WidgetLg;
