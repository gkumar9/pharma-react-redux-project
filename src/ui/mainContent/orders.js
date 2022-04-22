import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {
    CategoryScale,
    LinearScale,
    BarElement,
    Title
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

ChartJS.register(ArcElement, CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};
const dataq = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};
const Orders = () => {
    let [orderData, setOrderData] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/rest-api/orders')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.data);
                setOrderData((data.data))

            })
    }, []);
    // useEffect(() => {
    //     console.log('new valuw:', orderData)
    // }, [orderData])

    return (
        <div id="online-orders" role="tabpanel" className="tab-pane">
            <div className="container-fluid">
                <div className="row row-cols-1 justify-content-start">

                    <h4 className="my-2">Online orders &nbsp;<i
                        className="fas fa-dollar-sign fa-1x text-gray-300"></i></h4>
                    <section className="my-1">
                        <div className="table-responsive">
                            <DataTable
                                columns={[
                                    {
                                        name: 'Order ID',
                                        selector: row => row.OrderID,
                                    },
                                    {
                                        name: 'Order Status',
                                        selector: row => row.OrderStatus,
                                    },
                                    ,
                                    {
                                        name: 'Order Time',
                                        selector: row => row.OrderTime,
                                    },
                                    {
                                        name: 'Delivery Mode',
                                        selector: row => row.OrderDeliveryMode,
                                    },
                                    {
                                        name: 'Payment Method',
                                        selector: row => row.OrderPaymentMethod,
                                    }
                                ]}
                                data={orderData}
                                expandableRows
                                expandableRowsComponent={ExpandedComponent}
                            />

                        </div>
                    </section>
                    <hr />

                    <section className="my-2 row">
                        <h6 className="my-2">Analytics for sales:</h6>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true"
                                        aria-controls="collapseOne">
                                        Region/demography
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show "
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" >
                                        {/* <canvas id="myChart" style={{ width: "100%", maxWidth: "500px" }}></canvas> */}
                                        <Pie data={dataq} width={100}  height={50} options={{ maintainAspectRatio: false }}/>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                        aria-expanded="false" aria-controls="collapseTwo">
                                        Orders
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse "
                                    aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <Bar options={options} data={data} width={100} height={50} />

                                        {/* <canvas id="myChart1" style={{ width: "100%", maxWidth: "500px" }}></canvas> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>


                </div>
            </div>
        </div>
    )
}
export default Orders;