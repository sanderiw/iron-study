function StudentReport() {
  return (
    <div className="row gutters-sm3">
      <div className="card h-100">
        <div className="card-body">
          <h6 className="d-flex align-items-center mb-3">
            <i className="material-icons text-info mr-2">assignment</i>Project
            Status
          </h6>
          <small>Web Design</small>
          <div className="progress mb-3" style={{height: '5px'}}>
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{width: '80%'}}
            ></div>
          </div>
          <small>Website Markup</small>
          <div className="progress mb-3" style={{height: '5px'}}>
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{width: '72%'}}
            ></div>
          </div>
          <small>One Page</small>
          <div className="progress mb-3" style={{height: '5px'}}>
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{width: '89%'}}
            ></div>
          </div>
          <small>Mobile Template</small>
          <div className="progress mb-3" style={{height: '5px'}}>
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{width: '55%'}}
            ></div>
          </div>
          <small>Backend API</small>
          <div className="progress mb-3" style={{height: '5px'}}>
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{width: '66%'}}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default StudentReport;