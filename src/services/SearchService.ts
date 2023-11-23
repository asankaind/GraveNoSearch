
import { TYPES } from "@/ioc/Types";
// import { plainToClass } from "class-transformer";
import { inject, injectable } from "inversify";
import { ApiService } from "./ApiService";
import { SearchApiService } from "./SearchApiService";
// import DeceasedDto from "@/dtos/DeceasedDto";
// import ContactToContactTypeDto from "@/dtos/ContactToContactTypeDto";
// import Analytics from "@capacitor-community/appcenter-analytics";
// import AppcenterService from "@/utils/AppcenterService";

@injectable()
export class SearchService {
  constructor(
    @inject(TYPES.SearchApiServicervice)
    private searchApiService: SearchApiService
  ) {}

  /**
   * Get getGraveRecord by given search text 
   *
   * @param searchText string
   * @param recordsPerPage number
   * @param pageNumber number
   */
  async getGraveRecord(searchText: string, recordsPerPage: number, pageNumber: number) {
    try {
      const response = await this.searchApiService.get(
        "/GraveRecordsSearch/GetGraveRecord/" + searchText + "/" + recordsPerPage +"/"+ pageNumber
        );
      if (response.data) {
        console.log(response.data)
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
}