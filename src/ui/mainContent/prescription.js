import { useState } from "react";

const Prescription = () => {
    const [temp, setTemp] = useState()
    const [age, setAge] = useState()
    const [symptoms, setSymptoms] = useState(['Headache'])
    const [showDiagnosis, setShow] = useState(false)

    return (
        <div id="e-prescription" role="tabpanel" className="tab-pane">
            <div className="container-fluid">
                <div className="row row-cols-1 justify-content-start">
                    <div className="row justify-content-start align-self-start" style={{ paddingRight: "0px" }}>
                        <div className="col-4">
                            <h4 className="my-2">E-prescription &nbsp;<i
                                className="fas fa-comments fa-1x text-gray-300"></i></h4>

                        </div>
                        <div className="col text-end align-self-end" style={{ paddingRight: "0px" }}>
                            <button type="button" className="btn btn-primary" id="diagnosis" onClick={() => setShow(true)}>
                                Diagnosis
                            </button>
                        </div>
                    </div>


                </div>
                <section className="mb-4">
                    <div className="mt-3 mb-3 row">
                        <label htmlFor="inputTemp" className="col-sm-2 col-form-label">Temperature in F</label>
                        <div className="col-sm-4">
                            <input type="number" className="form-control" value={temp} onChange={(e) => setTemp(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputAge" className="col-sm-2 col-form-label">Age</label>
                        <div className="col-sm-4">
                            <input type="number" className="form-control" id="inputAge" value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <p>Select Symptoms:</p>
                        </div>
                        <div className="col-sm-4">
                            <select className="form-control" aria-label="size" onChange={(e) => setSymptoms([...symptoms, e.target.value])}>
                                <option value="Headaches">Headaches</option>
                                <option value="Body aches">Body aches</option>
                                <option value="Toothaches">Toothaches</option>
                                <option value="Common cold">Common cold</option>
                                <option value="Nasal congestion">Nasal congestion</option>
                            </select>

                        </div>
                    </div>

                    <div className="mt-4 w-50">
                        <ul className="list-group  list-group-flush symptomsList">
                            {symptoms && symptoms.map((item, index) => {
                                return <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    {item} <a href="#" role="button" className="close-icon" onClick={() => setSymptoms(symptoms.filter((item, i) => (i != index) && item))}><i className="fa-solid fa-circle-xmark"></i></a>
                                </li>
                            })}
                        </ul>
                    </div>
                    <hr />
                    <h4 className=" my-4">Rx:</h4>
                    <div id="diagnosisTable" className="table-responsive  my-2" style={showDiagnosis ? { display: 'block' } : { display: 'none' }}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Dosage</th>
                                    <th scope="col">Days</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>PCM</td>
                                    <td>1-0-1</td>
                                    <td>3 days</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>DOLO</td>
                                    <td>1-0-1</td>
                                    <td>3 days</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Cetirizine</td>
                                    <td>1-0-1</td>
                                    <td>1 day</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>


            </div>
        </div>
    )
}

export default Prescription;