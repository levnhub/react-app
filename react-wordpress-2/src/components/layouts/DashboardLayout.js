import React from 'react';
import SidebarMenu from "./../dashboard/sidebar/SidebarMenu";
import Content from "../content/Content";

const DashboardLayout = ( props ) => {

  return (
    <React.Fragment>
      <div className="wrapper">
        <SidebarMenu/>
        <Content>
          { props.children }
        </Content>
      </div>
    </React.Fragment>
  )
};

export default DashboardLayout
