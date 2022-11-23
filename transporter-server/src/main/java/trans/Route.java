package trans;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Data
@Entity
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank(message = "Please enter the starting point")
    private String first_point;

    @NotBlank(message = "Please enter the endpoint")
    private String end_point;

    @DecimalMin(value = "0.00001", message = "Enter distance length greater than 0")
    @NotNull(message = "Please enter the distance")
    private Float length;

    @Min(value = 1, message = "Choose complexity")
    private int complexity;

}
