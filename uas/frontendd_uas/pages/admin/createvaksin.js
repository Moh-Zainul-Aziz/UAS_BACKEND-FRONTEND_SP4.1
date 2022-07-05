import React from "react";
import LayoutAdmin from "../../component/admin/LayoutAdmin";
import CreateVaksin from "../../component/admin/CreateVaksin";
const createvaksin = () => {
    return(
        <LayoutAdmin>
            <div>
            <CreateVaksin/>
            </div>
        </LayoutAdmin>
    )
}

export default createvaksin;