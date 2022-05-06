import React from "react";
import { Button } from "reactstrap";

const ConfirmButton: React.FC = () => {
    return (<>
        <div className="text-end">
            <Button
                type="submit"
                form="formpay"
                value="Submit"
                className="fw-bold btn_price px-4 py-2"
            >
                Thanh toán
            </Button>
        </div>
    </>)
}
export default ConfirmButton;