
import { Company } from "./Comapny";
import { CustomMap } from "./CustomMap"
import { User } from "./User"


const map = new CustomMap();

map.AddMarker(new User)
map.AddMarker(new Company)