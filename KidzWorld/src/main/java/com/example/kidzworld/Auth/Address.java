package com.example.kidzworld.Auth;

import lombok.Getter;
import lombok.Setter;

import java.util.Objects;

@Getter
@Setter
public class Address {

    private String fullName;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String state;
    private String zipCode;
    private String country;

    public Address(String fullName, String addressLine1, String addressLine2, String city, String state, String zipCode, String country){
        this.fullName = fullName;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.country = country;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Address address = (Address) o;
        return Objects.equals(fullName, address.fullName) &&
                Objects.equals(addressLine1, address.addressLine1) &&
                Objects.equals(addressLine2, address.addressLine2) &&
                Objects.equals(city, address.city) &&
                Objects.equals(state, address.state) &&
                Objects.equals(zipCode, address.zipCode) &&
                Objects.equals(country, address.country);
    }

}
