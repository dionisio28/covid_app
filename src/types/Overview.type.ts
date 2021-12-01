import { Places } from "./Places.type";

export default interface OverviewContextProps {
    places: Places;
    isLoading: boolean;
    loadPlaces(): Promise<void>;
}
