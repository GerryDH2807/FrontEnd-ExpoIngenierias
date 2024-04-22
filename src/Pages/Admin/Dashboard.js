import React from 'react';

import Widget from '../../Components/Widget/Widget';
import DoughnutChart from '../../Components/DoughnutChart/DoughnutChart';
import Checklist from '../../Components/Checklist/Checklist';
import Timer from '../../Components/Timer/Timer';
import { mockData } from '../../MockData/MockData';
import { checklistItems } from '../../MockData/MockData';

function Dashboard() {

    return (
      <>

      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-4">
            <Widget title={"Usuarios"} content={<DoughnutChart labels={mockData.user.labels} data={mockData.user.data}/>}/>
          </div>
          <div className="col-lg-4">
            <Widget title={"Categorías"} content={<DoughnutChart labels={mockData.project.labels} data={mockData.project.data}/>}/>
          </div>
          <div className="col-lg-4">
            <Widget title={"Revisión de Proyectos"} content={<DoughnutChart labels={mockData.projectStatus.labels} data={mockData.projectStatus.data}/>}/>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <Widget title={"Material Solicitado"} content={<Checklist initialItems={checklistItems}/>}/>
          </div>
          <div className="col-lg-4">
            <Widget title={"Tiempo para Expo-Ingeniería"} content={<Timer />}/>
          </div>
        </div>
      </div>
    </>
    );
}

export default Dashboard;