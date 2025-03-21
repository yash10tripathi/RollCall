import React, { useRef, useState } from "react";
import * as faceapi from "face-api.js";
import Header from "./header.js";
import Sidebar from "./sidebar.js";
import "./attendance.css";
const AttendanceT = () => {
  const [modelsLoaded, setModelsLoaded] = React.useState(false);
  const [captureVideo, setCaptureVideo] = React.useState(false);
  const [reports, setreports] = useState([]);
  const videoRef = useRef();
  const videoHeight = 480;
  const videoWidth = 640;
  const canvasRef = useRef();

  React.useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + "/models";

      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
      ]).then(setModelsLoaded(true));
    };
    loadModels();
  }, []);

  const startVideo = () => {
    setCaptureVideo(true);
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  const handleVideoOnPlay = () => {
    setInterval(async () => {
      const labeledFaceDescriptors = await loadLabeledImages();
      const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6);
      if (canvasRef && canvasRef.current) {
        canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
          videoRef.current
        );
        const displaySize = {
          width: videoWidth,
          height: videoHeight,
        };

        faceapi.matchDimensions(canvasRef.current, displaySize);

        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceLandmarks()
          .withFaceDescriptors();

        const resizedDetections = faceapi.resizeResults(
          detections,
          displaySize
        );

        const results = resizedDetections.map((d) =>
          faceMatcher.findBestMatch(d.descriptor)
        );
        results.forEach((result, i) => {
          const box = resizedDetections[i].detection.box;
          const drawBox = new faceapi.draw.DrawBox(box, {
            label: result.toString(),
          });
          let res = result.toString();
          const arr = res.split(" ");
          if (arr[0] != "unknown") {
            closeWebcam();
            attendanceupdate(res.split("(")[0]);
          }
          drawBox.draw(canvasRef.current);
        });
      }
    }, 100);
  };

  const closeWebcam = () => {
    videoRef.current.pause();
    videoRef.current.srcObject.getTracks()[0].stop();
    setCaptureVideo(false);
  };

  const attendanceupdate = (props) => {
    fetch("http://127.0.0.1:8000/backapi/attendance/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: props }),
    })
      .then((data) => data.json())
      .catch((error) => console.error(error));
  };

  const loadreports = () => {
    fetch("http://127.0.0.1:8000/backapi/attendance/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setreports(data);
      })
      .catch((error) => console.error(error));
  };

  function loadLabeledImages() {
    const labels = [
      "Black Widow",
      "Captain America",
      "Captain Marvel",
      "Hawkeye",
      "Jim Rhodes",
      "Thor",
      "Tony Stark",
    ];
    return Promise.all(
      labels.map(async (label) => {
        const descriptions = [];
        for (let i = 1; i <= 2; i++) {
          const img = await faceapi.fetchImage(
            `https://raw.githubusercontent.com/WebDevSimplified/Face-Recognition-JavaScript/master/labeled_images/${label}/${i}.jpg`
          );
          const detections = await faceapi
            .detectSingleFace(img)
            .withFaceLandmarks()
            .withFaceDescriptor();
          descriptions.push(detections.descriptor);
        }

        return new faceapi.LabeledFaceDescriptors(label, descriptions);
      })
    );
  }
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Attendance</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">Dashboard</li>
                    <li className="breadcrumb-item active">Attendance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row filter-row" style={{ position: "relative" }}>
              <div>
                <div style={{ textAlign: "center", padding: "10px" }}>
                  {captureVideo && modelsLoaded ? (
                    <button
                      onClick={closeWebcam}
                      style={{ cursor: "pointer" }}
                      className="btn btn-outline-success btn-lg"
                    >
                      Close Webcam
                    </button>
                  ) : (
                    <button
                      onClick={startVideo}
                      style={{ cursor: "pointer" }}
                      className="btn btn-outline-success btn-lg"
                    >
                      Open Webcam
                    </button>
                  )}
                </div>
                {captureVideo ? (
                  modelsLoaded ? (
                    <div
                      style={{
                        position: "relative",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          padding: "10px",
                          position: "relative",
                          textAlign: "center",
                        }}
                      >
                        <video
                          ref={videoRef}
                          height={videoHeight}
                          width={videoWidth}
                          onPlay={handleVideoOnPlay}
                          style={{ borderRadius: "10px" }}
                        />
                        <canvas
                          ref={canvasRef}
                          style={{ position: "absolute", left: "300px" }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div>loading...</div>
                  )
                ) : (
                  <></>
                )}
              </div>

              <div className="row-filter-row" style={{textAlign:'center',display:'inline-block'}}>
                <div className="d-grid">
                  <div
                    className="btn btn-success check-attendance btn-lg"
                    style={{width:'500px',marginLeft:'350px'}}
                    onClick={loadreports}
                  >
                    Check Attendance{" "}
                  </div>
                </div>
              </div>
            </div>
            <table className="table table-striped  no-footer table-bordered table-responsive">
              <thead>
                <tr role="row">
                  <th style={{ width: "600px" }}>User</th>
                  <th style={{ width: "700px" }}>Date of Attendance</th>
                </tr>
              </thead>

              <tbody>
                {reports.map((report) => {
                  return (
                    <tr key={report.id}>
                      <td>{report.title}</td>
                      <td>{report.checkin}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default AttendanceT;
