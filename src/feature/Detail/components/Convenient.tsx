import React, { useState } from "react";
// import { get } from "../../../utils/api";

const Convenient: React.FC = () => {
	const [dataConvenient, setDataConvenient] = useState<any>([]);

	return (
		<>
			<div>
				<div>Tiện nghi căn hộ / Biệt thự</div>
				<ul>
					{dataConvenient.map((convenient: any) => (
						<li className="">{convenient.tienNghiBCT}</li>
					))}
				</ul>
			</div>
		</>
	);
};
export default Convenient;
