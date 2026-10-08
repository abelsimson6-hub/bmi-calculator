import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [BMI, setBmi] = useState("");
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    const weightValue = Number(weight);
    const heightValue = Number(height) / 100;

    if (weightValue <= 0 || heightValue <= 0) {
      alert("Please enter valid weight and height");
      return;
    }

    const bmiValue = weightValue / (heightValue * heightValue);

    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setResult("You are underweight");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setResult("You have a healthy weight");
    } else {
      setResult("You are overweight");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={10} md={7} lg={5} xl={4}>

          {/* Main Card */}
          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          >

            {/* Title */}
            <div style={{ textAlign: "center", marginBottom: "25px" }}>
              <h1
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                BMI Calculator
              </h1>

              <p
                style={{
                  color: "#666",
                  margin: 0,
                  fontSize: "16px",
                }}
              >
                Check your Body Mass Index
              </p>
            </div>

            {/* Weight */}
            <div style={{ marginBottom: "18px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "7px",
                }}
              >
                Weight
              </label>

              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="number"
                  placeholder="Enter weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #aaa",
                    borderRadius: "5px",
                    outline: "none",
                  }}
                />

                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: "16px",
                  }}
                >
                  kg
                </span>
              </div>
            </div>

            {/* Height */}
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "7px",
                }}
              >
                Height
              </label>

              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="number"
                  placeholder="Enter height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #aaa",
                    borderRadius: "5px",
                    outline: "none",
                  }}
                />

                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: "16px",
                  }}
                >
                  cm
                </span>
              </div>
            </div>

            {/* Button */}
            <Button
              variant="warning"
              onClick={calculateBMI}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                fontWeight: "500",
                borderRadius: "6px",
                border: "none",
              }}
            >
              Calculate BMI
            </Button>

            {/* Result */}
            {BMI !== "" && (
              <div
                style={{
                  marginTop: "25px",
                  padding: "20px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                  textAlign: "center",
                  border: "1px solid #ddd",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#666",
                    fontSize: "15px",
                  }}
                >
                  Your BMI
                </p>

                <h2
                  style={{
                    margin: "8px 0",
                    fontSize: "30px",
                    fontWeight: "bold",
                  }}
                >
                  {BMI}
                </h2>

                <p
                  style={{
                    margin: 0,
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  {result}
                </p>
              </div>
            )}

          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;