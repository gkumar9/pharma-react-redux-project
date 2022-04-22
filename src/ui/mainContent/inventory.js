import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
// import $ from "jquery";
// // window.jQuery = $;
// // window.$ = $;
// // global.jQuery = $;

const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const Inventory = () => {
    const [invertorydata, setInventoryData] = useState([])
    const [editDataInventory, seteditDataInventory] = useState([])
    const [deleteInventoryID, setdeleteInventoryID] = useState();

    const [inputID, setInputID] = useState('');
    const [inputName, setInputName] = useState('')
    const [inputDescription, setInputDescription] = useState('')
    const [inputPrice, setInputPrice] = useState('')
    const [inputQuantity, setInputQuantity] = useState(0)

    const [inputIDedit, setInputIDedit] = useState('');
    const [inputNameedit, setInputNameedit] = useState('')
    const [inputDescriptionedit, setInputDescriptionedit] = useState('')
    const [inputPriceedit, setInputPriceedit] = useState('')
    const [inputQuantityedit, setInputQuantityedit] = useState(0)

    useEffect(() => {
        fetch('//localhost:4000/rest-api/drugInventory')
            .then((res) => res.json())
            .then((data) => {
                setInventoryData((data.data))
            })
    }, []);

    const submitNewData = () => {
        // console.log(JSON.stringify({
        //     "DrugID": inputID,
        //     "DrugName": inputName,
        //     "DrugDescription": inputDescription,
        //     "DrugType": inputType,
        //     "DrugPrice": inputPrice,
        //     "DrugQuantity": inputQuantity
        // }))
        fetch('//localhost:4000/rest-api/new/drugInventory', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "DrugID": inputID,
                "DrugName": inputName,
                "DrugDescription": inputDescription,
                // "DrugType": inputType,
                "DrugPrice": inputPrice,
                "DrugQuantity": inputQuantity
            })
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                fetch('//localhost:4000/rest-api/drugInventory')
            .then((res) => res.json())
            .then((data) => {
                setInventoryData((data.data))
            })
                // window.$("#myModalADD").modal("hide")
            });
    }

    const editTable = (ID) => {
        // setNotification(setInventoryData.filter((item, i) => (i != index) && item))
        // console.log(ID)
        let tempEditItem = invertorydata.find((item) => item.DrugID == ID)
        seteditDataInventory(invertorydata.find((item) => item.DrugID == ID))
        setInputIDedit(tempEditItem.DrugID);
        setInputNameedit(tempEditItem.DrugName)
        setInputDescriptionedit(tempEditItem.DrugDescription)
        setInputPriceedit(tempEditItem.DrugPrice)
        setInputQuantityedit(tempEditItem.DrugQuantity)

    }

    const submitEditData = () => {
        fetch('//localhost:4000/rest-api/edit/drugInventory/' + editDataInventory.DrugID, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "DrugID": inputIDedit,
                "DrugName": inputNameedit,
                "DrugDescription": inputDescriptionedit,
                "DrugPrice": inputPriceedit,
                "DrugQuantity": inputQuantityedit
            })
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                fetch('//localhost:4000/rest-api/drugInventory')
            .then((res) => res.json())
            .then((data) => {
                setInventoryData((data.data))
            })
            });
    }

    const deleteData = () => {
        fetch('//localhost:4000/rest-api/delete/drugInventory/' + deleteInventoryID, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                fetch('//localhost:4000/rest-api/drugInventory')
            .then((res) => res.json())
            .then((data) => {
                setInventoryData((data.data))
            })
                // window.$("#myModalADD").modal("hide")
            });
    }
    return (
        <div id="drug-inventory" role="tabpanel" className="tab-pane">
            <div className="container-fluid">
                <div className="row row-cols-1 justify-content-start">
                    <div className="row justify-content-start align-self-start" style={{ paddingRight: "0px" }}>
                        <div className="col-4">
                            <h4 className="my-2">Drug inventory &nbsp;<i
                                className="fas fa-clipboard-list fa-1x text-gray-300"></i></h4>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar"
                                    style={{ width: "50%", fontSize: "smaller" }} aria-valuenow="50"
                                    aria-valuemin="0" aria-valuemax="100">50% Strength
                                </div>
                            </div>
                        </div>
                        <div className="col text-end align-self-end" style={{ paddingRight: "0px" }}>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#myModalADD">
                                + Add
                            </button>

                            <div className="modal fade" id="myModalADD" tabIndex="-1"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content text-start">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Add
                                                information related to new drug
                                            </h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form id="addDrugForm" className="formInput">
                                                <div className="row mb-3">
                                                    <label htmlFor="inputID"
                                                        className="col-sm-2 col-form-label">ID</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control"
                                                            id="inputID" required value={inputID} onChange={(e) => setInputID(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="inputName"
                                                        className="col-sm-2 col-form-label">Name</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control"
                                                            id="inputName" value={inputName} onChange={(e) => setInputName(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="inputDescription"
                                                        className="col-sm-2 col-form-label">Description</label>
                                                    <div className="col-sm-10">
                                                        <input type="textarea" className="form-control"
                                                            id="inputDescription" value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} />
                                                    </div>
                                                </div>
                                                {/* <fieldset className="row mb-3">
                                                    <legend className="col-form-label col-sm-2 pt-0">Type
                                                    </legend>
                                                    <div className="col-sm-10">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio"
                                                                name="gridRadios" id="gridRadios1"
                                                                value="Small molecule" />
                                                            <label className="form-check-label"
                                                                htmlFor="gridRadios1">
                                                                Small molecule
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio"
                                                                name="gridRadios" id="gridRadios2"
                                                                value="Biotech" />
                                                            <label className="form-check-label"
                                                                htmlFor="gridRadios2">
                                                                Biotech
                                                            </label>
                                                        </div>
                                                    </div>
                                                </fieldset> */}
                                                <div className="row mb-3">
                                                    <label htmlFor="inputPrice"
                                                        className="col-sm-2 col-form-label">Price</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control"
                                                            id="inputPrice" value={inputPrice} onChange={(e) => setInputPrice(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="inputQuantity"
                                                        className="col-sm-2 col-form-label">Quantity</label>
                                                    <div className="col-sm-10">
                                                        <input type="number" className="form-control"
                                                            id="inputQuantity" value={inputQuantity} onChange={(e) => setInputQuantity(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>

                                                    <button type="submit"
                                                        data-bs-dismiss="modal" className="btn btn-primary" onClick={() => submitNewData()}>Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModaledit" tabIndex="-1"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content text-start">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Edit
                                                information related to the drug
                                            </h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form id="editDrugForm" className="formInput">
                                                <div className="row mb-3">
                                                    <label htmlFor="inputIDedit"
                                                        className="col-sm-2 col-form-label">ID</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control"
                                                            id="inputIDedit" value={inputIDedit} onChange={(e) => setInputIDedit(e.target.value)} disabled />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="inputNameedit"
                                                        className="col-sm-2 col-form-label">Name</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" value={inputNameedit} onChange={(e) => setInputNameedit(e.target.value)}
                                                            id="inputNameedit" />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="inputDescriptionedit"
                                                        className="col-sm-2 col-form-label">Description</label>
                                                    <div className="col-sm-10">
                                                        <input type="textarea" className="form-control" value={inputDescriptionedit} onChange={(e) => setInputDescriptionedit(e.target.value)}
                                                            id="inputDescriptionedit" />
                                                    </div>
                                                </div>
                                                {/* <fieldset className="row mb-3">
                                                    <legend className="col-form-label col-sm-2 pt-0">Type
                                                    </legend>
                                                    <div className="col-sm-10">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio"
                                                                name="gridRadiosedit" id="gridRadios1edit"
                                                                value="Small molecule" />
                                                            <label className="form-check-label"
                                                                htmlFor="gridRadios1edit">
                                                                Small molecule
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio"
                                                                name="gridRadiosedit" id="gridRadios2edit"
                                                                value="Biotech" />
                                                            <label className="form-check-label"
                                                                htmlFor="gridRadios2edit">
                                                                Biotech
                                                            </label>
                                                        </div>
                                                    </div>
                                                </fieldset> */}
                                                <div className="row mb-3">
                                                    <label htmlFor="inputPriceedit"
                                                        className="col-sm-2 col-form-label">Price</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" value={inputPriceedit} onChange={(e) => setInputPriceedit(e.target.value)}
                                                            id="inputPriceedit" />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="inputQuantityedit"
                                                        className="col-sm-2 col-form-label">Quantity</label>
                                                    <div className="col-sm-10">
                                                        <input type="number" className="form-control" value={inputQuantityedit} onChange={(e) => setInputQuantityedit(e.target.value)}
                                                            id="inputQuantityedit" />
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>

                                                    <button type="submit" data-bs-dismiss="modal"
                                                        className="btn btn-primary" onClick={() => submitEditData()}>Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModalDelete" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Are you sure?</h5>
                                            {/* <!-- <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button> --> */}
                                        </div>
                                        <div className="modal-body">
                                            Once deleted, it will not be retieved.
                                        </div>
                                        <div className="modal-footer">
                                            <button id="deleteModalCancel" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                            <button onClick={() => deleteData()} id="deleteModalConfirm" type="button" data-bs-dismiss="modal" className="btn btn-primary">Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: '11' }}>
                                <div className="toast toastadd align-items-center" role="alert" aria-live="assertive"
                                    aria-atomic="true">
                                    <div className="d-flex">
                                        <div className="toast-body">
                                            Added new Drug to the inventory.
                                        </div>
                                        <button type="button" className="btn-close me-2 m-auto"
                                            data-bs-dismiss="toast" aria-label="Close"></button>
                                    </div>
                                </div>
                            </div>
                            <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: '11' }}>
                                <div className="toast toastedit align-items-center" role="alert" aria-live="assertive"
                                    aria-atomic="true">
                                    <div className="d-flex">
                                        <div className="toast-body">
                                            Edited the drug inventory.
                                        </div>
                                        <button type="button" className="btn-close me-2 m-auto"
                                            data-bs-dismiss="toast" aria-label="Close"></button>
                                    </div>
                                </div>
                            </div>
                            <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: '11' }}>
                                <div className="toast toastdelete align-items-center" role="alert" aria-live="assertive"
                                    aria-atomic="true">
                                    <div className="d-flex">
                                        <div className="toast-body">
                                            Deleted a drug from inventrory.
                                        </div>
                                        <button type="button" className="btn-close me-2 m-auto"
                                            data-bs-dismiss="toast" aria-label="Close"></button>
                                    </div>
                                </div>
                            </div> */}
                            <div id="confirm" className="modal">
                                <div className="modal-body">
                                    Are you sure!!?
                                </div>
                                <div className="modal-footer">
                                    <button onClick={() => deleteData()} type="button" data-dismiss="modal" className="btn btn-primary" id="delete">Delete</button>
                                    <button type="button" data-dismiss="modal" className="btn">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="my-4">
                        <div className="">
                            <div className="table-responsive" style={{ display: 'inline-grid' }}>
                                <DataTable
                                    expandableRows
                                    expandableRowsComponent={ExpandedComponent}
                                    columns={[
                                        {
                                            name: 'ID',
                                            selector: row => row.DrugID,

                                        }, {
                                            name: 'Name',
                                            selector: row => row.DrugName,
                                        },

                                        {
                                            name: 'Description',
                                            selector: row => row.DrugDescription,
                                        },
                                        // {
                                        //     name: 'Type',
                                        //     selector: row => row.DrugType,
                                        // },
                                        {
                                            name: 'Price',
                                            selector: row => row.DrugPrice,
                                        },
                                        {
                                            name: 'Quantity',
                                            selector: row => row.DrugQuantity,
                                        },
                                        {
                                            name: 'Edit',
                                            cell: row => (
                                                <a href="#" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModaledit" onClick={() => editTable(row.DrugID)} role="button" ><i class="fa-solid fa-pen-to-square"></i></a>
                                            )
                                        },
                                        {
                                            name: 'Delete',
                                            cell: row => (
                                                <a href="#" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModalDelete" onClick={() => setdeleteInventoryID(row.DrugID)} role="button" ><i class="fa-solid fa-trash"></i></a>
                                            )
                                        }
                                    ]}
                                    data={invertorydata}
                                />
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
export default Inventory;