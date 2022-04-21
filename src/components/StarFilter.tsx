import React from "react";
// import Icon from './Icon';
import { FormGroup, Input, Label } from "reactstrap";

interface StarFilterProps {
	onChanged?: (payload: number[]) => void;
}

const StarFilter: React.ComponentType<StarFilterProps> = ({ onChanged }) => {
	const data = [1, 2, 3, 4, 5];
	const payload = React.useRef<number[]>([]);

	const _onCheckChange = (num: number, checked: boolean) => {
		if (checked) {
			payload.current.push(num);
		} else {
			payload.current = payload.current.filter((i) => i !== num);
		}
		onChanged && onChanged(payload.current);
	};

	const renderStars = (numOfStar: number) => {
		const stars = [];
		for (let i = 0; i < numOfStar; i++) {
			stars.push(<Label check>{/* <Icon name="IcStar" /> */}</Label>);
		}
		return stars;
	};

	return (
		<>
			{data.map((num) => (
				<FormGroup check>
					<Input
						type="checkbox"
						onChange={(e) =>
							_onCheckChange(num, e.target.checked)
						}
					/>
					{renderStars(num)}
				</FormGroup>
			))}
		</>
	);
};
export default StarFilter;
