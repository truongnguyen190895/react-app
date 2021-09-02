import React from "react";
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
const { v4: uuidv4 } = require("uuid");
uuidv4();

export default function SessionDetail(props) {
  const history = useHistory();

  function handleBack(e) {
    e.preventDefault();
    history.push("/");
  }
  return (
    <div className="sessiondetail">
      <div className="row">
        <div className="col-12">
          <div
            style={{
              marginTop: "45px",
              marginBottom: "31px",
              fontSize: "30px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                cursor: "pointer",
              }}
            >
              Go out together
            </div>
            <div style={{ cursor: "pointer" }}>
              <FaUser />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1 style={{ textAlign: "center" }}>Bạn đang tham gia nhóm: </h1>
          <h3
            style={{
              color: "#3b82f6",
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "25px",
              marginBottom: "30px",
            }}
          >
            {uuidv4()}
          </h3>
        </div>
      </div>
      <div className="col-12">
        <h3 style={{ textAlign: "center" }}>Địa điểm được vote nhiều nhất</h3>
        <h3 style={{ textAlign: "center", marginBottom: "80px" }}>---</h3>
      </div>
      <div className="row">
        <div className="col-4">
          <h4>Tiêu đề</h4>
          <h4>Nội dung</h4>
        </div>
        <div className="col-4" style={{ textAlign: "center" }}>
          <h4>Session đã kết thúc</h4>
          <h5>
            {/* <FaClock /> */}
            <input type="time" />
          </h5>
        </div>
        <div className="col-4">
          <div>
            <h4>Các thành viên đã tham gia</h4>
            <h5
              style={{
                cursor: "pointer",
              }}
            >
              <FaUser />
            </h5>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: "60px", marginBottom: "60px" }}>
        <div className="col-12">
          <h4>Các địa điểm ăn chơi</h4>
        </div>
        <div className="col-12">
          <h4
            style={{
              cursor: "pointer",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
            {" "}
            <FaMapMarkedAlt />
            dia diem 1
          </h4>
        </div>
        <div className="col-12">
          <h4
            style={{
              cursor: "pointer",
            }}
          >
            {" "}
            <FaMapMarkedAlt />
            dia diem 2
          </h4>
        </div>
      </div>
      <button className="btn btn-danger" onClick={handleBack}>
        Quay lại
      </button>
    </div>
  );
}
