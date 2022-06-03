import { useEffect, useState } from "react";
import axiosMethod from "../../../utils/api";
import WidgetLg from "../components/widgetLg/WidgetLg";

const TransactionAdmin: React.FC = () => {
	const [tableData, setTableData] = useState<any>([]);

	useEffect(() => {
		async function getBill() {
			const tableData = await axiosMethod("bill", "get");
			setTableData(tableData);
		}
		getBill();
	}, []);
	return <WidgetLg rows={tableData} />;
};

export default TransactionAdmin;
