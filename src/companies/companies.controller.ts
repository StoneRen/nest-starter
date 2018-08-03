import { Controller, Get, Post, Body } from '@nestjs/common'
import { Company } from './company'

@Controller('companies')
export class CompaniesController {
  private companies = [
    new Company('SD', 'shen'),
    new Company('RR', 'Joe'),
  ]

  @Post()
  public createCompany(@Body() company: Company) {
    this.companies.push(company)
  }
  @Get()
  public getCompanies() {
    return this.companies
  }
}
