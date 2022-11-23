package trans;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.*;

@Data
@Entity

public class Vehicle {
    @Id
    @Pattern(regexp = "^[0-9]{2}[A-Za-z]-[0-9]{4,5}$", message = "Enter the correct format, for example: 17B-73684")
    @Column(name = "license_plate")
    private String licensePlate;

    @NotBlank(message = "Please enter color")
    private String colour;

    @NotBlank(message = "Please enter manufacturer")
    private String manufacturer;

    @NotBlank(message = "Please enter year of manufacture")
    private String manufacture_year;

    @NotBlank(message = "Please enter model")
    private String model;

    @NotNull
    @Min(value = 3, message = "Enter the number of seats greater than or equal to 3")
    private int seat;

    @NotNull
    @Min(value = 1, message = "Enter the number of years of use greater than or equal to 1")
    private int year_of_use;

    @Pattern(regexp = "^(0[1-9]|1[0-9]|2[0-9]|3[0-1])([\\/])(0[1-9]|1[0-2])([\\/])(19[0-9][0-9]|2[0-9][0-9][0-9])$",
            message = "Enter the correct format DD/MM/YY")
    private String maintenance_day;

}
