import DashboardBanner from '../../assests/dashboardImg.png';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import { useState } from 'react';
// import store from '../../redux/store.js'
import { useSelector } from 'react-redux';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const Dashboard = () => {
    const {coin} = useSelector((state)=>state.counter);
    const [notification, setNotification] = useState([{ id: "T234F", name: "2 Packs of Mesalazine.", date: '12/04/2022' }, { id: "W2343", name: "1 Packs of Becadexamine.", date: '22/05/2022' }])
    return (
        <div id="dashboard" role="tabpanel" className="tab-pane active">
            <div className="container-fluid" >
                <div className="row row-cols-1 justify-content-center">
                    <section className="my-1">
                        <div className="row" style={{ background: '#ebe8fc', borderRadius: '15px' }}>
                            <div className="col-3 col-xl-3 col-md-3 my-4 dashboardImg">
                                <img src={DashboardBanner} alt="banner" style={{ width: '100%' }} />
                            </div>
                            <div className="col-9 col-xl-9 col-md-9 dashboardImg">
                                <h2 style={{ color: 'purple' }}> Never worry about your pharmacy</h2>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-6 col-xl-3 col-md-6 mb-4 dashboardImg">
                                <div className="card border-left-primary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div
                                                    className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    Earnings (Monthly)</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6  col-xl-3 col-md-6 mb-4 dashboardImg">
                                <div className="card border-left-success shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div
                                                    className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                    Earnings (Annual)</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-xl-3 col-md-6 mb-4 dashboardImg">
                                <div className="card border-left-info shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div
                                                    className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                                    Inventory
                                                </div>
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                        <div
                                                            className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                                            {coin/10*100}%</div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="progress progress-sm mr-2">
                                                            <div className="progress-bar bg-info"
                                                                role="progressbar" style={{ width: "50%" }}
                                                                aria-valuenow="50" aria-valuemin="0"
                                                                aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6  col-xl-3 col-md-6 mb-4 dashboardImg">
                                <div className="card border-left-warning shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div
                                                    className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                    Orders</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-comments fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-4">
                            {notification.length > 0 && notification.map((item, index) => (
                                <div key={index} className="card my-1 notificationCard">
                                    <div className="card-body">
                                        <h5 className="card-title"><i className="fa-regular fa-bell"></i>&nbsp; {item.name} </h5>
                                        <label style={{ color: "gray", fontSize: "smaller" }}>#{item.id}</label>
                                        <span style={{ fontSize: "smaller", color: "gray", float: "right" }}> {item.date}</span>
                                        <a href="#" onClick={() => setNotification(notification.filter((item, i) => (i != index) && item))} role="button" className="close-icon"><i className="fa-solid fa-xmark"></i></a>
                                        <p className="card-text">An anti-inflammatory agent, structurally related to the
                                            salicylates, which is active in inflammatory bowel disease. It is
                                            considered
                                            to be the active moiety of sulphasalazine. (From Martindale, The Extra
                                            Pharmacopoeia, 30th ed)</p>

                                    </div>
                                </div>
                            ))}

                            {/* <div className="card my-1 notificationCard">
                                <div className="card-body">
                                    <h5 className="card-title"><i className="fa-regular fa-bell"></i>&nbsp;New order
                                        received: #DB01246 </h5>
                                    <label style={{ color: "gray", fontSize: "smaller" }}>2 Packs of Mesalazine.</label>
                                    <span style={{ fontSize: "smaller", color: "gray", float: "right" }}> 12/02/2022</span>
                                    <a href="#" role="button" className="close-icon"><i className="fa-solid fa-xmark"></i></a>
                                    <p className="card-text">An anti-inflammatory agent, structurally related to the
                                        salicylates, which is active in inflammatory bowel disease. It is
                                        considered
                                        to be the active moiety of sulphasalazine. (From Martindale, The Extra
                                        Pharmacopoeia, 30th ed)</p>

                                </div>
                            </div> */}
                        </div>
                        <div className="row mt-4 py-2 notificationCard" style={{ background: 'white', borderRadius: '15px' }}>
                            <div className="col col-xl col-md-6 mb-4 " style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', margin: '0 auto' }}>
                                <Line options={options} data={data} />;
                            </div></div>
                    </section>
                    {/* <canvas className="my-4 w-100" id="myChart2" width="900" height="380"></canvas> */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;