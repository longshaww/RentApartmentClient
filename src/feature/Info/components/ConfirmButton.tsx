import React from "react";
import { Button } from "reactstrap";

const ConfirmButton: React.FC = () => {
    return (<>
        <div className="text-end mb-5">
            <Button
                type="submit"
                form="formpay"
                value="Submit"
                className="fw-bold btn_price px-4 py-2"
            >
                Tiếp tục
            </Button>
        </div>
    </>)
}
export default ConfirmButton;