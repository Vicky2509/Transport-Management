package trans;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AccessLevel;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC, force = true)
public class Driver {
    @Id
    @Column(name = "id_card")
    @Pattern(regexp = "^[0-9]{9}|[0-9]{12}$", message = "Enter your 9- or 12-digit ID card number")
    private String idCard;

    @NotNull
    @Size(min = 5, message = "Must enter name greater than 5 characters")
    private String name;

    @NotNull
    @Pattern(regexp = "^[0-9]{12}$", message = "Enter the 12 numbers on your driver's license")
    private String license;


    @NotBlank(message = "Address not be vacant")
    private String address;

    @Pattern(regexp = "^(0[1-9]|1[0-9]|2[0-9]|3[0-1])([\\/])(0[1-9]|1[0-2])([\\/])(19[0-9][0-9]|2[0-9][0-9][0-9])$",
            message = "Enter the correct format DD/MM/YY")
    private String birth;

}
