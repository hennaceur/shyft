import React, { Component } from "react";
import "./css/Maps.css";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import Sale from "./images/icons/sale.png";
import Garage from "./images/icons/garage.png";
import Geocode from "react-geocode";
import Popup from "reactjs-popup";
import "./css/SearchInput.css";
import "./css/Popup.css";
import "./pages/menu/Card.css";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DeckIcon from "@material-ui/icons/Deck";
import AddIcon from "@material-ui/icons/Add";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Banner from "react-js-banner";

Geocode.setApiKey("AIzaSyDtlcbH_klvsg3ffoVE_6H2tylL4UxtatI");
Geocode.setLanguage("en");

const styles = {
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
};

class Maps extends Component {
  state = {
    banner1Css: { color: "#FFF", backgroundColor: "green" },
    showBannerNow: false,
    activeAds: [
      {
        adTitle: "Garage Sale",
        adLat: 47.542672,
        adLng: -52.720892,
        adDate: "2021-05-01",
        adType: "Furniture",
        adDesc: "Good condition furniture for sale",
        adPostal: "H8N 2B6",
      },
    ],
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
    title: "",
    descpritopn: "",
    currLats: "",
    currLng: "",
    loc: "",
    currAddress: "",
    name: "",
    listingTitle: "",
    listingType: "",
    listingDescription: "",
    listingPostalCode: "",
    listingDate: "",
    pos: "",
    showingAdInfo: false,
    showBannerTime: 0,
  };

  closeIt = () => {
    this.setState({
      showingAdInfo: false,
    });
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true,
    });

  getCenter = (mapProps, map) => {
    this.setState({
      currLats: map.center.lat(),
      currLng: map.center.lng(),
    });
  };
  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false,
      });
  };

  onNewAd = () => {
    console.log(this.state.listingPostalCode);
    Geocode.fromAddress(this.state.listingPostalCode).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        this.setState({
          activeAds: this.state.activeAds.concat([
            {
              adTitle: this.state.listingTitle,
              adLat: lat,
              adLng: lng,
              adType: this.state.listingType,
              adDesc: this.state.listingDescription,
              adPostal: this.state.listingPostalCode,
              adDate: this.state.listingDate,
            },
          ]),
          currLats: lat,
          currLng: lng,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  handleTitle = (e) =>
    this.setState({
      title: e.target.value,
    });

  handleChangeSearch = (address) => {
    this.setState({ currAddress: address });
  };

  handleChangeForm = (e) => {
    this.setState({ name: e.target.value });
  };

  handleListingType = (e) => {
    this.setState({ listingType: e.target.value });
  };
  handleListingPostalCode = (e) => {
    this.setState({ listingPostalCode: e.target.value });
  };
  handleListingTitle = (e) => {
    this.setState({ listingTitle: e.target.value });
  };
  handleListingDesc = (e) => {
    this.setState({ listingDescription: e.target.value });
  };
  handleListingDate = (e) => {
    this.setState({ listingDate: e.target.value });
  };

  showInfo = () => {
    this.setState({ showingAdInfo: true });
  };
  handleDateChange = (e) => {
    this.setState({ selectedDate: e.target.value });
    console.log(this.state.selectedDate);
  };

  handleSelectSeacrh = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
    console.log(this.state.currAddress);
    Geocode.fromAddress(this.state.currAddress).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        this.setState({ currLats: lat, currLng: lng });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  render() {
    if (!this.props.loaded) return <div>Loading...</div>;

    return (
      <div>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtlcbH_klvsg3ffoVE_6H2tylL4UxtatI&libraries=places"></script>
        <div className="mainHuncho">
          <div className="mapBox1">
            {this.state.activeAds.map((ad) => (
              <Popup
                trigger={
                  <ul>
                    <button
                      style={{
                        textDecoration: "none",
                        color: "black",
                        backgroundColor: "#FFBE58",
                        border: "#FFBE58",
                      }}
                      onClick={this.showInfo}
                    >
                      <div className="card">
                        <img src={Garage} alt="" />
                        <div className="card_body">
                          <h2>{ad.adTitle}</h2>
                          <h4>{ad.adDesc}</h4>
                        </div>
                      </div>
                    </button>
                  </ul>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <button
                      onClick={() => console.log("clicked")}
                      className="close"
                      onClick={close}
                    >
                      &times;
                    </button>
                    <div className="header"> Ad Info</div>
                    <div className="content2">
                      {" "}
                      <div className="adInfoBigGuy">
                        <div className="adInfo-box">
                          <div
                            style={{
                              background: "#E1373D",
                              color: "white",
                              borderRadius: "10px",
                            }}
                          >
                            <h1>{ad.adTitle}</h1>
                          </div>
                          <br></br>
                          <img
                            src={Garage}
                            alt=""
                            style={{ borderRadius: "10px" }}
                          />
                        </div>
                        <br></br>

                        <div className="adInfo-box">
                          <div
                            style={{
                              background: "#FFBE58",
                              color: "white",
                              borderRadius: "10px",
                            }}
                          >
                            <h3>Description</h3>
                          </div>
                          <h4>{ad.adDesc}</h4>
                          <br></br>
                          <div
                            style={{
                              background: "#FFBE58",
                              color: "white",
                              borderRadius: "10px",
                            }}
                          >
                            <h3>Event Type</h3>
                          </div>
                          <h4>{ad.adType}</h4>
                          <br></br>
                          <div
                            style={{
                              background: "#FFBE58",
                              color: "white",
                              borderRadius: "10px",
                            }}
                          >
                            <h3>Event Date</h3>
                          </div>
                          <h4>{ad.adDate}</h4>
                          <br></br>
                        </div>
                      </div>
                      <div className="contentBox2"></div>
                    </div>
                    <div className="actions">
                      <Button
                        onClick={() => {
                          this.setState({
                            showBannerNow: true,
                            showBannerTime: 3000,
                          });
                        }}
                        style={{
                          ...styles.button,
                        }}
                      >
                        {"Attend"}
                      </Button>
                    </div>
                  </div>
                )}
              </Popup>
            ))}
          </div>
          <div className="mapBox2">
            <Banner
              title="Event Registered Succesfully!"
              css={this.state.banner1Css}
              showBanner={this.state.showBannerNow}
              visibleTime={this.state.showBannerTime}
            />

            <Map
              className=""
              google={this.props.google}
              onClick={this.onMapClicked}
              style={{ height: "100%", position: "relative", width: "100%" }}
              containerStyle={{ height: "88%", maxWidth: "75%" }}
              mapTypeControl={false}
              zoom={14}
              fullscreenControl={false}
              initialCenter={{
                lat: 47.542672,
                lng: -52.720892,
              }}
              center={{
                lat: this.state.currLats,
                lng: this.state.currLng,
              }}
              onDragend={this.getCenter}
            >
              {this.state.activeAds.map((ad) => (
                <Marker
                  icon={Sale}
                  name={ad.adTitle}
                  desc={ad.adDesc}
                  pic={Garage}
                  onClick={this.onMarkerClick}
                  position={{ lat: ad.adLat, lng: ad.adLng }}
                />
              ))}

              <InfoWindow
                marker={this.state.activeMarker}
                onClose={this.onInfoWindowClose}
                visible={this.state.showingInfoWindow}
              >
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                  <h3>{this.state.selectedPlace.desc}</h3>
                  <img
                    src={this.state.selectedPlace.pic}
                    width="200"
                    height="100"
                    alt=""
                  />
                </div>
              </InfoWindow>
            </Map>
            <div className="inner">
              <div className="innerBox1">
                <PlacesAutocomplete
                  value={this.state.currAddress}
                  onChange={this.handleChangeSearch}
                  onSelect={this.handleSelectSeacrh}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => (
                    <div>
                      <input
                        {...getInputProps({
                          placeholder: "Search Places ...",
                          className: "inputFade",
                        })}
                      />
                      <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map((suggestion) => {
                          const className = suggestion.active
                            ? "suggestion-item--active"
                            : "suggestion-item";
                          const style = suggestion.active
                            ? { backgroundColor: "#FFBE58", cursor: "pointer" }
                            : { backgroundColor: "#E1373D", cursor: "pointer" };
                          return (
                            <div
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                              })}
                            >
                              <span>{suggestion.description}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
              </div>
              <div className="innerBox2">
                <div className="innerBox2-1">
                  <Popup
                    trigger={
                      <ul className="how">
                        <button className="addButton">+</button>
                      </ul>
                    }
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="modal">
                        <button
                          onClick={() => console.log("clicked")}
                          className="close"
                          onClick={close}
                        >
                          &times;
                        </button>
                        <div className="header"> Post New Ad</div>
                        <div className="content">
                          {" "}
                          <form className="" noValidate autoComplete="off">
                            <div className="contentBox1">
                              <div className="formInput">
                                <TextField
                                  id="outlined-name"
                                  label="Title"
                                  value={this.state.listingTitle}
                                  onChange={this.handleListingTitle}
                                  variant="outlined"
                                />
                              </div>
                              <div className="formInput">
                                <FormControl
                                  style={{ width: "200px" }}
                                  variant="outlined"
                                  className=""
                                >
                                  <InputLabel id="demo-simple-select-outlined-label">
                                    Type
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={this.state.listingType}
                                    onChange={this.handleListingType}
                                    label="Type"
                                  >
                                    <MenuItem value="">
                                      <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Collectables">
                                      <MonetizationOnIcon></MonetizationOnIcon>
                                      Collectables
                                    </MenuItem>
                                    <MenuItem value="Furniture">
                                      <DeckIcon></DeckIcon> Furniture
                                    </MenuItem>
                                    <MenuItem value="Other">
                                      <AddIcon></AddIcon> Other
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </div>
                            </div>
                            <div className="formInput">
                              <TextField
                                style={{ width: "450px" }}
                                id="outlined-name"
                                label="Description"
                                value={this.state.listingDescription}
                                onChange={this.handleListingDesc}
                                variant="outlined"
                              />
                            </div>
                            
                            <div className="formInput">
                              <TextField
                                id="outlined-name"
                                label="Postal Code"
                                value={this.state.listingPostalCode}
                                onChange={this.handleListingPostalCode}
                                variant="outlined"
                              />
                            </div>
                            <div className="formInput">
                              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                  <form className="" noValidate>
                                    <TextField
                                      id="date"
                                      label="Event Date"
                                      type="date"
                                      defaultValue="2017-05-24"
                                      className=""
                                      InputLabelProps={{
                                        shrink: true,
                                      }}
                                      value={this.state.listingDate}
                                      onChange={this.handleListingDate}
                                    />
                                  </form>
                                </Grid>
                              </MuiPickersUtilsProvider>
                            </div>
                          </form>
                          <div className="contentBox2"></div>
                        </div>
                        <div className="actions">
                          <Button
                            onClick={this.onNewAd}
                            style={{
                              ...styles.button,
                            }}
                          >
                            {"Post"}
                          </Button>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDtlcbH_klvsg3ffoVE_6H2tylL4UxtatI",
})(Maps);
