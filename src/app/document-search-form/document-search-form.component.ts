import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CurrencyService } from '../currency.service';
import { QuotationService } from '../quotation.service';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-search-form',
  templateUrl: './document-search-form.component.html',
  styleUrls: ['./document-search-form.component.css']
})
export class DocumentSearchFormComponent {

  documentSearchForm: any
  currencies: any[]
  quotations: any[]
  documents: any[]
  filteredDocuments: any[]
  constructor(private formBuilder: FormBuilder,
    private currencyService: CurrencyService,
    private quotationService: QuotationService,
    private documentService: DocumentService) {

    this.currencies = new Array<any>()
    this.quotations = new Array<any>()
    this.documents = new Array<any>()
    this.filteredDocuments = new Array<any>()
    this.createForm()
    this.getCurrencies()
    this.getQuotations()
    this.getDocuments()
  }

  private createForm() {
    this.documentSearchForm = this.formBuilder.group({
      documentNumber: ['', Validators.nullValidator],
      quotation: ['', Validators.nullValidator],
      initDate: [undefined, Validators.nullValidator],
      finalDate: [undefined, Validators.nullValidator],
    })
  }

  onSubmit(form: any) {
    this.filteredDocuments = this.documents
    this.filterDocumentNumber(form.value.documentNumber)
    this.filterCurrency(form.value.quotation)
    this.filterDates(form.value.initDate, form.value.finalDate)
    this.loadDocumentResources(form)
  }


  private filterDocumentNumber(documentNumber: string) {
    if (documentNumber) {
      this.filteredDocuments = this.filteredDocuments.filter(currentDocument => {
        return currentDocument.documentNumber == documentNumber
      })
    }
  }

  private filterCurrency(currency: string) {
    if (currency) {
      this.filteredDocuments = this.filteredDocuments.filter(currentDocument => {
        return currentDocument.currencyCode == currency
      })
    }

  }

  private filterDates(initialDate: any, finalDate: any) {
    if (initialDate && finalDate) {
      this.filteredDocuments = this.filteredDocuments.filter(currentDocument => {
        let documentDate = new Date(currentDocument.documentDate)
        return documentDate >= new Date(initialDate) &&
          documentDate <= new Date(finalDate)
      })
    }
  }

  private loadDocumentResources(form: any) {
    this.filteredDocuments = this.filteredDocuments.map(currentDocument => {
      let currency = this.currencies.find(currency => currency.currencyCode === currentDocument.currencyCode)
      return {
        ...currentDocument,
        currency
      }
    })
    this.loadCalcQuotationResource()
  }

  private loadCalcQuotationResource() {
    this.filteredDocuments = this.filteredDocuments.map(currentDocument => {
      let quotations = this.currencies.map(currency => {
        let filteredQuotation = this.quotations.filter(quotation => {
          return quotation.fromCurrencyCode === currentDocument.currencyCode &&
            quotation.toCurrencyCode === currency.currencyCode
        })
        return filteredQuotation[filteredQuotation.length - 1]
      })
      return {
        ...currentDocument,
        quotations
      }
    })
  }

  getCurrencies() {
    this.currencyService.get().subscribe(currencies => {
      this.currencies = currencies
      debugger
    })
  }

  getQuotations() {
    this.quotationService.get().subscribe(quotations => {
      this.quotations = quotations
    })
  }

  getDocuments() {
    this.documentService.get().subscribe(documents => {
      this.documents = documents
    })
  }

  clearForm() {
    this.createForm()
  }
}
