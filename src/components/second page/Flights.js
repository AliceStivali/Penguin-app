import "../../style/Flights.css";
import airportList from "../first page/data.js";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { BookForm } from "./booking/BookForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: "fit-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function Flights(data) {
  const dep = data.data.itineraries[0].segments[0].departure;
  const arr = data.data.itineraries[0].segments[0].arrival;
  const duration = data.data.itineraries[0].segments[0].duration
    .slice(2)
    .toLowerCase();
  const price = data.data.price.total;

  const depDate = dep.at.slice(0, 10);
  const arrDate = arr.at.slice(0, 10);
  const depTime = dep.at.slice(11, -3);
  const arrTime = dep.at.slice(11, -3);
  const company = data.data.validatingAirlineCodes[0];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [cityName, setCityName] = useState({
    depCity: airportList.find(({ iata_code }) => iata_code === dep.iataCode),
    arrCity: airportList.find(({ iata_code }) => iata_code === arr.iataCode),
  });

  return (
    data && (
      <div className="single-flight-container">
        <div className="flight-flex-container" style={{ alignItems: "center" }}>
          <div className="company-img">
            <img
              src={`../company-logos/${company}.jpg`}
              alt={`${company}`}
              style={{ width: "50px", borderRadius: "50%" }}
            />
          </div>
          <div className="dep-arr-container">
            <div className="flights-departure">
              <div>
                <img
                  src="./plane-dep.png"
                  alt="dep"
                  style={{ width: "50px" }}
                />
              </div>
              <div
                style={{
                  width: "13rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {dep.iataCode} - {cityName.depCity.name}
              </div>
              <div>{depDate}</div>
              <div>{depTime}</div>
            </div>
            <div className="flights-arrival">
              <div>
                <img
                  src="./plane-arr.png"
                  alt="arr"
                  style={{ width: "50px" }}
                />
              </div>
              <div
                style={{
                  width: "13rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {arr.iataCode} - {cityName.arrCity.name}
              </div>
              <div>{arrDate}</div>
              <div>{arrTime}</div>
            </div>
          </div>
          <div className="flight-details">
            <div>{duration}</div>
            <div style={{ fontSize: "25px" }}>{price}€</div>
            <div>
              <button
                className="card-book-button flights-button"
                onClick={handleOpen}
              >
                Book <br />
                now
              </button>
              <Modal
                sx={{ overflow: "scroll", height: "100%" }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Booking form
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <BookForm />
                  </Typography>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            className="flights-button-mobile search-button"
            onClick={handleOpen}
          >
            Book now
          </button>
        </div>
      </div>
    )
  );
}
