import React from "react";
import { Input, Label } from "reactstrap";

const InstallmentVoucher: React.FC = () => {
    return (
        <>
            <div>
                <p>Chọn trả góp</p>
                <a href="!#">Learn more</a>
            </div>
            <hr />
            <div className="form-check form-switch">
                <Input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <Label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    Nhập mã giảm giá
                </Label>
            </div>
        </>
    )
}
export default InstallmentVoucher;