package trans;

import com.fasterxml.jackson.annotation.*;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Data
@Entity
public class Journey {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Min(value = 1, message = "Enter the number of guests greater than or equal to 1 and less than the number of seats ")
    private int guest_quanity;

    @NotNull(message = "Do not leave blank")
    private double fare;

    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "vehicle_license_plate", nullable = false)
    private Vehicle vehicle;

    @JsonManagedReference
    @ManyToOne()
    @JoinColumn(name = "route_id", nullable = false)
    private Route route;

    @JsonBackReference
    @OneToMany(mappedBy = "journeys")
    List<JourneyDriver> journeyDrivers = new ArrayList<>();

    public void addJourneyDriver(JourneyDriver journeyDriver) {
        this.journeyDrivers.add(journeyDriver);
    }
}
