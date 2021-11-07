import React, { Component } from "react";
import {
  CardBody,
  CardTitle,
  CardSubtitle,
  Card,
  CardText,
  CardImg,
} from "reactstrap";

export default class Country extends Component {
  render() {
    return (
      <div>
        {this.props.country
          .filter((country) =>
            country.name.toLowerCase().includes(this.props.search.toLowerCase())
          )
          .map((country) => (
            <Card>
              <CardBody key={country.numericCode}>
                <CardTitle tag="h5">{country.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {country.nativeName} {country.region}
                </CardSubtitle>
                <CardText>
                  <CardImg
                    alt="Card image cap"
                    src={country.flag}
                    top
                    className="flag"
                  />
                </CardText>
              </CardBody>
            </Card>
          ))}
      </div>
    );
  }
}
